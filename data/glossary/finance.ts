import type { GlossaryTerm } from "./types";

/** Glossary terms — category `finance`. */
export const glossaryTermsFinance: GlossaryTerm[] = [
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
];
