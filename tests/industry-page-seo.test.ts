import test from "node:test";
import assert from "node:assert/strict";
import {
  buildDefaultIndustrySerpCopy,
  getIndustrySerpCopy,
} from "../lib/industry-page-seo";

test("getIndustrySerpCopy returns audiovisual cinema SERP", () => {
  const copy = getIndustrySerpCopy("audiovisual");
  assert.ok(copy);
  assert.match(copy.title, /Cinema/i);
  assert.match(copy.description, /audiovisuais/i);
});

test("getIndustrySerpCopy returns undefined for unknown slug", () => {
  assert.equal(getIndustrySerpCopy("unknown-vertical"), undefined);
});

test("buildDefaultIndustrySerpCopy names the industry", () => {
  const copy = buildDefaultIndustrySerpCopy("Varejo");
  assert.match(copy.title, /Varejo/);
  assert.match(copy.title, /Gestão/);
});

test("only equipment verticals with unique workflows stay indexable", async () => {
  const { isIndexableIndustry } = await import("../lib/industries-data");
  assert.equal(isIndexableIndustry("audiovisual"), true);
  assert.equal(isIndexableIndustry("construction"), true);
  assert.equal(isIndexableIndustry("beauty"), false);
  assert.equal(isIndexableIndustry("food"), false);
});

test("getIndustrySerpCopy returns construction canteiro SERP", () => {
  const copy = getIndustrySerpCopy("construction");
  assert.ok(copy);
  assert.match(copy.title, /Almoxarifado de Obra/i);
  assert.match(copy.title, /QR Code/i);
  assert.ok(copy.title.length >= 30);
  assert.ok(copy.title.length <= 60);
  assert.match(copy.description, /canteiro/i);
  assert.match(copy.description, /materiais de construção/i);
  assert.ok(copy.description.length >= 120);
  assert.ok(copy.description.length <= 160);
});
