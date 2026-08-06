import test from "node:test";
import assert from "node:assert/strict";
import {
  getLandingPlaybook,
  getLandingPrimaryHeroCta,
  getLandingRotatingSectors,
  getLandingLogoCases,
} from "../lib/desktop-landing-copy";

test("getLandingPlaybook returns PT how-it-works content", () => {
  const playbook = getLandingPlaybook("pt");
  assert.ok(playbook.steps.length >= 4);
  assert.match(playbook.howItWorksTitle, /estoque/i);
  assert.ok(playbook.objections.length >= 3);
});

test("getLandingPrimaryHeroCta switches pain vs default", () => {
  assert.match(getLandingPrimaryHeroCta("pt", false), /teste grátis/i);
  assert.match(getLandingPrimaryHeroCta("pt", true), /perder vendas/i);
});

test("getLandingRotatingSectors includes audiovisual-adjacent sectors", () => {
  const sectors = getLandingRotatingSectors("pt");
  assert.ok(sectors.includes("produtoras"));
  assert.ok(sectors.includes("eventos"));
});

test("getLandingLogoCases has named logos with results", () => {
  const cases = getLandingLogoCases("pt");
  assert.ok(cases.length >= 3);
  assert.ok(cases.every((item) => item.name && item.result && item.logo));
});
