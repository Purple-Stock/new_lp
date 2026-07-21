export type IndustryCaseStudy = {
  role: string;
  companyType: string;
  quote: string;
  outcome: string;
};

export type IndustryFaqItem = {
  q: string;
  a: string;
};

export type IndustryProofStat = {
  value: string;
  label: string;
};

export type IndustryImplStep = {
  title: string;
  description: string;
};

export type IndustrySocialProof = {
  proofHeadline: string;
  proofSubhead: string;
  stats: IndustryProofStat[];
  casesHeadline: string;
  casesSubhead: string;
  cases: IndustryCaseStudy[];
  steps: IndustryImplStep[];
  faqs: IndustryFaqItem[];
  relatedBlogHref?: string;
  relatedBlogLabel?: string;
};

const DEFAULT_PROOF: IndustrySocialProof = {
  proofHeadline: "Resultados na operação",
  proofSubhead: "Menos atrito no dia a dia e saldo que o time confia.",
  stats: [
    { value: "QR", label: "Leitura no celular" },
    { value: "7d", label: "Teste grátis" },
    { value: "1", label: "Histórico único" },
    { value: "R$59", label: "Por time / mês" },
  ],
  casesHeadline: "Como times usam o Purple Stock",
  casesSubhead:
    "Padrões de operação que se repetem em empresas que saem da planilha.",
  cases: [
    {
      role: "Operações",
      companyType: "PME com multi-usuário",
      quote:
        "A equipe parou de manter planilha paralela: entrada, saída e transferência ficam no mesmo histórico.",
      outcome: "Uma fonte de verdade para o saldo",
    },
    {
      role: "Gestão",
      companyType: "Time em crescimento",
      quote:
        "Conferência por localização e QR Code reduziu tempo procurando item e retrabalho de inventário.",
      outcome: "Inventário mais rápido e confiável",
    },
  ],
  steps: [
    {
      title: "Cadastre itens e locais",
      description:
        "Comece pelos SKUs críticos e endereços. Dá para operar o básico em poucos dias.",
    },
    {
      title: "Escaneie na operação",
      description:
        "Entrada, saída e inventário com QR Code ou código de barras no celular.",
    },
    {
      title: "Acompanhe em tempo real",
      description:
        "Saldo, histórico e alertas no mesmo painel para decidir com dados.",
    },
  ],
  faqs: [
    {
      q: "Quanto tempo para implantar?",
      a: "Times enxutos costumam colocar o fluxo básico (cadastro + movimentação) em poucos dias. O ganho aparece quando o time para de digitar e passa a escanear.",
    },
    {
      q: "Funciona no celular?",
      a: "Sim. O fluxo de entrada, saída, transferência e contagem é pensado para operação em campo, não só desktop.",
    },
    {
      q: "Preciso de fidelidade?",
      a: "Não. O plano é por time, com teste de 7 dias e sem fidelidade.",
    },
  ],
};

const EQUIPMENT_VERTICAL_PROOF: IndustrySocialProof = {
  proofHeadline: "Feito para equipamento que circula",
  proofSubhead:
    "Produtoras, locadoras e eventos usam check-in/check-out para saber quem levou o quê — e o que voltou.",
  stats: [
    { value: "In/Out", label: "Check-in e check-out" },
    { value: "QR", label: "Etiqueta no ativo" },
    { value: "Job", label: "Por set ou evento" },
    { value: "−", label: "Menos item sumido" },
  ],
  casesHeadline: "Padrões de quem já assina nesse vertical",
  casesSubhead:
    "Perfis reais de operação (sem inventar depoimento de marca). É o fluxo que mais converte assinatura hoje.",
  cases: [
    {
      role: "Coordenação de set",
      companyType: "Produtora audiovisual",
      quote:
        "Cada câmera e lente sai com responsável e projeto. No retorno, o check-in mostra o que faltou antes do próximo set — não no WhatsApp dois dias depois.",
      outcome: "Rastreio por job + menos extravio",
    },
    {
      role: "Operações / depósito",
      companyType: "Empresa de eventos",
      quote:
        "Na carga do caminhão e na descarga, o time escaneia som, luz e mobiliário. O inventário pós-festa deixa de ser ‘conferência de memória’.",
      outcome: "Conferência na entrada e na saída",
    },
    {
      role: "Locação de equipamentos",
      companyType: "Estúdio / rental AV",
      quote:
        "Freela só retira com usuário logado. O histórico mostra quem ficou com o kit — o custo de uma lente paga meses de sistema.",
      outcome: "Responsável + trilha de auditoria",
    },
  ],
  steps: [
    {
      title: "Etiquete os ativos caros",
      description:
        "Comece pelos 20% que mais doem perder: corpos, lentes, mesas, processadores, caixas.",
    },
    {
      title: "Check-out por set ou evento",
      description:
        "Escaneie, associe responsável e job. Sem ‘só dessa vez’ no WhatsApp.",
    },
    {
      title: "Check-in com conferência",
      description:
        "No retorno, compare com a saída e marque avaria ou item faltante no mesmo dia.",
    },
  ],
  faqs: [
    {
      q: "Serve para produtora e para empresa de eventos?",
      a: "Sim. O fluxo é o mesmo: equipamento sai, precisa voltar completo, com responsável. Muda só o nome do job (set vs festa/corporativo).",
    },
    {
      q: "Freela consegue retirar equipamento?",
      a: "Sim, com usuário e permissão. O ponto é registrar quem retirou — não bloquear a operação, e sim ter trilha.",
    },
    {
      q: "Planilha não resolve check-in/check-out?",
      a: "Até um volume baixo, resolve. Com multi-set no mesmo fim de semana, freelas e dezenas de itens caros, a planilha atrasa e perde versão. Aí a perda de um ativo paga o sistema.",
    },
    {
      q: "Preciso cadastrar cada cabo e cada case?",
      a: "Cadastre o que dói perder ou o que define o kit. Consumíveis podem ir em controle mais simples; ativos críticos merecem etiqueta e histórico.",
    },
  ],
  relatedBlogHref:
    "/blog/controle-equipamentos-audiovisuais-produtoras-eventos",
  relatedBlogLabel: "Guia: controle de equipamentos audiovisuais e eventos",
};

const DENTAL_EQUIPMENT_PROOF: IndustrySocialProof = {
  proofHeadline: "Equipamentos dentários que não “somem” entre salas",
  proofSubhead:
    "Clínicas, labs e empresas que cuidam de equipamentos odontológicos usam check-in/check-out para saber quem retirou o kit — e o que voltou.",
  stats: [
    { value: "In/Out", label: "Check-in e check-out" },
    { value: "QR", label: "Etiqueta no ativo" },
    { value: "Kit", label: "Por sala ou técnico" },
    { value: "−", label: "Menos extravio" },
  ],
  casesHeadline: "Padrões de quem opera equipamentos dentários",
  casesSubhead:
    "Perfis de operação que mais aparecem entre assinaturas do vertical de saúde/equipamentos.",
  cases: [
    {
      role: "Coordenação de clínicas",
      companyType: "Rede ou multi-consultório",
      quote:
        "Motor, peça e kit saem com responsável e sala. No fim do turno o check-in mostra o que não voltou — antes de virar briga no WhatsApp.",
      outcome: "Responsável + sala/consultório",
    },
    {
      role: "Operações / campo",
      companyType: "Empresa de manutenção e equipamentos dentários",
      quote:
        "Técnico leva o kit para o cliente com check-out. No retorno, confere o que faltou e o que foi para manutenção. O histórico vira trilha, não memória.",
      outcome: "Campo + depósito no mesmo fluxo",
    },
    {
      role: "Lab / esterilização",
      companyType: "Laboratório e suporte clínico",
      quote:
        "Caixas e instrumentais críticos com QR. Status disponível vs em processo evita reutilizar o que ainda não voltou limpo ou calibrado.",
      outcome: "Status claro do ativo",
    },
  ],
  steps: [
    {
      title: "Etiquete ativos e kits críticos",
      description:
        "Comece por equipamentos caros e kits que circulam entre salas, técnicos ou clientes.",
    },
    {
      title: "Check-out com responsável",
      description:
        "Escaneie, associe técnico/sala/cliente. Sem retirada “só dessa vez” sem registro.",
    },
    {
      title: "Check-in e status",
      description:
        "No retorno, confira o kit e marque manutenção quando precisar — separado do disponível.",
    },
  ],
  faqs: [
    {
      q: "Serve para clínica odontológica e para empresa de equipamentos?",
      a: "Sim. Clínica controla o que circula entre consultórios; prestador de serviço controla o que vai a campo e volta. O fluxo é check-in/check-out com responsável.",
    },
    {
      q: "Dá para separar consumível de equipamento?",
      a: "Sim. Materiais de uso diário podem ter reposição mais simples; ativos e kits caros merecem etiqueta, histórico e conferência no retorno.",
    },
    {
      q: "Preciso de um sistema hospitalar pesado?",
      a: "Não para o fluxo operacional de quem tirou o quê. O Purple Stock cobre movimentação, QR e histórico sem implantar ERP clínico completo no primeiro dia.",
    },
    {
      q: "Funciona com vários técnicos em campo?",
      a: "Sim, com usuário por pessoa. O ponto é trilha de retirada — não bloquear o atendimento, e sim saber onde está cada ativo.",
    },
  ],
  relatedBlogHref: "/blog/controle-equipamentos-odontologicos-clinicas",
  relatedBlogLabel: "Controle de equipamentos odontológicos com check-in",
};

const PROOF_BY_SLUG: Record<string, IndustrySocialProof> = {
  audiovisual: {
    ...EQUIPMENT_VERTICAL_PROOF,
    proofHeadline: "Produtoras e locadoras no mesmo fluxo",
    relatedBlogHref:
      "/blog/controle-equipamentos-audiovisuais-produtoras-eventos",
    relatedBlogLabel: "Como montar check-in/check-out na produtora",
  },
  events: {
    ...EQUIPMENT_VERTICAL_PROOF,
    proofHeadline: "Eventos: carga, festa e descarga sob controle",
    cases: [
      EQUIPMENT_VERTICAL_PROOF.cases[1],
      EQUIPMENT_VERTICAL_PROOF.cases[0],
      EQUIPMENT_VERTICAL_PROOF.cases[2],
    ],
    relatedBlogHref: "/blog/check-in-check-out-equipamentos-eventos",
    relatedBlogLabel: "Check-in e check-out de equipamentos para eventos",
  },
  odontologico: DENTAL_EQUIPMENT_PROOF,
  pharmaceutical: {
    ...DENTAL_EQUIPMENT_PROOF,
    proofHeadline: "Saúde: insumos e equipamentos sob rastreio",
    proofSubhead:
      "Do consultório ao prestador de serviço — menos perda e mais histórico de movimentação.",
    relatedBlogHref: "/blog/controle-equipamentos-odontologicos-clinicas",
    relatedBlogLabel: "Também para equipamentos odontológicos",
  },
  automotivo: {
    proofHeadline: "Peça certa no balcão — sem planilha paralela",
    proofSubhead:
      "Autopeças e lojas de peças de moto usam saldo confiável, código de barras e alerta de reposição para não perder venda por ruptura.",
    stats: [
      { value: "SKU", label: "Cadastro estável" },
      { value: "CB", label: "Código de barras" },
      { value: "−", label: "Menos ruptura" },
      { value: "7d", label: "Teste grátis" },
    ],
    casesHeadline: "Padrões de quem vende peças de carro e moto",
    casesSubhead:
      "Perfis de operação comuns em autopeças, moto peças e distribuidores.",
    cases: [
      {
        role: "Balcão / vendas",
        companyType: "Autopeças multi-marca",
        quote:
          "Antes o sistema dizia que tinha e a prateleira não. Com leitura e saldo único, o vendedor confia no número e para de “ir olhar no fundo”.",
        outcome: "Menos venda perdida por saldo errado",
      },
      {
        role: "Depósito",
        companyType: "Loja de peças de moto",
        quote:
          "Entrada com código de barras e inventário nos itens de maior giro. O freio e o kit de transmissão param de zerar sem aviso.",
        outcome: "Reposição no tempo certo",
      },
      {
        role: "Gestão",
        companyType: "Distribuidor regional",
        quote:
          "Várias pessoas no estoque sem planilha paralela. Histórico por SKU mostra quem moveu e o giro real por categoria.",
        outcome: "Uma fonte de verdade",
      },
    ],
    steps: [
      {
        title: "Padronize o cadastro de peças",
        description:
          "SKU estável, marca, aplicação (carro/moto) e código de barras. Sem cadastro duplicado no balcão.",
      },
      {
        title: "Leitura na entrada e na saída",
        description:
          "Escaneie no recebimento e na venda. O saldo deixa de depender de digitação.",
      },
      {
        title: "Alerte e inventarie o que mais gira",
        description:
          "Estoque mínimo nos top sellers e contagem cíclica nos 20% que mais vendem.",
      },
    ],
    faqs: [
      {
        q: "Serve para autopeças e para loja de peças de moto?",
        a: "Sim. O fluxo é o mesmo: muitos SKUs, balcão rápido e necessidade de saldo confiável. A diferença é o catálogo (carro vs moto), não o processo.",
      },
      {
        q: "Preciso de integração com catálogo de montadora?",
        a: "No começo o que mais resolve é cadastro limpo, barras e movimentação. Integrações avançadas podem vir depois; o ganho imediato é parar a planilha e a ruptura surpresa.",
      },
      {
        q: "E se eu tenho loja + depósito?",
        a: "Use locais e transferência entre eles. O balcão vê o que está na loja; o depósito controla o fundo de estoque.",
      },
      {
        q: "Código de barras ou QR Code?",
        a: "Ambos funcionam. Barras é clássico em peça; QR também serve. O importante é ler no ato da movimentação.",
      },
    ],
    relatedBlogHref: "/blog/estoque-autopecas-pecas-moto-controle",
    relatedBlogLabel: "Estoque para autopeças e peças de moto",
  },
  telecomunicacoes: {
    proofHeadline: "Kits de campo que não “somem” na van",
    proofSubhead:
      "ISPs, integradoras e times de telecom usam check-in/check-out para saber o que cada técnico levou — e o que voltou ao depósito.",
    stats: [
      { value: "In/Out", label: "Check-in e check-out" },
      { value: "QR", label: "Etiqueta no ativo" },
      { value: "OS", label: "Por técnico ou OS" },
      { value: "−", label: "Menos kit incompleto" },
    ],
    casesHeadline: "Padrões de quem opera equipamentos de telecom",
    casesSubhead:
      "Perfis de operação comuns em empresas de telecomunicações que saem da planilha.",
    cases: [
      {
        role: "Depósito / almoxarifado",
        companyType: "ISP ou provedor regional",
        quote:
          "Cada ONT e kit de instalação sai com técnico e OS. No retorno, o check-in mostra o que ficou no cliente e o que voltou — sem briga no grupo.",
        outcome: "OS + responsável na retirada",
      },
      {
        role: "Operações de campo",
        companyType: "Integradora / instalação",
        quote:
          "Ferramentas e rádios com QR. Técnico retira no app; o estoque para de depender de quem “lembra o que estava na van”.",
        outcome: "Campo e depósito no mesmo histórico",
      },
      {
        role: "Supervisão técnica",
        companyType: "Rede multi-equipe",
        quote:
          "Status disponível, em campo e manutenção evita reutilizar equipamento que ainda não voltou ou está quebrado.",
        outcome: "Menos retrabalho e extravio",
      },
    ],
    steps: [
      {
        title: "Etiquete ativos e kits de instalação",
        description:
          "Comece por ONT, roteador, rádio, ferramenta cara e kits que sobem na van todo dia.",
      },
      {
        title: "Check-out por técnico e OS",
        description:
          "Escaneie, associe responsável e ordem de serviço. Sem retirada informal no depósito.",
      },
      {
        title: "Check-in no retorno",
        description:
          "Conferira o que voltou, o que ficou instalado e o que foi para manutenção — no mesmo dia.",
      },
    ],
    faqs: [
      {
        q: "Serve para ISP e para integradora?",
        a: "Sim. O fluxo é o mesmo: equipamento e kit saem do depósito com técnico e precisam de trilha no retorno ou na instalação no cliente.",
      },
      {
        q: "Como tratar equipamento que fica no cliente?",
        a: "No check-in/baixa, registre como instalado ou transferido para o cliente. O importante é não deixar o item “fantasma” no depósito.",
      },
      {
        q: "Planilha de saída de material resolve?",
        a: "Até poucas equipes, resolve. Com dezenas de técnicos e vans, a planilha atrasa e perde versão — e a ONT sumida custa caro.",
      },
      {
        q: "Funciona no celular na rua?",
        a: "Sim. Check-out e conferência são pensados para depósito e campo, não só desktop.",
      },
    ],
    relatedBlogHref: "/blog/controle-equipamentos-telecom-kits-campo",
    relatedBlogLabel: "Controle de equipamentos de telecom e kits de campo",
  },
};

export function getIndustrySocialProof(slug: string): IndustrySocialProof {
  return PROOF_BY_SLUG[slug] ?? DEFAULT_PROOF;
}
