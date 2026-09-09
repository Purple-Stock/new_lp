import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getLandingPrimaryHeroCta } from "../lib/desktop-landing-copy";
import {
  INDEXABLE_INDUSTRY_SLUGS,
  industriesData,
} from "../lib/industries-data";

test("default hero CTA is a conversation, not a credit-card trial", () => {
  const cta = getLandingPrimaryHeroCta("pt", false);
  assert.match(cta, /encaixa|WhatsApp/i);
  assert.doesNotMatch(cta, /teste grátis/i);
  assert.doesNotMatch(cta, /cartão/i);
});

test("home hero source talks to WhatsApp first and keeps trial secondary", () => {
  const source = readFileSync(
    join(process.cwd(), "components/desktop-landing-hero.tsx"),
    "utf8"
  );

  assert.match(source, /buildWhatsAppUrl/);
  assert.match(source, /Testar \$\{TEAM_PLAN_TRIAL_DAYS\} dias/);
  assert.doesNotMatch(source, /Teste com cartão de crédito/);
});

test("desktop nav promotes pricing and does not highlight the free barcode tool", () => {
  const source = readFileSync(
    join(process.cwd(), "components/navbar.tsx"),
    "utf8"
  );

  assert.match(source, /href="\/precos"/);
  assert.match(source, /href="\/industrias"/);
  assert.doesNotMatch(
    source,
    /href="\/codigo-de-barras-gratis"\s+className="[^"]*text-violet-300/
  );
});

test("indexable industry copy does not promise PDV or e-commerce", () => {
  const indexable = new Set<string>(INDEXABLE_INDUSTRY_SLUGS);
  assert.equal(INDEXABLE_INDUSTRY_SLUGS.length, 6);

  for (const industry of industriesData) {
    if (!indexable.has(industry.slug)) continue;
    const blob = [
      industry.description,
      ...industry.benefits,
      ...industry.features,
    ]
      .join(" ")
      .toLowerCase();
    assert.doesNotMatch(blob, /pdv/);
    assert.doesNotMatch(blob, /e-commerce/);
    assert.doesNotMatch(blob, /nfc-e/);
  }
});
