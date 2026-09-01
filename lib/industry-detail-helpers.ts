/**
 * Shared helpers for industry detail page sections.
 */
import type { IndustryRecord } from "@/lib/industries-data";

export const INDUSTRY_DETAIL_DEFAULT_STAT = {
  value: "40%",
  label: "Aumento na eficiência",
} as const;

const EQUIPMENT_VERTICAL_SLUGS = new Set([
  "audiovisual",
  "events",
  "odontologico",
  "telecomunicacoes",
]);

const EQUIPMENT_VERTICAL_AUDIENCE: Record<string, string> = {
  odontologico: "Clínicas, labs e prestadores de equipamentos dentários",
  telecomunicacoes: "ISPs, integradoras e times de telecom em campo",
  audiovisual: "Usado por produtoras, locadoras e eventos",
  events: "Usado por casas de festa, montadoras e locadoras de evento",
};

export type IndustryRelatedPost = {
  href: string;
  label: string;
};

export function resolveIndustryRelatedPosts(proof: {
  relatedBlogHref?: string;
  relatedBlogLabel?: string;
  relatedPosts?: IndustryRelatedPost[];
}): IndustryRelatedPost[] {
  if (proof.relatedPosts && proof.relatedPosts.length > 0) {
    return proof.relatedPosts;
  }
  if (proof.relatedBlogHref && proof.relatedBlogLabel) {
    return [{ href: proof.relatedBlogHref, label: proof.relatedBlogLabel }];
  }
  return [];
}

export function isEquipmentIndustry(slug: string): boolean {
  return EQUIPMENT_VERTICAL_SLUGS.has(slug);
}

export function resolveEquipmentAudience(slug: string): string {
  return (
    EQUIPMENT_VERTICAL_AUDIENCE[slug] ??
    "Usado por produtoras, locadoras e eventos"
  );
}

export function resolveHeroAudienceLine(slug: string): string | undefined {
  if (slug === "construction") {
    return "Construtoras, empreiteiras e almoxarifado de obra";
  }
  if (isEquipmentIndustry(slug)) {
    return resolveEquipmentAudience(slug);
  }
  return undefined;
}

export function resolveHeroBadge(slug: string): string {
  if (slug === "construction") {
    return "Almoxarifado de obra";
  }
  if (isEquipmentIndustry(slug)) {
    return "Check-in / check-out com QR Code";
  }
  return "Solução especializada";
}

export function resolveHeroChromeLabel(slug: string): string {
  if (slug === "construction") {
    return "Canteiro e almoxarifado";
  }
  if (isEquipmentIndustry(slug)) {
    return "Vertical de alta conversão";
  }
  return "Solução especializada";
}

export function resolveImplantHeadline(industry: IndustryRecord): string {
  if (industry.slug === "construction") {
    return "Como implantar no almoxarifado de obra";
  }
  return `Como implantar em ${industry.name}`;
}

export function resolveImplantSubhead(
  slug: string,
  isEquipmentVertical: boolean
): string {
  if (slug === "construction") {
    return "Entrada no canteiro, retirada com responsável e conferência no retorno.";
  }
  if (isEquipmentVertical) {
    return "Fluxo de check-in/check-out sem travar o fim de semana de jobs.";
  }
  return "Um fluxo simples para sair da planilha sem travar a operação.";
}

export function resolveMidCtaHeadline(
  industry: IndustryRecord,
  isEquipmentVertical: boolean
): string {
  if (industry.slug === "construction") {
    return "Teste o fluxo na próxima entrega no canteiro";
  }
  if (industry.slug === "odontologico") {
    return "Teste o fluxo na próxima retirada de kit";
  }
  if (industry.slug === "telecomunicacoes") {
    return "Teste o fluxo na próxima OS de campo";
  }
  if (isEquipmentVertical) {
    return "Teste o fluxo no próximo set ou evento";
  }
  return "Preço direto para o time inteiro";
}
