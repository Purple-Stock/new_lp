/**
 * Money page: controle de estoque com código de barras.
 * Recorte: cadastro + etiqueta + leitura. Sem gerador PNG.
 */

import type { MoneyPageFaq, MoneyPageSection } from "@/lib/product-money-pages";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export const CODIGO_BARRAS_H1 =
  "Controle de estoque com código de barras no celular";

export const CODIGO_BARRAS_LEDE = `Controle de estoque com código de barras é cadastro, etiqueta e leitura na entrada e na saída. No Purple Stock a câmera do celular lê barras e QR no mesmo item, com histórico por responsável. ${TEAM_PLAN_TRIAL_DAYS} dias grátis, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const CODIGO_BARRAS_SECTIONS: MoneyPageSection[] = [
  {
    title: "O que é controle de estoque com código de barras",
    paragraphs: [
      "Quem busca controle de estoque com código de barras quer parar de digitar SKU. O item entra, sai, muda de local ou é contado — e a leitura confirma o que a mão pegou, sem recado no grupo.",
      "No Purple Stock o fluxo é um só: você cadastra o item, cola a etiqueta e a operação vira leitura + quantidade + responsável + local. Cada movimento entra no histórico. O saldo que o time vê é o saldo da prateleira, não a última célula editada.",
      "Código de barras no estoque não é um projeto de coletor caro. É o atalho para o almoxarife, o encarregado e o operador no balcão registrarem o mesmo item, no mesmo sistema, no celular que já está no bolso.",
    ],
  },
  {
    title: "Cadastro, etiqueta e leitura na entrada e na saída",
    paragraphs: [
      "Comece pelo cadastro estável: nome, SKU, unidade e local. Sem SKU único, a etiqueta vira enfeite. Com SKU único, a leitura na entrega registra a entrada; a leitura na retirada registra a saída.",
      "A etiqueta fica no item, na caixa ou no endereço — o que a operação realmente pega. Ferramenta cara no corpo da peça. Caixa de parafuso na face que aparece na prateleira. Kit de campo na maleta. O critério é: a pessoa lê o que está nas mãos, não o que está no escritório.",
      "Entrada acontece na hora da entrega. Saída leva responsável. Transferência entre depósito e loja, canteiro e central, van e oficina, vira lançamento. Contagem lê o código no endereço. Ajustes ficam com nome de quem conferiu, não com “alguém mexeu”.",
    ],
  },
  {
    title: "QR e código de barras no mesmo item",
    paragraphs: [
      "Muita PME mistura o código que veio do fornecedor com um identificador interno. Os dois cabem no mesmo cadastro. O que importa é o item ter um código estável e um local.",
      "Código de barras resolve leitura rápida de SKU. QR Code carrega o atalho para a ficha, o check-in de equipamento e o endereço. No celular, a câmera lê os dois. Você não precisa escolher um padrão no dia um e jogar o outro fora.",
      "Se o fornecedor já manda EAN na caixa, use na entrada. Se a ferramenta não tem código de fábrica, imprima o QR interno e cole. O controle de estoque com código de barras vive dessa combinação, não de um formato único.",
    ],
  },
  {
    title: "Câmera do celular, sem coletor dedicado",
    paragraphs: [
      "A leitura usa a câmera do telefone. Coletor dedicado só entra se a operação já tiver um e quiser manter. Para PME, o celular cobre cadastro, conferência e inventário cíclico no endereço.",
      "Inventário deixa de ser lista impressa. O encarregado lê o código no local e confirma a quantidade. Divergência aparece no mesmo dia, com nome de quem conferiu. Isso vale para almoxarifado, oficina, canteiro e estoque de trás da loja.",
      "O time inteiro da operação entra no mesmo plano. Admin configura locais e usuários, operator movimenta, viewer consulta saldo. O preço é por equipe, não por pistola nem por assento.",
    ],
  },
  {
    title: "Para quem esse controle serve",
    paragraphs: [
      "Serve para PME brasileira com estoque físico: loja com depósito, construtora com almoxarifado, oficina, locadora de equipamento, clínica, autopeças e operação que hoje anota no caderno ou na planilha.",
      "O recorte é estoque e check-in. Nota fiscal e caixa de frente de loja ficam no sistema que você já usa. O Purple Stock começa quando o item precisa de saldo por local e de responsável na retirada.",
      "Não comece pelos três mil SKUs. Comece pelo que some, pelo que para a frente de serviço e pelo que tem giro. Cadastre esses itens, cole a etiqueta, treine só entrada e saída. O restante entra quando o hábito já existe.",
    ],
  },
  {
    title: "Como implantar o código de barras em uma semana",
    paragraphs: [
      "Dias 1–2: liste locais reais e as pessoas que movimentam. Crie o time. Defina SKU e o que vai na etiqueta.",
      "Dias 3–5: cadastre a curva A, imprima as etiquetas e cole no físico. Treine entrada da entrega e saída com responsável. Nada de inventário geral no dia um.",
      `Dias 6–7: faça uma contagem curta no endereço que mais erra. Compare com o caderno antigo. A divergência é treino, não motivo para voltar atrás. ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade. Abra o teste ou fale no WhatsApp com o fluxo da sua operação.`,
    ],
  },
];

export const CODIGO_BARRAS_FAQS: MoneyPageFaq[] = [
  {
    q: "O que é controle de estoque com código de barras?",
    a: "É registrar entrada, saída, transferência e inventário lendo a etiqueta do item, em vez de digitar o SKU. No Purple Stock a câmera do celular lê o código e grava histórico por local e responsável.",
  },
  {
    q: "Preciso de coletor de código de barras?",
    a: "Não. A câmera do celular lê código de barras e QR Code no cadastro e na movimentação. Coletor dedicado só entra se a operação já tiver um.",
  },
  {
    q: "Dá para usar QR e código de barras juntos?",
    a: "Sim. O mesmo item pode ter o EAN do fornecedor e um QR interno. O cadastro guarda os dois; a leitura encontra o item nos dois caminhos.",
  },
  {
    q: "Imprimir a etiqueta já controla o estoque?",
    a: "Não. A etiqueta só identifica. Controle aparece quando a leitura entra na rotina de entrada, saída e contagem, com responsável e local.",
  },
  {
    q: "Quanto custa o controle de estoque com código de barras?",
    a: `O plano de entrada é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade. Você cancela quando quiser.`,
  },
];
