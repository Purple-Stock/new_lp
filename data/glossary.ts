/**
 * Public glossary entry. Implementation split by category under `data/glossary/`.
 * Edit terms in `data/glossary/{inventory,logistics,finance,management,technology}.ts`.
 */
export type { GlossaryTerm } from "./glossary/index";
export { glossaryTerms, findGlossaryTermBySlug } from "./glossary/index";
