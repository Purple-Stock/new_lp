import { CONSTRUCTION_CLUSTER_POSTS } from "@/lib/construction-cluster";

export const CONSTRUCTION_PROOF = {
  proofHeadline: "Almoxarifado de obra que o canteiro confia",
  proofSubhead:
    "Construtoras e empreiteiras usam saldo por canteiro, retirada com responsável e QR Code para saber o que entrou na obra — e o que saiu sem registro.",
  stats: [
    { value: "Obra", label: "Saldo por canteiro" },
    { value: "QR", label: "Leitura no celular" },
    { value: "In/Out", label: "Material e ferramenta" },
    { value: "−", label: "Menos compra emergencial" },
  ],
  casesHeadline: "Padrões de quem opera canteiro de verdade",
  casesSubhead:
    "Perfis de almoxarife, engenharia e encarregado — sem inventar depoimento de marca.",
  cases: [
    {
      role: "Almoxarife",
      companyType: "Construtora com várias obras",
      quote:
        "Cada canteiro virou um local. Cimento, aço e hidráulica entram com leitura. A retirada leva responsável — o grupo do WhatsApp parou de ser o estoque.",
      outcome: "Uma fonte de verdade por obra",
    },
    {
      role: "Engenharia / suprimentos",
      companyType: "Empreiteira de reforma e fit-out",
      quote:
        "Ferramenta cara sai com check-out. No retorno, o check-in mostra o que ficou no andar. Transferência entre obras deixa de ser ‘leva na kombi e anota depois’.",
      outcome: "Ferramenta com dono, material com destino",
    },
    {
      role: "Encarregado",
      companyType: "Obra residencial de pequeno porte",
      quote:
        "A frente não para por falta de bloco que ‘tinha na planilha’. Estoque baixo no canteiro avisa antes da compra emergencial no depósito da esquina.",
      outcome: "Menos parada e menos desperdício",
    },
  ],
  steps: [
    {
      title: "Separe central e canteiro",
      description:
        "Cadastre a central de materiais e cada obra como local. O saldo da obra A não se mistura com o da obra B.",
    },
    {
      title: "Leia na entrada e na retirada",
      description:
        "Escaneie a entrega do fornecedor e a saída para a frente de serviço. Sem ‘anota depois’ no caderno do almoxarife.",
    },
    {
      title: "Feche ferramenta e inventarie o que falta",
      description:
        "Check-in no retorno da ferramenta. Alerta de mínimo no cimento, aço e EPI que param a obra.",
    },
  ],
  faqs: [
    {
      q: "O que é almoxarifado de obra?",
      a: "É o estoque do canteiro: materiais, ferramentas e EPI ligados a uma obra ou centro de custo. Não é o estoque de uma loja. O fluxo é entrada da entrega, retirada com responsável e conferência do que sobrou ou sumiu.",
    },
    {
      q: "Como controlar materiais de construção por canteiro?",
      a: "Trate cada obra como um local. Dê entrada na entrega do fornecedor, baixe na retirada para a frente de serviço e transfira saldo quando o material mudar de canteiro. QR Code no celular evita a planilha paralela.",
    },
    {
      q: "Serve para construtora pequena e empreiteira?",
      a: "Sim. O ganho aparece com duas obras, um almoxarife e várias mãos retirando item. Não é preciso um ERP de construtora no primeiro dia — precisa de saldo por obra e histórico de quem retirou.",
    },
    {
      q: "Planilha resolve o estoque da obra?",
      a: "Resolve até uma obra e pouca gente. Com dois canteiros, ferramenta circulando e entrega todo dia, a planilha perde versão: o engenheiro vê um número, o almoxarife outro, e a compra emergencial vira rotina.",
    },
    {
      q: "Preciso de um ERP de construtora no primeiro dia?",
      a: "Não para o fluxo operacional de entrada, saída e ferramenta. O Purple Stock cobre movimentação, QR e saldo por local. Orçamento, medições e fiscal ficam no sistema que você já usa, se houver.",
    },
    {
      q: "Como controlar ferramentas e EPI no canteiro?",
      a: "Etiquete o que dói perder (furadeira, andaime, nível) e faça check-out com responsável. EPI pode ter controle mais simples de quantidade; o extravio caro é o que justifica etiqueta e histórico.",
    },
  ],
  relatedBlogHref: CONSTRUCTION_CLUSTER_POSTS[0].href,
  relatedBlogLabel: CONSTRUCTION_CLUSTER_POSTS[0].label,
  relatedPosts: CONSTRUCTION_CLUSTER_POSTS.map((post) => ({
    href: post.href,
    label: post.label,
  })),
};
