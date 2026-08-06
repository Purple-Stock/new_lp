import test from "node:test";
import assert from "node:assert/strict";
import { translations } from "../utils/translations";

test("translations exposes pt/en/fr with core landing keys", () => {
  for (const locale of ["pt", "en", "fr"] as const) {
    const pack = translations[locale];
    assert.ok(pack.nav);
    assert.ok(pack.hero);
    assert.ok(pack.featurePages.inventoryControl);
    assert.ok(pack.barcodeGenerator);
  }
});

test("feature page inventoryControl has title in all locales", () => {
  assert.ok(translations.pt.featurePages.inventoryControl.title);
  assert.ok(translations.en.featurePages.inventoryControl.title);
  assert.ok(translations.fr.featurePages.inventoryControl.title);
});

test("PT hero title uses home H1 SEO copy", () => {
  assert.match(translations.pt.hero.title, /QR Code/i);
});
