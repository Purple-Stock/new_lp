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
};

export function getIndustrySocialProof(slug: string): IndustrySocialProof {
  return PROOF_BY_SLUG[slug] ?? DEFAULT_PROOF;
}
