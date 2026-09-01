/**
 * Per-industry SERP title/description overrides.
 * Grep here instead of app/industrias/[slug]/page.tsx when tuning GSC CTR.
 *
 * @example
 * getIndustrySerpCopy("audiovisual")?.title
 */

export type IndustrySerpCopy = {
  title: string;
  description: string;
};

export const INDUSTRY_SERP_COPY_BY_SLUG: Record<string, IndustrySerpCopy> = {
  audiovisual: {
    title: "Equipamentos Audiovisuais e Cinema: Check-in com QR Code",
    description:
      "Controle de equipamentos audiovisuais para produtoras, cinema e locadoras: check-in/check-out com QR Code, menos perda e rastreio por set. Teste grátis.",
  },
  events: {
    title:
      "Sistema para Empresas de Eventos: Equipamentos com Check-in/Check-out",
    description:
      "Controle som, luz, mobiliário e materiais por evento com QR Code. Saiba o que saiu, com quem está e o que voltou. Teste grátis Purple Stock.",
  },
  odontologico: {
    title: "Controle de Equipamentos Odontológicos com QR Code e Check-in",
    description:
      "Gestão de equipamentos dentários, kits e instrumentais: check-in/check-out, responsável e histórico. Para clínicas, labs e prestadores de serviço. Teste grátis.",
  },
  telecomunicacoes: {
    title: "Controle de Equipamentos de Telecom e Kits de Campo com QR Code",
    description:
      "Check-in/check-out de ONT, roteador, rádio e kits de instalação. Saiba o que cada técnico levou e o que voltou ao depósito. Para ISPs e integradoras. Teste grátis.",
  },
  pharmaceutical: {
    title: "Controle de Estoque e Equipamentos para o Setor de Saúde",
    description:
      "Rastreie medicamentos, insumos e equipamentos médicos com QR Code. Menos perda por validade e mais controle operacional. Teste grátis Purple Stock.",
  },
  automotivo: {
    title:
      "Estoque para Autopeças e Peças de Moto: Controle com Código de Barras",
    description:
      "Sistema de estoque para lojas de peças de carro e moto. SKU, código de barras/QR, reposição e menos ruptura no balcão. Teste grátis Purple Stock.",
  },
  restaurantes: {
    title: "Gestão de Estoque para Restaurantes",
    description:
      "Reduza desperdício e controle ingredientes, validade e fornecedores com um sistema de estoque para restaurantes.",
  },
  electrical: {
    title: "Gestão de Estoque para Setor Elétrico",
    description:
      "Controle equipamentos, componentes e ferramentas do setor elétrico com mais rastreabilidade e eficiência operacional.",
  },
  construction: {
    title: "Almoxarifado de Obra: Materiais e Ferramentas com QR Code",
    description:
      "Controle de materiais de construção por obra e canteiro. QR Code no celular: entrada, retirada e conferência sem planilha. Teste grátis Purple Stock.",
  },
};

export function getIndustrySerpCopy(
  slug: string
): IndustrySerpCopy | undefined {
  return INDUSTRY_SERP_COPY_BY_SLUG[slug];
}

export function buildDefaultIndustrySerpCopy(industryName: string): {
  title: string;
} {
  return {
    title: `Gestão de Estoque para ${industryName}`,
  };
}
