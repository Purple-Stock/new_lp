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
  "Controle de estoque com QR Code por setor: construção civil, audiovisual, eventos e telecom. Almoxarifado de obra no canteiro, check-in e menos perda.";

export const PRICING_PAGE_TITLE = `Preço: R$ 59 por equipe · ${TEAM_PLAN_TRIAL_DAYS} dias grátis`;

export const PRICING_PAGE_DESCRIPTION = `Preço do sistema de estoque Purple Stock: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade e ativação rápida para PME.`;

export const APLICATIVO_DE_ESTOQUE_PATH = "/recursos/aplicativo-de-estoque";

export const APLICATIVO_DE_ESTOQUE_PAGE_TITLE =
  "Aplicativo para Controle de Estoque com QR";

export const APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION = `Aplicativo para controle de estoque no celular: QR Code, entrada, saída e saldo por local. ${TEAM_PLAN_TRIAL_DAYS} dias grátis, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const VS_PLANILHA_PATH = "/purple-stock-vs-planilha";

export const VS_PLANILHA_PAGE_TITLE =
  "Purple Stock vs Planilha: quando migrar o estoque";

export const VS_PLANILHA_PAGE_DESCRIPTION = `Planilha vs sistema de estoque: quando o Excel deixa de bater o saldo. Compare multi-usuário, QR no celular e custo. ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const ALMOXARIFADO_RECURSO_PAGE_TITLE =
  "Controle de Almoxarifado com QR no celular";

export const ALMOXARIFADO_RECURSO_PAGE_DESCRIPTION =
  "Controle de almoxarifado com QR Code: entrada, saída, inventário cíclico e rastreio por responsável. Para PME e canteiro. Teste 7 dias grátis.";
