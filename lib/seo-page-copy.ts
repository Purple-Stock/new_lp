/**
 * SERP title/description for high-impression pages.
 * Keep titles mobile-first (~55–60 chars before brand suffix when possible).
 *
 * @example
 * buildPageMetadata({ title: HOME_PAGE_TITLE, description: HOME_PAGE_DESCRIPTION, path: "/" })
 */

import { SITE_DESCRIPTION } from "@/lib/site";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export const HOME_PAGE_TITLE = "Sistema de estoque com QR Code | Purple Stock";

export const HOME_PAGE_DESCRIPTION = SITE_DESCRIPTION;

export const HOME_PAGE_DOCUMENT_TITLE = HOME_PAGE_TITLE;

export const HOME_PAGE_H1_PT =
  "Sistema de estoque com QR Code: pare de errar o saldo";

export const BARCODE_TOOL_PAGE_TITLE =
  "Gerador de código de barras grátis | EAN e QR";

export const BARCODE_TOOL_PAGE_DESCRIPTION =
  "Gerador de código de barras grátis online: EAN-13, Code 128 e QR. Sem cadastro, baixe PNG e use no estoque ou etiquetas.";

export const BARCODE_TOOL_PATH = "/codigo-de-barras-gratis";

export const INDUSTRIES_PAGE_TITLE =
  "Sistema de Estoque por Setor | Fluxos por Indústria";

export const INDUSTRIES_PAGE_DESCRIPTION =
  "Controle de estoque e equipamentos com QR Code por setor: audiovisual, eventos, telecom, odontologia e indústria. Check-in/check-out e menos perda.";

export const PRICING_PAGE_TITLE = `Preço: R$ 59 por equipe · ${TEAM_PLAN_TRIAL_DAYS} dias grátis`;

export const PRICING_PAGE_DESCRIPTION = `Preço do sistema de estoque Purple Stock: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade e ativação rápida para PME.`;
