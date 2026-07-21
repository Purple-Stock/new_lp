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
    shortDefinition:
      "5S é uma metodologia de organização do ambiente de trabalho em cinco sensos: utilização, ordenação, limpeza, padronização e disciplina. No almoxarifado, reduz tempo de busca, erro de picking e divergência de inventário.",
    definition:
      "A metodologia 5S (originária do Japão) estrutura a organização do posto de trabalho em cinco pilares: Seiri (utilização), Seiton (ordenação), Seiso (limpeza), Seiketsu (padronização) e Shitsuke (disciplina).\n\nNo almoxarifado e na fábrica, 5S significa: tirar o que não se usa, definir endereço fixo, manter limpo, padronizar etiquetas/fluxos e sustentar o hábito com auditorias.\n\n5S não substitui sistema de estoque, mas multiplica o resultado: endereço claro + identificação (código de barras/QR) + disciplina de devolução ao local certo elevam acurácia e velocidade de separação.",
    example:
      "Um almoxarifado misturava itens “temporários” no corredor. Após 5S, cada SKU ganhou endereço e etiqueta, material sem uso foi baixado ou descartado, e o tempo de picking médio caiu 25% com menos erro de item errado.",
    faq: [
      {
        question: "5S serve só para fábrica?",
        answer:
          "Não. Escala em escritório, loja, estoque e oficina. Qualquer área com material e fluxo se beneficia.",
      },
      {
        question: "Qual a relação entre 5S e inventário?",
        answer:
          "Ambiente organizado reduz item “sumido”, facilita contagem e mantém o saldo físico alinhado ao sistema.",
      },
      {
        question: "Como manter o 5S depois da campanha inicial?",
        answer:
          "Checklist semanal, responsáveis por zona, auditoria visual e meta de tempo de busca/erro de separação.",
      },
    ],
    relatedTerms: ["gestao-de-estoque", "kanban"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura"],
  },
  {
    slug: "80-20",
    term: "Regra 80/20",
    category: "management",
    shortDefinition:
      "A regra 80/20 (Pareto) diz que cerca de 80% dos resultados vêm de 20% das causas. No estoque, costuma significar que poucos SKUs concentram a maior parte do faturamento, giro ou problemas — base da curva ABC.",
    definition:
      "A regra 80/20, ou princípio de Pareto, observa que uma minoria de causas gera a maioria dos efeitos. Em inventário e vendas, a proporção não é mágica nem sempre exata, mas o padrão se repete: poucos itens dominam receita, e outros poucos dominam custos ou rupturas.\n\nAplicações práticas no estoque:\n- Curva ABC: classificar SKUs por contribuição de faturamento ou CMV\n- Priorizar inventário cíclico nos 20% críticos\n- Focar previsão e ponto de reposição nos itens que mais afetam resultado\n- Evitar tratar todos os SKUs com a mesma política de compra\n\nUsar 80/20 não significa abandonar o restante do catálogo; significa alocar tempo, capital e contagem onde o retorno é maior.",
    example:
      "Uma loja com 1.000 SKUs descobre que 180 itens geram 82% da receita. O time passa a contar esses 180 semanalmente, revisar lead time e safety stock com mais rigor, e reavaliar trimestralmente os 200 itens sem movimento. Em poucos meses a ruptura dos itens A cai e o capital parado nos C diminui.",
    formula: "80% dos resultados vêm de 20% das causas",
    formulaExplanation:
      "Proporção ilustrativa: no estoque, ~20% dos SKUs costumam gerar ~80% do faturamento ou dos problemas operacionais.",
    faq: [
      {
        question: "A regra 80/20 é sempre 80 e 20?",
        answer:
          "Não. Pode ser 70/30 ou 90/10. O importante é a concentração: uma minoria de itens explica a maior parte do resultado.",
      },
      {
        question: "Como usar 80/20 no inventário físico?",
        answer:
          "Conte com mais frequência os itens que mais vendem ou mais custam (curva A). Itens C podem ter contagem mais espaçada, sem abandonar o controle.",
      },
      {
        question: "80/20 e curva ABC são a mesma coisa?",
        answer:
          "São conceitos irmãos. A curva ABC operacionaliza o 80/20 classificando itens em A (alto impacto), B (médio) e C (baixo).",
      },
    ],
    relatedTerms: ["giro-de-estoque", "gestao-de-estoque"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "contas-a-pagar",
    term: "Contas a Pagar",
    category: "finance",
    shortDefinition:
      "Contas a pagar são as obrigações da empresa com fornecedores e credores de curto prazo. No estoque, nascem principalmente das compras de mercadorias e materiais a prazo.",
    definition:
      "Contas a pagar (accounts payable) registram o que a empresa deve a terceiros, em especial fornecedores de mercadorias, insumos e serviços. Quando a compra de estoque é a prazo, o ativo (inventário) sobe junto com o passivo (conta a pagar).\n\nGestão saudável de contas a pagar equilibra:\n- Prazo negociado (DPO) sem quebrar relacionamento\n- Caixa disponível no vencimento\n- Conferência de nota, pedido e recebimento (three-way match)\n- Evitar pagar item não recebido ou divergente\n\nCompras impulsivas elevam contas a pagar e podem gerar excesso de estoque. Por isso compras, almoxarifado e financeiro precisam do mesmo saldo e do mesmo histórico de entrada.",
    example:
      "A PME emite pedido de R$ 40 mil com prazo de 28 dias. A mercadoria entra, o estoque sobe e a conta a pagar é programada. Se a conferência achar 5% de falta, o financeiro só libera o valor da quantidade efetiva — evitando pagar o que não entrou no inventário.",
    faq: [
      {
        question: "Contas a pagar é o mesmo que despesa?",
        answer:
          "Não. Contas a pagar é obrigação no passivo. A despesa ou o CMV só se reconhecem conforme a contabilidade do período e a saída/uso do item.",
      },
      {
        question: "Como o estoque se relaciona com contas a pagar?",
        answer:
          "Quase toda compra a prazo de mercadoria gera (ou deveria gerar) entrada de estoque e uma obrigação a pagar. Divergência entre os dois é sinal de processo quebrado.",
      },
      {
        question: "Alongar prazo de pagamento ajuda o caixa?",
        answer:
          "Pode ajudar o CCC, mas se vier junto de compra em excesso, o ganho de prazo vira estoque parado. Negocie prazo com disciplina de compra.",
      },
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
    shortDefinition:
      "Contas a receber são os valores que clientes devem à empresa por vendas a prazo. Junto com estoque e caixa, formam boa parte do ativo circulante e do capital de giro.",
    definition:
      "Contas a receber (accounts receivable) representam direitos de crédito da empresa sobre clientes. Em vendas B2B a prazo, o estoque sai, a receita é reconhecida e nasce um recebível até a liquidação.\n\nO prazo de recebimento (DSO) afeta o ciclo de conversão de caixa: quanto mais tempo para receber, mais capital a empresa precisa para financiar estoque e operação.\n\nBoas práticas: política de crédito, cobrança disciplinada, conciliação com pedidos e notas, e evitar vender a prazo para cliente de alto risco enquanto o estoque crítico está apertado.",
    example:
      "Um distribuidor vende R$ 20 mil a 21 dias. O estoque baixa na expedição e o caixa só entra três semanas depois. Se o DSO médio sobe para 40 dias e o estoque continua alto, o capital de giro aperta mesmo com “venda boa” no relatório.",
    faq: [
      {
        question: "O que são contas a receber?",
        answer:
          "Valores a receber de clientes por vendas já realizadas a prazo. Ficam no ativo circulante até o pagamento.",
      },
      {
        question: "Como contas a receber afetam o estoque?",
        answer:
          "Indiretamente via caixa: se o recebimento atrasa, sobra menos recurso para repor estoque e pagar fornecedores no prazo.",
      },
      {
        question: "O que é DSO?",
        answer:
          "Days Sales Outstanding: dias médios para receber dos clientes. É um dos componentes do ciclo de conversão de caixa.",
      },
    ],
    relatedTerms: ["contas-a-pagar", "capital-de-giro", "ativos-circulantes"],
    relatedFeatures: ["purchase-sales"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "b2b",
    term: "B2B",
    category: "management",
    shortDefinition:
      "B2B (Business-to-Business) é a venda ou relação comercial entre empresas, não para o consumidor final. No estoque, implica pedidos maiores, contratos, MOQ, prazos e integração entre cadeia de suprimentos.",
    definition:
      "B2B significa business-to-business: empresas vendendo para empresas. Exemplos: distribuidor para loja, indústria para atacado, software SaaS para outra empresa.\n\nComparado ao B2C, o B2B costuma ter:\n- Ticket médio e lotes maiores\n- Ciclo de compra mais longo e mais decisores\n- Negociação de preço, prazo e MOQ\n- Necessidade de rastreabilidade e nota fiscal correta\n- Estoque planejado por contrato ou previsão compartilhada\n\nPara quem controla inventário em B2B, o foco é atender SLA de entrega, evitar ruptura em itens críticos do cliente e não imobilizar capital em excesso. Ferramentas de estoque com histórico, reservas e relatórios de giro ajudam a operar com previsibilidade.",
    example:
      "Um atacadista B2B de embalagens atende 120 padarias. Os 30 clientes maiores concentram 70% do volume. Com visão de giro e ruptura por cliente/SKU, o atacado prioriza reposição dos itens críticos desses contratos e reduz falta nas rotas semanais.",
    faq: [
      {
        question: "O que significa B2B?",
        answer:
          "Business-to-Business: relação comercial entre empresas. Diferente de B2C (empresa para consumidor final).",
      },
      {
        question: "Como o estoque muda em operação B2B?",
        answer:
          "Pedidos maiores, menos impulsivos, mais planejados. MOQ, lead time e nível de serviço contratado pesam mais do que vitrine de varejo.",
      },
      {
        question: "B2B precisa de sistema de estoque?",
        answer:
          "Sim, quando o volume de SKUs, pedidos e prazos cresce. Sem saldo confiável, o B2B quebra SLA e perde contrato — o custo é maior que uma venda unitária perdida no varejo.",
      },
    ],
    relatedTerms: ["cadeia-de-suprimentos", "logistica"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura", "atacado"],
  },
  {
    slug: "sistema-de-codigo-de-barras",
    term: "Sistema de Código de Barras",
    category: "technology",
    shortDefinition:
      "Sistema de código de barras identifica itens por leitura óptica (EAN, Code 128 etc.), acelerando entrada, saída e inventário e reduzindo erro de digitação no controle de estoque.",
    definition:
      "Um sistema de código de barras combina simbologia (tipo de código), etiquetas, leitores e software de estoque para reconhecer um item sem digitar o código manualmente.\n\nFormatos comuns no Brasil: EAN-13 (varejo), Code 128 (logística e interno), QR Code (pode carregar URL, serial ou dados ricos).\n\nBenefícios: menos erro, inventário mais rápido, rastreio de movimentação e padronização do cadastro. Requisitos: SKU bem cadastrado, etiqueta legível, processo de leitura no ato da movimentação e disciplina para não “contornar” o sistema.\n\nFerramentas gratuitas de geração de código ajudam no começo; o ganho real aparece quando a leitura está ligada ao saldo em tempo real.",
    example:
      "Um almoxarifado que digitava SKU na saída tinha 6% de erro de item. Com etiqueta Code 128 e leitura no celular, o erro caiu para menos de 1% e o inventário cíclico de 200 itens passou a fechar no mesmo turno.",
    faq: [
      {
        question: "Preciso de leitor dedicado ou o celular basta?",
        answer:
          "Muitas PMEs começam com câmera do celular e app de estoque. Em alto volume, leitor dedicado costuma ser mais rápido e ergonômico.",
      },
      {
        question: "Código de barras e QR Code são iguais?",
        answer:
          "Não. Código de barras linear é clássico para SKU/EAN; QR Code armazena mais dados e é comum em ativos e links. Ambos servem para identificação.",
      },
      {
        question: "O que mais importa além de gerar a etiqueta?",
        answer:
          "Padronizar o cadastro, colar a etiqueta no item/endereço e registrar a movimentação na leitura — etiqueta sem processo não melhora o saldo.",
      },
    ],
    relatedTerms: ["sku", "wms", "gestao-de-estoque"],
    relatedFeatures: ["barcoding", "inventory-control"],
    relatedIndustries: ["varejo", "logistica"],
  },
  {
    slug: "lista-de-materiais",
    term: "Lista de Materiais (BOM)",
    category: "management",
    shortDefinition:
      "Lista de materiais (BOM — Bill of Materials) é a receita do produto: quais componentes, quantidades e estruturas formam um item acabado. É base do planejamento de produção e do consumo de estoque.",
    definition:
      "A lista de materiais (BOM) descreve a estrutura de um produto: matérias-primas, componentes, subconjuntos e quantidades necessárias para produzir uma unidade (ou lote).\n\nTipos comuns: BOM de engenharia (projeto), BOM de manufatura (chão de fábrica) e BOM multinível (produto com submontagens).\n\nSem BOM confiável, a empresa compra errado, estoura custo e não sabe quanto cada ordem deveria consumir. Com BOM no sistema, a ordem de produção pode reservar e baixar componentes automaticamente, melhorando acurácia e custo do produto.\n\nManter versão da BOM é crítico: troca de componente sem atualizar a lista gera divergência entre estoque teórico e físico.",
    example:
      "Para montar 1 luminária, a BOM pede 1 base, 2 parafusos especiais, 1 driver e 1 cúpula. Ao liberar ordem de 50 luminárias, o sistema reserva 50 bases, 100 parafusos, 50 drivers e 50 cúpulas. Se faltar driver, a ruptura aparece antes de começar a montagem.",
    faq: [
      {
        question: "BOM e receita de produção são a mesma coisa?",
        answer:
          "Na prática, sim: a BOM é a lista estruturada do que entra no produto. Pode incluir também rendimento e perdas previstas.",
      },
      {
        question: "Toda PME industrial precisa de BOM no sistema?",
        answer:
          "Se monta, transforma ou kita produtos com mais de um componente, sim. Controlar só o acabado sem a lista gera compra e custo cegos.",
      },
      {
        question: "Como a BOM afeta o estoque?",
        answer:
          "Define o consumo esperado de componentes por ordem. Erro na BOM vira excesso de um item e falta de outro, mesmo com “boa gestão” de prateleira.",
      },
    ],
    relatedTerms: ["gestao-de-estoque", "cadeia-de-suprimentos"],
    relatedFeatures: ["inventory-control", "factory-management"],
    relatedIndustries: ["manufatura"],
  },
  {
    slug: "efeito-chicote",
    term: "Efeito Chicote",
    category: "logistics",
    shortDefinition:
      "Efeito chicote (bullwhip) é a amplificação da variação de demanda ao longo da cadeia: pequenas oscilações no varejo viram grandes picos e vales no atacado e na indústria, gerando excesso e ruptura alternados.",
    definition:
      "O efeito chicote descreve como a variabilidade dos pedidos aumenta à medida que se afasta do consumidor final. O varejo reage a uma oscilação; o distribuidor interpreta como tendência e amplia o pedido; a indústria reage ainda mais.\n\nCausas clássicas: lotes grandes, promoções, lead time longo, falta de visibilidade da demanda real, jogos de pedido (over-ordering por medo de falta).\n\nConsequências: excesso, ruptura, custo logístico e planejamento caótico. Mitigações: compartilhar demanda (CPFR/VMI), reduzir lead time, lotes menores, evitar promoções sem planejamento de estoque e usar dados de saída real — não só pedidos a montante.",
    example:
      "Uma promoção de fim de semana eleva 15% as vendas na loja. O comprador do hub pede +40% “por segurança”. A indústria produz +70%. Na semana seguinte a demanda normaliza e a cadeia fica com excesso por meses — o chicote em ação.",
    faq: [
      {
        question: "O que causa o efeito chicote?",
        answer:
          "Falta de visibilidade da demanda real, lead times longos, lotes grandes, promoções e pedidos inflados por medo de ruptura.",
      },
      {
        question: "Como reduzir o bullwhip?",
        answer:
          "Compartilhe dados de venda, encurte lead time, trabalhe lotes menores, alinhe promoções com estoque e evite over-ordering sistemático.",
      },
      {
        question: "VMI ajuda no efeito chicote?",
        answer:
          "Pode ajudar, porque o fornecedor vê estoque e saída do cliente e repõe com base em dados reais, reduzindo a distorção dos pedidos.",
      },
    ],
    relatedTerms: ["cadeia-de-suprimentos", "lead-time", "logistica"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["manufatura", "varejo"],
  },
  {
    slug: "ciclo-de-conversao-de-caixa",
    term: "Ciclo de Conversão de Caixa (CCC)",
    category: "finance",
    shortDefinition:
      "Ciclo de conversão de caixa (CCC) mede quantos dias o capital fica preso entre pagar fornecedores, girar estoque e receber dos clientes. CCC menor significa menos pressão de capital de giro.",
    definition:
      "O ciclo de conversão de caixa (Cash Conversion Cycle — CCC) é um indicador financeiro que mostra o tempo, em dias, entre o desembolso para fornecedores e o recebimento das vendas. Ele combina três componentes: dias de estoque (DIO), dias de recebimento (DSO) e dias de pagamento (DPO).\n\nCCC = DIO + DSO − DPO.\n\nInterpretação:\n- CCC alto: muito capital parado em estoque e/ou demora para receber\n- CCC baixo ou negativo: a empresa financia a operação com prazo de fornecedor e gira estoque rápido\n\nEstoque impacta diretamente o CCC via DIO. Excesso de inventário alonga o ciclo; giro alto e acurácia melhoram o caixa sem necessariamente cortar vendas. Por isso gestão de estoque e financeiro precisam falar a mesma língua de indicadores.",
    example:
      "Uma loja tem DIO = 45 dias, DSO = 20 dias e DPO = 30 dias. CCC = 45 + 20 − 30 = 35 dias. Isso significa que, em média, o negócio financia 35 dias de operação com capital próprio. Reduzindo cobertura de itens lentos (DIO para 35) e mantendo prazos, o CCC cai para 25 dias — liberando capital de giro sem mexer no preço de venda.",
    formula: "CCC = DIO + DSO - DPO",
    formulaExplanation:
      "DIO = dias médios de estoque; DSO = dias médios para receber; DPO = dias médios para pagar fornecedores.",
    faq: [
      {
        question: "O que é um bom CCC?",
        answer:
          "Depende do setor. Varejo de giro alto costuma buscar CCC baixo. O importante é a tendência: cair o CCC com crescimento de venda e sem ruptura é sinal de saúde operacional.",
      },
      {
        question: "Como o estoque afeta o CCC?",
        answer:
          "Pelo DIO. Quanto mais dias de cobertura e excesso, maior o CCC. Melhorar giro e reduzir itens parados encurta o ciclo e libera caixa.",
      },
      {
        question: "CCC negativo é bom?",
        answer:
          "Pode ser: significa que você recebe (ou gira) antes de pagar fornecedores. Mas se vier de atraso a fornecedor ou falta crônica de estoque, o “ganho” de caixa esconde risco operacional.",
      },
    ],
    relatedTerms: ["capital-de-giro", "giro-de-estoque", "contas-a-receber"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "ativos-circulantes",
    term: "Ativos Circulantes",
    category: "finance",
    shortDefinition:
      "Ativos circulantes são bens e direitos convertíveis em caixa no curto prazo (em geral até 12 meses): caixa, contas a receber e estoques. O inventário costuma ser um dos maiores ativos circulantes de empresas comerciais e industriais.",
    definition:
      "Ativos circulantes (current assets) compõem a parte do balanço que deve se transformar em dinheiro no ciclo operacional de curto prazo. Incluem disponibilidades, aplicações de liquidez, contas a receber de clientes e estoques de mercadorias/materiais.\n\nPara quem gerencia estoque, o inventário não é “só operação”: é ativo financeiro. Saldo inflado eleva o ativo, mas pode esconder iliquidez se o estoque não gira. Por isso indicadores como giro, cobertura e CCC conectam o almoxarifado ao caixa.\n\nAcurácia de inventário também é contábil: estoque fantasma distorce o ativo e o CMV.",
    example:
      "Uma distribuidora tem R$ 80 mil em caixa, R$ 120 mil a receber e R$ 300 mil em estoque. Ativos circulantes = R$ 500 mil. Se R$ 90 mil do estoque estiver parado há 1 ano, o balanço “bonito” esconde risco: aquele ativo não vira caixa no curto prazo.",
    faq: [
      {
        question: "Estoque é ativo circulante?",
        answer:
          "Sim, em geral o estoque de mercadorias e materiais é classificado no ativo circulante, salvo situações específicas de longo prazo definidas pela contabilidade.",
      },
      {
        question: "Por que a gestão de estoque importa para o balanço?",
        answer:
          "Porque inventário é valor relevante no ativo e alimenta o CMV. Erro de contagem e valoração distorce lucro e indicadores de liquidez.",
      },
      {
        question: "Como melhorar a qualidade do ativo estoque?",
        answer:
          "Aumente acurácia, reduza excesso e itens sem giro, valorize corretamente (ex.: custo médio) e alinhe compra à demanda real.",
      },
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
    shortDefinition:
      "Passivos circulantes são obrigações de curto prazo: fornecedores, empréstimos de curto prazo, impostos e salários a pagar. O prazo de pagamento a fornecedores (ligado a compras de estoque) é peça-chave do capital de giro.",
    definition:
      "Passivos circulantes (current liabilities) são dívidas e obrigações com vencimento no curto prazo, tipicamente até um ano. Incluem contas a pagar a fornecedores, adiantamentos, parcelas de empréstimos, encargos e provisões de curto prazo.\n\nNa gestão de estoque, o passivo mais visível é o fornecedor: comprar mais aumenta estoque (ativo) e, se a prazo, contas a pagar (passivo). Negociar DPO (dias de pagamento) sem estourar relacionamento e sem gerar excesso de compra é parte da estratégia de CCC e capital de giro.\n\nDescasamento perigoso: estoque que não gira + fornecedor a pagar no curto prazo = aperto de caixa.",
    example:
      "A empresa compra R$ 50 mil de mercadoria a 28 dias. No ato, sobe estoque e contas a pagar. Se vender e receber em 45 dias, financia parte do ciclo com o fornecedor — mas se o item não vender, o passivo vence com o ativo ainda parado na prateleira.",
    faq: [
      {
        question: "O que entra em passivos circulantes?",
        answer:
          "Obrigações de curto prazo: fornecedores, empréstimos de curto prazo, impostos, salários e outras contas a pagar no ciclo operacional.",
      },
      {
        question: "Como compras de estoque afetam o passivo?",
        answer:
          "Compras a prazo aumentam contas a pagar. Compras à vista reduzem caixa. Em ambos os casos o estoque sobe no ativo até a venda.",
      },
      {
        question: "Passivo alto com estoque alto é problema?",
        answer:
          "Pode ser se o estoque não converte em venda a tempo. Monitore CCC, giro e prazos para não financiar inventário morto com dívida de curto prazo.",
      },
    ],
    relatedTerms: ["ativos-circulantes", "contas-a-pagar", "capital-de-giro"],
    relatedFeatures: [],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "custo-das-mercadorias-vendidas",
    term: "Custo das Mercadorias Vendidas (CMV)",
    category: "finance",
    shortDefinition:
      "CMV (Custo das Mercadorias Vendidas) é o custo contábil dos produtos vendidos no período. Alimenta margem bruta e o cálculo de giro de estoque.",
    definition:
      "O Custo das Mercadorias Vendidas (CMV ou COGS) representa o custo atribuído às unidades efetivamente vendidas no período, não às compradas.\n\nFórmula básica: CMV = estoque inicial + compras − estoque final.\n\nO método de valoração (custo médio, PEPS etc.) define como o custo unitário é atribuído. Erros de inventário físico distorcem estoque final e, portanto, o CMV e o lucro bruto.\n\nOperacionalmente, cada saída deveria carregar o custo correto do item. Sistemas de estoque e financeiro precisam estar alinhados para o CMV não ser “ajustado no escuro” no fechamento do mês.",
    example:
      "Estoque inicial R$ 100 mil, compras R$ 250 mil, estoque final R$ 120 mil. CMV = 100 + 250 − 120 = R$ 230 mil. Se a receita da mercadoria foi R$ 400 mil, a margem bruta aproximada é R$ 170 mil antes de outras despesas.",
    formula: "CMV = Estoque Inicial + Compras - Estoque Final",
    formulaExplanation:
      "Estoque Inicial e Final em valor; Compras = aquisições do período destinadas à revenda/produção.",
    faq: [
      {
        question: "CMV e despesa operacional são a mesma coisa?",
        answer:
          "Não. CMV está ligado ao custo do produto vendido. Despesas operacionais (aluguel, marketing, salários administrativos) ficam abaixo da margem bruta.",
      },
      {
        question: "Por que inventário errado afeta o CMV?",
        answer:
          "Porque o estoque final entra na fórmula. Se o final estiver superavaliado, o CMV cai e o lucro parece maior do que é.",
      },
      {
        question: "Como o giro usa o CMV?",
        answer:
          "Giro = CMV / estoque médio. Por isso valoração e acurácia de inventário importam para o indicador de rotatividade.",
      },
    ],
    relatedTerms: ["giro-de-estoque", "inflacao", "gestao-de-estoque"],
    relatedFeatures: ["analytics-reporting"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "ciclo-de-tempo",
    term: "Tempo de Espera (Lead Time)",
    category: "logistics",
    shortDefinition:
      "Ciclo de tempo (ou tempo de ciclo) é o intervalo total para completar um processo — da solicitação à conclusão. Em suprimentos, aproxima-se do lead time de reposição; na produção, do tempo de atravessar a linha.",
    definition:
      "Ciclo de tempo mede quanto tempo um fluxo leva do início ao fim. Em logística de compras, muitos usam o termo de forma próxima a lead time: pedido → entrega → disponível no estoque.\n\nNa manufatura, o tempo de ciclo pode ser o tempo entre duas unidades concluídas ou o lead time de fabricação de um lote. O importante é definir o ponto de início e fim medidos pela operação.\n\nReduzir ciclo de tempo libera capital, encurta resposta ao cliente e diminui a necessidade de estoque de segurança. Medir só o “prazo prometido” do fornecedor sem incluir recebimento e liberação interna subestima o ciclo real.\n\nNo glossário Purple Stock, o termo detalhado de reposição de compras é lead time; ciclo de tempo cobre a ideia mais ampla de duração de processos.",
    example:
      "O “prazo do fornecedor” era 5 dias, mas aprovação interna (1 dia) + conferência (1 dia) elevavam o ciclo total a 7 dias. Ao medir o ciclo completo, o ponto de reposição foi ajustado e as rupturas por “atraso surpresa” caíram.",
    faq: [
      {
        question: "Ciclo de tempo e lead time são iguais?",
        answer:
          "Muitas vezes se sobrepõem na prática de compras. Lead time costuma focar reposição; ciclo de tempo pode descrever qualquer processo (produção, atendimento, picking).",
      },
      {
        question: "Como medir o ciclo de tempo de compras?",
        answer:
          "Marque data/hora do pedido (ou da necessidade) e da disponibilidade no endereço. Use mediana e variação, não só o melhor caso.",
      },
      {
        question: "Por que reduzir o ciclo de tempo?",
        answer:
          "Menos espera = menos estoque de proteção, resposta mais rápida e menos efeito chicote na cadeia.",
      },
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
    shortDefinition:
      "Dropshipping é o modelo em que a loja vende o produto sem manter estoque próprio: o fornecedor envia direto ao cliente. Reduz capital parado, mas exige controle de prazo, qualidade e ruptura do parceiro.",
    definition:
      "No dropshipping, o varejista (geralmente e-commerce) não compra o item para o próprio armazém antes da venda. Após o pedido do cliente, o fornecedor ou 3PL despacha a mercadoria.\n\nVantagens: baixo capital de estoque, catálogo amplo, setup mais leve. Riscos: menos controle de prazo e qualidade, margem pressionada, ruptura “invisível” no site e dificuldade de branding na embalagem.\n\nMesmo sem estoque próprio, a operação precisa de gestão: status de pedido, SLAs, produtos críticos que valem estocar, e política clara de atraso/cancelamento. Muitas PMEs usam modelo híbrido — dropshipping no long tail e estoque próprio nos top sellers.",
    example:
      "Uma loja online de utilidades mantém estoque próprio dos 50 itens que mais vendem e usa dropshipping para 800 SKUs de cauda longa. Assim preserva prazo nos bestsellers e não imobiliza capital no restante do catálogo.",
    faq: [
      {
        question: "Dropshipping elimina a necessidade de gestão de estoque?",
        answer:
          "Elimina o inventário físico próprio na maioria dos itens, mas não elimina gestão de pedido, fornecedor e nível de serviço. A ruptura passa a ser do parceiro — e o cliente cobra de você.",
      },
      {
        question: "Quando não usar dropshipping?",
        answer:
          "Em itens de alto giro com margem apertada de prazo, produtos que exigem controle de qualidade rígido ou quando o fornecedor é instável.",
      },
      {
        question: "Dropshipping e 3PL são iguais?",
        answer:
          "Não. No 3PL você em geral é dono do estoque armazenado no operador. No dropshipping clássico o estoque é do fornecedor até a venda.",
      },
    ],
    relatedTerms: ["logistica", "cadeia-de-suprimentos", "gestao-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["varejo", "commerce"],
  },
  {
    slug: "sku",
    term: "SKU (Stock Keeping Unit)",
    category: "inventory",
    shortDefinition:
      "SKU (Stock Keeping Unit) é o código que identifica de forma única cada variação de produto no estoque — por exemplo, cor, tamanho ou embalagem. Sem SKU padronizado, inventário e vendas viram confusão.",
    definition:
      "SKU (Stock Keeping Unit) é a unidade de manutenção de estoque: um identificador interno que representa uma variação específica de item que precisa ser contada, comprada e vendida separadamente.\n\nExemplo: “Camiseta Preta P”, “Camiseta Preta M” e “Camiseta Branca P” são três SKUs, não um único “camiseta”.\n\nUm bom cadastro de SKU define:\n- Código estável e único\n- Descrição clara\n- Unidade de medida\n- Categoria e localização\n- Vínculo com código de barras/QR quando houver\n\nSKU não é obrigatoriamente o mesmo que EAN de prateleira, mas devem se mapear. Sistemas de estoque operam por SKU: saldo, giro, ruptura e inventário só fazem sentido no nível da variação correta.",
    example:
      "Uma loja cadastrou “Tênis Runner” como um único item e misturou numeração. O saldo dizia 40, mas não havia o tamanho 42. Ao separar SKU por numeração e cor, a ruptura do 42 ficou visível e a compra passou a repor o que realmente faltava.",
    faq: [
      {
        question: "SKU e código de barras são a mesma coisa?",
        answer:
          "Não necessariamente. SKU é o identificador interno do estoque; o código de barras (EAN/Code 128) é o código legível por leitor. O ideal é relacionar um ao outro no cadastro.",
      },
      {
        question: "Como criar um padrão de SKU?",
        answer:
          "Use regras estáveis (categoria + atributos), evite reutilizar códigos, documente e treine o time. Não mude o código de item ativo sem migração controlada.",
      },
      {
        question: "Por que SKU demais é um problema?",
        answer:
          "Cada variação multiplica inventário e complexidade. Crie SKU só quando a operação precisa controlar saldo separado (cor, tamanho, lote crítico).",
      },
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
    shortDefinition:
      "Estoque de segurança é o colchão de inventário que protege a operação contra variação de demanda e atraso de fornecedor. Bem calibrado evita ruptura sem gerar excesso crônico.",
    definition:
      "Estoque de segurança (safety stock) é a quantidade extra mantida além da demanda média durante o lead time, para absorver incertezas.\n\nSe a demanda e o lead time fossem perfeitos, bastaria repor exatamente o consumo. Na prática, há atraso, pico de venda e erro de previsão — o safety stock é o seguro.\n\nDimensionamento depende de: variabilidade da demanda, confiabilidade do fornecedor, nível de serviço desejado e criticidade do SKU. Itens A e de alta margem de erro merecem mais proteção; itens C de baixo risco podem ter safety stock mínimo.\n\nSafety stock alto demais vira excesso disfarçado. Revise periodicamente com dados reais.",
    example:
      "Demanda média 10 un/dia, lead time 7 dias → consumo no lead time = 70. Com picos de até 14 un/dia, a empresa define safety stock de 30. Ponto de reposição = 70 + 30 = 100. Quando o saldo chega a 100, dispara a compra.",
    formula:
      "Estoque de Segurança ≈ (Demanda Máxima - Demanda Média) × Lead Time",
    formulaExplanation:
      "Fórmula simplificada de ensino; em operações maduras usa-se desvio-padrão da demanda e do lead time com fator de nível de serviço.",
    faq: [
      {
        question: "Estoque de segurança e ponto de reposição são iguais?",
        answer:
          "Não. Safety stock é o colchão. Ponto de reposição = demanda no lead time + safety stock (na formulação clássica).",
      },
      {
        question: "Como não transformar safety stock em excesso?",
        answer:
          "Calcule por SKU, use dados reais, separe itens críticos e revise a cada mudança de demanda ou fornecedor.",
      },
      {
        question: "Posso ter safety stock zero?",
        answer:
          "Sim em itens baratos de reposição imediata ou sob encomenda. Em itens críticos de lead time longo, zero costuma ser temerário.",
      },
    ],
    relatedTerms: ["sku", "ponto-de-reposicao", "ruptura-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "giro-de-estoque",
    term: "Índice de Rotatividade de Estoque (Giro de Estoque)",
    category: "inventory",
    shortDefinition:
      "Giro de estoque mede quantas vezes o inventário foi renovado no período. Giro alto indica boa rotatividade; giro baixo sugere excesso, mix errado ou demanda fraca.",
    definition:
      "O índice de rotatividade (giro de estoque) indica quantas vezes, em média, o estoque foi “vendido e reposto” em um período. A fórmula clássica é CMV ÷ estoque médio.\n\nInterpretação prática:\n- Giro alto: capital circula rápido, menos risco de obsolescência (desde que não gere ruptura)\n- Giro baixo: dinheiro parado, espaço ocupado, maior risco de perda e liquidação\n\nO giro deve ser lido por categoria e por SKU, não só no total da empresa. Itens curva A devem girar mais; itens estratégicos de segurança podem girar menos de propósito.\n\nCobertura em dias (dias de estoque) é o complemento do giro: quanto maior o giro, menor a cobertura, em geral. Use os dois para decidir compra e promoção.",
    example:
      "CMV anual = R$ 1.200.000 e estoque médio = R$ 200.000. Giro = 1.200.000 / 200.000 = 6. Ou seja, o estoque renova cerca de 6 vezes ao ano (cobertura média de ~60 dias). Se a meta do segmento for 10 giros/ano, há espaço para reduzir cobertura de itens lentos ou acelerar vendas sem cortar o essencial.",
    formula: "Giro de Estoque = CMV / Estoque Médio",
    formulaExplanation:
      "CMV = Custo das Mercadorias Vendidas no período; Estoque Médio = (Estoque Inicial + Estoque Final) / 2.",
    faq: [
      {
        question: "Qual giro de estoque é ideal?",
        answer:
          "Varia por setor. O ideal é comparar com o próprio histórico e com pares do segmento, separando curva A/B/C. Subir giro sem aumentar ruptura é o objetivo.",
      },
      {
        question: "Giro alto sempre é positivo?",
        answer:
          "Quase sempre, mas se o giro sobe porque você opera no osso e quebra venda, o custo da ruptura pode superar o ganho de capital. Equilibre com nível de serviço.",
      },
      {
        question: "Como aumentar o giro?",
        answer:
          "Reduza excesso (promoção, devolução, corte de compra), melhore previsão e ponto de reposição, elimine SKUs mortos e acelere saída dos itens lentos sem desproteger os críticos.",
      },
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
    shortDefinition:
      "Excesso de estoque é manter quantidade acima do necessário para atender a demanda com o nível de serviço desejado. Gera capital parado, custo de armazenagem e risco de obsolescência ou validade vencida.",
    definition:
      "Excesso de estoque ocorre quando o saldo disponível supera a necessidade operacional e financeira da empresa — seja por compra acima do EOQ/MOQ sem planejamento, previsão otimista, cancelamento de demanda ou “estoque de segurança” superdimensionado.\n\nCustos ocultos do excesso:\n- Capital de giro imobilizado\n- Espaço, seguro e manuseio\n- Risco de avaria, furto e obsolescência\n- Descontos forçados para liquidar\n\nDetecte excesso por cobertura em dias, giro baixo, idade de estoque e curva ABC. A correção combina frear reposição, promover saída, renegociar devolução e revisar parâmetros (ponto de reposição, MOQ, previsão).\n\nO oposto da ruptura não é “encher o galpão”: é equilibrar nível de serviço com capital. Sistemas de estoque ajudam ao mostrar itens sem movimento e cobertura acima da meta.",
    example:
      "Um atacado comprou 8 meses de um SKU por “preço bom”. Em 4 meses o item vendeu só 30% do lote. A empresa congelou novas compras, fez kit promocional e renegociou parte com o fornecedor. Em paralelo, revisou MOQ e previsão para não repetir o erro em itens parecidos.",
    faq: [
      {
        question: "Como saber se tenho excesso de estoque?",
        answer:
          "Olhe cobertura em dias versus lead time + demanda, giro por SKU, % de itens sem movimento e valor parado. Se a cobertura é muito maior que o necessário e o giro cai, há excesso.",
      },
      {
        question: "Excesso é pior que ruptura?",
        answer:
          "São problemas diferentes. Ruptura perde venda imediata; excesso sangra caixa e margem no tempo. O ideal é gerir ambos com parâmetros por criticidade do item.",
      },
      {
        question: "O que fazer com estoque parado?",
        answer:
          "Classifique (vender, devolver, usar em kit, sucatear), pare a reposição automática, ajuste forecast e aprenda com o erro de compra para o próximo ciclo.",
      },
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
    shortDefinition:
      "Financiamento de estoque é o uso de capital (próprio ou de terceiros) para manter inventário até a venda. Inclui custo de oportunidade, juros, armazenagem e risco de obsolescência.",
    definition:
      "Todo estoque é financiado por alguém: caixa da empresa, fornecedor (prazo), banco ou investidor. O custo de financiar inventário não aparece só na taxa de juros — inclui capital parado, seguro, espaço e perda de valor do item.\n\nFormas comuns:\n- Capital próprio (custo de oportunidade)\n- Prazo de fornecedor (financia via contas a pagar)\n- Linhas de crédito / capital de giro\n- Financiamento atrelado a recebíveis ou a carteira\n\nA melhor “fonte” de financiamento de estoque costuma ser operacional: girar mais, reduzir excesso e acertar o ponto de reposição. Crédito barato não compensa inventário morto.",
    example:
      "Uma empresa mantém R$ 500 mil em estoque com custo de capital de 1,5% ao mês. Só o custo financeiro implícito é ~R$ 7,5 mil/mês. Ao cortar R$ 100 mil de itens sem giro, libera capital e reduz esse custo sem precisar de novo empréstimo.",
    faq: [
      {
        question: "Financiar estoque com banco é boa ideia?",
        answer:
          "Pode ser em sazonalidade ou compra estratégica com giro claro. É má ideia financiar excesso crônico ou itens sem demanda comprovada.",
      },
      {
        question: "Como calcular o custo de carregar estoque?",
        answer:
          "Some custo de capital, armazenagem, seguro, obsolescência e manuseio — em geral uma % ao ano sobre o valor médio do inventário (varia por setor).",
      },
      {
        question: "O que reduz a necessidade de financiar estoque?",
        answer:
          "Maior giro, lead time menor, previsão melhor, menos SKUs mortos e prazos de pagamento alinhados ao ciclo de venda.",
      },
    ],
    relatedTerms: ["capital-de-giro", "excesso-de-estoque", "contas-a-pagar"],
    relatedFeatures: [],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "gestao-de-estoque",
    term: "Gestão de Estoque",
    category: "inventory",
    shortDefinition:
      "Gestão de estoque é o conjunto de práticas para planejar, registrar e controlar entradas, saídas e saldos de materiais e produtos — com o objetivo de atender a demanda com o menor custo total possível.",
    definition:
      "Gestão de estoque cobre políticas e operações que decidem o que comprar/produzir, quando, quanto e onde armazenar, além de como registrar cada movimentação.\n\nPilares:\n- Cadastro (SKU, unidade, endereço)\n- Processos de entrada, saída, transferência e inventário\n- Parâmetros (ponto de reposição, safety stock, MOQ)\n- Indicadores (giro, ruptura, acurácia, cobertura)\n- Tecnologia (sistema, código de barras/QR, relatórios)\n\nBoa gestão não é “ter o máximo de estoque” nem “o mínimo a qualquer custo”: é equilibrar nível de serviço, capital e risco operacional. Planilha até um ponto; depois, sistema com trilha de auditoria e inventário confiável vira requisito.",
    example:
      "Uma PME unificou cadastro de SKU, passou a lançar saída no momento da retirada com QR Code e criou rotina semanal de indicadores. Em um trimestre a acurácia subiu, as compras emergenciais caíram e o time parou de manter planilha paralela “porque o sistema não batia”.",
    faq: [
      {
        question: "Qual o objetivo da gestão de estoque?",
        answer:
          "Atender a demanda no prazo com o menor custo total (capital, armazenagem, ruptura e obsolescência), com saldo confiável para decidir.",
      },
      {
        question: "Por onde começar em uma PME?",
        answer:
          "Organize o cadastro de SKUs, registre toda movimentação, faça inventário dos itens críticos e defina ponto de reposição nos 20% que mais giram.",
      },
      {
        question: "Planilha conta como gestão de estoque?",
        answer:
          "Conta como controle inicial. Quando há multi-usuário, alto volume e necessidade de histórico/auditoria, planilha vira gargalo e risco.",
      },
    ],
    relatedTerms: ["sku", "giro-de-estoque", "inventario-fisico"],
    relatedFeatures: ["inventory-control", "analytics-reporting"],
    relatedIndustries: ["varejo", "atacado", "manufatura"],
  },
  {
    slug: "inventario-fisico",
    term: "Inventário Físico (Contagem de Estoque)",
    category: "inventory",
    shortDefinition:
      "Inventário físico é a contagem real dos itens no almoxarifado para comparar com o saldo do sistema. É a base da acurácia de estoque e deve combinar contagem geral com inventário cíclico nos itens de maior giro.",
    definition:
      "Inventário físico (contagem de estoque) é o processo de conferir, no chão, quantas unidades de cada item existem de fato e reconciliar com o saldo registrado no sistema ou planilha.\n\nSem inventário físico, o saldo digital vira “estoque fantasma”: o sistema mostra 20, a prateleira tem 12, e a operação compra ou vende com base em mentira operacional.\n\nModelos comuns:\n- Inventário geral (anual ou semestral): conta tudo, muitas vezes com parada parcial\n- Inventário cíclico (rotativo): conta fatias do cadastro com frequência (ex.: curva A semanal)\n- Contagem cega: o contador não vê o saldo do sistema para reduzir viés\n\nBoas práticas: endereçar o estoque, etiquetar com código de barras/QR Code, contar por zona, reconciliar divergências com causa (erro de saída, furto, quebra) e ajustar o sistema com trilha de auditoria.\n\nA meta não é “contar por obrigação”, e sim manter acurácia alta o ano inteiro para compra, venda e produção confiarem no saldo.",
    example:
      "Uma PME de 800 SKUs fazia inventário só no fim do ano e achava 18% de divergência. Passou a combinar contagem cíclica semanal nos 100 itens de maior giro + inventário geral anual. Em seis meses a acurácia dos itens A subiu de 82% para 97%, o inventário geral ficou mais rápido e as compras emergenciais caíram porque o saldo voltou a ser confiável.",
    faq: [
      {
        question: "Com que frequência fazer inventário físico?",
        answer:
          "PMEs costumam combinar inventário geral anual com contagens cíclicas mensais ou semanais nos itens de maior giro e maior valor. A frequência sobe quando a acurácia cai ou há muita movimentação manual.",
      },
      {
        question: "Preciso parar a operação para inventariar?",
        answer:
          "Não necessariamente. Com contagem por zona e janelas curtas, dá para inventariar sem fechar o dia inteiro. Inventário cíclico reduz a necessidade de parada total.",
      },
      {
        question: "O que fazer com divergência de contagem?",
        answer:
          "Reconte o item, investigue a causa (saída não lançada, endereço errado, quebra), ajuste o saldo com responsável e trilha, e corrija o processo que gerou o erro — não só o número.",
      },
    ],
    relatedTerms: ["gestao-de-estoque", "sku"],
    relatedFeatures: ["inventory-control", "barcoding"],
    relatedIndustries: ["varejo", "atacado"],
  },
  {
    slug: "just-in-time",
    term: "Just-In-Time (JIT)",
    category: "management",
    shortDefinition:
      "Just-in-Time (JIT) é a filosofia de receber e produzir apenas o necessário, na hora necessária, na quantidade necessária — reduzindo estoque parado, mas exigindo lead time confiável e fornecedores disciplinados.",
    definition:
      "Just-in-Time é uma abordagem de produção e suprimentos que busca eliminar desperdício de inventário: em vez de grandes lotes “por precaução”, o fluxo é puxado pela demanda.\n\nBenefícios: menos capital parado, menos obsolescência, exposição mais rápida de problemas de qualidade e processo. Riscos: sensibilidade a atraso de fornecedor, picos de demanda e falhas logísticas — um elo fraco para a operação.\n\nJIT puro é raro em PME brasileira com fornecedores instáveis. O prático é adotar princípios JIT (lotes menores, kanban, qualidade na origem) com safety stock seletivo nos itens críticos.",
    example:
      "Uma montadora de móveis reduziu o estoque de ferragens de 45 para 12 dias de cobertura ao programar entregas semanais e kanban de dois bins. Quando um fornecedor atrasou, o safety stock mínimo nos itens críticos evitou parada total — JIT “adaptado”, não dogmático.",
    faq: [
      {
        question: "JIT significa estoque zero?",
        answer:
          "Na teoria aspira a estoque mínimo. Na prática, operações reais mantêm buffers seletivos. Estoque zero total é raro e arriscado fora de cadeias muito maduras.",
      },
      {
        question: "JIT e kanban são a mesma coisa?",
        answer:
          "Kanban é uma ferramenta frequentemente usada para operacionalizar o JIT. JIT é a filosofia mais ampla de fluxo puxado e desperdício zero.",
      },
      {
        question: "Quando JIT não é recomendado?",
        answer:
          "Quando lead times são longos e instáveis, demanda é muito errática e não há fornecedor confiável — nesses casos, safety stock e planejamento clássico pesam mais.",
      },
    ],
    relatedTerms: ["lead-time", "kanban", "gestao-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura"],
  },
  {
    slug: "kanban",
    term: "Kanban",
    category: "management",
    shortDefinition:
      "Kanban é um sistema visual de puxar reposição: cartões ou sinais autorizam produzir ou comprar só quando o consumo real acontece. No estoque, evita superprodução e falta com filas e limites claros de inventário.",
    definition:
      "Kanban (do japonês “cartão” ou “sinal”) é um método de controle visual originado no Toyota Production System. A ideia central é puxar o fluxo: só se repõe o que foi consumido, até um limite máximo definido.\n\nNo almoxarifado e na produção, o kanban pode ser:\n- Cartão físico ou digital que autoriza reposição\n- Sistema de dois bins (quando um esvazia, repõe o outro)\n- Sinal no sistema de estoque quando o saldo atinge o ponto de reposição\n\nBenefícios: menos excesso, reposição disciplinada, visibilidade do fluxo e redução de ruptura por esquecimento. Limitações: exige padrão de consumo relativamente estável e disciplina do time; picos brutais precisam de buffer e revisão de cartões.\n\nKanban combina bem com ponto de reposição, estoque de segurança e identificação por QR Code/código de barras no endereço e no item.",
    example:
      "Uma linha de montagem usa dois bins de parafusos. Quando o bin da frente esvazia, o operador troca pelo cheio e o bin vazio vira “pedido” para o almoxarifado. O sistema registra a saída e aciona reposição. Resultado: a linha para menos por falta de consumível e o almoxarifado para de empurrar caixas “por precaução”.",
    faq: [
      {
        question: "Kanban é só para indústria?",
        answer:
          "Não. Varejo e serviços usam kanban de reposição em prateleira, kits e consumíveis. O princípio de puxar pelo consumo vale em qualquer operação com itens repetitivos.",
      },
      {
        question: "Qual a diferença entre kanban e ponto de reposição?",
        answer:
          "Ponto de reposição é o nível numérico que dispara a compra. Kanban é o sistema visual/processual que operacionaliza essa lógica no chão, muitas vezes com cartões ou bins.",
      },
      {
        question: "Como começar um kanban de estoque?",
        answer:
          "Escolha poucos itens de alto consumo, defina tamanho de lote e número de cartões/bins, treine o time e meça ruptura e excesso. Só então escale para mais SKUs.",
      },
    ],
    relatedTerms: ["just-in-time", "gestao-de-estoque", "ponto-de-reposicao"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura"],
  },
  {
    slug: "lead-time",
    term: "Lead Time (Tempo de Espera)",
    category: "logistics",
    shortDefinition:
      "Lead time é o tempo total entre solicitar um item e tê-lo disponível para uso ou venda. Inclui processamento do pedido, produção/fornecedor, transporte e recebimento. É input essencial do ponto de reposição.",
    definition:
      "Lead time (tempo de espera ou tempo de ciclo de reposição) é o intervalo entre a necessidade/pedido e a disponibilidade do material no estoque.\n\nComponentes típicos:\n- Tempo administrativo (emitir pedido, aprovar)\n- Tempo do fornecedor (produzir ou separar)\n- Transporte e alfândega quando houver\n- Recebimento, conferência e disponibilização no endereço\n\nLead time longo ou instável força estoque de segurança maior. Lead time medido de forma otimista demais gera ruptura. Meça o lead time real (mediana e pior caso), por fornecedor e por SKU crítico, e revise quando a operação mudar.\n\nNo cálculo de ponto de reposição: necessidade durante o lead time + estoque de segurança.",
    example:
      "O comprador achava que o fornecedor entregava em 5 dias, mas a mediana real era 9 e o pior caso 14. Ao atualizar o lead time no sistema, o ponto de reposição subiu e as rupturas daquele SKU caíram sem dobrar o estoque de todos os itens.",
    faq: [
      {
        question: "Como calcular lead time de compras?",
        answer:
          "Registre data do pedido e data em que o item ficou disponível no estoque. Use a mediana e observe a variação. Não use só a promessa comercial do fornecedor.",
      },
      {
        question: "Lead time e prazo de entrega são iguais?",
        answer:
          "Prazo de entrega costuma ser só o transporte ou a promessa do fornecedor. Lead time operacional inclui aprovação, produção, frete e recebimento interno.",
      },
      {
        question: "Como reduzir lead time?",
        answer:
          "Padronize pedidos, negocie estoque do fornecedor, use fornecedores locais para críticos, melhore conferência na entrada e elimine filas de aprovação desnecessárias.",
      },
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
    shortDefinition:
      "Logística é o conjunto de processos que planejam e executam o fluxo de materiais, informações e pedidos — da origem ao cliente. Inclui armazenagem, transporte, estoques e processamento de pedidos.",
    definition:
      "Logística conecta suprimentos, armazém e distribuição para o produto certo chegar no lugar certo, na hora certa e ao custo adequado.\n\nComponentes típicos:\n- Gestão de estoques e armazenagem\n- Transporte e roteirização\n- Processamento de pedidos (picking, packing, expedição)\n- Informação e rastreabilidade\n- Logística reversa (devoluções)\n\nPara PMEs, logística eficiente não exige megacentro: exige processo claro, saldo confiável, prazos realistas e indicadores (on-time, custo por pedido, ruptura). Sistemas de estoque e, quando necessário, 3PL ou WMS, sustentam a operação.",
    example:
      "Uma marca D2C reduziu atraso de entrega não comprando mais frete caro, e sim melhorando a acurácia do estoque e o cutoff de picking. Pedidos “sumidos” caíram e o prazo médio melhorou sem mudar a transportadora.",
    faq: [
      {
        question: "Logística e supply chain são a mesma coisa?",
        answer:
          "Supply chain (cadeia de suprimentos) é o conceito mais amplo, do fornecedor do fornecedor ao cliente. Logística é o braço de fluxo físico e de pedidos dentro dessa cadeia.",
      },
      {
        question: "O que a logística tem a ver com estoque?",
        answer:
          "Estoque é um dos amortecedores da logística. Mal dimensionado, gera ruptura ou excesso; bem gerido, estabiliza prazo e custo.",
      },
      {
        question: "Quando terceirizar logística?",
        answer:
          "Quando volume, sazonalidade ou geografia tornam 3PL mais barato/ágil do que operar armazém próprio — com SLAs e integração de saldo claros.",
      },
    ],
    relatedTerms: ["cadeia-de-suprimentos", "3pl", "wms"],
    relatedFeatures: ["warehouse-control"],
    relatedIndustries: ["logistica"],
  },
  {
    slug: "picking",
    term: "Picking (Separação de Pedidos)",
    category: "logistics",
    shortDefinition:
      "Picking é a separação de itens do estoque para atender um pedido ou ordem de produção. É uma das atividades mais caras do armazém e depende de endereço, identificação e saldo correto.",
    definition:
      "Picking (separação de pedidos) é o processo de localizar, retirar e conferir itens no armazém para montar um pedido de venda, transferência ou kit de produção.\n\nTipos comuns: picking por pedido, por onda, por zona e batch picking. A escolha depende do volume, do layout e do SLA.\n\nErros de picking geram devolução, reentrega, insatisfação e distorção de estoque. Reduza erro com endereço fixo, código de barras/QR, lista de separação clara, conferência e sistema que baixa o saldo no ato.\n\nProdutividade de picking melhora com slotting (itens de alto giro em posições fáceis) e com layout 5S no corredor.",
    example:
      "Um e-commerce com 15% de erro de separação implantou leitura de código no item e no endereço + conferência na embalagem. O erro caiu para menos de 2% e o tempo médio por pedido diminuiu porque o separador parou de “caçar” itens no corredor errado.",
    faq: [
      {
        question: "O que é picking no estoque?",
        answer:
          "É a separação física dos produtos para montar pedidos ou ordens. É o coração operacional de armazéns e e-commerces.",
      },
      {
        question: "Como reduzir erro de picking?",
        answer:
          "Endereçamento, identificação por código, listas claras, leitura no ato da retirada e conferência final. Saldo errado no sistema também causa “erro” de item não encontrado.",
      },
      {
        question: "Picking e packing são a mesma coisa?",
        answer:
          "Não. Picking separa os itens; packing embala e prepara para envio. São etapas sequenciais da expedição.",
      },
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
    shortDefinition:
      "Logística reversa cuida do fluxo de volta: devoluções, trocas, recalls e descarte correto. Impacta estoque, custo e experiência do cliente quando o item reingressa ou é baixado.",
    definition:
      "Logística reversa é o processo de planejar e operar o retorno de produtos e materiais do ponto de consumo para a empresa (ou para reciclagem/descarte).\n\nMotivos comuns: arrependimento de compra, defeito, avaria no transporte, recall, embalagens retornáveis, resíduos regulados.\n\nNo estoque, a devolução precisa de fluxo claro: inspeção (revenda, recondicionamento ou perda), reentrada com motivo, e ajuste de saldo. Sem isso, o item volta fisicamente e o sistema continua “vendido”, ou o contrário.\n\nMétricas úteis: taxa de devolução, tempo de reentrada, % recuperável e custo reverso por pedido.",
    example:
      "Um e-commerce com 8% de devolução criou triagem em 24h: item lacrado volta para saldo vendável; item aberto vai para outlet; defeituoso gera baixa e aciona fornecedor. O saldo parou de “sumir” e o prazo de reembolso melhorou.",
    faq: [
      {
        question: "Logística reversa é só e-commerce?",
        answer:
          "Não. Indústria e varejo físico também lidam com devolução a fornecedor, vasilhames, pallets e recalls.",
      },
      {
        question: "Como a reversa afeta o inventário?",
        answer:
          "Todo retorno deve gerar movimentação de entrada (ou perda) com motivo. Sem lançamento, a acurácia despenca.",
      },
      {
        question: "Dá para reduzir devolução?",
        answer:
          "Sim: melhor descrição do produto, qualidade na expedição, embalagem adequada e conferência de picking. A reversa bem feita trata o que sobra.",
      },
    ],
    relatedTerms: ["logistica", "cadeia-de-suprimentos"],
    relatedFeatures: ["warehouse-control"],
    relatedIndustries: ["varejo", "logistica"],
  },
  {
    slug: "wms",
    term: "WMS (Warehouse Management System)",
    category: "technology",
    shortDefinition:
      "WMS (Warehouse Management System) é o software de gestão de armazém: endereços, recebimento, picking, inventário e expedição. É mais profundo no chão do que um ERP genérico.",
    definition:
      "O WMS controla a operação física do armazém com granularidade de endereço (corredor, prateleira, bin), tarefas e status de pedido.\n\nFunções típicas:\n- Recebimento e put-away\n- Endereçamento e slotting\n- Picking (ondas, zonas, batch)\n- Inventário cíclico\n- Expedição e conferência\n- Integração com ERP e transportadoras\n\nPME em crescimento muitas vezes começa com sistema de estoque/almoxarifado mais leve e evolui para WMS quando volume, multiendereço e produtividade de picking exigem. O erro comum é comprar WMS complexo antes de ter processo e cadastro maduros.",
    example:
      "Um CD com 3.000 SKUs e 400 pedidos/dia sofria com item “não encontrado”. Com WMS e endereço único por posição + picking por leitura, a produtividade subiu e a divergência de inventário caiu porque cada retirada atualizava o bin correto.",
    faq: [
      {
        question: "WMS e ERP são a mesma coisa?",
        answer:
          "Não. ERP integra a empresa (financeiro, pedidos, estoque contábil). WMS especializa a execução no armazém. Podem (e costumam) se integrar.",
      },
      {
        question: "Toda PME precisa de WMS?",
        answer:
          "Não. Operações menores podem ir bem com sistema de estoque e endereçamento simples. WMS justifica-se com volume, multiendereço e necessidade de otimizar mão de obra.",
      },
      {
        question: "O que preparar antes de implantar WMS?",
        answer:
          "Cadastro limpo de SKU, mapa de endereços, processos de entrada/saída padronizados e disciplina de leitura — senão o WMS só digitaliza o caos.",
      },
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
    shortDefinition:
      "Cadeia de suprimentos (supply chain) é a rede de organizações, fluxos e informações que leva o produto da matéria-prima ao cliente final — incluindo fornecedores, fábricas, armazéns e canais de distribuição.",
    definition:
      "A cadeia de suprimentos abrange planejamento e execução do fluxo de materiais e dados entre múltiplos elos: fornecedores, manufatura, centros de distribuição, varejo e cliente.\n\nObjetivos clássicos: nível de serviço, custo total, resiliência e velocidade. Ferramentas incluem previsão de demanda, gestão de estoques, compras, logística, VMI/CPFR e indicadores compartilhados.\n\nPara a PME, “gerir a cadeia” começa perto de casa: confiabilidade de fornecedores, lead times reais, estoque equilibrado e comunicação de demanda. Problemas em um elo (atraso, MOQ alto, efeito chicote) se espalham para o inventário e o caixa.",
    example:
      "Uma marca de cosméticos dependia de um único frasco importado com lead time de 90 dias. Ao dual-sourcing e elevar safety stock só desse componente crítico, a cadeia ficou mais resiliente sem inflar o estoque de todos os SKUs.",
    faq: [
      {
        question: "Qual a diferença entre cadeia de suprimentos e logística?",
        answer:
          "A cadeia é o sistema completo de elos e decisões. Logística é o fluxo físico/pedido dentro desse sistema.",
      },
      {
        question: "O que é resiliência da supply chain?",
        answer:
          "Capacidade de absorver choques (atraso, pico, falha de fornecedor) sem quebrar serviço — via buffers seletivos, redundância e visibilidade.",
      },
      {
        question: "Como a PME melhora a cadeia sem time enorme?",
        answer:
          "Mapeie fornecedores críticos, meça lead time real, compartilhe previsão nos top itens e elimine excesso que esconde problemas de processo.",
      },
    ],
    relatedTerms: ["logistica", "3pl", "efeito-chicote"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura", "varejo"],
  },
  {
    slug: "capital-de-giro",
    term: "Capital de Giro",
    category: "finance",
    shortDefinition:
      "Capital de giro é o recurso que financia a operação no curto prazo: estoque, contas a receber e despesas do dia a dia, menos as obrigações de curto prazo. Estoque alto consome capital de giro.",
    definition:
      "Capital de giro (working capital) representa a folga financeira para operar o ciclo curto do negócio. A forma clássica é ativos circulantes menos passivos circulantes.\n\nEstoque é frequentemente o maior consumidor de capital de giro em comércio e indústria. Receber devagar (DSO alto) e pagar rápido piora a situação; girar estoque e negociar prazos de forma equilibrada melhora.\n\nSintomas de capital de giro apertado: atraso a fornecedor, compra emergencial cara, promoção forçada de excesso e dificuldade de repor item crítico. A solução nem sempre é mais empréstimo — muitas vezes é menos inventário improdutivo e processos melhores.",
    example:
      "Ativos circulantes R$ 800 mil (sendo R$ 450 mil estoque) e passivos circulantes R$ 500 mil. Capital de giro = R$ 300 mil. Se R$ 120 mil do estoque estiver parado, a “folga” real é bem menor do que o número contábil sugere.",
    formula: "Capital de Giro = Ativos Circulantes - Passivos Circulantes",
    formulaExplanation:
      "Ativos circulantes incluem caixa, recebíveis e estoques; passivos circulantes incluem fornecedores e demais obrigações de curto prazo.",
    faq: [
      {
        question: "Estoque conta no capital de giro?",
        answer:
          "Sim. Estoque é ativo circulante. Quanto mais capital parado em inventário de baixo giro, menos flexibilidade a empresa tem.",
      },
      {
        question: "Capital de giro negativo é sempre ruim?",
        answer:
          "Nem sempre (modelos com recebimento rápido e pagamento alongado podem operar assim), mas em PME com estoque alto costuma sinalizar aperto e risco.",
      },
      {
        question: "Como liberar capital de giro pelo estoque?",
        answer:
          "Reduza excesso, acelere giro, melhore acurácia (evita compra errada), ajuste MOQ/ponto de reposição e liquide itens sem movimento com critério.",
      },
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
    shortDefinition:
      "Inflação é a alta generalizada de preços ao longo do tempo. No estoque, afeta custo de reposição, valoração (PEPS/médio), margem e a decisão de antecipar ou postergar compras.",
    definition:
      "Inflação reduz o poder de compra da moeda e eleva, em média, os preços de insumos e mercadorias. Para quem gerencia inventário, isso muda três frentes:\n\n1) Custo de reposição sobe — repor o mesmo SKU custa mais amanhã.\n2) Valoração de estoque e CMV dependem do método (médio, PEPS).\n3) Antecipar compra demais gera excesso; comprar tarde demais pressiona margem.\n\nEm inflação alta, empresas tendem a proteger margem e disponibilidade, mas o risco é transformar “compra antecipada” em capital parado se a demanda não acompanhar. O contraponto é negociar contratos, revisar preços de venda e monitorar giro por categoria.",
    example:
      "O custo de um componente sobe 12% em um trimestre. A empresa revisa o preço de venda, atualiza o custo médio no sistema e evita comprar 6 meses de cobertura “por medo” — mantém 45 dias nos itens estáveis e só amplia buffer nos críticos de lead time longo.",
    faq: [
      {
        question: "Devo estocar mais quando há inflação?",
        answer:
          "Só com demanda clara, validade ok e capital disponível. Antecipar tudo vira excesso caro. Seja seletivo nos SKUs críticos.",
      },
      {
        question: "Como a inflação afeta o CMV?",
        answer:
          "Compras mais caras elevam o custo unitário ao longo do tempo. O método de valoração define a velocidade com que isso aparece no CMV.",
      },
      {
        question: "O que monitorar no estoque em cenário inflacionário?",
        answer:
          "Custo de reposição, margem por SKU, cobertura em dias e itens sem giro — para não financiar inventário morto a preço novo.",
      },
    ],
    relatedTerms: ["custo-das-mercadorias-vendidas", "contas-a-pagar"],
    relatedFeatures: [],
    relatedIndustries: ["varejo", "manufatura"],
  },
  {
    slug: "custo-medio-ponderado",
    term: "Custo Médio Ponderado (WAC)",
    category: "finance",
    shortDefinition:
      "Custo médio ponderado (WAC) é o método de valoração de estoque que calcula o custo médio de cada unidade com base em todas as compras do período. É o método mais usado por PMEs no Brasil para apurar CMV e saldo de inventário.",
    definition:
      "O custo médio ponderado (Weighted Average Cost — WAC) é um método contábil de valoração de estoque. Em vez de atribuir à venda o custo da compra mais antiga (PEPS) ou da mais recente (UEPS), o sistema recalcula um custo médio unitário sempre que há nova entrada.\n\nA lógica: o estoque é tratado como um “pool” de unidades com custo médio. Cada saída usa esse custo médio, e cada compra atualiza o pool.\n\nVantagens para PMEs:\n- Simplicidade operacional e de sistema\n- Suaviza picos de preço de compra\n- Aceito pela legislação contábil brasileira para a maioria dos casos\n\nLimitações: em inflação forte ou commodities voláteis, o custo médio pode distorcer margem no curto prazo em relação a PEPS. Ainda assim, para varejo e manufatura de PME, costuma ser o padrão mais prático.\n\nSistemas de estoque devem registrar custo de entrada e recalcular o médio automaticamente a cada compra, evitando planilha paralela.",
    example:
      "Você tem 100 unidades a R$ 10 (estoque = R$ 1.000). Compra mais 100 a R$ 14 (+ R$ 1.400). Custo total = R$ 2.400 para 200 unidades. WAC = 2.400 / 200 = R$ 12.\n\nSe vender 50 unidades, o CMV dessa venda é 50 × 12 = R$ 600, e restam 150 unidades valendo R$ 1.800 a R$ 12 cada. Uma nova compra a preço diferente atualiza o médio de novo. Sem sistema, esse cálculo vira fonte de erro de margem.",
    formula:
      "WAC = Custo Total dos Itens Disponíveis / Total de Unidades Disponíveis",
    formulaExplanation:
      "Custo Total = valor do estoque inicial + custo de todas as compras do período; Unidades Disponíveis = quantidade inicial + quantidades compradas.",
    faq: [
      {
        question: "Quando usar custo médio ponderado em vez de PEPS?",
        answer:
          "Use WAC quando os itens são fungíveis, o preço não muda de forma extrema a cada compra e você quer simplicidade. Use PEPS quando a validade/lote importa ou quando a política contábil exige fila de custos por entrada.",
      },
      {
        question: "O custo médio ponderado é aceito pela Receita?",
        answer:
          "Sim, o custo médio é um método aceito no Brasil para valoração de estoques, desde que aplicado de forma consistente e documentada. Consulte o contador para o regime e o plano de contas da sua empresa.",
      },
      {
        question: "Como o sistema de estoque ajuda no WAC?",
        answer:
          "Ao registrar cada entrada com custo unitário, o sistema recalcula o médio e aplica na saída. Isso evita planilha desatualizada e margens “no olho”.",
      },
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
    shortDefinition:
      "PEPS (Primeiro a Entrar, Primeiro a Sair) é o método que assume que as unidades mais antigas saem primeiro. É essencial em produtos com validade e útil na valoração contábil do estoque.",
    definition:
      "PEPS (FIFO — First In, First Out) é tanto uma política física de rotação quanto um método contábil de valoração. Fisicamente, o item que entrou primeiro deve sair primeiro — crítico em alimentos, cosméticos e farmacêutico.\n\nContabilmente, o CMV das vendas usa os custos das entradas mais antigas, e o estoque final fica valorizado com custos mais recentes.\n\nEm inflação, PEPS tende a mostrar CMV menor e estoque final mais alto do que UEPS. Operacionalmente, PEPS exige controle de lote/validade e endereçamento que permita retirar o mais antigo primeiro.",
    example:
      "Lote A entrou em 01/03 com validade 01/09; lote B entrou em 15/04 com validade 15/10. Na saída, o sistema e o endereço forçam a retirada do lote A primeiro. Sem PEPS físico, o time pega o que está na frente e o lote A vence na prateleira.",
    faq: [
      {
        question: "PEPS é obrigatório em alimentos?",
        answer:
          "A boa prática e muitas normas de qualidade exigem rotação FEFO/PEPS por validade. Consulte a regulamentação do seu segmento, mas a lógica de “mais antigo/mais próximo do vencimento primeiro” é padrão.",
      },
      {
        question: "PEPS e FEFO são iguais?",
        answer:
          "PEPS olha ordem de entrada; FEFO (First Expired, First Out) prioriza a validade mais próxima. Em perecíveis, FEFO costuma ser o controle físico correto.",
      },
      {
        question: "Qual a diferença contábil entre PEPS e custo médio?",
        answer:
          "PEPS consome custos das compras antigas primeiro; custo médio dilui todos os custos em um unitário médio. A escolha afeta CMV e estoque final.",
      },
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
    shortDefinition:
      "UEPS (Último a Entrar, Primeiro a Sair) assume que as unidades mais recentes saem primeiro na valoração do estoque. É menos comum no Brasil para fins fiscais e pouco adequado como política física de perecíveis.",
    definition:
      "UEPS (LIFO — Last In, First Out) é um método de valoração em que o custo das últimas compras é atribuído primeiro ao CMV. Em cenários de preços crescentes, o CMV fica mais alto e o estoque final tende a carregar custos antigos.\n\nNo Brasil, o uso fiscal/contábil do UEPS é restrito ou inadequado em muitos contextos; o custo médio e o PEPS são bem mais frequentes. Como política física, UEPS é inadequado para itens com validade.\n\nEntender UEPS ainda é útil para comparar impactos de método em margem e para ler materiais internacionais de supply chain e contabilidade.",
    example:
      "Compras: 10 un a R$ 10 e depois 10 un a R$ 15. Vende 10 un. No UEPS, o CMV usa R$ 15 (última entrada); no PEPS, usaria R$ 10. A margem bruta muda só pela regra de valoração, sem mudar a operação física — por isso a política contábil precisa ser consciente.",
    faq: [
      {
        question: "Posso usar UEPS no Brasil?",
        answer:
          "Na prática, a maioria das empresas brasileiras usa custo médio ou PEPS. Antes de adotar UEPS, confirme com o contador as regras do seu regime e normas aplicáveis.",
      },
      {
        question: "UEPS é bom para perecíveis?",
        answer:
          "Não como política física. Perecíveis exigem PEPS/FEFO para não vencer o lote antigo na prateleira.",
      },
      {
        question: "Por que estudar UEPS se não uso?",
        answer:
          "Para interpretar relatórios, comparativos internacionais e o efeito de diferentes métodos no CMV e no estoque final.",
      },
    ],
    relatedTerms: ["peps", "custo-medio-ponderado", "gestao-de-estoque"],
    relatedFeatures: ["inventory-control"],
    relatedIndustries: ["manufatura", "varejo"],
  },
  {
    slug: "erp",
    term: "ERP (Enterprise Resource Planning)",
    category: "technology",
    shortDefinition:
      "ERP (Enterprise Resource Planning) é o sistema integrado que centraliza finanças, compras, vendas, estoque e outros módulos da empresa. Para PME, o desafio é usar o ERP sem engessar a operação de almoxarifado no dia a dia.",
    definition:
      "ERP (Enterprise Resource Planning) é uma suíte de software que integra processos de negócio em uma base de dados comum: financeiro, fiscal, compras, vendas, estoque, produção e RH, conforme o pacote.\n\nO valor do ERP está na integração: um pedido de venda pode baixar estoque, gerar faturamento e atualizar contas a receber no mesmo fluxo. O risco, em PME, é implantar um ERP pesado demais para a maturidade operacional — ou usar o módulo de estoque do ERP de forma rígida, sem apoio mobile/QR no chão.\n\nQuando o ERP sozinho não resolve o inventário operacional, empresas combinam ERP (financeiro/fiscal) com sistema especializado de estoque/almoxarifado para contagem, QR Code e movimentação rápida. O importante é a integração de saldos e documentos, não forçar o time de chão a operar só na tela desktop do ERP.\n\nAvalie ERP quando há múltiplos departamentos, obrigação fiscal complexa e necessidade de um “sistema de registro” único. Avalie ferramenta de estoque dedicada quando o gargalo é acurácia, inventário e velocidade de entrada/saída.",
    example:
      "Uma indústria leve usava ERP para notas e financeiro, mas o almoxarifado ainda controlava saldo em planilha porque o módulo de estoque era lento no celular. Ao adotar app de estoque com QR Code integrado ao fluxo de compras, a acurácia subiu e o ERP passou a receber saldo confiável sem o time abandonar o chão de fábrica.",
    faq: [
      {
        question: "Toda PME precisa de ERP?",
        answer:
          "Não. Muitas PMEs começam com sistema de estoque + financeiro mais enxuto. ERP faz sentido quando processos e compliance exigem integração ampla entre áreas.",
      },
      {
        question: "Qual a diferença entre ERP e sistema de estoque?",
        answer:
          "ERP é suíte multiárea. Sistema de estoque foca inventário, movimentação, inventário físico e rastreio no chão. Podem coexistir: ERP como backbone e estoque como operação.",
      },
      {
        question: "O que é glossário ERP no contexto de estoque?",
        answer:
          "São termos e módulos (CMV, SKU, WMS, MRP) que aparecem em projetos de implantação. Entender o glossário evita comprar módulo errado e alinhamento falho com o time operacional.",
      },
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
    shortDefinition:
      "RFID identifica itens por radiofrequência, sem linha de visão obrigatória como no código de barras. Permite contagens mais rápidas e rastreio em volume, com custo de tag e infraestrutura maior.",
    definition:
      "RFID (Radio-Frequency Identification) usa etiquetas (tags) e leitores que comunicam por radiofrequência. Diferente do código de barras, não exige mirar cada etiqueta individualmente com a mesma precisão ótica.\n\nVantagens: inventário em massa mais rápido, leitura de vários itens, bom para ativos e cadeias de alto volume. Desvantagens: custo da tag, interferência metálica/líquidos, projeto de antenas e integração de software.\n\nPara a maioria das PMEs, código de barras/QR resolve o dia a dia. RFID entra quando o ROI de contagem, anti-furto ou rastreio justifica o investimento — ou em setores com exigência específica de rastreabilidade.",
    example:
      "Uma rede de moda usa RFID em peça única para inventário de loja: a contagem que levava um turno passa a minutos com portal/leitor. A acurácia sobe e o reabastecimento da retaguarda fica mais confiável. O custo da tag é diluído no ticket do produto.",
    faq: [
      {
        question: "RFID substitui código de barras?",
        answer:
          "Pode complementar ou substituir em alguns fluxos, mas barras/QR continuam comuns por custo e simplicidade. Muitas operações usam os dois.",
      },
      {
        question: "RFID vale para PME pequena?",
        answer:
          "Só com caso de uso claro (inventário muito trabalhoso, alto furto, alto volume). Caso contrário, comece por código de barras e processo disciplinado.",
      },
      {
        question: "Qual a diferença entre tag ativa e passiva?",
        answer:
          "Tags passivas são alimentadas pelo leitor e são as mais comuns em varejo/estoque. Ativas têm bateria e maior alcance, com custo bem maior.",
      },
    ],
    relatedTerms: ["sistema-de-codigo-de-barras", "wms", "gestao-de-estoque"],
    relatedFeatures: ["barcoding", "inventory-control"],
    relatedIndustries: ["logistica", "varejo", "manufatura"],
  },
  {
    slug: "gestao-ativos-ti",
    term: "Gestão de Ativos de TI (ITAM)",
    category: "technology",
    shortDefinition:
      "ITAM (IT Asset Management) é a gestão de ativos de TI: inventário, ciclo de vida, localização e custo de hardwares, softwares e equipamentos. Evita perda de ativos, licenças sem uso e compras duplicadas em empresas e prestadores de serviço.",
    definition:
      "Gestão de Ativos de TI (ITAM — IT Asset Management) é o conjunto de processos e ferramentas para registrar, rastrear e controlar ativos tecnológicos ao longo de todo o ciclo de vida: aquisição, uso, manutenção, transferência e descarte.\n\nAtivos típicos incluem notebooks, monitores, servidores, smartphones, licenças de software, switches, projetores e equipamentos de rede. Sem ITAM, a empresa não sabe quantos equipamentos tem, onde estão, quem é o responsável e se as licenças estão em compliance.\n\nUm programa de ITAM maduro cobre:\n- Inventário único com identificador (número de patrimônio, serial, QR Code)\n- Localização e responsável (colaborador, sala, filial)\n- Status (em uso, em manutenção, estoque, baixado)\n- Histórico de movimentação e manutenções\n- Custos e depreciação quando necessário\n- Controle de software e licenças\n\nPara PMEs e prestadores de serviço, ITAM reduz perda de equipamentos, evita compra duplicada e acelera auditorias. Soluções de estoque/equipamentos com QR Code (como o Purple Stock) aplicam a mesma lógica de inventário operacional a ativos de TI: cada item recebe etiqueta, é contado e movimentado com histórico.",
    example:
      "Uma produtora de conteúdo com 180 equipamentos (câmeras, laptops, monitores e microfones) não sabia quais itens estavam em set, em manutenção ou “sumidos”. Após implantar ITAM básico — cadastro por serial + QR Code + check-out por projeto — o time passou a localizar qualquer ativo em segundos.\n\nEm 90 dias: perda de equipamentos caiu de 4% para menos de 0,5% do inventário; compras reativas de “notebook extra” caíram 60%; a auditoria interna fechou em 1 dia em vez de uma semana de planilha.",
    faq: [
      {
        question: "O que é ITAM?",
        answer:
          "ITAM é a gestão de ativos de TI: inventário, localização, responsável, ciclo de vida e custo de hardwares e softwares. O objetivo é saber o que a empresa tem, onde está e se está em uso de forma eficiente.",
      },
      {
        question: "ITAM é a mesma coisa que inventário de estoque?",
        answer:
          "São processos parecidos, mas o objeto muda. Estoque foca produtos e materiais de venda/produção; ITAM foca ativos de tecnologia e equipamentos. Ambos se beneficiam de identificação (QR/código de barras), contagem e histórico de movimentação.",
      },
      {
        question: "Por onde começar ITAM em uma PME?",
        answer:
          "Comece pelos ativos de maior valor e mobilidade (notebooks, câmeras, celulares). Cadastre serial e responsável, etiquete com QR Code, faça uma contagem inicial e defina check-in/check-out. Depois expanda para monitores, rede e licenças.",
      },
    ],
    relatedTerms: ["erp", "wms", "rfid"],
    relatedFeatures: ["equipment-management"],
    relatedIndustries: ["technology"],
  },
  {
    slug: "previsao-de-demanda",
    term: "Previsão de Demanda",
    category: "inventory",
    shortDefinition:
      "Previsão de demanda estima quantidades futuras de venda ou consumo para planejar compras, produção e estoque. Boa previsão reduz ruptura e excesso; previsão ruim amplifica os dois.",
    definition:
      "Previsão de demanda é o processo de projetar a saída futura de produtos com base em histórico, sazonalidade, promoções, mercado e julgamento do time.\n\nMétodos vão do simples (média móvel, sazonalidade básica) ao avançado (modelos estatísticos e machine learning). Para PME, consistência e revisão batem complexidade desnecessária.\n\nA previsão alimenta ponto de reposição, compras e capacidade. Erros são normais: o sistema de estoque deve combinar forecast com safety stock e monitoramento de viés (errar sempre para cima ou para baixo).\n\nPromoção, lançamento e ruptura passada distorcem o histórico — trate esses pontos antes de “confiar cegamente no número”.",
    example:
      "Um item vende ~30 un/semana, com pico de 50 em datas sazonais. A PME usa média das últimas 8 semanas + calendário de campanha. Antes da campanha, eleva o ponto de reposição; depois, volta ao parâmetro normal para não ficar com excesso.",
    faq: [
      {
        question: "Previsão perfeita existe?",
        answer:
          "Não. O objetivo é errar menos e reagir rápido. Combine forecast com inventário de segurança e revisão frequente nos itens A.",
      },
      {
        question: "Qual o maior erro de previsão em PME?",
        answer:
          "Usar só o último mês, ignorar promoção/ruptura no histórico, ou não separar itens com demanda intermitente dos de giro estável.",
      },
      {
        question: "Como ligar previsão ao estoque no dia a dia?",
        answer:
          "Transforme a previsão em política: ponto de reposição, cobertura alvo e alertas. Sem parâmetro operacional, a previsão vira slide, não decisão.",
      },
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
    shortDefinition:
      "MOQ (Minimum Order Quantity) é a quantidade mínima de pedido que o fornecedor aceita vender em cada compra. Define o menor lote comercializável e impacta capital parado, estoque e negociação com a indústria.",
    definition:
      "Quantidade mínima de pedido (MOQ — Minimum Order Quantity) é o menor volume que um fornecedor exige para aceitar uma compra. Se o MOQ é 500 unidades e você precisa de 120, ou compra 500, ou não fecha o pedido.\n\nO MOQ existe porque o fornecedor também tem custos de setup, produção, embalagem e frete. Lotes pequenos elevam o custo unitário para ele; o MOQ protege a margem e a eficiência da linha.\n\nPara a PME compradora, o MOQ é uma restrição operacional e financeira:\n- Capital de giro: você imobiliza dinheiro em volume maior do que a demanda imediata.\n- Espaço e validade: estoque extra ocupa prateleira e aumenta risco de obsolescência.\n- Frequência de compra: MOQ alto reduz o número de pedidos, mas aumenta o pico de estoque.\n- Preço unitário: às vezes o MOQ vem com desconto que compensa o lote maior; às vezes não.\n\nMOQ não é o mesmo que EOQ (quantidade econômica de pedido). O EOQ é o lote ideal calculado pela sua operação para minimizar custo total. O MOQ é a regra do fornecedor. Na prática, o lote real de compra é o máximo entre o que você precisa, o EOQ e o MOQ — ou uma negociação entre as partes.\n\nBoas práticas: cadastrar o MOQ por fornecedor e SKU no sistema de estoque, cruzar com ponto de reposição e giro, e revisar periodicamente se o fornecedor ainda é o melhor equilíbrio entre preço e flexibilidade de lote.",
    example:
      "Uma loja de roupas compra camisetas básicas de um confeccionista. O MOQ do fornecedor é 200 peças por cor/tamanho. A loja estima vender 60 peças da cor preta P por mês.\n\nSe comprar o MOQ (200), terá cerca de 3 meses de cobertura só daquele SKU — capital parado e risco se a cor não girar. Alternativas comuns:\n1. Negociar MOQ misto (ex.: 200 peças no total, misturando cores/tamanhos).\n2. Aceitar o MOQ e usar promoção planejada para acelerar o giro.\n3. Trocar de fornecedor com MOQ menor e preço unitário um pouco maior, se o capital for o gargalo.\n\nNo sistema, o time cadastra MOQ = 200 no item e configura alerta de reposição considerando lead time + demanda. Assim a compra não é feita “no olho” e o comprador sabe o valor mínimo do pedido antes de emitir a OC.",
    formula:
      "Lote de compra efetivo ≥ max(necessidade, EOQ, MOQ do fornecedor)",
    formulaExplanation:
      "Necessidade = demanda no horizonte de reposição; EOQ = lote econômico da sua operação; MOQ = mínimo exigido pelo fornecedor. O pedido real precisa respeitar o MOQ mesmo quando a necessidade for menor.",
    faq: [
      {
        question: "O que é MOQ e por que o fornecedor impõe quantidade mínima?",
        answer:
          "MOQ é a quantidade mínima de pedido. O fornecedor impõe porque setup de produção, embalagem e frete ficam caros em lotes muito pequenos. O MOQ protege o custo unitário e a eficiência dele — e vira restrição de compra para você.",
      },
      {
        question: "Qual a diferença entre MOQ e EOQ?",
        answer:
          "MOQ é a regra do fornecedor (mínimo que ele vende). EOQ é o lote ideal da sua operação para equilibrar custo de pedido e custo de manter estoque. Se o MOQ for maior que o EOQ, você é forçado a comprar acima do ideal e deve incluir esse excesso no custo total.",
      },
      {
        question: "Como negociar ou contornar um MOQ alto?",
        answer:
          "Peça MOQ misto entre SKUs, frete consolidado, pedido programado (blanket order) ou desconto só se o lote extra girar rápido. Compare com fornecedores de MOQ menor. No sistema de estoque, registre o MOQ por item para o comprador ver o impacto no capital antes de fechar o pedido.",
      },
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
