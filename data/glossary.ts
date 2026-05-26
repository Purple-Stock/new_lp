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
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "3pl",
    term: "3PL (Logística Terceirizada)",
    category: "logistics",
    shortDefinition:
      "3PL (Third-Party Logistics) é a terceirização de operações logísticas como armazenagem, separação de pedidos e transporte para empresas especializadas. PMEs usam 3PL para reduzir custos fixos, escalar operações sem investir em infraestrutura própria e focar no core business enquanto o parceiro logístico cuida do estoque e entregas.",
    definition:
      "3PL, ou Third-Party Logistics (Logística Terceirizada), refere-se à contratação de empresas especializadas para gerenciar parte ou toda a operação logística de um negócio. Isso inclui atividades como recebimento e armazenagem de mercadorias, controle de estoque, separação e embalagem de pedidos (picking e packing), expedição e transporte até o cliente final.\n\nPara pequenas e médias empresas, o modelo 3PL oferece vantagens estratégicas significativas. Em vez de investir em galpões, equipamentos de movimentação, sistemas WMS (Warehouse Management System) e equipe operacional, a empresa contrata um operador logístico que já possui toda essa estrutura. O custo passa de fixo (aluguel, salários, manutenção) para variável (paga-se pelo volume movimentado).\n\nOs serviços típicos de um 3PL incluem:\n- Recebimento e conferência de mercadorias\n- Armazenagem em endereços organizados\n- Controle de inventário em tempo real\n- Separação de pedidos por onda, lote ou unidade\n- Embalagem personalizada e etiquetagem\n- Expedição com integração a transportadoras\n- Gestão de devoluções (logística reversa)\n\nA integração entre o sistema de gestão da empresa (ERP ou sistema de estoque) e o sistema do 3PL é fundamental. APIs e EDIs permitem que pedidos de venda sejam automaticamente enviados para o operador logístico, que executa a separação e dispara a nota fiscal e o código de rastreamento.\n\nO modelo 3PL é especialmente vantajoso para empresas com sazonalidade acentuada, e-commerces em crescimento acelerado ou negócios que querem expandir para novas regiões geográficas sem abrir filiais. A flexibilidade de escalar para cima ou para baixo conforme a demanda é um dos maiores atrativos.\n\nNo entanto, é importante avaliar cuidadosamente o parceiro logístico: SLAs (Acordos de Nível de Serviço) claros, indicadores de performance (acuracidade de estoque, tempo de separação, taxa de entrega no prazo) e visibilidade em tempo real do estoque são requisitos mínimos para uma parceria bem-sucedida.",
    example:
      "Uma PME de cosméticos naturais vendia exclusivamente pelo site próprio e operava o estoque em um cômodo da casa da fundadora. Com o crescimento das vendas durante a Black Friday, a operação caseira não deu conta: pedidos atrasaram, houve erros de separação e clientes reclamaram nas redes sociais.\n\nA solução foi contratar um operador 3PL especializado em e-commerce. Em 30 dias, todo o estoque foi transferido para o centro de distribuição do parceiro, que já tinha integração com a plataforma de e-commerce usada pela empresa.\n\nResultado após 6 meses:\n- Custo logístico por pedido caiu 23% (de R$ 18,50 para R$ 14,20)\n- Tempo médio de expedição reduziu de 48h para 12h\n- Acuracidade de estoque subiu de 87% para 99,2%\n- A fundadora pôde focar em marketing e desenvolvimento de produtos\n- Durante a Black Friday seguinte, o volume triplicou sem necessidade de contratação extra\n\nO investimento em infraestrutura própria (que teria custado mais de R$ 150 mil) foi evitado, e a empresa ganhou escalabilidade imediata.",
    faq: [
      {
        question: "Qual a diferença entre 3PL e 4PL?",
        answer:
          "3PL foca na execução operacional (armazenagem, separação e transporte), enquanto 4PL (Fourth-Party Logistics) atua como gestor estratégico de toda a cadeia de suprimentos, coordenando múltiplos 3PLs e otimizando rotas, modais e estoques em nível corporativo.",
      },
      {
        question: "Quando vale a pena migrar para um 3PL?",
        answer:
          "Quando sua operação ultrapassa 500 pedidos/mês, você enfrenta problemas recorrentes de expedição, precisa de escala sazonal ou quer expandir para novas regiões sem abrir filiais. O break-even costuma acontecer quando o custo logístico interno supera 20% do faturamento.",
      },
      {
        question: "Como integrar meu sistema de estoque com um 3PL?",
        answer:
          "A maioria dos 3PLs oferece APIs REST ou conexões via EDI (Electronic Data Interchange). Seu sistema de estoque envia automaticamente os pedidos de venda, e o 3PL retorna status de separação, código de rastreamento e confirmação de expedição. Plataformas como Purple Stock já possuem integrações prontas com os principais operadores logísticos do Brasil.",
      },
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
    relatedTerms: [
      "contas-a-receber",
      "capital-de-giro",
      "passivos-circulantes",
    ],
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
    relatedTerms: [
      "passivos-circulantes",
      "capital-de-giro",
      "contas-a-receber",
    ],
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
    relatedTerms: [
      "estoque-de-seguranca",
      "ponto-de-reposicao",
      "efeito-chicote",
    ],
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
    relatedTerms: [
      "estoque-de-seguranca",
      "giro-de-estoque",
      "ruptura-de-estoque",
    ],
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
    formula:
      "Estoque de Segurança = (Demanda Máxima - Demanda Média) × Lead Time",
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
    relatedTerms: [
      "sku",
      "excesso-de-estoque",
      "custo-das-mercadorias-vendidas",
    ],
    relatedFeatures: ["analytics-reporting", "inventory-control"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "ruptura-de-estoque",
    term: "Ruptura de Estoque",
    category: "inventory",
    shortDefinition:
      "Ruptura de estoque ocorre quando um produto fica indisponível para venda por falta de saldo no inventário. É uma das maiores causas de perda de receita no varejo e na indústria, gerando insatisfação do cliente, cancelamento de pedidos e migração para concorrentes. Prevenção exige monitoramento em tempo real e reposição planejada.",
    definition:
      "Ruptura de estoque (ou stockout) é a situação em que a quantidade disponível de um item no inventário chega a zero ou fica abaixo da demanda imediata, impossibilitando a venda ou o atendimento de uma ordem de produção. No varejo, significa prateleira vazia; na indústria, linha de produção parada; no e-commerce, pedido cancelado.\n\nO impacto da ruptura vai muito além da venda perdida no momento. Estudos da ECR Brasil indicam que o índice médio de ruptura no varejo brasileiro gira em torno de 8%, representando bilhões em faturamento perdido anualmente. Quando o cliente não encontra o produto desejado, três cenários são possíveis: compra um substituto (nem sempre disponível), adia a compra ou migra para um concorrente — muitas vezes de forma definitiva.\n\nAs causas mais frequentes de ruptura incluem:\n- Previsão de demanda imprecisa ou inexistente\n- Lead time de fornecedor subestimado\n- Falta de ponto de reposição configurado\n- Estoque fantasma (sistema indica saldo, mas fisicamente não existe)\n- Atrasos logísticos ou problemas com fornecedor\n- Picos de demanda sazonal não planejados\n\nA fórmula básica para calcular a taxa de ruptura é:\nTaxa de Ruptura = (Pedidos não atendidos / Total de pedidos) × 100\n\nPara reduzir a ruptura, empresas devem implementar: ponto de reposição automático por SKU, estoque de segurança dimensionado por criticidade do item, contagem cíclica de inventário para corrigir divergências e alertas automáticos quando o saldo se aproxima do mínimo.\n\nSistemas de controle de estoque como o Purple Stock permitem configurar alertas por item, visualizar o histórico de movimentações e gerar ordens de compra automáticas baseadas na velocidade de saída — reduzindo significativamente a incidência de rupturas sem elevar o estoque em excesso.",
    example:
      "Uma distribuidora de materiais elétricos com 2.000 SKUs ativos enfrentava reclamações recorrentes de clientes que não encontravam produtos de alta rotatividade (disjuntores, cabos e interruptores). O sistema indicava saldo positivo, mas ao ir até a prateleira, o item não existia — o clássico estoque fantasma.\n\nA empresa implantou três mudanças: (1) contagem cíclica semanal nos itens curva A (20% dos SKUs que representam 80% do faturamento), (2) ponto de reposição automático com alerta no sistema quando o saldo físico caía abaixo de 5 dias de venda média, e (3) revisão mensal de lead times com os 10 principais fornecedores.\n\nResultado após 4 meses:\n- Taxa de ruptura caiu de 12% para 3,8%\n- Vendas perdidas por falta de estoque reduziram de R$ 85 mil/mês para R$ 22 mil/mês\n- NPS de disponibilidade subiu de 62 para 84\n- Compras emergenciais (com frete premium) caíram 70%",
    faq: [
      {
        question: "Como calcular a taxa de ruptura de estoque?",
        answer:
          "A taxa de ruptura é calculada dividindo o número de pedidos não atendidos pelo total de pedidos recebidos no período, multiplicado por 100. Exemplo: se você recebeu 500 pedidos e não conseguiu atender 40, sua taxa é (40/500) × 100 = 8%. O ideal é manter esse índice abaixo de 2%.",
      },
      {
        question: "Qual a diferença entre ruptura e estoque de segurança?",
        answer:
          "Ruptura é a ausência do produto quando há demanda. Estoque de segurança é a quantidade extra mantida justamente para prevenir rupturas causadas por variações na demanda ou atrasos de fornecedor. O estoque de segurança é calculado com base na variabilidade histórica e no nível de serviço desejado.",
      },
      {
        question: "Como evitar ruptura em produtos sazonais?",
        answer:
          "Para itens sazonais, analise o histórico de vendas dos últimos 2-3 anos no mesmo período, ajuste com a previsão de crescimento e antecipe as compras com lead time do fornecedor. Configure ponto de reposição temporário mais alto e monitore semanalmente durante a temporada de pico.",
      },
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
    relatedTerms: [
      "giro-de-estoque",
      "estoque-de-seguranca",
      "financiamento-de-estoque",
    ],
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
    relatedTerms: [
      "estoque-de-seguranca",
      "ponto-de-reposicao",
      "efeito-chicote",
    ],
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
    shortDefinition:
      "Ponto de reposição é a quantidade mínima de estoque que, quando atingida, dispara um novo pedido de compra ao fornecedor. Ele evita rupturas, equilibra o capital parado e garante que a operação não pare por falta de produto.",
    definition:
      "Ponto de reposição é o nível de estoque que aciona automaticamente um novo pedido de compra. Quando o saldo em estoque atinge esse número, é hora de fazer um pedido ao fornecedor.\n\nO cálculo considera dois fatores principais: a demanda média diária (quantas unidades são vendidas ou consumidas por dia) e o lead time do fornecedor (quantos dias ele leva para entregar). O resultado é a quantidade de produto que será consumida durante o prazo de entrega. A isso soma-se o estoque de segurança, que funciona como colchão contra variações inesperadas de demanda ou atrasos do fornecedor.\n\nExemplo: se você vende 10 unidades por dia e o fornecedor entrega em 7 dias, seu consumo durante o lead time será de 70 unidades. Se você mantém um estoque de segurança de 30 unidades, seu ponto de reposição será de 100 unidades. Toda vez que o saldo chegar a 100, você faz um novo pedido.\n\nUm ponto de reposição bem calibrado evita dois extremos: ruptura de estoque (perder vendas por falta de produto) e excesso de estoque (capital parado desnecessariamente). É um dos fundamentos mais importantes da gestão de estoque.",
    example:
      "Uma loja de autopeças vende em média 5 filtros de óleo por dia. O fornecedor entrega em 12 dias úteis. Durante o lead time, o consumo esperado é de 60 filtros. A loja decide manter um estoque de segurança de 20 unidades para cobrir variações de demanda.\n\nPonto de Reposição = (5 × 12) + 20 = 80 filtros.\n\nIsso significa que toda vez que o saldo do filtro de óleo chegar a 80 unidades no sistema, o time de compras deve emitir um novo pedido. Se o pedido for de 200 unidades (lote econômico), o estoque voltará a um nível confortável de 280 unidades sem risco de ruptura.",
    formula:
      "Ponto de Reposição = (Demanda Média Diária × Lead Time) + Estoque de Segurança",
    formulaExplanation:
      "Demanda Média Diária = quantidade média vendida por dia; Lead Time = dias para o fornecedor entregar; Estoque de Segurança = buffer contra variações.",
    faq: [
      {
        question: "Qual a diferença entre ponto de reposição e estoque mínimo?",
        answer:
          "Estoque mínimo é o nível abaixo do qual a operação corre risco real de ruptura. Ponto de reposição é o nível que aciona o pedido — ele é sempre maior que o estoque mínimo, pois precisa cobrir o consumo durante o lead time do fornecedor.",
      },
      {
        question: "Com que frequência devo recalcular o ponto de reposição?",
        answer:
          "O ideal é revisar a cada 3 meses ou sempre que houver mudança significativa na demanda (sazonalidade, novo cliente, campanha) ou no lead time do fornecedor (troca de transportadora, novo contrato).",
      },
      {
        question: "O que acontece se eu usar um ponto de reposição errado?",
        answer:
          "Se o ponto for muito baixo, você terá rupturas frequentes e perda de vendas. Se for muito alto, terá excesso de estoque, capital parado e custo de armazenagem desnecessário. Ambos os cenários afetam diretamente o lucro da operação.",
      },
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
    shortDefinition:
      "VMI (Vendor Managed Inventory) é um modelo de gestão onde o fornecedor monitora e repõe o estoque do cliente automaticamente, com base em dados compartilhados em tempo real. Reduz rupturas, elimina pedidos manuais e transfere a responsabilidade de reposição para quem melhor conhece o produto e o lead time de produção.",
    definition:
      "VMI, ou Vendor Managed Inventory (Estoque Gerenciado pelo Fornecedor), é uma estratégia colaborativa de cadeia de suprimentos onde o fornecedor assume a responsabilidade de monitorar, planejar e repor o estoque do cliente. Diferente do modelo tradicional — onde o comprador emite pedidos de compra manualmente — no VMI o fornecedor tem visibilidade em tempo real dos níveis de estoque, vendas e demanda do cliente, e decide quando e quanto enviar.\n\nO modelo funciona através de integração de sistemas: o varejista ou distribuidor compartilha dados de vendas diárias, estoque atual e previsões de demanda via EDI (Electronic Data Interchange) ou APIs. O fornecedor analisa esses dados e programa as reposições automaticamente, garantindo que o estoque do cliente se mantenha dentro de uma faixa acordada (mínimo e máximo definidos em contrato).\n\nAs principais vantagens do VMI incluem:\n- Redução drástica de rupturas: o fornecedor antecipa a demanda e envia antes que o estoque zere\n- Eliminação de erros de pedido: não há digitação manual nem esquecimento de itens\n- Otimização de estoque: o fornecedor equilibra múltiplos clientes e produz de forma mais eficiente\n- Redução de custos administrativos: menos pedidos, menos aprovações, menos conferência\n- Melhoria no relacionamento comercial: parceria de longo prazo com metas compartilhadas\n\nO VMI é especialmente eficaz em setores como: varejo de bens de consumo (alimentos, bebidas, higiene), autopeças, produtos farmacêuticos e materiais de construção. Funciona melhor quando há alta rotatividade de produtos, demanda relativamente estável e relacionamento de confiança entre as partes.\n\nOs desafios do VMI incluem a necessidade de compartilhamento de dados sensíveis (vendas, margens), dependência tecnológica (integração de sistemas) e risco de o fornecedor priorizar seus próprios interesses de produção em detrimento das reais necessidades do cliente. Por isso, contratos de VMI bem estruturados incluem KPIs claros: nível de serviço, taxa de ruptura, giro de estoque e penalidades por descumprimento.\n\nSistemas como o Purple Stock podem facilitar a implementação de VMI ao fornecer dashboards em tempo real, alertas automáticos de reposição e integração via API com os sistemas do fornecedor, permitindo que PMEs participem de modelos colaborativos antes restritos a grandes corporações.",
    example:
      "Uma rede regional de farmácias com 35 lojas enfrentava problemas recorrentes de ruptura em produtos de higiene pessoal e cosméticos. O time de compras, sobrecarregado com 800 fornecedores diferentes, não conseguia emitir pedidos com a frequência necessária, e itens de alta rotatividade ficavam dias fora de estoque.\n\nA solução foi implementar VMI com os 5 principais fornecedores da categoria (que representavam 60% do faturamento do setor). O processo foi:\n1. Integração via API entre o sistema de estoque da rede e o ERP de cada fornecedor\n2. Definição de estoque mínimo (7 dias de venda) e máximo (21 dias) por SKU e loja\n3. Dashboard compartilhado onde o fornecedor via o consumo em tempo real\n4. Reposição automática 2x por semana, sem necessidade de pedido formal\n\nResultado após 12 meses:\n- Ruptura na categoria caiu de 11% para 2,3%\n- Vendas da categoria aumentaram 18% (mais disponibilidade = mais venda)\n- Horas da equipe de compras reduzidas em 40% (foco em fornecedores estratégicos)\n- Estoque médio da categoria caiu 15% (reposição mais frequente e precisa)",
    faq: [
      {
        question: "Qual a diferença entre VMI e consignação?",
        answer:
          "No VMI, o fornecedor gerencia a reposição mas a propriedade do estoque é transferida ao cliente no momento da entrega (compra efetiva). Na consignação, o fornecedor mantém a propriedade do estoque até que o item seja vendido ao consumidor final. VMI é sobre quem decide quando repor; consignação é sobre quem é dono do estoque.",
      },
      {
        question: "Minha empresa é pequena, VMI funciona para PMEs?",
        answer:
          "Sim. Embora tradicionalmente associado a grandes varejistas como Walmart, o VMI está se tornando acessível para PMEs graças a sistemas de estoque em nuvem com APIs abertas. Comece com 2-3 fornecedores estratégicos, produtos de alta rotatividade e integração simplificada via planilhas compartilhadas ou webhooks antes de partir para EDI completo.",
      },
      {
        question: "Como medir se o VMI está funcionando?",
        answer:
          "Os 4 KPIs essenciais do VMI são: (1) Taxa de ruptura (meta < 2%), (2) Nível de serviço do fornecedor (% de reposições no prazo), (3) Giro de estoque (quantas vezes o estoque renova no período) e (4) Cobertura de estoque (dias de venda disponíveis). Monitore mensalmente e revise os parâmetros mínimo/máximo a cada trimestre.",
      },
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
    relatedTerms: [
      "ativos-circulantes",
      "passivos-circulantes",
      "ciclo-de-conversao-de-caixa",
    ],
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
    formula:
      "WAC = Custo Total dos Itens Disponíveis / Total de Unidades Disponíveis",
    formulaExplanation:
      "Custo Total dos Itens Disponíveis = soma do custo de abertura + custo de todas as compras do período; Total de Unidades Disponíveis = unidades em estoque no início + unidades compradas.",
    faq: [
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
      { question: "", answer: "" }, // TODO
    ],
    relatedTerms: [
      "peps",
      "ueps",
      "gestao-de-estoque",
      "custo-das-mercadorias-vendidas",
    ],
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
    relatedTerms: [
      "ueps",
      "custo-medio-ponderado",
      "gestao-de-estoque",
      "inventario-fisico",
    ],
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
    relatedFeatures: [
      "inventory-control",
      "purchase-sales",
      "analytics-reporting",
    ],
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
    relatedTerms: [
      "estoque-de-seguranca",
      "ponto-de-reposicao",
      "giro-de-estoque",
      "efeito-chicote",
    ],
    relatedFeatures: ["analytics-reporting", "inventory-control"],
    relatedIndustries: ["varejo", "manufatura", "logistica"],
  },
  {
    slug: "quantidade-economica-pedido",
    term: "Quantidade Econômica de Pedido (EOQ)",
    category: "inventory",
    shortDefinition:
      "EOQ (Economic Order Quantity) é a fórmula que calcula a quantidade ideal de cada pedido ao fornecedor, equilibrando o custo de fazer pedidos com o custo de manter estoque. O resultado minimiza o custo total de inventário.",
    definition:
      "EOQ — Economic Order Quantity ou Quantidade Econômica de Pedido — é um modelo matemático criado em 1913 por Ford W. Harris que calcula o lote ideal de compra para minimizar o custo total de estoque.\n\nA lógica é simples: existem dois custos conflitantes na gestão de estoque. De um lado, o custo de pedido (frete, emissão, administrativo) que diminui quando você faz pedidos maiores e menos frequentes. De outro, o custo de manutenção (armazenagem, seguro, obsolescência, capital parado) que aumenta com pedidos maiores. O EOQ encontra o ponto de equilíbrio entre esses dois custos.\n\nA fórmula clássica é EOQ = √(2DS / H), onde D é a demanda anual, S é o custo de fazer um pedido, e H é o custo de manter uma unidade em estoque por ano.\n\nO EOQ é especialmente útil para indústrias e atacadistas que lidam com centenas de SKUs e precisam definir lotes de compra consistentes. Ele parte de premissas simplificadas (demanda constante, lead time fixo) que nem sempre se aplicam na prática, mas serve como base para políticas de compra mais sofisticadas.",
    example:
      "Um distribuidor de alimentos secos vende 12.000 pacotes de arroz por ano. Cada pedido ao fornecedor custa R$ 80,00 (transporte, emissão de nota, tempo administrativo). O custo de manter um pacote em estoque por um ano é de R$ 3,00 (armazenagem, seguro, capital).\n\nEOQ = √(2 × 12.000 × 80 / 3) = √640.000 = 800 pacotes.\n\nIsso significa que o lote ideal é de 800 pacotes por pedido. Com demanda de 12.000/ano, o distribuidor fará 15 pedidos por ano (aproximadamente 1 a cada 24 dias). Qualquer desvio desse lote — para mais ou para menos — aumentaria o custo total de estoque.",
    formula: "EOQ = √(2DS / H)",
    formulaExplanation:
      "D = demanda anual em unidades; S = custo de emissão de pedido (por pedido); H = custo de manutenção de estoque por unidade por ano.",
    faq: [
      {
        question: "EOQ funciona para qualquer tipo de produto?",
        answer:
          "Funciona melhor para produtos com demanda relativamente estável e lead time previsível. Para produtos sazonais, perecíveis ou com alta variação de demanda, o EOQ precisa ser ajustado com modelos complementares como ponto de reposição dinâmico.",
      },
      {
        question: "Qual a diferença entre EOQ e lote mínimo do fornecedor?",
        answer:
          "EOQ é o lote ideal calculado pela sua operação. Lote mínimo é a quantidade mínima que o fornecedor aceita vender. Se o lote mínimo for maior que o EOQ, você está sendo forçado a comprar mais do que o ideal — isso deve entrar no cálculo de custo total para avaliar se vale a pena manter esse fornecedor.",
      },
      {
        question: "Preciso calcular EOQ manualmente para cada produto?",
        answer:
          "Não. Sistemas de gestão de estoque como o Purple Stock calculam o EOQ automaticamente com base no histórico de vendas, lead time dos fornecedores e custos cadastrados. O importante é entender o conceito e revisar os parâmetros periodicamente.",
      },
    ],
    relatedTerms: [
      "ponto-de-reposicao",
      "estoque-de-seguranca",
      "custo-das-mercadorias-vendidas",
    ],
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
    relatedTerms: [
      "quantidade-economica-pedido",
      "ponto-de-reposicao",
      "cadeia-de-suprimentos",
    ],
    relatedFeatures: ["purchase-sales", "inventory-control"],
    relatedIndustries: ["manufatura", "varejo", "atacado"],
  },
];
