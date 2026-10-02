import test from "node:test";
import assert from "node:assert/strict";
import {
  TEAM_PLAN_MONTHLY_PRICE_NUMBER,
  TEAM_PLAN_MONTHLY_PRICE_SCHEMA,
  formatTeamPlanPriceFaqPt,
} from "../lib/pricing";

test("team plan price schema matches display number", () => {
  assert.equal(TEAM_PLAN_MONTHLY_PRICE_NUMBER, 99);
  assert.equal(TEAM_PLAN_MONTHLY_PRICE_SCHEMA, "99.00");
});

test("FAQ price copy mentions R$ 99 and 7-day trial", () => {
  const faq = formatTeamPlanPriceFaqPt();
  assert.match(faq, /R\$ 99/);
  assert.match(faq, /7 dias/);
  assert.match(faq, /equipe/);
  assert.doesNotMatch(faq, /\/time/);
});
