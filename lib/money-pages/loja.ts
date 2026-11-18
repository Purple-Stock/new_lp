/**
 * Money page: sistema de estoque para loja.
 * Recorte: saldo de trás / SKU / ruptura. Sem caixa, sem nota.
 */

import type { MoneyPageFaq, MoneyPageSection } from "@/lib/product-money-pages";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export const LOJA_H1 =
  "Sistema de estoque para loja: saldo no celular, sem caixa";

export const LOJA_LEDE = `Sistema de estoque para loja com QR no depósito de trás: SKU, conferência e menos ruptura. Não substitui o caixa nem a nota. ${TEAM_PLAN_TRIAL_DAYS} dias grátis, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const LOJA_SECTIONS: MoneyPageSection[] = [
  {
    title: "Sistema de estoque para loja: o recorte",
    paragraphs: [
      "Quem busca sistema de estoque para loja quase sempre mistura duas dores. Uma é o caixa. A outra é o saldo de trás: o SKU que o vendedor jura que tem e a prateleira que está vazia. O Purple Stock resolve a segunda.",
      "Sistema de estoque para loja, neste site, é conferência, entrada da nota de compra no depósito, transferência loja–depósito e inventário cíclico no celular. Sem caixa. Sem cupom. Sem nota de saída.",
      "O recorte existe de propósito. Loja pequena brasileira já tem um sistema fiscal. O furo é o estoque físico: peça no fundo, caixa no corredor, segundo endereço, funcionário que vende sem lançar. Sem caixa no recorte, o time treina só o depósito — e o saldo passa a bater com a prateleira.",
    ],
  },
  {
    title: "Saldo de trás, SKU e ruptura",
    paragraphs: [
      "Cadastre o SKU uma vez. Cole QR ou código de barras no item ou na caixa. A entrada da mercadoria acontece no recebimento, não no fim do dia no caderno. A saída do depósito para o balcão é transferência, não “o fulano levou”.",
      "Ruptura de peça popular dói no caixa, mas nasce no saldo mentiroso. Alerta de mínimo por item avisa antes. Inventário curto nos SKUs de giro, toda semana, pega a divergência enquanto ainda cabe numa tarde.",
      "Multi-loja ou loja + depósito usam locais nativos. O mesmo time vê o saldo de cada endereço. Comprar duas vezes a mesma peça porque cada loja tem a sua planilha é o custo que o sistema corta.",
    ],
  },
  {
    title: "Conferência no celular",
    paragraphs: [
      "A câmera lê a etiqueta. O operator no depósito confirma quantidade. O vendedor consulta se tem no fundo sem gritar para o estoquista. Viewer no mesmo time, sem poder lançar se você não quiser.",
      "Conferência de entrega deixa de ser “bateu com a nota no olho”. Lê o código, confirma, histórico fica. Divergência de fornecedor aparece no lançamento, com nome de quem recebeu.",
      "Não precisa de coletor. O telefone que já está no bolso cobre o fluxo. Coletor só entra se a loja já tiver um e quiser manter.",
    ],
  },
  {
    title: "Loja com depósito e mais de um local",
    paragraphs: [
      "O padrão brasileiro é loja na frente e estoque atrás, ou loja e galpão a três ruas. Sem local no sistema, transferência é recado. Com local, o saldo de cada endereço é o saldo.",
      "Autopeças, material de construção, equipamentos e operações com SKU estável se encaixam. A vertical de autopeças aprofunda peça de carro e moto. Esta página é o sistema de estoque para loja no recorte genérico de saldo.",
      "Papéis: admin configura, operator lança, viewer consulta. O plano é por equipe. Dois vendedores e um estoquista entram no mesmo valor de tabela.",
    ],
  },
  {
    title: "O que este sistema não substitui",
    paragraphs: [
      "Não substitui o caixa. Não substitui a nota fiscal. Frente de loja, cupom e obrigação fiscal continuam onde já estão. O Purple Stock convive com esse sistema; não tenta engolir o checkout.",
      "Também não é catálogo de vitrine nem loja virtual. O trabalho é o físico: o que tem, onde está, quem mexeu. Se a dor é só emitir venda, esta página não é a resposta.",
      "Quem precisa de frente de caixa, integração fiscal pesada ou operador logístico escolhe outra ferramenta. Quem precisa de saldo confiável no depósito de trás testa daqui.",
    ],
  },
  {
    title: "Como começar pela curva A da loja",
    paragraphs: [
      "Liste os SKUs que param a venda quando faltam. Cadastre esses primeiro. Cole etiqueta. Treine recebimento e transferência para o balcão. Inventário geral fica para depois.",
      "Na primeira semana o time só lança esses itens. Na segunda, o segundo endereço. Quando o saldo dos críticos bater, o restante do cadastro entra sem drama. Projeto gigante no dia um trava loja pequena.",
      `Preço público: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade. Leia o aplicativo para controle de estoque e o comparativo vs planilha. Fale no WhatsApp se a operação tiver mais de um ponto de venda físico.`,
    ],
  },
];

export const LOJA_FAQS: MoneyPageFaq[] = [
  {
    q: "Sistema de estoque para loja serve para loja pequena?",
    a: "Sim, quando o furo é o saldo de trás: SKU, depósito e ruptura. Uma pessoa com um local ainda pode viver de planilha. O sistema passa a valer com o segundo endereço ou o segundo usuário.",
  },
  {
    q: "O Purple Stock substitui o caixa da loja?",
    a: "Não. Não substitui caixa nem nota fiscal. O recorte é estoque físico com QR no celular. O sistema fiscal que você já usa continua.",
  },
  {
    q: "Dá para ter loja e depósito no mesmo sistema?",
    a: "Sim. Cada endereço é um local. Transferência entre eles vira lançamento, com histórico. O saldo de cada ponto aparece separado.",
  },
  {
    q: "Serve para autopeças?",
    a: "Sim. SKU estável, código de barras e reposição combinam com o recorte. A vertical de autopeças aprofunda o setor; esta página é o sistema de estoque para loja em geral.",
  },
  {
    q: "Quanto custa o sistema de estoque para loja?",
    a: `O plano de entrada é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade.`,
  },
];
