/**
 * Money page: controle ferramental / ferramentaria / empréstimo.
 * Recorte: check-out/check-in. Ferramenta volta; material consome.
 */

import type { MoneyPageFaq, MoneyPageSection } from "@/lib/product-money-pages";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export const FERRAMENTAS_H1 =
  "Controle ferramental: empréstimo com responsável";

export const FERRAMENTAS_LEDE = `Controle de ferramentas é check-out e check-in: a peça sai com alguém e precisa voltar. Furadeira, serra e nível não são saco de cimento. ${TEAM_PLAN_TRIAL_DAYS} dias grátis, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const FERRAMENTAS_SECTIONS: MoneyPageSection[] = [
  {
    title: "Controle ferramental não é estoque de material",
    paragraphs: [
      "Controle ferramental, controle de ferramentas e ferramentaria descrevem a mesma dor: a peça circula. Material consome na frente. Ferramenta volta — ou some no porta-malas, no andar, na outra obra.",
      "Se você tratar furadeira como cimento, o saldo mente. O sistema diz que tem. Na prateleira não tem. Está com o João desde terça. Controle de ferramentas fecha o ciclo: quem retirou, para qual frente, quando devolveu, se voltou com avaria.",
      "Isso vale para oficina, canteiro, locação de equipamento e manutenção predial. O padrão é o mesmo. O caderno de empréstimo quebra quando tem duas frentes e o encarregado roda.",
    ],
  },
  {
    title: "Controle de empréstimo de ferramentas",
    paragraphs: [
      "Empréstimo de ferramentas sem responsável é “o time pegou”. Na hora da briga, “o time” não acha a serra. Check-out associa usuário logado, item e, quando fizer sentido, a frente de serviço ou o job.",
      "Check-in no mesmo dia mostra o que ficou no andar, o que quebrou e o que já pode sair amanhã. Depois de 48 horas ninguém lembra. O histórico no app substitui o caderno na parede e a foto no grupo.",
      "Status claro evita retrabalho: disponível, em uso, manutenção. Ferramenta quebrada no mesmo gancho da boa é o encarregado pegando o que não corta e comprando a segunda unidade no fim do mês.",
    ],
  },
  {
    title: "Ferramentaria: oficina, canteiro e locação",
    paragraphs: [
      "Na ferramentaria da oficina o fluxo é curto: o mecânico retira, usa, devolve. Sem check-in, a chave de impacto vira lenda. Com QR no corpo da ferramenta, a devolução é leitura, não conversa.",
      "No canteiro a distância aumenta. Container, pavimento, kombi, outra casa no mesmo condomínio. Transferência entre obras não é “leva na kombi”: é lançamento de local, com responsável.",
      "Na locação a ferramenta é o produto. Check-out para o cliente ou para a equipe de montagem, prazo, conferência na volta, avaria no histórico. O mesmo aplicativo serve para o kit de set e para a furadeira da empreiteira.",
    ],
  },
  {
    title: "Check-out e check-in no celular com QR",
    paragraphs: [
      "Etiquete o que dói perder. Furadeira, parafusadeira, martelete, serra mármore, circular, nível a laser, trena digital, andaime, compactador. Consumível e broca ficam em quantidade. O extravio caro é o ativo que circula.",
      "A câmera do celular lê o QR. Não precisa de coletor. O operator no container ou na oficina registra a saída. O viewer consulta quem está com o quê. O admin vê o relatório de ferramenta em uso e de item que não voltou.",
      "Inventário cíclico do que é caro, toda semana. Inventário só no fim da obra chega tarde: a ferramenta já foi. Uma contagem curta no gancho das peças caras paga o hábito.",
    ],
  },
  {
    title: "Furadeira, serra e nível: o que etiquetar primeiro",
    paragraphs: [
      "Não cadastre cada broca no dia um. Cadastre as três peças que mais somem. Cole o QR no corpo ou na caixa que sai fechada. Treine só check-out e check-in dessas peças.",
      "Quando o time devolver a primeira furadeira no histórico, o processo existe. Aí você amplia: o segundo gancho, o andaime, o kit elétrico. Implantação por etapas. Cadastro do universo no sábado é o que trava PME.",
      "Se a operação mistura ferramenta e material no mesmo container, separe no cadastro. Cimento e tubo têm quantidade e local. Furadeira tem responsável. Os dois convivem no mesmo time, com fluxos diferentes.",
    ],
  },
  {
    title: "Como sair do caderno de empréstimo",
    paragraphs: [
      "Um caderno por encarregado vira três verdades. Uma fonte no celular evita “achei que estava com o outro”. Rode os dois em paralelo uns dias nas peças caras. Quando o time confiar na leitura, o caderno vira arquivo morto.",
      "Compra repetida da mesma furadeira é o custo escondido. Uma unidade recomprada por mês paga o sistema. O plano público cobre o time inteiro, não cobra por ferramenta.",
      `Preço: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade. Vertical de canteiro continua em almoxarifado de obra. Equipamento de set (câmera, LED) fica na gestão de equipamentos. Esta página é ferramenta que circula e volta.`,
    ],
  },
];

export const FERRAMENTAS_FAQS: MoneyPageFaq[] = [
  {
    q: "O que é controle ferramental?",
    a: "É o controle de ferramentas que circulam: check-out com responsável, check-in no retorno e status disponível, em uso ou manutenção. Diferente de material, que consome.",
  },
  {
    q: "Como funciona o empréstimo de ferramentas?",
    a: "A pessoa logada lê o QR, retira a peça e fica responsável. Na volta, lê de novo. Sem os dois passos, o empréstimo vira “o João pegou”.",
  },
  {
    q: "Preciso cadastrar broca e EPI?",
    a: "Não no dia um. Consumível fica em quantidade simples. O extravio caro é furadeira, serra, nível e andaime — esses merecem etiqueta e histórico.",
  },
  {
    q: "Serve para oficina e para obra?",
    a: "Sim. Oficina, canteiro, locação e manutenção usam o mesmo fluxo de check-in. A vertical de construção aprofunda o canteiro; esta página cobre a ferramenta em qualquer desses locais.",
  },
  {
    q: "Quanto custa o controle de ferramentas?",
    a: `O plano de entrada é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis e sem fidelidade.`,
  },
];
