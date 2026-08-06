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
        '"Antes era difícil rastrear movimentação de equipamento. Hoje entrada, saída e transferência ficam no mesmo histórico — com responsável."',
      sector: "Operação / equipamentos",
    },
    {
      name: "St. Nicholas School",
      logo: "/images/logos/st-nicholas-school.webp",
      width: 240,
      height: 55,
      maxWidth: "max-w-[240px]",
      result:
        '"A equipe passou a conferir estoque por localização sem perder tempo procurando item."',
      sector: "Educação",
    },
    {
      name: "Da Rua",
      logo: "/images/logos/da-rua.png",
      width: 120,
      height: 40,
      maxWidth: "max-w-[120px]",
      result:
        '"Parou de existir planilha paralela para controle diário de estoque."',
      sector: "Varejo / marca",
    },
    {
      name: "DPS Brasil",
      logo: "/images/logos/dps-brasil-preto.png",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        '"Hoje o time enxerga saldo e movimentações no mesmo painel operacional."',
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
        '"Equipment inbound, outbound, and transfer are now tracked in one history — with an owner on each move."',
      sector: "Operations / equipment",
    },
    {
      name: "St. Nicholas School",
      logo: "/images/logos/st-nicholas-school.webp",
      width: 240,
      height: 55,
      maxWidth: "max-w-[240px]",
      result:
        '"The team now runs stock checks by location without wasting time searching items."',
      sector: "Education",
    },
    {
      name: "Da Rua",
      logo: "/images/logos/da-rua.png",
      width: 120,
      height: 40,
      maxWidth: "max-w-[120px]",
      result:
        '"Daily stock control no longer depends on parallel spreadsheets."',
      sector: "Retail / brand",
    },
    {
      name: "DPS Brasil",
      logo: "/images/logos/dps-brasil-preto.png",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        '"Operations now see stock balance and movement history in one place."',
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
        '"Entree, sortie et transfert d\'equipements sont suivis dans un historique unique — avec responsable."',
      sector: "Operations / equipements",
    },
    {
      name: "St. Nicholas School",
      logo: "/images/logos/st-nicholas-school.webp",
      width: 240,
      height: 55,
      maxWidth: "max-w-[240px]",
      result:
        '"L\'equipe controle le stock par emplacement sans perdre du temps a chercher les articles."',
      sector: "Education",
    },
    {
      name: "Da Rua",
      logo: "/images/logos/da-rua.png",
      width: 120,
      height: 40,
      maxWidth: "max-w-[120px]",
      result: '"Le controle quotidien ne depend plus de tableurs paralleles."',
      sector: "Retail / marque",
    },
    {
      name: "DPS Brasil",
      logo: "/images/logos/dps-brasil-preto.png",
      width: 180,
      height: 60,
      maxWidth: "max-w-[180px]",
      result:
        '"Les soldes et mouvements sont visibles dans le meme panneau operationnel."',
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
