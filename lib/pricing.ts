/**
 * Public team-plan pricing — single source of truth for SERP, schema, FAQ and CTAs.
 * Why centralized: GSC/FAQ/schema drift (R$29.90 vs R$59 vs R$99) tanks trust and CTR.
 * Existing Stripe subscribers stay on their Price ID; this is checkout + marketing only.
 *
 * @example
 * schema.offers.price = TEAM_PLAN_MONTHLY_PRICE_SCHEMA
 */
export const TEAM_PLAN_MONTHLY_PRICE_NUMBER = 99;
export const TEAM_PLAN_MONTHLY_PRICE_SCHEMA = "99.00";
export const TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT = "R$ 99,00";
export const TEAM_PLAN_MONTHLY_PRICE_DISPLAY_EN = "R$ 99.00";
export const TEAM_PLAN_TRIAL_DAYS = 7;

export const TEAM_PLAN_UNIT_LABEL_PT = "equipe";
export const TEAM_PLAN_UNIT_LABEL_EN = "team";
export const TEAM_PLAN_UNIT_LABEL_FR = "equipe";

export function formatTeamPlanPriceFaqPt(): string {
  return `O plano de entrada é ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por ${TEAM_PLAN_UNIT_LABEL_PT}/mês, com teste grátis de ${TEAM_PLAN_TRIAL_DAYS} dias e sem fidelidade.`;
}

export function formatTeamPlanPriceFaqEn(): string {
  return `Entry pricing is ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_EN} per team/month, with a ${TEAM_PLAN_TRIAL_DAYS}-day free trial and no lock-in.`;
}

export function formatTeamPlanPriceFaqFr(): string {
  return `Le plan d'entree est a ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} par equipe/mois, avec essai gratuit de ${TEAM_PLAN_TRIAL_DAYS} jours et sans engagement.`;
}
