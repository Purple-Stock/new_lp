import type { GlossaryTerm } from "./types";

/** Glossary terms — category `logistics`. */
export const glossaryTermsLogistics: GlossaryTerm[] = [
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
];
