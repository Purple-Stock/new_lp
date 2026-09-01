export interface GlossaryTerm {
  slug: string;
  term: string;
  category: "inventory" | "logistics" | "finance" | "management" | "technology";
  shortDefinition: string; // ~50 palavras — card da listagem + meta description
  definition: string; // ~300 palavras — seção principal da página
  example: string; // ~200 palavras — caso prático concreto
  formula?: string; // expressão/texto quando aplicável
  formulaExplanation?: string; // explicação dos componentes da fórmula
  faq: [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ];
  relatedTerms: string[]; // slugs de outros termos no glossário
  relatedFeatures?: string[]; // ex: ['inventory-control', 'barcoding']
  relatedIndustries?: string[]; // ex: ['varejo', 'logistica']
  relatedPosts?: { slug: string; label: string }[];
}
