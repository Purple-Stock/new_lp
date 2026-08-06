import type { GlossaryTerm } from "./types";

/** Glossary terms — category `management`. */
export const glossaryTermsManagement: GlossaryTerm[] = [
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
];
