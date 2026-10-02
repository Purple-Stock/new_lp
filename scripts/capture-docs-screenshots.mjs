import { chromium } from "@playwright/test";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(here, "../public/images/docs");
const appRoot = path.resolve(here, "../../next-qr-code-invetory-management");
const dbPath = path.join(appRoot, "src/db.docs.sqlite");
const appUrl = process.env.PURPLE_APP_URL ?? "http://localhost:3102";

const EMAIL = "maria@galpao.com";
const PASSWORD = "Estoque123";
const COMPANY = "Galpão Central";

const ITEMS = [
  {
    name: "Câmera Sony FX3",
    sku: "CAM-FX3",
    itemType: "Equipamento",
    price: 18990,
    currentStock: 4,
    barcode: "7891000000017",
  },
  {
    name: "Tripé E-Image",
    sku: "TRI-EI",
    itemType: "Equipamento",
    price: 2450,
    currentStock: 6,
    barcode: "7891000000024",
  },
  {
    name: "Lente 24-105",
    sku: "LEN-24105",
    itemType: "Equipamento",
    price: 8200,
    currentStock: 3,
    barcode: "7891000000031",
  },
  {
    name: "Microfone boom",
    sku: "MIC-BOOM",
    itemType: "Equipamento",
    price: 1560,
    currentStock: 5,
    barcode: "7891000000048",
  },
  {
    name: "Monitor de retorno",
    sku: "MON-RET",
    itemType: "Equipamento",
    price: 3100,
    currentStock: 2,
    barcode: "7891000000055",
  },
  {
    name: "Cabo XLR 10m",
    sku: "CAB-XLR10",
    itemType: "Acessório",
    price: 85,
    currentStock: 12,
    barcode: "7891000000062",
  },
  {
    name: "Drone DJI",
    sku: "DRO-DJI",
    itemType: "Equipamento",
    price: 15400,
    currentStock: 1,
    barcode: "7891000000079",
  },
  {
    name: "Bateria V-Mount",
    sku: "BAT-VM",
    itemType: "Acessório",
    price: 980,
    currentStock: 8,
    barcode: "7891000000086",
  },
];

function grantTrial(teamId) {
  const sql = `UPDATE teams SET stripe_subscription_status='trialing', stripe_subscription_id='docs_local_${Number(teamId)}' WHERE id=${Number(teamId)};`;
  const result = spawnSync(
    "python3",
    [
      "-c",
      `import sqlite3; c=sqlite3.connect(${JSON.stringify(dbPath)}); c.execute(${JSON.stringify(sql)}); c.commit(); print(c.total_changes)`,
    ],
    { encoding: "utf8" }
  );
  if (result.status !== 0) {
    throw new Error(`grantTrial failed: ${result.stderr || result.stdout}`);
  }
}

async function hideChrome(page) {
  await page.addStyleTag({
    content: `
      nextjs-portal, [data-next-badge-root], #webpack-dev-server-client-overlay {
        display: none !important;
      }
    `,
  });
}

async function shot(page, filename) {
  await hideChrome(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(docsDir, filename),
    type: "png",
  });
  console.log("saved", filename);
}

async function api(page, method, url, body) {
  const response = await page.request[method.toLowerCase()](`${appUrl}${url}`, {
    data: body,
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  if (!response.ok()) {
    throw new Error(
      `${method} ${url} ${response.status()} ${JSON.stringify(json)}`
    );
  }
  return json;
}

async function dismissSuccess(page) {
  const close = page
    .locator('button[aria-label="Fechar"], button[aria-label="Close"]')
    .first();
  if (await close.isVisible().catch(() => false)) {
    await close.click();
  }
  const times = page.getByRole("button", { name: "×" });
  if (
    await times
      .first()
      .isVisible()
      .catch(() => false)
  ) {
    await times.first().click();
  }
}

const browser = await chromium.launch({
  headless: true,
  channel: "chrome",
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  locale: "pt-BR",
});
const page = await context.newPage();
await page.addInitScript(() => {
  localStorage.setItem("purple-stock-language", "pt-BR");
});

await page.goto(`${appUrl}/signup`, { waitUntil: "domcontentloaded" });
await page.locator("#companyName").fill(COMPANY);
await page.locator("#email").fill(EMAIL);
await page.locator("#password").fill(PASSWORD);
await page.locator("#confirmPassword").fill(PASSWORD);
await shot(page, "app-signup.png");
const signup = await page.request.post(`${appUrl}/api/auth/signup`, {
  data: { companyName: COMPANY, email: EMAIL, password: PASSWORD },
  headers: { "Content-Type": "application/json" },
});
if (signup.status() === 409) {
  const login = await page.request.post(`${appUrl}/api/auth/login`, {
    data: { email: EMAIL, password: PASSWORD },
    headers: { "Content-Type": "application/json" },
  });
  if (!login.ok()) {
    throw new Error(`login failed ${login.status()} ${await login.text()}`);
  }
} else if (!signup.ok()) {
  throw new Error(`signup failed ${signup.status()} ${await signup.text()}`);
}
await page.goto(`${appUrl}/team_selection`, { waitUntil: "domcontentloaded" });

async function ensureTeam(name, notes) {
  const current = await api(page, "GET", "/api/teams");
  const existing = (current.teams ?? []).find((team) => team.name === name);
  if (existing) {
    grantTrial(existing.id);
    return existing;
  }
  const created = await api(page, "POST", "/api/teams", { name, notes });
  grantTrial(created.team.id);
  return created.team;
}

const firstTeam = await ensureTeam(
  "Galpão Central",
  "Almoxarifado de equipamentos de set."
);
await ensureTeam("Van de set", "Equipamentos que saem para gravação.");

const locationsPayload = await api(
  page,
  "GET",
  `/api/teams/${firstTeam.id}/locations`
);
const defaultLocation = locationsPayload.locations?.[0];
if (!defaultLocation?.id) throw new Error("missing default location");
if (defaultLocation.name !== "Almoxarifado") {
  await page.request.put(
    `${appUrl}/api/teams/${firstTeam.id}/locations/${defaultLocation.id}`,
    {
      data: {
        name: "Almoxarifado",
        description: "Estoque principal da operação.",
      },
      headers: { "Content-Type": "application/json" },
    }
  );
}
async function ensureLocation(name, description) {
  const current = await api(
    page,
    "GET",
    `/api/teams/${firstTeam.id}/locations`
  );
  const existing = (current.locations ?? []).find(
    (location) => location.name === name
  );
  if (existing) return existing;
  const created = await api(
    page,
    "POST",
    `/api/teams/${firstTeam.id}/locations`,
    {
      name,
      description,
    }
  );
  return created.location;
}
await ensureLocation("Estúdio", "Set fixo e iluminação.");
await ensureLocation("Van de set", "Itens em campo.");
const refreshedLocations = await api(
  page,
  "GET",
  `/api/teams/${firstTeam.id}/locations`
);
const almox = refreshedLocations.locations.find(
  (location) => location.name === "Almoxarifado"
);
if (!almox) throw new Error("Almoxarifado not found");

const existingItems = await api(
  page,
  "GET",
  `/api/teams/${firstTeam.id}/items`
);
const existingNames = new Set(
  (existingItems.items ?? []).map((item) => item.name)
);
for (const item of ITEMS) {
  if (existingNames.has(item.name)) continue;
  await api(page, "POST", `/api/teams/${firstTeam.id}/items`, {
    ...item,
    locationId: almox.id,
    initialQuantity: item.currentStock,
  });
}

const createdItems = await api(page, "GET", `/api/teams/${firstTeam.id}/items`);
const byName = new Map(createdItems.items.map((item) => [item.name, item]));
const movementPairs = [
  ["Câmera Sony FX3", 2],
  ["Tripé E-Image", 3],
  ["Cabo XLR 10m", 6],
];
for (const [name, quantity] of movementPairs) {
  const item = byName.get(name);
  await api(page, "POST", `/api/teams/${firstTeam.id}/stock-transactions`, {
    itemId: item.id,
    transactionType: "stock_in",
    quantity,
    locationId: almox.id,
    notes: "#set-gravacao",
  });
}

async function waitVisibleText(text) {
  await page
    .getByText(text)
    .filter({ visible: true })
    .first()
    .waitFor({ timeout: 20000 });
}

async function openPage(path, heading, content) {
  await page.goto(`${appUrl}${path}`, { waitUntil: "domcontentloaded" });
  await hideChrome(page);
  await page
    .getByRole("heading", { name: heading, exact: true })
    .waitFor({ timeout: 20000 });
  if (content) {
    await waitVisibleText(content);
  }
  await page.waitForTimeout(800);
}

try {
  await openPage("/team_selection", "Selecionar um Time", "Galpão Central");
  await dismissSuccess(page);
  await page
    .getByText("Carregando times")
    .waitFor({ state: "hidden", timeout: 8000 })
    .catch(() => {});
  await shot(page, "app-team-selection.png");

  await openPage(`/teams/${firstTeam.id}/items`, "Itens", "Câmera Sony FX3");
  await shot(page, "app-items.png");

  await openPage(
    `/teams/${firstTeam.id}/locations`,
    "Localizações",
    "Almoxarifado"
  );
  await shot(page, "app-locations.png");

  await openPage(
    `/teams/${firstTeam.id}/stock-in`,
    "Entrada de Estoque",
    "Almoxarifado"
  );
  await page.locator("#items").waitFor({ timeout: 10000 });
  for (const name of ["Câmera Sony FX3", "Tripé E-Image", "Lente 24-105"]) {
    const search = page.locator("#items");
    await search.fill(name);
    await page
      .locator("button")
      .filter({ hasText: name, visible: true })
      .first()
      .click();
    await search.fill("");
  }
  await page.locator("textarea").first().fill("#set-gravacao entrada do dia");
  await waitVisibleText("Câmera Sony FX3");
  await shot(page, "app-movements.png");

  await openPage(
    `/teams/${firstTeam.id}/transactions`,
    "Transações",
    "Câmera Sony FX3"
  );
  await shot(page, "app-transactions.png");

  await openPage(
    `/teams/${firstTeam.id}/reports`,
    "Relatórios",
    "Total de Itens"
  );
  await page
    .getByText(/carregando relatórios/i)
    .waitFor({ state: "hidden", timeout: 15000 })
    .catch(() => {});
  await shot(page, "app-reports.png");

  await openPage(`/teams/${firstTeam.id}/labels`, "Etiquetas");
  const selectAll = page.getByRole("button", {
    name: "Selecionar Todos",
    exact: true,
  });
  if (await selectAll.isVisible()) {
    await selectAll.click();
  }
  await page.waitForTimeout(400);
  await shot(page, "app-labels.png");

  await page.request.post(`${appUrl}/api/auth/logout`);
  await context.clearCookies();
  await page.goto(`${appUrl}/`, { waitUntil: "domcontentloaded" });
  await page.locator("#email").waitFor({ timeout: 15000 });
  await page.locator("#email").fill(EMAIL);
  await page.locator("#password").fill(PASSWORD);
  await page.addStyleTag({
    content: `[role="alert"] { display: none !important; }`,
  });
  await shot(page, "app-home.png");

  console.log("docs screenshots captured");
} catch (error) {
  await page
    .screenshot({ path: path.join(docsDir, "_debug-fail.png") })
    .catch(() => {});
  console.error("capture failed at", page.url());
  throw error;
} finally {
  await browser.close();
}
