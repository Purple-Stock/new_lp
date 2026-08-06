import test from "node:test";
import assert from "node:assert/strict";
import { findGlossaryTermBySlug, glossaryTerms } from "../data/glossary";
import { glossaryTermsInventory } from "../data/glossary/inventory";
import { glossaryTermsLogistics } from "../data/glossary/logistics";
import { glossaryTermsFinance } from "../data/glossary/finance";
import { glossaryTermsManagement } from "../data/glossary/management";
import { glossaryTermsTechnology } from "../data/glossary/technology";

test("glossaryTerms is the union of category modules", () => {
  const expected =
    glossaryTermsInventory.length +
    glossaryTermsLogistics.length +
    glossaryTermsFinance.length +
    glossaryTermsManagement.length +
    glossaryTermsTechnology.length;
  assert.equal(glossaryTerms.length, expected);
  assert.ok(glossaryTerms.length >= 40);
});

test("findGlossaryTermBySlug resolves quantidade-minima-pedido", () => {
  const term = findGlossaryTermBySlug("quantidade-minima-pedido");
  assert.ok(term);
  assert.equal(term.category, "inventory");
  assert.match(term.shortDefinition, /MOQ|mínima/i);
});

test("category modules keep exclusive category tags", () => {
  assert.ok(
    glossaryTermsInventory.every((term) => term.category === "inventory")
  );
  assert.ok(
    glossaryTermsLogistics.every((term) => term.category === "logistics")
  );
  assert.ok(glossaryTermsFinance.every((term) => term.category === "finance"));
});
