/**
 * SERP title/description for high-impression pages.
 * Keep titles mobile-first (~55–60 chars before brand suffix when possible).
 *
 * @example
 * buildPageMetadata({ title: HOME_PAGE_TITLE, description: HOME_PAGE_DESCRIPTION, path: "/" })
 */

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export const HOME_PAGE_TITLE =
  "Sistema de Estoque com QR Code | Pare de Errar o Saldo";

export const HOME_PAGE_DESCRIPTION = SITE_DESCRIPTION;

export const HOME_PAGE_DOCUMENT_TITLE = `${HOME_PAGE_TITLE} | ${SITE_NAME}`;

export const BARCODE_TOOL_PAGE_TITLE =
  "Gerador de Código de Barras Grátis (EAN, Code 128, QR)";

export const BARCODE_TOOL_PAGE_DESCRIPTION =
  "Gere código de barras grátis online: EAN-13, Code 128 e QR. Sem cadastro, baixe em PNG e use no estoque ou etiquetas.";

export const BARCODE_TOOL_PATH = "/codigo-de-barras-gratis";

export const INDUSTRIES_PAGE_TITLE =
  "Sistema de Estoque por Setor | Fluxos por Indústria";

export const INDUSTRIES_PAGE_DESCRIPTION =
  "Controle de estoque e equipamentos com QR Code por setor: audiovisual, eventos, telecom, odontologia e indústria. Check-in/check-out e menos perda.";

export const PRICING_PAGE_TITLE = `Preço Purple Stock: R$ 59/time · ${TEAM_PLAN_TRIAL_DAYS} Dias Grátis`;

export const PRICING_PAGE_DESCRIPTION = `Preço do sistema de estoque Purple Stock: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por time/mês, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade e ativação rápida para PME.`;
