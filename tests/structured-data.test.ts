import test from "node:test";
import assert from "node:assert/strict";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildHomePageGraph,
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
});
