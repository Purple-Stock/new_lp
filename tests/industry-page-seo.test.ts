import test from "node:test";
import assert from "node:assert/strict";
import {
  buildDefaultIndustrySerpCopy,
  getIndustrySerpCopy,
} from "../lib/industry-page-seo";

test("getIndustrySerpCopy returns audiovisual rental SERP", () => {
  const copy = getIndustrySerpCopy("audiovisual");
  assert.ok(copy);
  assert.match(copy.title, /[Ll]oca/i);
  assert.match(copy.title, /QR|check-in/i);
  assert.ok(copy.title.length >= 30, copy.title);
  assert.ok(copy.title.length <= 45, copy.title);
  assert.match(copy.description, /locadora/i);
  assert.match(copy.description, /avaria|prazo|voltou/i);
  assert.match(copy.description, /WhatsApp/i);
  assert.doesNotMatch(copy.description, /R\$\s*59/);
  assert.ok(copy.description.length >= 120, copy.description);
  assert.ok(copy.description.length <= 160, copy.description);
});

test("getIndustrySerpCopy returns events rental SERP", () => {
  const copy = getIndustrySerpCopy("events");
  assert.ok(copy);
  assert.match(copy.title, /[Ll]oca|evento/i);
  assert.match(copy.title, /carga|volta|check-in/i);
  assert.ok(copy.title.length >= 30, copy.title);
  assert.ok(copy.title.length <= 45, copy.title);
  assert.match(copy.description, /locadora/i);
  assert.match(copy.description, /caminh[aã]o|carga|descarga/i);
  assert.match(copy.description, /WhatsApp/i);
  assert.doesNotMatch(copy.description, /R\$\s*59/);
  assert.ok(copy.description.length >= 120, copy.description);
  assert.ok(copy.description.length <= 160, copy.description);
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
  assert.ok(copy.title.length <= 45);
  assert.match(copy.description, /canteiro/i);
  assert.match(copy.description, /obra/i);
  assert.ok(copy.description.length >= 120);
  assert.ok(copy.description.length <= 160);
});
