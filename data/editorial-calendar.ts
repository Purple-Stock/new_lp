export type EditorialItem = {
  slug: string;
  title: string;
  targetDate: string;
  cluster:
    | "almoxarifado"
    | "qr-code"
    | "inventario"
    | "comparativos"
    | "audiovisual-eventos";
  primaryKeyword: string;
};

export const EDITORIAL_CALENDAR: EditorialItem[] = [
  {
    slug: "controle-equipamentos-audiovisuais-produtoras-eventos",
    title:
      "Controle de Equipamentos Audiovisuais: Check-in para Produtoras e Eventos",
    targetDate: "2026-07-20",
    cluster: "audiovisual-eventos",
    primaryKeyword: "controle de equipamentos audiovisuais",
  },
  {
    slug: "check-in-check-out-equipamentos-eventos",
    title: "Check-in e Check-out de Equipamentos para Empresas de Eventos",
    targetDate: "2026-08-05",
    cluster: "audiovisual-eventos",
    primaryKeyword: "check-in check-out equipamentos eventos",
  },
  {
    slug: "inventario-fisico-passo-a-passo-2026",
    title: "Inventário Físico Passo a Passo para PME [2026]",
    targetDate: "2026-06-28",
    cluster: "inventario",
    primaryKeyword: "inventário físico passo a passo",
  },
  {
    slug: "abc-curva-abc-estoque-pme",
    title: "Curva ABC no Estoque: Como Priorizar Itens na PME",
    targetDate: "2026-07-15",
    cluster: "almoxarifado",
    primaryKeyword: "curva abc estoque",
  },
  {
    slug: "contagem-ciclica-vs-inventario-geral",
    title: "Contagem Cíclica vs Inventário Geral: Qual Usar na PME",
    targetDate: "2026-08-01",
    cluster: "inventario",
    primaryKeyword: "contagem cíclica inventário",
  },
  {
    slug: "etiquetas-qr-code-almoxarifado",
    title: "Etiquetas QR Code no Almoxarifado: Guia de Implantação",
    targetDate: "2026-08-20",
    cluster: "qr-code",
    primaryKeyword: "etiqueta qr code almoxarifado",
  },
  {
    slug: "kpi-acuracidade-estoque",
    title: "KPIs de Acuracidade de Estoque para PME",
    targetDate: "2026-09-10",
    cluster: "almoxarifado",
    primaryKeyword: "acuracidade de estoque",
  },
  {
    slug: "wms-vs-controle-simples-estoque",
    title: "WMS vs Controle Simples de Estoque: Quando Migrar",
    targetDate: "2026-10-05",
    cluster: "comparativos",
    primaryKeyword: "wms controle de estoque",
  },
  {
    slug: "recebimento-mercadoria-conferencia",
    title: "Recebimento de Mercadoria: Conferência que Evita Divergência",
    targetDate: "2026-10-25",
    cluster: "almoxarifado",
    primaryKeyword: "conferência de recebimento",
  },
  {
    slug: "inventario-ano-novo-checklist",
    title: "Checklist de Inventário de Fim de Ano para PME",
    targetDate: "2026-12-01",
    cluster: "inventario",
    primaryKeyword: "inventário fim de ano",
  },
];
