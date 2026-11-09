/**
 * Compare money pages for BR inventory/ERP queries (Bling, ContaEstoque).
 * Recorte: locação + QR por unidade. Sem nota, sem caixa de loja.
 */

import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";
import type {
  CompareRow,
  MoneyPageFaq,
  MoneyPageSection,
} from "@/lib/product-money-pages";

export const BLING_COMPARE_H1 =
  "Purple Stock como alternativa a Bling para locação";

export const BLING_COMPARE_LEDE = `Quem busca alternativa a Bling na locação costuma ter ERP de loja e ainda anotar maleta no papel. O Purple Stock cobre QR por unidade, check-in e saldo por local a ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, com ${TEAM_PLAN_TRIAL_DAYS} dias de teste.`;

export const BLING_COMPARE_SECTIONS: MoneyPageSection[] = [
  {
    title: "O recorte de cada ferramenta",
    paragraphs: [
      "Bling nasceu para loja: cadastro de produto, pedido, estoque em quantidade e nota fiscal. Serve quem vende item que sai e não volta. Locadora de audiovisual, casa de eventos e almoxarifado de obra trabalham outra unidade: o corpo da câmera, o par de LED, a furadeira. Cada peça tem número, responsável e data de volta.",
      "Esse fluxo cabe no Purple Stock com QR colado na maleta e leitura no celular. Quem retirou, quando retirou, para qual job. Quem devolveu, o que faltou, o que avariou. O saldo deixa de ser palpite no grupo.",
      "Quando a locadora também tem balcão que vende cabo e fita, o Bling pode continuar na venda. O kit que sai para o palco entra no Purple Stock. Dois recortes, uma operação. O erro é forçar o ERP de loja a virar check-in de equipamento.",
    ],
  },
  {
    title: "QR por unidade versus quantidade do SKU",
    paragraphs: [
      "No Bling o SKU é o produto. Dez pars de LED iguais são quantidade 10. Na locação esses dez pars têm série, case e saúde diferente. QR por unidade deixa a produtora fazer check-out do corpo A7-03 e check-in do mesmo corpo. A perda aparece no mesmo dia, com nome.",
      "Imprima o código no gerador grátis, cole na peça ou na maleta e leia no celular. Code 128 e QR cabem no mesmo cadastro. O que importa é o identificador estável e o local: depósito, van, palco, canteiro.",
      "Quantidade de SKU continua útil para consumível. Fita, cabo genérico, parafuso. Peça cara e peça que volta pedem unidade. Misturar os dois no mesmo campo de quantidade é o que some lente no fim do set.",
    ],
  },
  {
    title: "Check-in, maleta e palco",
    paragraphs: [
      "Check-out associa pessoa e job. Check-in compara o que saiu com o que voltou. Avaria entra no histórico no mesmo dia. Palco, van e depósito viram local. Transferência é lançamento, não recado.",
      "A maleta vira endereço. O técnico lê o QR da case e vê o conteúdo esperado. Faltou um rádio, o sistema mostra. Isso é o dia a dia de locadora e de evento, não o pedido da loja virtual.",
      "O mesmo padrão serve para ferramenta de obra. Furadeira sai com o encarregado, volta no almoxarifado, ou não volta. O Bling registra venda; a locação precisa de responsável.",
    ],
  },
  {
    title: "Almoxarifado e locação no mesmo hábito",
    paragraphs: [
      "Canteiro e locadora de AV compartilham o hábito: o item sai com nome e precisa voltar. Quantidade de loja não captura “o João levou o kit para o job X”. Purple Stock registra local, responsável e horário.",
      "Comece pelos itens que doem perder. Cadastre, imprima a etiqueta, convide operator. Na primeira semana só entrada e saída desses itens. Na segunda, transferência e contagem. O restante do cadastro entra quando o hábito já existe.",
      "Quem ainda está na planilha lê o comparativo vs Excel. Quem já usa Bling na loja e sofre na maleta abre o teste de 7 dias em app.purplestock.com.br.",
    ],
  },
  {
    title: "Preço e o que cada um cobra",
    paragraphs: [
      `O plano público do Purple Stock é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe por mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade. O preço é por time, não por assento.`,
      "Bling tem os planos dele para loja, nota e pedido. Compare recorte antes de comparar mensalidade. Uma lente sumida ou um par de LED comprado duas vezes paga meses de sistema de estoque.",
      "White-label e fluxo próprio saem do preço de tabela. O site fala o plano genérico. Fale no WhatsApp se a operação tiver pátio, obra ou frota com regra própria.",
    ],
  },
  {
    title: "Como decidir em uma tarde",
    paragraphs: [
      "Se a dor é pedido da loja e nota fiscal, o Bling continua. Se a dor é unidade que circula, abra o teste de 7 dias. Importe SKU, imprima as etiquetas, faça o primeiro check-out na mesma tarde.",
      "Rode os dois em paralelo nos itens críticos. Quando o time confiar no celular para maleta e palco, o papel da locação vira arquivo morto. A loja pode seguir no ERP que já emite a nota.",
      "Leia também o comparativo com planilha e o gerador de código de barras. A etiqueta é o primeiro passo; o histórico por unidade é o que para a perda.",
    ],
  },
];

export const BLING_COMPARE_FAQS: MoneyPageFaq[] = [
  {
    q: "Purple Stock substitui o Bling?",
    a: "No recorte de locação e almoxarifado, sim para saldo por unidade, QR e check-in. Na loja e na nota fiscal, o Bling continua. São recortes diferentes.",
  },
  {
    q: "Dá para usar os dois ao mesmo tempo?",
    a: "Sim. Venda e nota no Bling; maleta, palco e ferramenta no Purple Stock. O que não funciona é forçar quantidade de SKU a virar serial.",
  },
  {
    q: "A locadora precisa de coletor?",
    a: "Não. A câmera do celular lê QR e código de barras. Coletor só entra se a operação já tiver um.",
  },
  {
    q: "Quanto custa o Purple Stock?",
    a: `O plano de entrada é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade.`,
  },
  {
    q: "Consigo imprimir as etiquetas antes de assinar?",
    a: "Sim. O gerador grátis imprime lote em A4 ou térmica. O teste de 7 dias entra quando você quer histórico de quem levou a peça.",
  },
];

export const BLING_COMPARE_ROWS: CompareRow[] = [
  {
    label: "Recorte",
    planilha: "Loja, pedido e nota",
    purple: "Locação e almoxarifado",
  },
  {
    label: "Unidade",
    planilha: "Quantidade do SKU",
    purple: "QR por peça",
  },
  {
    label: "Retorno",
    planilha: "Venda sem volta",
    purple: "Check-in da maleta",
  },
  {
    label: "Responsável",
    planilha: "Pedido da loja",
    purple: "Usuário na saída",
  },
  {
    label: "Local",
    planilha: "Depósito da loja",
    purple: "Palco, van, canteiro",
  },
  {
    label: "Etiqueta",
    planilha: "Código do produto",
    purple: "Folha A4 e QR",
  },
  {
    label: "Time",
    planilha: "Plano da loja",
    purple: `${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} / equipe`,
  },
  {
    label: "Teste",
    planilha: "Plano Bling",
    purple: `${TEAM_PLAN_TRIAL_DAYS} dias grátis`,
  },
];

export const CONTAESTOQUE_COMPARE_H1 =
  "Purple Stock vs ContaEstoque: locação e maleta";

export const CONTAESTOQUE_COMPARE_LEDE = `ContaEstoque é aplicativo de estoque para loja e depósito. Purple Stock cobre QR por unidade, check-in, maleta e palco na locação, a ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, com ${TEAM_PLAN_TRIAL_DAYS} dias de teste.`;

export const CONTAESTOQUE_COMPARE_SECTIONS: MoneyPageSection[] = [
  {
    title: "Dois apps de estoque, dois recortes",
    paragraphs: [
      "ContaEstoque atende quem conta produto na prateleira: entrada da nota, saída da venda, saldo em quantidade. Purple Stock atende quem conta peça que sai e volta: locadora, evento, almoxarifado de obra, kit de telecom.",
      "A diferença aparece no check-in. No app de loja o item vendeu. Na locação o item precisa voltar com responsável. Maleta, palco e van são locais, não só um depósito atrás do balcão.",
      "Se a operação é mercearia ou autopeças de giro puro, o app de loja resolve. Se a operação é câmera, som, LED, ferramenta de canteiro ou rádio de campo, o QR por unidade muda o dia.",
    ],
  },
  {
    title: "QR, maleta e palco",
    paragraphs: [
      "Cole o QR na case. O técnico lê e vê o conteúdo esperado. Faltou um rádio, o histórico mostra quem fechou a maleta. No palco, transferência entre locais vira lançamento.",
      "Check-out associa pessoa e job. Check-in fecha o ciclo. Avaria no mesmo dia. Isso é o fluxo de locação e de evento. App de loja registra quantidade; locação registra unidade.",
      "Imprima o lote no gerador grátis (A4 ou térmica), cole, leia no celular. O teste de 7 dias começa quando o primeiro kit sai com nome.",
    ],
  },
  {
    title: "Quem movimenta e quem vê o saldo",
    paragraphs: [
      "Admin configura locais e usuários. Operator movimenta no celular. Viewer consulta saldo. O plano é por equipe, não por assento. Freelancer do set ganha login de operator no job e perde o acesso depois.",
      "ContaEstoque também tem time. O recorte muda no objeto: produto da loja versus peça que circula. “Acho que o João pegou” some quando a saída leva usuário logado.",
      "Inventário cíclico lê o QR no endereço. Divergência no mesmo dia. Contagem de fim de mês em papel continua possível; deixa de ser o único momento em que o saldo aparece.",
    ],
  },
  {
    title: "Almoxarifado de obra e locadora no mesmo padrão",
    paragraphs: [
      "Furadeira no canteiro e lente no set usam o mesmo hábito. Saiu com responsável, voltou ou não voltou. ContaEstoque conta estoque de loja; Purple Stock conta o ciclo da peça.",
      "Comece pelos itens que param a frente de serviço. Cadastre, imprima, convide o time. Uma semana de entrada e saída. Depois transferência e contagem.",
      "Multi-local entra cedo: depósito, van, palco, canteiro. Sem local no sistema, transferência vira recado. Com local, o saldo de cada endereço fecha sozinho.",
    ],
  },
  {
    title: "Preço público e teste",
    paragraphs: [
      `Purple Stock: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade. ContaEstoque tem a tabela dele para loja. Compare o recorte da maleta, não só o valor da mensalidade.`,
      "Uma peça cara sumida paga meses de sistema. O custo escondido da locação é o item que saiu sem nome. O app cobra o hábito de ler o QR na porta.",
      "White-label e pátio com regra própria saem do preço de tabela. Fale no WhatsApp. O site descreve o plano genérico.",
    ],
  },
  {
    title: "Como testar o recorte em 7 dias",
    paragraphs: [
      "Dia 1: locais reais e as pessoas que mexem no físico. Dia 2: cadastro dos itens que doem e impressão das etiquetas. Dia 3: primeiro check-out. O restante da semana é hábito.",
      "Rode o app de loja em paralelo se a venda continuar. A locação sai do papel quando o time confiar no celular para maleta e palco.",
      "Leia o comparativo vs planilha e vs Bling se a operação misturar loja e locação. O gerador de código de barras imprime o lote antes do cadastro no app.",
    ],
  },
];

export const CONTAESTOQUE_COMPARE_FAQS: MoneyPageFaq[] = [
  {
    q: "ContaEstoque e Purple Stock fazem a mesma coisa?",
    a: "Os dois controlam estoque. ContaEstoque recorta loja e quantidade. Purple Stock recorta locação, QR por unidade, check-in, maleta e palco.",
  },
  {
    q: "Serve para evento e produtora?",
    a: "Sim. Som, luz, LED e câmera saem com responsável e voltam com conferência. Esse é o fluxo de check-in.",
  },
  {
    q: "Preciso de coletor de código de barras?",
    a: "Não. A câmera do celular lê QR e código de barras no cadastro e na movimentação.",
  },
  {
    q: "Quanto custa?",
    a: `O plano de entrada é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade.`,
  },
  {
    q: "Dá para imprimir etiqueta antes de criar conta?",
    a: "Sim. O gerador grátis imprime lote em A4 ou térmica. O teste de 7 dias entra para o histórico de quem levou a peça.",
  },
];

export const CONTAESTOQUE_COMPARE_ROWS: CompareRow[] = [
  {
    label: "Recorte",
    planilha: "Loja e depósito",
    purple: "Locação e almoxarifado",
  },
  {
    label: "Unidade",
    planilha: "Quantidade do produto",
    purple: "QR por peça",
  },
  {
    label: "Retorno",
    planilha: "Saída de venda",
    purple: "Check-in da maleta",
  },
  {
    label: "Local",
    planilha: "Depósito da loja",
    purple: "Palco, van, canteiro",
  },
  {
    label: "Responsável",
    planilha: "Operador da loja",
    purple: "Usuário no check-out",
  },
  {
    label: "Etiqueta",
    planilha: "Código do produto",
    purple: "Folha A4 e QR",
  },
  {
    label: "Time",
    planilha: "Plano da loja",
    purple: `${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} / equipe`,
  },
  {
    label: "Teste",
    planilha: "Plano ContaEstoque",
    purple: `${TEAM_PLAN_TRIAL_DAYS} dias grátis`,
  },
];
