import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  APLICATIVO_ESTOQUE_FAQS,
  APLICATIVO_ESTOQUE_SECTIONS,
  VS_PLANILHA_COMPARE_ROWS,
  VS_PLANILHA_FAQS,
  VS_PLANILHA_SECTIONS,
  countCopyWords,
} from "../lib/product-money-pages";
import { buildSoftwareLandingGraph } from "../lib/structured-data";
import { TEAM_PLAN_MONTHLY_PRICE_SCHEMA } from "../lib/pricing";
import { buildPagesSitemapEntries } from "../lib/sitemap-pages";
import { featureHref } from "../lib/feature-paths";

function blobOf(
  sections: { title: string; paragraphs: string[] }[],
  faqs: { q: string; a: string }[]
): string {
  return [
    ...sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join(" ");
}

test("aplicativo money page copy is unique, operational and long enough", () => {
  const blob = blobOf(APLICATIVO_ESTOQUE_SECTIONS, APLICATIVO_ESTOQUE_FAQS);
  const wordCount = countCopyWords(blob);
  assert.ok(wordCount >= 800, `wordCount=${wordCount}`);
  assert.match(blob, /QR Code/i);
  assert.match(blob, /entrada/i);
  assert.match(blob, /saída|saida/i);
  assert.match(blob, /R\$ 99/);
  assert.doesNotMatch(blob.toLowerCase(), /pdv/);
  assert.doesNotMatch(blob.toLowerCase(), /nfc-e/);
  assert.doesNotMatch(blob.toLowerCase(), /wms de galpão|wms de galpao/);
  assert.doesNotMatch(blob.toLowerCase(), /milhares de empresas/);
});

test("vs planilha copy compares spreadsheet vs app without fake ERP claims", () => {
  const blob = blobOf(VS_PLANILHA_SECTIONS, VS_PLANILHA_FAQS);
  const wordCount = countCopyWords(blob);
  assert.ok(wordCount >= 800, `wordCount=${wordCount}`);
  assert.match(blob, /planilha/i);
  assert.match(blob, /QR/i);
  assert.equal(VS_PLANILHA_COMPARE_ROWS.length >= 5, true);
  assert.doesNotMatch(blob.toLowerCase(), /pdv/);
  assert.doesNotMatch(blob.toLowerCase(), /nfc-e/);
});

test("software landing graph is SoftwareApplication without FAQPage", () => {
  const graph = buildSoftwareLandingGraph({
    path: "/recursos/aplicativo-de-estoque",
    name: "Aplicativo para controle de estoque",
    description: "QR no celular, entrada e saída com histórico.",
    breadcrumbName: "Aplicativo",
  });
  const types = graph["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("BreadcrumbList"));
  assert.ok(types.includes("SoftwareApplication"));
  assert.ok(!types.includes("FAQPage"));
  const software = graph["@graph"].find(
    (node) => node["@type"] === "SoftwareApplication"
  ) as { offers?: { price?: string } };
  assert.equal(software?.offers?.price, TEAM_PLAN_MONTHLY_PRICE_SCHEMA);
});

test("pages sitemap lists money pages and drops the redirected English app URL", async () => {
  const entries = await buildPagesSitemapEntries(
    "https://www.purplestock.com.br"
  );
  const urls = entries.map((entry) => entry.url);
  assert.ok(
    urls.includes(
      "https://www.purplestock.com.br/recursos/aplicativo-de-estoque"
    )
  );
  assert.ok(
    urls.includes("https://www.purplestock.com.br/purple-stock-vs-planilha")
  );
  assert.ok(
    !urls.includes("https://www.purplestock.com.br/features/inventory-app")
  );
});

test("inventory-app 301s to the Portuguese aplicativo page", () => {
  const source = readFileSync(join(process.cwd(), "next.config.mjs"), "utf8");
  assert.match(source, /\/features\/inventory-app/);
  assert.match(source, /\/recursos\/aplicativo-de-estoque/);
});

test("money page template repeats trial and WhatsApp after the article", () => {
  const source = readFileSync(
    join(process.cwd(), "components/product-money-page.tsx"),
    "utf8"
  );
  assert.match(source, /pageSection="money_footer"/);
  assert.match(source, /Teste 7 dias na sua operação/);
});

test("featureHref sends inventory-app and warehouse to Portuguese URLs", () => {
  assert.equal(featureHref("inventory-app"), "/recursos/aplicativo-de-estoque");
  assert.equal(
    featureHref("warehouse-control"),
    "/recursos/controle-de-almoxarifado"
  );
  assert.equal(
    featureHref("qr-code-management"),
    "/features/qr-code-management"
  );
});
