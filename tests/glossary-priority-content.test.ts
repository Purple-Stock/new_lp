import test from "node:test";
import assert from "node:assert/strict";
import { glossaryTerms } from "../data/glossary";

/**
 * Every published glossary term must ship with real content for SERP + page body.
 * Empty TODOs regress SEO (indexable pages with blank meta/description).
 */
function assertTermContent(
  slug: string,
  term: (typeof glossaryTerms)[number]
): void {
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
}

test("glossary has no empty shortDefinition stubs", () => {
  const empty = glossaryTerms.filter((t) => !t.shortDefinition.trim());
  assert.equal(
    empty.length,
    0,
    `expected 0 empty terms, found: ${empty.map((t) => t.slug).join(", ")}`
  );
});

for (const term of glossaryTerms) {
  test(`glossary term "${term.slug}" has non-empty content for SERP and page body`, () => {
    assertTermContent(term.slug, term);
  });
}
