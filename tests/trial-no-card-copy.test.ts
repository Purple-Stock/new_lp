import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { HOME_FAQ_PT } from "../lib/home-faq";

function source(relativePath: string): string {
  return readFileSync(join(process.cwd(), relativePath), "utf8");
}

test("home FAQ says the 7-day trial does not require a card", () => {
  const trialFaq = HOME_FAQ_PT.find((item) => /testar/i.test(item.q));
  assert.ok(trialFaq, "expected a trial FAQ item");
  assert.match(trialFaq!.a, /sem cartão/i);
  assert.doesNotMatch(trialFaq!.a, /utiliza cartão/i);
});

test("legal and about pages stop promising a card-on-file trial", () => {
  const files = [
    "app/termos-de-uso/page.tsx",
    "app/politica-de-privacidade/page.tsx",
    "app/sobre/page.tsx",
    "lib/desktop-landing-playbook.ts",
  ];

  for (const file of files) {
    const contents = source(file);
    assert.doesNotMatch(
      contents,
      /pode exigir cartão|pode pedir cartão|requires a credit card|teste utiliza cartão/i,
      `${file} still describes a card-required trial`
    );
  }
});
