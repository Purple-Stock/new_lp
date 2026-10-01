/**
 * SERP title/description builders for glossary term pages.
 * Kept out of app/glossario/[slug]/page.tsx so agents can edit SERP without
 * paging the full term page (near the 500-line agent file budget).
 *
 * @example
 * buildGlossaryTermTitle("SKU", "sku")
 * // => "SKU: o que é e quando usar | Purple Stock"
 */

import type { GlossaryTerm } from "@/data/glossary";

/** Truncate meta description for SERP (~150–160 chars). */
export function truncateMetaDescription(text: string, maxLength = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  const slice = normalized.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 80 ? slice.slice(0, lastSpace) : slice;
  return `${cut}…`;
}

export function buildGlossaryTermTitle(termName: string, slug: string): string {
  // High-impression GSC query: "quantidade mínima de pedido"
  if (slug === "quantidade-minima-pedido") {
    return "Quantidade Mínima de Pedido (MOQ): o que é | Purple Stock";
  }

  if (slug === "almoxarifado-de-obra") {
    return "Almoxarifado de Obra: estoque do canteiro";
  }

  const suffix = ": o que é e quando usar | Purple Stock";
  const maxTitleLength = 60;
  if (termName.length + suffix.length <= maxTitleLength + 20) {
    return `${termName}${suffix}`;
  }
  return `${termName} | Glossário de Estoque | Purple Stock`;
}

export function getGlossaryTermCta(slug: string): {
  title: string;
  body: string;
  whatsappText: string;
} {
  if (slug === "almoxarifado-de-obra") {
    return {
      title: "Quer saldo por obra no canteiro?",
      body: "O Purple Stock trata cada obra como um local: entrada da entrega, retirada com responsável e QR no celular. Sem ERP de construtora no dia um.",
      whatsappText:
        "Olá! Vim do glossário de almoxarifado de obra e quero ver o fluxo no canteiro.",
    };
  }

  return {
    title: "Quer aplicar esse conhecimento na prática?",
    body: "O Purple Stock ajuda sua equipe a controlar estoque com QR no celular, histórico por item e saldo por local.",
    whatsappText:
      "Olá! Vim do glossário e quero entender como implantar o Purple Stock.",
  };
}

export function buildGlossaryTermDescription(term: GlossaryTerm): string {
  if (term.slug === "quantidade-minima-pedido") {
    return truncateMetaDescription(
      "O que é quantidade mínima de pedido (MOQ)? Definição, diferença para EOQ e como cadastrar no estoque para não imobilizar capital."
    );
  }

  if (term.slug === "almoxarifado-de-obra") {
    return truncateMetaDescription(
      "Almoxarifado de obra com QR no canteiro: saldo por obra, retirada com responsável e conferência no celular. Teste o controle 7 dias grátis."
    );
  }

  if (term.shortDefinition.trim()) {
    return truncateMetaDescription(term.shortDefinition);
  }

  return truncateMetaDescription(
    `O que é ${term.term}? Definição clara de estoque e almoxarifado para PME, com exemplos práticos no glossário Purple Stock.`
  );
}
