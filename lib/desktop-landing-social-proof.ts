/**
 * Desktop landing social proof: rotating sectors + logo case studies.
 */
import type { LandingLanguage } from "@/lib/desktop-landing-playbook";

export type LandingLogoCase = {
  name: string;
  logo: string;
  width: number;
  height: number;
  maxWidth: string;
  result: string;
  sector: string;
};

const ROTATING_SECTORS_BY_LANGUAGE: Record<LandingLanguage, string[]> = {
  pt: [
    "produtoras",
    "eventos",
    "telecom",
    "autopeças",
    "peças de moto",
    "clínicas",
  ],
  en: [
    "production houses",
    "events",
    "telecom",
    "auto parts",
    "motorcycle parts",
    "clinics",
  ],
  fr: [
    "maisons de production",
    "événements",
    "télécom",
    "pièces auto",
    "pièces moto",
    "cliniques",
  ],
};

const LOGO_CASES_BY_LANGUAGE: Record<LandingLanguage, LandingLogoCase[]> = {
  pt: [
    {
      name: "VHS",
      logo: "/images/logos/vhs.jpg",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        "VHS: entrada, saída e transferência de equipamento ficam no mesmo histórico — com responsável.",
      sector: "Operação / equipamentos",
    },
    {
      name: "St. Nicholas School",
      logo: "/images/logos/st-nicholas-school.webp",
      width: 240,
      height: 55,
      maxWidth: "max-w-[240px]",
      result:
        "St. Nicholas School: a equipe confere estoque por localização sem perder tempo procurando item.",
      sector: "Educação",
    },
    {
      name: "Da Rua",
      logo: "/images/logos/da-rua.png",
      width: 120,
      height: 40,
      maxWidth: "max-w-[120px]",
      result:
        "Da Rua: o controle diário de estoque deixou a planilha paralela.",
      sector: "Varejo / marca",
    },
    {
      name: "DPS Brasil",
      logo: "/images/logos/dps-brasil-preto.png",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        "DPS Brasil: o time enxerga saldo e movimentações no mesmo painel.",
      sector: "Operações",
    },
  ],
  en: [
    {
      name: "VHS",
      logo: "/images/logos/vhs.jpg",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        "VHS: equipment inbound, outbound, and transfer stay in one history — with an owner on each move.",
      sector: "Operations / equipment",
    },
    {
      name: "St. Nicholas School",
      logo: "/images/logos/st-nicholas-school.webp",
      width: 240,
      height: 55,
      maxWidth: "max-w-[240px]",
      result:
        "St. Nicholas School: the team runs stock checks by location without wasting time searching items.",
      sector: "Education",
    },
    {
      name: "Da Rua",
      logo: "/images/logos/da-rua.png",
      width: 120,
      height: 40,
      maxWidth: "max-w-[120px]",
      result:
        "Da Rua: daily stock control no longer depends on parallel spreadsheets.",
      sector: "Retail / brand",
    },
    {
      name: "DPS Brasil",
      logo: "/images/logos/dps-brasil-preto.png",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        "DPS Brasil: operations now see stock balance and movement history in one place.",
      sector: "Operations",
    },
  ],
  fr: [
    {
      name: "VHS",
      logo: "/images/logos/vhs.jpg",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        "VHS: entree, sortie et transfert d'equipements restent dans un historique unique — avec responsable.",
      sector: "Operations / equipements",
    },
    {
      name: "St. Nicholas School",
      logo: "/images/logos/st-nicholas-school.webp",
      width: 240,
      height: 55,
      maxWidth: "max-w-[240px]",
      result:
        "St. Nicholas School: l'equipe controle le stock par emplacement sans perdre du temps a chercher les articles.",
      sector: "Education",
    },
    {
      name: "Da Rua",
      logo: "/images/logos/da-rua.png",
      width: 120,
      height: 40,
      maxWidth: "max-w-[120px]",
      result:
        "Da Rua: le controle quotidien ne depend plus de tableurs paralleles.",
      sector: "Retail / marque",
    },
    {
      name: "DPS Brasil",
      logo: "/images/logos/dps-brasil-preto.png",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        "DPS Brasil: les soldes et mouvements sont visibles dans le meme panneau.",
      sector: "Operations",
    },
  ],
};

export function getLandingRotatingSectors(language: LandingLanguage): string[] {
  return ROTATING_SECTORS_BY_LANGUAGE[language];
}

export function getLandingLogoCases(
  language: LandingLanguage
): LandingLogoCase[] {
  return LOGO_CASES_BY_LANGUAGE[language];
}
