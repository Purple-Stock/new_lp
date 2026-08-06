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
  events: "Usado por produtoras, locadoras e eventos",
};

export function isEquipmentIndustry(slug: string): boolean {
  return EQUIPMENT_VERTICAL_SLUGS.has(slug);
}

export function resolveEquipmentAudience(slug: string): string {
  return (
    EQUIPMENT_VERTICAL_AUDIENCE[slug] ??
    "Usado por produtoras, locadoras e eventos"
  );
}

export function resolveMidCtaHeadline(
  industry: IndustryRecord,
  isEquipmentVertical: boolean
): string {
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
