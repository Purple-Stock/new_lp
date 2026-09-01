import test from "node:test";
import assert from "node:assert/strict";
import { TEAM_PLAN_MONTHLY_PRICE_SCHEMA } from "../lib/pricing";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildHomePageGraph,
  buildBarcodeToolSchema,
  buildIndustryPageGraph,
} from "../lib/structured-data";

test("buildOrganizationSchema includes sameAs and ImageObject logo", () => {
  const schema = buildOrganizationSchema();
  assert.equal(schema["@type"], "Organization");
  assert.equal(schema.name, "Purple Stock");
  assert.ok(Array.isArray(schema.sameAs));
  assert.ok(
    schema.sameAs.includes("https://www.linkedin.com/company/purple-stock")
  );
  assert.equal(schema.logo["@type"], "ImageObject");
  assert.ok(String(schema.logo.url).startsWith("https://"));
  assert.ok(Number(schema.logo.width) >= 112);
  assert.ok(Number(schema.logo.height) >= 112);
});

test("buildWebSiteSchema does not advertise a fake SearchAction", () => {
  const schema = buildWebSiteSchema();
  assert.equal(schema["@type"], "WebSite");
  assert.equal(schema.potentialAction, undefined);
});

test("buildHomePageGraph returns WebPage and SoftwareApplication without FAQPage", () => {
  const graph = buildHomePageGraph();
  const types = graph["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("SoftwareApplication"));
  assert.ok(!types.includes("FAQPage"));

  const software = graph["@graph"].find(
    (node) => node["@type"] === "SoftwareApplication"
  ) as {
    operatingSystem?: string;
    screenshot?: string;
    installUrl?: string;
    offers?: {
      price?: string;
      priceSpecification?: { billingDuration?: string; unitText?: string };
    };
    aggregateRating?: unknown;
  };
  assert.equal(software?.offers?.price, TEAM_PLAN_MONTHLY_PRICE_SCHEMA);
  assert.equal(software?.offers?.priceSpecification?.billingDuration, "P1M");
  assert.equal(software?.offers?.priceSpecification?.unitText, "equipe");
  assert.match(String(software?.operatingSystem), /iOS/);
  assert.match(String(software?.operatingSystem), /Android/);
  assert.ok(software?.screenshot);
  assert.ok(String(software?.installUrl).includes("app.purplestock.com.br"));
  assert.equal(software?.aggregateRating, undefined);
});

test("organization logo is a real square asset, not the placeholder", () => {
  const schema = buildOrganizationSchema();
  assert.doesNotMatch(String(schema.logo.url), /placeholder-logo/);
  assert.match(String(schema.logo.url), /logo\.png/);
  assert.ok("founder" in schema);
});

test("buildIndustryPageGraph includes WebPage, BreadcrumbList and SoftwareApplication", () => {
  const graph = buildIndustryPageGraph({
    slug: "construction",
    name: "Construção",
    headline: "Almoxarifado de Obra: Materiais e Ferramentas com QR Code",
    description:
      "Controle de materiais de construção por obra e canteiro. QR Code no celular.",
  });
  const types = graph["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("BreadcrumbList"));
  assert.ok(types.includes("SoftwareApplication"));
  assert.ok(!types.includes("FAQPage"));

  const page = graph["@graph"].find((node) => node["@type"] === "WebPage") as {
    url?: string;
  };
  assert.ok(String(page?.url).includes("/industrias/construction"));
});

test("buildBarcodeToolSchema exposes free WebApplication", () => {
  const schema = buildBarcodeToolSchema();
  assert.equal(schema["@type"], "WebApplication");
  assert.equal(schema.offers?.price, "0");
  assert.equal(schema.isAccessibleForFree, true);
  assert.ok(String(schema.url).includes("/codigo-de-barras-gratis"));
});
