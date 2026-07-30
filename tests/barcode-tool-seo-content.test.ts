import test from "node:test";
import assert from "node:assert/strict";
import {
  getBarcodeToolSeoCopy,
  resolveBarcodeToolLocale,
} from "../lib/barcode-tool-seo-content";

test("resolveBarcodeToolLocale falls back to en for unknown language", () => {
  assert.equal(resolveBarcodeToolLocale("pt"), "pt");
  assert.equal(resolveBarcodeToolLocale("de"), "en");
});

test("PT barcode SEO copy includes free no-signup intent", () => {
  const copy = getBarcodeToolSeoCopy("pt");
  assert.match(copy.badge, /Sem cadastro/i);
  assert.ok(copy.formatCards.some((card) => card.title === "Code 128"));
  assert.ok(copy.benefitChips.length >= 3);
});
