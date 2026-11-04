import {
  formatTeamPlanPriceFaqPt,
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export type HomeFaqItem = { q: string; a: string };

export const HOME_FAQ_PT: HomeFaqItem[] = [
  {
    q: "O que é Purple Stock?",
    a: `Purple Stock é um sistema de estoque com QR Code para PME: entrada, saída, check-in e almoxarifado no celular. ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade.`,
  },
  {
    q: "Dá para começar sem migração complexa?",
    a: "Sim. Você pode iniciar com o cadastro essencial e evoluir por etapas, sem parar a operação.",
  },
  {
    q: "Meus dados ficam seguros e separados por equipe?",
    a: "Sim. O sistema opera por times com contexto ativo e permissões por usuário, mantendo cada operação isolada.",
  },
  {
    q: "Funciona no celular no dia a dia da operação?",
    a: "Sim. Os fluxos de entrada, saída, transferência e contagem são diretos e podem ser feitos no celular.",
  },
  {
    q: "Posso testar sem ficar preso?",
    a: "Sim. O teste de 7 dias começa sem cartão. Você pode cancelar quando quiser dentro do período de avaliação.",
  },
  {
    q: "Quanto custa para começar?",
    a: formatTeamPlanPriceFaqPt(),
  },
];
