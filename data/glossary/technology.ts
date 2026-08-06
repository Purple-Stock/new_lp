import type { GlossaryTerm } from "./types";

/** Glossary terms — category `technology`. */
export const glossaryTermsTechnology: GlossaryTerm[] = [
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
];
