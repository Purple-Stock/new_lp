import test from "node:test";
import assert from "node:assert/strict";
import { TEAM_PLAN_MONTHLY_PRICE_SCHEMA } from "../lib/pricing";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildHomePageGraph,
  buildBarcodeToolSchema,
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
    offers?: {
      price?: string;
      priceSpecification?: { billingDuration?: string };
    };
    aggregateRating?: unknown;
  };
  assert.equal(software?.offers?.price, TEAM_PLAN_MONTHLY_PRICE_SCHEMA);
  assert.equal(software?.offers?.priceSpecification?.billingDuration, "P1M");
  assert.equal(software?.aggregateRating, undefined);
});

test("buildBarcodeToolSchema exposes free WebApplication", () => {
  const schema = buildBarcodeToolSchema();
  assert.equal(schema["@type"], "WebApplication");
  assert.equal(schema.offers?.price, "0");
  assert.ok(String(schema.url).includes("/codigo-de-barras-gratis"));
});
