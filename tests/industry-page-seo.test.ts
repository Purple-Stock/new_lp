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
});
