import test from "node:test";
import assert from "node:assert/strict";
import { TEAM_PLAN_MONTHLY_PRICE_SCHEMA } from "../lib/pricing";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildHomePageGraph,
  buildBarcodeToolSchema,
} from "../lib/structured-data";

test("buildOrganizationSchema includes sameAs and logo", () => {
  const schema = buildOrganizationSchema();
  assert.equal(schema["@type"], "Organization");
  assert.equal(schema.name, "Purple Stock");
  assert.ok(Array.isArray(schema.sameAs));
  assert.ok(
    schema.sameAs.includes("https://www.linkedin.com/company/purple-stock")
  );
  assert.ok(schema.logo?.startsWith("https://"));
});

test("buildWebSiteSchema includes SearchAction", () => {
  const schema = buildWebSiteSchema();
  assert.equal(schema["@type"], "WebSite");
  assert.equal(schema.potentialAction?.["@type"], "SearchAction");
});

test("buildHomePageGraph returns WebPage, SoftwareApplication and FAQPage", () => {
  const graph = buildHomePageGraph({
    faqs: [{ q: "Test?", a: "Yes." }],
  });
  const types = graph["@graph"].map((node) => node["@type"]);
  assert.ok(types.includes("WebPage"));
  assert.ok(types.includes("SoftwareApplication"));
  assert.ok(types.includes("FAQPage"));

  const software = graph["@graph"].find(
    (node) => node["@type"] === "SoftwareApplication"
  ) as { offers?: { price?: string } };
  assert.equal(software?.offers?.price, TEAM_PLAN_MONTHLY_PRICE_SCHEMA);
});

test("buildBarcodeToolSchema exposes free WebApplication", () => {
  const schema = buildBarcodeToolSchema();
  assert.equal(schema["@type"], "WebApplication");
  assert.equal(schema.offers?.price, "0");
  assert.ok(String(schema.url).includes("/codigo-de-barras-gratis"));
});
