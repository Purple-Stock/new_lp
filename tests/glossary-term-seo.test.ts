import test from "node:test";
import assert from "node:assert/strict";
import {
  buildGlossaryTermDescription,
  buildGlossaryTermTitle,
  truncateMetaDescription,
} from "../lib/glossary-term-seo";
import type { GlossaryTerm } from "../data/glossary";

const emptyFaq: GlossaryTerm["faq"] = [
  { question: "q1", answer: "a1" },
  { question: "q2", answer: "a2" },
  { question: "q3", answer: "a3" },
];

function stubTerm(
  partial: Partial<GlossaryTerm> & Pick<GlossaryTerm, "slug" | "term">
): GlossaryTerm {
  return {
    category: "inventory",
    shortDefinition: partial.shortDefinition ?? "",
    definition: partial.definition ?? "definition body",
    example: partial.example ?? "example body",
    formula: "",
    formulaExplanation: "",
    faq: emptyFaq,
    relatedTerms: [],
    relatedFeatures: [],
    relatedIndustries: [],
    ...partial,
  };
}

test("truncateMetaDescription keeps short text intact", () => {
  assert.equal(truncateMetaDescription("MOQ curto"), "MOQ curto");
});

test("truncateMetaDescription cuts long text near a word boundary", () => {
  const long = "a".repeat(80) + " " + "b".repeat(100);
  const result = truncateMetaDescription(long, 100);
  assert.ok(result.length <= 100);
  assert.ok(result.endsWith("…"));
});

test("buildGlossaryTermTitle special-cases quantidade-minima-pedido for GSC", () => {
  const title = buildGlossaryTermTitle(
    "Quantidade Mínima de Pedido (MOQ)",
    "quantidade-minima-pedido"
  );
  assert.match(title, /Quantidade Mínima de Pedido \(MOQ\)/i);
  assert.match(title, /o que é/i);
});

test("buildGlossaryTermTitle special-cases almoxarifado-de-obra", () => {
  const title = buildGlossaryTermTitle(
    "Almoxarifado de Obra",
    "almoxarifado-de-obra"
  );
  assert.match(title, /Almoxarifado de Obra/i);
  assert.match(title, /o que é/i);
});

test("buildGlossaryTermTitle uses default suffix for other terms", () => {
  const title = buildGlossaryTermTitle("SKU", "sku");
  assert.equal(title, "SKU: o que é e quando usar | Purple Stock");
});

test("buildGlossaryTermDescription prefers MOQ SERP copy", () => {
  const description = buildGlossaryTermDescription(
    stubTerm({
      slug: "quantidade-minima-pedido",
      term: "Quantidade Mínima de Pedido (MOQ)",
      shortDefinition: "should not win for this slug",
    })
  );
  assert.match(description, /quantidade mínima de pedido/i);
  assert.match(description, /EOQ/i);
});

test("buildGlossaryTermDescription prefers almoxarifado de obra SERP copy", () => {
  const description = buildGlossaryTermDescription(
    stubTerm({
      slug: "almoxarifado-de-obra",
      term: "Almoxarifado de Obra",
      shortDefinition: "should not win for this slug",
    })
  );
  assert.match(description, /almoxarifado de obra/i);
  assert.match(description, /canteiro/i);
});

test("buildGlossaryTermDescription falls back to shortDefinition", () => {
  const description = buildGlossaryTermDescription(
    stubTerm({
      slug: "sku",
      term: "SKU",
      shortDefinition:
        "SKU é o código interno do item no estoque, usado para rastrear saldo e movimentações com precisão.",
    })
  );
  assert.match(description, /código interno/i);
});
