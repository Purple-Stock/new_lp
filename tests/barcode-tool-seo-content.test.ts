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
  assert.ok(
    copy.formatCards.some((card) => /Code 128/i.test(card.title)),
    "expected a Code 128 format card"
  );
  assert.ok(copy.benefitChips.length >= 3);
  assert.ok(copy.faqItems.length >= 3);
  assert.match(copy.longTailBody, /Code 128/i);
  assert.match(copy.longTailBody, /EAN/i);
  assert.match(copy.inventoryAppLabel, /estoque/i);
  assert.match(copy.longTailBody, /GS1|GTIN/i);
  assert.match(copy.ctaBody, /equipe/);
});
