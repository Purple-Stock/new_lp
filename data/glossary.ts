export interface GlossaryTerm {
  slug: string
  term: string
  category: "inventory" | "logistics" | "finance" | "management" | "technology"
  shortDefinition: string // ~50 palavras — card da listagem + meta description
  definition: string // ~300 palavras — seção principal da página
  example: string // ~200 palavras — caso prático concreto
  formula?: string // expressão/texto quando aplicável
  formulaExplanation?: string // explicação dos componentes da fórmula
  faq: [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ]
  relatedTerms: string[] // slugs de outros termos no glossário
  relatedFeatures?: string[] // ex: ['inventory-control', 'barcoding']
  relatedIndustries?: string[] // ex: ['varejo', 'logistica']
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "3pl",
    term: "3PL (Logística Terceirizada)",
    category: "logistics",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["logistica", "wms", "cadeia-de-suprimentos"],
    relatedFeatures: ["warehouse-control"],
    relatedIndustries: ["logistica"],
  },
  {
    slug: "5s",
    term: "Metodologia 5S",
    category: "management",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["gestao-de-estoque", "kanban"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura"],
  },
  {
    slug: "80-20",
    term: "Regra 80/20",
    category: "management",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "80% dos resultados vêm de 20% das causas",
    formulaExplanation:
      "Esta proporção ilustra que uma minoria dos esforços ou itens geralmente gera a maioria dos resultados. No contexto de estoque, significa que ~20% dos seus SKUs são responsáveis por ~80% do faturamento.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["giro-de-estoque", "gestao-de-estoque"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "contas-a-pagar",
    term: "Contas a Pagar",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["contas-a-receber", "capital-de-giro", "passivos-circulantes"],
    relatedFeatures: ["purchase-sales"],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "contas-a-receber",
    term: "Contas a Receber",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["contas-a-pagar", "capital-de-giro", "ativos-circulantes"],
    relatedFeatures: ["purchase-sales"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "b2b",
    term: "B2B",
    category: "management",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["cadeia-de-suprimentos", "logistica"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura", "atacado"],
  },
  {
    slug: "sistema-de-codigo-de-barras",
    term: "Sistema de Código de Barras",
    category: "technology",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["sku", "wms", "gestao-de-estoque"],
    relatedFeatures: ["barcoding", "inventory-control"],
    relatedIndustries: ["varejo", "logistica"],
  },
  {
    slug: "lista-de-materiais",
    term: "Lista de Materiais (BOM)",
    category: "management",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["gestao-de-estoque", "cadeia-de-suprimentos"],
    relatedFeatures: ["inventory-control", "factory-management"],
    relatedIndustries: ["manufatura"],
  },
  {
    slug: "efeito-chicote",
    term: "Efeito Chicote",
    category: "logistics",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["cadeia-de-suprimentos", "lead-time", "logistica"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["manufatura", "varejo"],
  },
  {
    slug: "ciclo-de-conversao-de-caixa",
    term: "Ciclo de Conversão de Caixa (CCC)",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "CCC = DIO + DSO - DPO",
    formulaExplanation:
      "DIO (Days Inventory Outstanding) = dias médios de estoque; DSO (Days Sales Outstanding) = dias médios para receber de clientes; DPO (Days Payable Outstanding) = dias médios para pagar fornecedores.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["capital-de-giro", "giro-de-estoque", "contas-a-receber"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "ativos-circulantes",
    term: "Ativos Circulantes",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["passivos-circulantes", "capital-de-giro", "contas-a-receber"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "passivos-circulantes",
    term: "Passivos Circulantes",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["ativos-circulantes", "contas-a-pagar", "capital-de-giro"],
    relatedFeatures: [],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "custo-das-mercadorias-vendidas",
    term: "Custo das Mercadorias Vendidas (CMV)",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "CMV = Estoque Inicial + Compras - Estoque Final",
    formulaExplanation:
      "Estoque Inicial = valor do estoque no início do período; Compras = aquisições durante o período; Estoque Final = valor do estoque ao fim do período.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["giro-de-estoque", "inflacao", "gestao-de-estoque"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "ciclo-de-tempo",
    term: "Tempo de Espera (Lead Time)",
    category: "logistics",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["estoque-de-seguranca", "ponto-de-reposicao", "efeito-chicote"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura", "varejo"],
  },
  {
    slug: "dropshipping",
    term: "Dropshipping",
    category: "technology",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["logistica", "cadeia-de-suprimentos", "gestao-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["varejo", "commerce"],
  },
  {
    slug: "sku",
    term: "SKU (Stock Keeping Unit)",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["estoque-de-seguranca", "giro-de-estoque", "ruptura-de-estoque"],
    relatedFeatures: ["inventory-control", "barcoding"],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "estoque-de-seguranca",
    term: "Estoque de Segurança",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "Estoque de Segurança = (Demanda Máxima - Demanda Média) × Lead Time",
    formulaExplanation:
      "Demanda Máxima = maior quantidade vendida em um período; Demanda Média = média de vendas no mesmo período; Lead Time = tempo de reposição em dias.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["sku", "ponto-de-reposicao", "ruptura-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "giro-de-estoque",
    term: "Índice de Rotatividade de Estoque (Giro de Estoque)",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "Giro de Estoque = CMV / Estoque Médio",
    formulaExplanation:
      "CMV = Custo das Mercadorias Vendidas no período; Estoque Médio = (Estoque Inicial + Estoque Final) / 2.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["sku", "excesso-de-estoque", "custo-das-mercadorias-vendidas"],
    relatedFeatures: ["analytics-reporting", "inventory-control"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "ruptura-de-estoque",
    term: "Ruptura de Estoque",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["estoque-de-seguranca", "ponto-de-reposicao", "sku"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "excesso-de-estoque",
    term: "Excesso de Estoque",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["giro-de-estoque", "estoque-de-seguranca", "financiamento-de-estoque"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "financiamento-de-estoque",
    term: "Financiamento de Estoque",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["capital-de-giro", "excesso-de-estoque", "contas-a-pagar"],
    relatedFeatures: [],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "gestao-de-estoque",
    term: "Gestão de Estoque",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["sku", "giro-de-estoque", "inventario-fisico"],
    relatedFeatures: ["inventory-control", "analytics-reporting"],
    relatedIndustries: ["varejo", "atacado", "manufatura"],
  },
  {
    slug: "inventario-fisico",
    term: "Inventário Físico (Contagem de Estoque)",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["gestao-de-estoque", "sku"],
    relatedFeatures: ["inventory-control", "barcoding"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "just-in-time",
    term: "Just-In-Time (JIT)",
    category: "management",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["lead-time", "kanban", "gestao-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura"],
  },
  {
    slug: "kanban",
    term: "Kanban",
    category: "management",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["just-in-time", "gestao-de-estoque", "ponto-de-reposicao"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura"],
  },
  {
    slug: "lead-time",
    term: "Lead Time (Tempo de Espera)",
    category: "logistics",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["estoque-de-seguranca", "ponto-de-reposicao", "efeito-chicote"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura", "varejo"],
  },
  {
    slug: "logistica",
    term: "Logística",
    category: "logistics",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["cadeia-de-suprimentos", "3pl", "wms"],
    relatedFeatures: ["warehouse-control"],
    relatedIndustries: ["logistica"],
  },
  {
    slug: "picking",
    term: "Picking (Separação de Pedidos)",
    category: "logistics",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["wms", "logistica", "logistica-reversa"],
    relatedFeatures: ["warehouse-control", "inventory-control"],
    relatedIndustries: ["logistica", "varejo"],
  },
  {
    slug: "ponto-de-reposicao",
    term: "Ponto de Reposição",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "Ponto de Reposição = (Demanda Média Diária × Lead Time) + Estoque de Segurança",
    formulaExplanation:
      "Demanda Média Diária = quantidade média vendida por dia; Lead Time = dias para o fornecedor entregar; Estoque de Segurança = buffer contra variações.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["estoque-de-seguranca", "lead-time", "ruptura-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "logistica-reversa",
    term: "Logística Reversa",
    category: "logistics",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["logistica", "cadeia-de-suprimentos"],
    relatedFeatures: ["warehouse-control"],
    relatedIndustries: ["varejo", "logistica"],
  },
  {
    slug: "wms",
    term: "WMS (Warehouse Management System)",
    category: "technology",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["logistica", "picking", "gestao-de-estoque"],
    relatedFeatures: ["warehouse-control", "inventory-control"],
    relatedIndustries: ["logistica", "varejo"],
  },
  {
    slug: "vmi",
    term: "VMI (Vendor Managed Inventory)",
    category: "management",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["cadeia-de-suprimentos", "gestao-de-estoque", "kanban"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "cadeia-de-suprimentos",
    term: "Cadeia de Suprimentos",
    category: "logistics",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["logistica", "3pl", "efeito-chicote"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura", "varejo"],
  },
  {
    slug: "capital-de-giro",
    term: "Capital de Giro",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "Capital de Giro = Ativos Circulantes - Passivos Circulantes",
    formulaExplanation:
      "Ativos Circulantes = recursos disponíveis para curto prazo (estoque, contas a receber, caixa); Passivos Circulantes = obrigações de curto prazo (contas a pagar, empréstimos).",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["ativos-circulantes", "passivos-circulantes", "ciclo-de-conversao-de-caixa"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "inflacao",
    term: "Inflação",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["custo-das-mercadorias-vendidas", "contas-a-pagar"],
    relatedFeatures: [],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "custo-medio-ponderado",
    term: "Custo Médio Ponderado (WAC)",
    category: "finance",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "WAC = Custo Total dos Itens Disponíveis / Total de Unidades Disponíveis",
    formulaExplanation:
      "Custo Total dos Itens Disponíveis = soma do custo de abertura + custo de todas as compras do período; Total de Unidades Disponíveis = unidades em estoque no início + unidades compradas.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["peps", "ueps", "gestao-de-estoque", "custo-das-mercadorias-vendidas"],
    relatedFeatures: ["inventory-control", "analytics-reporting"],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "peps",
    term: "PEPS (Primeiro a Entrar, Primeiro a Sair)",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["ueps", "custo-medio-ponderado", "gestao-de-estoque", "inventario-fisico"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["food", "pharmaceutical", "varejo"],
  },
  {
    slug: "ueps",
    term: "UEPS (Último a Entrar, Primeiro a Sair)",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["peps", "custo-medio-ponderado", "gestao-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura", "varejo"],
  },
  {
    slug: "erp",
    term: "ERP (Enterprise Resource Planning)",
    category: "technology",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["wms", "gestao-de-estoque", "cadeia-de-suprimentos"],
    relatedFeatures: ["inventory-control", "purchase-sales", "analytics-reporting"],
    relatedIndustries: ["manufatura", "varejo", "logistica"],
  },
  {
    slug: "rfid",
    term: "RFID (Identificação por Radiofrequência)",
    category: "technology",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["sistema-de-codigo-de-barras", "wms", "gestao-de-estoque"],
    relatedFeatures: ["barcoding", "inventory-control"],
    relatedIndustries: ["logistica", "varejo", "manufatura"],
  },
  {
    slug: "gestao-ativos-ti",
    term: "Gestão de Ativos de TI (ITAM)",
    category: "technology",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["erp", "wms", "rfid"],
    relatedFeatures: ["equipment-management"],
    relatedIndustries: ["technology"],
  },
  {
    slug: "previsao-de-demanda",
    term: "Previsão de Demanda",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["estoque-de-seguranca", "ponto-de-reposicao", "giro-de-estoque", "efeito-chicote"],
    relatedFeatures: ["analytics-reporting", "inventory-control"],
    relatedIndustries: ["varejo", "manufatura", "logistica"],
  },
  {
    slug: "quantidade-economica-pedido",
    term: "Quantidade Econômica de Pedido (EOQ)",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    formula: "EOQ = √(2DS / H)",
    formulaExplanation:
      "D = demanda anual em unidades; S = custo de emissão de pedido (por pedido); H = custo de manutenção de estoque por unidade por ano.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["ponto-de-reposicao", "estoque-de-seguranca", "custo-das-mercadorias-vendidas"],
    relatedFeatures: ["inventory-control", "purchase-sales"],
    relatedIndustries: ["manufatura", "varejo", "atacado"],
  },
  {
    slug: "quantidade-minima-pedido",
    term: "Quantidade Mínima de Pedido (MOQ)",
    category: "inventory",
    shortDefinition: "", // TODO: ~50 palavras
    definition: "", // TODO: ~300 palavras
    example: "", // TODO: ~200 palavras
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: ["quantidade-economica-pedido", "ponto-de-reposicao", "cadeia-de-suprimentos"],
    relatedFeatures: ["purchase-sales", "inventory-control"],
    relatedIndustries: ["manufatura", "varejo", "atacado"],
  },
]
