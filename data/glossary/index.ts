import type { GlossaryTerm } from "./types";
import { glossaryTermsInventory } from "./inventory";
import { glossaryTermsLogistics } from "./logistics";
import { glossaryTermsFinance } from "./finance";
import { glossaryTermsManagement } from "./management";
import { glossaryTermsTechnology } from "./technology";

export type { GlossaryTerm } from "./types";

/**
 * All glossary terms.
 * Order: inventory → logistics → finance → management → technology
 * (stable for sitemap; not alphabetical by slug).
 */
export const glossaryTerms: GlossaryTerm[] = [
  ...glossaryTermsInventory,
  ...glossaryTermsLogistics,
  ...glossaryTermsFinance,
  ...glossaryTermsManagement,
  ...glossaryTermsTechnology,
];

export function findGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}
