/**
 * Money page: sistema de controle de estoque online.
 * H1 nichado (faixa 50); irmã a head de 5 mil no mesmo HTML.
 */

import type { MoneyPageFaq, MoneyPageSection } from "@/lib/product-money-pages";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export const SISTEMA_H1 =
  "Sistema de controle de estoque online com QR no celular";

export const SISTEMA_LEDE = `Sistema de controle de estoque online para PME: saldo ao vivo, entrada e saída no celular, QR no item. ${TEAM_PLAN_TRIAL_DAYS} dias grátis, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, sem fidelidade.`;

export const SISTEMA_SECTIONS: MoneyPageSection[] = [
  {
    title: "O que é um sistema de controle de estoque online",
    paragraphs: [
      "Um sistema de controle de estoque online guarda o saldo na nuvem para o time inteiro ver o mesmo número. Não é uma planilha no Drive com nome “final_v3”. Não é um software que só o comprador abre no escritório.",
      "No Purple Stock o sistema de controle de estoque roda no celular e no computador. Cadastro uma vez. Movimento na hora. Histórico por item, local e pessoa. Quem está no canteiro, na van ou no depósito de trás lança; quem gerencia vê o agora.",
      "Online aqui significa saldo compartilhado. A rotina principal precisa de rede para o resto do time ver a entrada na hora. Se um trecho da operação fica sem sinal, fale no WhatsApp — não prometemos milagre de galpão isolado.",
    ],
  },
  {
    title: "Sistema de controle de estoque vs planilha",
    paragraphs: [
      "Planilha resolve estoque pequeno com uma pessoa. Quando nasce o segundo local, o segundo usuário ou o item que circula, o Excel vira versão divergente. O sistema de controle de estoque tem um dono do agora: o último lançamento.",
      "Sistemas de controle de estoque e sistema para controle de estoque são a mesma busca. A diferença útil é o recorte. ERP de construtora e software de operador logístico resolvem outra dor. Aqui o recorte é QR, check-in e almoxarifado para PME.",
      "Você não desliga a planilha no sábado. Começa pelos itens que doem, convive uns dias com os dois e apaga a aba quando o time já lança no celular. O comparativo Purple Stock vs planilha detalha essa migração.",
    ],
  },
  {
    title: "Sistema de entrada e saída de mercadoria",
    paragraphs: [
      "Sistema de entrada e saída de mercadoria é o coração do controle. Entrada na entrega. Saída com responsável. Transferência entre locais. Ajuste quando o físico não bate. Contagem no endereço.",
      "Sem esses cinco movimentos, “sistema de estoque” vira lista. Com eles, o relatório deixa de ser copiar coluna. Você vê o que entrou esta semana, o que saiu por pessoa e o que está parado num local.",
      "Mercadoria aqui é o item da operação: peça, material, kit, ferramenta, equipamento. O lançamento é o mesmo. O que muda é se o item consome ou se precisa voltar com check-in.",
    ],
  },
  {
    title: "Time no celular, saldo ao vivo",
    paragraphs: [
      "O aplicativo para controle de estoque é a porta do sistema. Operator lê o QR e lança. Viewer consulta. Admin configura locais, usuários e itens. Todos no mesmo time. Preço por equipe, não por assento.",
      "Saldo ao vivo é o número depois do último movimento, não o fechamento de sexta. Ruptura aparece antes da frente de serviço parar. Item parado num canteiro aparece antes da compra emergencial.",
      "Relatório no mesmo sistema: movimentação por local, por pessoa, por período. Isso alimenta reposição e a conversa de “quem ficou com o kit” sem montar aba paralela.",
    ],
  },
  {
    title: "O que o sistema de controle de estoque não faz",
    paragraphs: [
      "Não emite nota fiscal. Não substitui o caixa da loja. Não opera galpão de operador logístico. Se a dor é conferência, saldo por local e check-in de equipamento, o recorte é este.",
      "Também não inventa acurácia no primeiro dia. Acurácia sobe quando a retirada tem responsável e a entrada acontece na hora da entrega. O software guarda o hábito; não substitui o hábito.",
      "Quem precisa de frente de loja, cupom e nota continua com o sistema fiscal que já usa. O Purple Stock convive com ele. O estoque de trás e o almoxarifado passam a ter dono.",
    ],
  },
  {
    title: "Como implantar o sistema sem parar a operação",
    paragraphs: [
      "Dias 1–3: locais reais e pessoas que movimentam. Não cadastre o universo. Dias 4–7: curva A, QR no que some, só entrada e saída. Dias 8–12: transferência e uma contagem curta. Dias 13–15: decida qual aba da planilha morre.",
      "Loja, oficina, canteiro e locação cabem no mesmo produto com locais diferentes. A money page de estoque para loja aprofunda o recorte de balcão. A de ferramentas aprofunda o empréstimo. Esta página é o pilar: sistema de controle de estoque online.",
      `Preço público: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade. Abra o teste em app.purplestock.com.br ou fale no WhatsApp com a operação real — um canteiro, um depósito, um set.`,
    ],
  },
];

export const SISTEMA_FAQS: MoneyPageFaq[] = [
  {
    q: "O que é um sistema de controle de estoque online?",
    a: "É o software em que o time registra entrada, saída, transferência e inventário e vê o mesmo saldo, de qualquer lugar com rede. No Purple Stock isso cabe no celular, com QR Code.",
  },
  {
    q: "Sistema de controle de estoque substitui o Excel?",
    a: "Substitui quando o time já discute saldo no grupo e a planilha diverge. No começo os dois convivem. O comparativo vs planilha mostra os sinais de que a aba já custa caro.",
  },
  {
    q: "Como funciona a entrada e saída de mercadoria?",
    a: "Entrada na entrega, saída com responsável, transferência entre locais, ajuste e contagem. Cada movimento vira histórico. Sem isso, o sistema é só uma lista de SKU.",
  },
  {
    q: "Preciso instalar algum programa no computador?",
    a: "Não. O sistema de controle de estoque online abre no navegador e no aplicativo do celular. O time opera onde está o físico.",
  },
  {
    q: "Quanto custa o sistema de controle de estoque?",
    a: `O plano de entrada é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade.`,
  },
];
