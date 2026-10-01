import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  isRentalIndustry,
  resolveIndustryHeroCta,
  resolveRentalWhatsAppText,
} from "../lib/industry-detail-helpers";

test("audiovisual and events are rental LPs; construction stays public plan", () => {
  assert.equal(isRentalIndustry("audiovisual"), true);
  assert.equal(isRentalIndustry("events"), true);
  assert.equal(isRentalIndustry("construction"), false);
  assert.equal(isRentalIndustry("telecomunicacoes"), false);
});

test("rental hero CTA leads with WhatsApp, not R$ 59", () => {
  const audiovisual = resolveIndustryHeroCta("audiovisual");
  const events = resolveIndustryHeroCta("events");
  const construction = resolveIndustryHeroCta("construction");

  assert.equal(audiovisual.primaryTarget, "whatsapp");
  assert.match(audiovisual.primaryLabel, /WhatsApp/i);
  assert.equal(audiovisual.leadWithPublicPrice, false);
  assert.match(resolveRentalWhatsAppText("audiovisual"), /loca/i);

  assert.equal(events.primaryTarget, "whatsapp");
  assert.equal(events.leadWithPublicPrice, false);
  assert.match(resolveRentalWhatsAppText("events"), /evento/i);

  assert.equal(construction.primaryTarget, "trial");
  assert.equal(construction.leadWithPublicPrice, true);
});

test("industry hero and footer wire rental CTA to WhatsApp", () => {
  const hero = readFileSync(
    join(process.cwd(), "components/industry-detail-hero.tsx"),
    "utf8"
  );
  const footer = readFileSync(
    join(process.cwd(), "components/industry-detail-footer.tsx"),
    "utf8"
  );

  assert.match(hero, /resolveIndustryHeroCta/);
  assert.match(hero, /buildWhatsAppUrl/);
  assert.match(footer, /resolveIndustryHeroCta/);
  assert.match(footer, /buildWhatsAppUrl/);
});
