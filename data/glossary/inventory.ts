import type { GlossaryTerm } from "./types";
import { CONSTRUCTION_CLUSTER_POSTS } from "@/lib/construction-cluster";

/** Glossary terms — category `inventory`. */
export const glossaryTermsInventory: GlossaryTerm[] = [
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
      "Quantidade mínima de pedido (MOQ) é o menor lote que o fornecedor aceita vender. Impacta capital parado, reposição e compra no sistema de estoque da PME.",
    definition:
      "Quantidade mínima de pedido (MOQ — Minimum Order Quantity) é o menor volume que um fornecedor exige para aceitar uma compra. Se o MOQ é 500 unidades e você precisa de 120, ou compra 500, ou não fecha o pedido.\n\nO MOQ existe porque o fornecedor também tem custos de setup, produção, embalagem e frete. Lotes pequenos elevam o custo unitário para ele; o MOQ protege a margem e a eficiência da linha.\n\nPara a PME compradora, o MOQ é uma restrição operacional e financeira:\n- Capital de giro: você imobiliza dinheiro em volume maior do que a demanda imediata.\n- Espaço e validade: estoque extra ocupa prateleira e aumenta risco de obsolescência.\n- Frequência de compra: MOQ alto reduz o número de pedidos, mas aumenta o pico de estoque.\n- Preço unitário: às vezes o MOQ vem com desconto que compensa o lote maior; às vezes não.\n\nMOQ não é o mesmo que EOQ (quantidade econômica de pedido). O EOQ é o lote ideal calculado pela sua operação para minimizar custo total. O MOQ é a regra do fornecedor. Na prática, o lote real de compra é o máximo entre o que você precisa, o EOQ e o MOQ — ou uma negociação entre as partes.\n\nBoas práticas: cadastrar o MOQ por fornecedor e SKU no sistema de estoque, cruzar com ponto de reposição e giro, e revisar periodicamente se o fornecedor ainda é o melhor equilíbrio entre preço e flexibilidade de lote.\n\nNo Purple Stock, registre o MOQ no item para o comprador ver o valor mínimo do pedido antes de emitir a ordem — em vez de descobrir o excesso só no recebimento.",
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
  {
    slug: "almoxarifado-de-obra",
    term: "Almoxarifado de Obra",
    category: "inventory",
    shortDefinition:
      "Almoxarifado de obra é o estoque do canteiro: materiais, ferramentas e EPI ligados a uma obra, com entrada da entrega, retirada com responsável e conferência do que sobrou ou sumiu.",
    definition:
      "Almoxarifado de obra é o ponto de controle físico do canteiro. Diferente do estoque de uma loja — onde o item espera na prateleira até a venda — na construção o material entra na entrega do fornecedor, sai para a frente de serviço e, no caso de ferramenta, precisa voltar.\n\nO almoxarifado de obra responde três perguntas o tempo todo: o que tem neste canteiro, quem retirou e para qual frente, e o que faltou ou mudou de obra. Sem isso, o engenheiro opera com saldo de planilha, o almoxarife com caderno e o encarregado com memória.\n\nNa prática, cada obra (ou centro de custo) funciona como um local. Pode existir ainda um depósito central que transfere para os canteiros. Entrada confere nota × físico. Saída registra responsável. Ferramenta cara ganha etiqueta e check-in no retorno. Material de consumo (cimento, bloco, tubo) baixa na retirada e não “volta” — a menos que sobre e retorne à central.\n\nO erro clássico é tratar o canteiro como loja ou como ERP de construtora no dia um. O fluxo operacional cabe em um sistema de estoque com QR Code no celular: local por obra, leitura na entrada, responsável na saída. Orçamento, medição e fiscal podem continuar no sistema que a empresa já usa.",
    example:
      "Uma construtora pequena tocava duas casas ao mesmo tempo. O cimento “tinha na planilha” da obra A, mas a saca tinha ido para a obra B na kombi, sem lançamento. A frente parou, o encarregado comprou emergencial no depósito da esquina e o custo sumiu do orçamento. Depois de cadastrar cada casa como local, ler a entrega e exigir responsável na retirada, a transferência entre obras apareceu no histórico. A compra emergencial caiu e a furadeira deixou de “sumir” no fim do expediente.",
    faq: [
      {
        question: "Almoxarifado de obra é a mesma coisa que estoque de loja?",
        answer:
          "Não. Na loja o item espera a venda. No canteiro ele circula: entra na entrega, sai para a frente de serviço e a ferramenta precisa voltar. O controle é por obra e por responsável, não só por SKU.",
      },
      {
        question: "Por onde começar o almoxarifado de uma construtora pequena?",
        answer:
          "Separe cada obra como local, cadastre o que para o serviço e o que dói perder, leia a entrada do fornecedor e registre a retirada com nome. Ferramenta cara ganha etiqueta; consumível ganha quantidade e mínimo.",
      },
      {
        question: "Preciso de um ERP de construtora para controlar o canteiro?",
        answer:
          "Não no primeiro dia. O canteiro precisa de saldo por obra, histórico de quem retirou e conferência no celular. ERP cobre orçamento, medição e fiscal — outra camada, outro momento.",
      },
    ],
    relatedTerms: ["inventario-fisico", "sku", "ruptura-de-estoque"],
    relatedFeatures: ["inventory-control", "qr-code-management"],
    relatedIndustries: ["construction", "electrical"],
    relatedPosts: CONSTRUCTION_CLUSTER_POSTS.map((post) => ({
      slug: post.slug,
      label: post.label,
    })),
  },
];
