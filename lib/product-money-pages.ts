/**
 * Body copy for product money pages driven by GSC (aplicativo + vs planilha).
 * Keep claims inside PRODUCT.md: QR, check-in, almoxarifado. No NFC-e/PDV/WMS.
 */

import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export type MoneyPageSection = {
  title: string;
  paragraphs: string[];
};

export type MoneyPageFaq = {
  q: string;
  a: string;
};

export type CompareRow = {
  label: string;
  planilha: string;
  purple: string;
};

export function countCopyWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export const APLICATIVO_ESTOQUE_H1 =
  "Aplicativo para controle de estoque com QR Code no celular";

export const APLICATIVO_ESTOQUE_LEDE = `O aplicativo para controle de estoque da Purple Stock registra entrada, saída, transferência, ajuste e contagem no celular, com QR Code e histórico por item. ${TEAM_PLAN_TRIAL_DAYS} dias grátis, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe — sem fidelidade.`;

export const APLICATIVO_ESTOQUE_SECTIONS: MoneyPageSection[] = [
  {
    title: "O que o aplicativo faz no dia a dia",
    paragraphs: [
      "Quem busca um aplicativo para controle de estoque quase nunca quer um ERP inteiro. Quer parar de errar o saldo: o item entrou, saiu, mudou de local ou foi contado — e qualquer pessoa do time vê o mesmo número.",
      "No Purple Stock o fluxo cabe no celular. Você cadastra o item uma vez, imprime ou cola um QR Code, e a operação passa a ser leitura + responsável + local. Entrada da nota ou da entrega, saída para o uso, transferência entre depósitos, ajuste quando o físico não bate, contagem cíclica no endereço. Cada movimento vira histórico, não recado no WhatsApp.",
      "O mesmo app serve para almoxarifado clássico e para ativo que circula. Cimento no canteiro, lente no set, ONT no kit do técnico, peça no balcão: o padrão é o mesmo. Quem retirou, quando retirou, para onde foi. Quem devolveu, o que faltou.",
    ],
  },
  {
    title: "Para quem esse aplicativo serve",
    paragraphs: [
      "Serve para PME brasileira com estoque físico e time compartilhado: construtora com almoxarifado de obra, produtora e locadora de audiovisual, empresa de eventos, ISP e integradora de telecom, clínica odontológica, autopeças e operação que hoje vive de planilha.",
      "Não serve se a dor é nota fiscal, caixa de loja ou armazém de operador logístico. O produto começa no estoque e no check-in de equipamento. O financeiro e a nota podem continuar no sistema que você já usa.",
      "Papéis no time: admin configura locais e usuários, operator movimenta no celular, viewer consulta saldo. Todos os logins da mesma operação entram no mesmo time. O preço é por equipe, não por assento.",
    ],
  },
  {
    title: "QR Code no celular, sem coletor caro",
    paragraphs: [
      "A leitura usa a câmera do telefone. Você etiqueta o que dói perder ou o que para a operação: ferramenta cara, caixa de material, kit de campo, corpo de câmera, peça de giro. O QR Code não é enfeite — é o atalho para não digitar SKU com luva, poeira ou pressa.",
      "Inventário deixa de ser planilha impressa. O encarregado, o almoxarife ou o freelancer logado lê o código no local e confirma a quantidade. Divergência aparece no mesmo dia, com nome de quem conferiu.",
      "Se a operação ainda mistura código de barras de fornecedor e QR interno, os dois cabem no mesmo cadastro. O que importa é o item ter um identificador estável e um local.",
    ],
  },
  {
    title: "Como sair da planilha sem parar a operação",
    paragraphs: [
      "Não comece pelos três mil SKUs do orçamento. Comece pelo que some, pelo que para a frente de serviço e pelo que tem responsável. Cadastre esses itens, crie os locais reais (central, canteiro, set, van, loja) e convide quem mexe no físico.",
      "Na primeira semana o time só lança entrada e saída desses itens. Na segunda, transferência e contagem. O restante do cadastro entra depois, quando o hábito já existe. Implantação por etapas é o caminho; projeto gigante no dia um é o que trava PME.",
      "Quem ainda está na dúvida entre Excel e app lê o comparativo Purple Stock vs planilha. Quem já decidiu abre o teste de 7 dias em app.purplestock.com.br ou fala no WhatsApp para ver o fluxo da própria operação.",
    ],
  },
  {
    title: "O que o aplicativo não promete",
    paragraphs: [
      "Não emite nota, não substitui o caixa e não opera galpão de operador logístico. Se a dor é conferência, saldo por local e check-in de equipamento, o recorte é este.",
      "Também não inventa milagre de acurácia no primeiro dia. Acurácia sobe quando a retirada tem responsável e a entrada acontece na hora da entrega — disciplina de processo, com o app no bolso.",
    ],
  },
  {
    title: "Check-in de equipamento e relatório no mesmo app",
    paragraphs: [
      "Produtora, evento, telecom e clínica usam o mesmo aplicativo para controle de estoque quando o item precisa voltar. Check-out associa responsável e job. Check-in compara o que saiu com o que voltou. Avaria e item faltante entram no histórico no mesmo dia, não dois dias depois no WhatsApp.",
      "Relatório deixa de ser exportar aba. Você vê movimentação por local, por pessoa e por período. Isso alimenta a conversa de reposição e de 'quem ficou com o kit' sem montar planilha paralela.",
      `Preço público: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade. Fale no WhatsApp se a operação for white-label ou fluxo próprio — o plano do site é o genérico.`,
    ],
  },
];

export const APLICATIVO_ESTOQUE_FAQS: MoneyPageFaq[] = [
  {
    q: "Aplicativo para controle de estoque funciona offline?",
    a: "A rotina principal é online no celular, para o saldo aparecer na hora para o resto do time. Se a sua operação tem trecho sem rede, fale no WhatsApp para ver o que cabe no fluxo atual — não prometemos milagre de galpão sem sinal.",
  },
  {
    q: "Preciso de coletor de código de barras?",
    a: "Não. A câmera do celular lê QR Code e código de barras no cadastro e na movimentação. Coletor dedicado só entra se a operação já tiver um e quiser manter.",
  },
  {
    q: "Dá para ter vários usuários no mesmo estoque?",
    a: "Sim. O plano é por equipe: admin, operator e viewer no mesmo time, com histórico de quem movimentou. Não cobramos por assento.",
  },
  {
    q: "Quanto custa o aplicativo?",
    a: `O plano de entrada é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade. Você cancela quando quiser.`,
  },
];

export const VS_PLANILHA_H1 =
  "Purple Stock vs planilha de estoque: quando migrar";

export const VS_PLANILHA_LEDE = `Planilha resolve estoque pequeno com uma pessoa. Quando o time cresce, o local se multiplica ou o item circula, o Excel vira versão divergente. Compare o custo real e veja quando um sistema com QR no celular passa a valer ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const VS_PLANILHA_SECTIONS: MoneyPageSection[] = [
  {
    title: "Onde a planilha ainda é a ferramenta certa",
    paragraphs: [
      "Se você é a única pessoa que mexe no estoque, tem um local, poucos itens e inventário mensal que cabe numa tarde, a planilha dá conta. Não troque ferramenta por moda. Troque quando o número da célula deixa de ser o número da prateleira.",
      "Planilha também serve de rascunho no começo da operação: listar SKU, unidade e local antes de jogar tudo num sistema. Esse rascunho pode ser o cadastro inicial. O erro é continuar nela depois que o time já discute saldo no grupo do WhatsApp.",
    ],
  },
  {
    title: "Sinais de que a planilha já custa caro",
    paragraphs: [
      "Dois arquivos abertos ao mesmo tempo. O almoxarife atualiza de manhã, o comprador de tarde, o engenheiro olha uma cópia de sexta. Ninguém mente — o arquivo é que não tem dono único do agora.",
      "Item que circula: ferramenta de obra, câmera de set, kit de telecom. A planilha registra saldo, não responsável. “Acho que o João pegou” vira o processo. Check-in e check-out não cabem em aba sem virar burocracia que ninguém preenche.",
      "Inventário que trava a operação. Contagem no papel, digitação depois, divergência descoberta no fechamento. Compra emergencial porque o Excel dizia que tinha. Frente de serviço parada. Esses custos não aparecem na licença do Office; aparecem no desperdício e na hora extra.",
      "Multi-local. Obra A e obra B, depósito e van, loja e estoque de trás. Sem local no sistema, transferência é “o fulano levou na kombi”. Uma unidade fica com estoque fantasma, a outra com custo escondido.",
    ],
  },
  {
    title: "O que muda no sistema com QR",
    paragraphs: [
      "O Purple Stock não é um Excel mais bonito. É um fluxo: cadastro, etiqueta, movimento, histórico. Quem mexe no físico usa o celular. Quem gerencia vê o mesmo saldo sem consolidar aba.",
      "Entrada acontece na entrega. Saída leva responsável. Transferência entre locais vira lançamento, não recado. Contagem lê o QR no endereço. Relatório deixa de ser copiar coluna.",
      "Você não precisa desligar a planilha no sábado. Começa pelos itens que doem, convive uns dias com os dois, e apaga a aba quando o time já confia no app. Implantação por etapas, sem parar a operação.",
    ],
  },
  {
    title: "Custo aparente vs custo real",
    paragraphs: [
      `A planilha parece grátis. O Purple Stock custa ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe por mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade. O preço público é por time, não por usuário.`,
      "O custo real da planilha é retrabalho, ruptura, compra errada e item sumido. Uma ferramenta de obra, uma lente ou um pallet comprado duas vezes paga meses de sistema. Se esses eventos já acontecem todo mês, a conta já virou.",
      "Não compare com ERP de construtora nem com software de operador logístico. O recorte é estoque e check-in. Nota fiscal e caixa ficam onde já estão.",
    ],
  },
  {
    title: "Como migrar em 15 dias",
    paragraphs: [
      "Dias 1–3: liste locais reais e as pessoas que movimentam. Crie o time, convide operator e viewer. Não cadastre o universo.",
      "Dias 4–7: cadastre a curva A — o que para a operação ou o que some. Cole QR no que for circular. Treine só entrada e saída.",
      "Dias 8–12: ligue transferência e uma contagem curta no endereço que mais erra. Compare com a planilha antiga. A divergência é o ponto de treinamento, não o motivo para voltar atrás.",
      "Dias 13–15: decida qual aba morre. Se o time já lança no celular, a planilha vira arquivo morto. Se travou, fale no WhatsApp — quase sempre o gargalo é cadastro demais no dia um, não o app.",
    ],
  },
  {
    title: "Planilha no grupo vs histórico no app",
    paragraphs: [
      "O padrão brasileiro de PME é planilha no Drive mais foto no grupo. Funciona até o dia em que duas pessoas editam, o arquivo 'final_v3' aparece e o saldo da obra B some. O aplicativo guarda um histórico por lançamento: quem, quando, qual local, qual item.",
      "Se a sua dor é só listar SKU para o contador no fim do mês, continue na planilha. Se a dor é o físico não bater no meio da semana, o comparativo já virou: o Excel descreve o passado; o app descreve o agora.",
      "Leia também o aplicativo para controle de estoque com QR e a vertical de almoxarifado de obra. O teste de 7 dias existe para o time operar um canteiro ou um set de verdade, não para encher cadastro.",
    ],
  },
];

export const VS_PLANILHA_COMPARE_ROWS: CompareRow[] = [
  {
    label: "Multi-usuário",
    planilha: "Versões e abas conflitam",
    purple: "Time com histórico por usuário",
  },
  {
    label: "Saldo por local",
    planilha: "Uma aba por obra, fácil divergir",
    purple: "Local nativo e transferência",
  },
  {
    label: "Responsável na saída",
    planilha: "Coluna que ninguém preenche",
    purple: "Check-out com usuário logado",
  },
  {
    label: "Inventário",
    planilha: "Papel + digitação depois",
    purple: "Leitura de QR no celular",
  },
  {
    label: "Custo visível",
    planilha: "Parece zero",
    purple: `${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} / equipe`,
  },
  {
    label: "Custo escondido",
    planilha: "Retrabalho, ruptura, item sumido",
    purple: "Setup curto e mensalidade",
  },
];

export const VS_PLANILHA_FAQS: MoneyPageFaq[] = [
  {
    q: "Consigo importar a planilha que já uso?",
    a: "Sim, começando pelos campos que o cadastro precisa: nome, SKU, unidade e local. Não precisa importar histórico de cinco anos no primeiro dia. O que vale é o saldo atual e o hábito de lançar.",
  },
  {
    q: "A planilha some no mesmo dia?",
    a: "Não. Rode os dois em paralelo nos itens críticos. Quando o time confiar no celular, a aba vira arquivo morto. Cortar no sábado costuma gerar volta atrás na segunda.",
  },
  {
    q: "E se eu tiver só uma pessoa no almoxarifado?",
    a: "A planilha ainda pode servir. O sistema passa a valer quando essa pessoa falta, quando nasce o segundo local ou quando ferramenta cara começa a circular sem dono.",
  },
  {
    q: "Quanto custa sair da planilha?",
    a: `O plano público é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade. Sem taxa de implantação no preço de tabela.`,
  },
];
