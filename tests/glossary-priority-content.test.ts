import test from "node:test";
import assert from "node:assert/strict";
import { glossaryTerms } from "../data/glossary";

/**
 * Terms with Google Search Console impressions that must ship with real
 * content (not empty TODOs). Ordered by approximate imp. in the 3-month export.
 */
const PRIORITY_GLOSSARY_SLUGS = [
  "ponto-de-reposicao",
  "vmi",
  "quantidade-economica-pedido",
  "quantidade-minima-pedido",
  "3pl",
  "ruptura-de-estoque",
  "gestao-ativos-ti",
  "custo-medio-ponderado",
  "inventario-fisico",
  "erp",
  "ciclo-de-conversao-de-caixa",
  "giro-de-estoque",
  "excesso-de-estoque",
  "kanban",
  "b2b",
  "sku",
  "lead-time",
  "ativos-circulantes",
  "passivos-circulantes",
  "5s",
  "efeito-chicote",
  "custo-das-mercadorias-vendidas",
  "estoque-de-seguranca",
  "gestao-de-estoque",
  "just-in-time",
  "picking",
  "peps",
  "ueps",
] as const;

function findTerm(slug: string) {
  return glossaryTerms.find((term) => term.slug === slug);
}

for (const slug of PRIORITY_GLOSSARY_SLUGS) {
  test(`glossary priority term "${slug}" has non-empty content for SERP and page body`, () => {
    const term = findTerm(slug);
    assert.ok(term, `expected glossary term for slug "${slug}"`);

    assert.ok(
      term.shortDefinition.trim().length >= 80,
      `shortDefinition for "${slug}" should be at least 80 chars for meta description, got ${term.shortDefinition.trim().length}`
    );
    assert.ok(
      term.shortDefinition.trim().length <= 400,
      `shortDefinition for "${slug}" should stay under 400 chars for SERP, got ${term.shortDefinition.trim().length}`
    );
    assert.ok(
      term.definition.trim().length >= 200,
      `definition for "${slug}" should be substantial, got ${term.definition.trim().length}`
    );
    assert.ok(
      term.example.trim().length >= 80,
      `example for "${slug}" should not be empty`
    );

    assert.equal(term.faq.length, 3);
    for (const [index, item] of term.faq.entries()) {
      assert.ok(
        item.question.trim().length > 0,
        `faq[${index}].question for "${slug}" must not be empty`
      );
      assert.ok(
        item.answer.trim().length > 0,
        `faq[${index}].answer for "${slug}" must not be empty`
      );
    }
  });
}
