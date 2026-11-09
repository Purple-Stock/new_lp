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
  "Gere e imprima código de barras grátis: EAN-13, Code 128 e QR. Folha A4 ou térmica, CSV em lote. Teste 7 dias no estoque Purple.";

export const BARCODE_TOOL_PATH = "/codigo-de-barras-gratis";

export const BARCODE_PRINT_PATH = "/print";

export const INDUSTRIES_PAGE_TITLE =
  "Sistema de Estoque por Setor | Fluxos por Indústria";

export const INDUSTRIES_PAGE_DESCRIPTION =
  "Controle de estoque com QR Code por setor: construção civil, audiovisual, eventos e telecom. Almoxarifado de obra no canteiro, check-in e menos perda.";

export const PRICING_PAGE_TITLE = `Preço: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe · ${TEAM_PLAN_TRIAL_DAYS} dias grátis`;

export const PRICING_PAGE_DESCRIPTION = `Preço do estoque com QR: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, ${TEAM_PLAN_TRIAL_DAYS} dias grátis. Almoxarifado, check-in e saldo no celular, sem fidelidade.`;

export const GLOSSARIO_PATH = "/glossario";

export const GLOSSARIO_PAGE_TITLE =
  "Glossário de Estoque para PME: almoxarifado e QR";

export const GLOSSARIO_PAGE_DESCRIPTION = `Glossário de estoque e almoxarifado para PME: MOQ, EOQ, ponto de reposição e QR no celular. Teste ${TEAM_PLAN_TRIAL_DAYS} dias, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const APLICATIVO_DE_ESTOQUE_PATH = "/recursos/aplicativo-de-estoque";

export const APLICATIVO_DE_ESTOQUE_PAGE_TITLE =
  "Aplicativo para Controle de Estoque com QR";

export const APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION = `Aplicativo para controle de estoque no celular: QR Code, entrada, saída e saldo por local. ${TEAM_PLAN_TRIAL_DAYS} dias grátis, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const VS_PLANILHA_PATH = "/purple-stock-vs-planilha";

export const VS_PLANILHA_PAGE_TITLE =
  "Purple Stock vs Planilha: quando migrar o estoque";

export const VS_PLANILHA_PAGE_DESCRIPTION = `Planilha vs sistema de estoque: quando o Excel deixa de bater o saldo. Compare multi-usuário, QR no celular e custo. ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const BLING_COMPARE_PATH = "/compare/bling-vs-purple-stock";

export const BLING_COMPARE_PAGE_TITLE =
  "Bling vs Purple Stock para locação e estoque";

export const BLING_COMPARE_PAGE_DESCRIPTION = `Bling cobre loja e nota. Purple Stock cobre QR por unidade em locação e almoxarifado. Compare o recorte e teste 7 dias, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const CONTAESTOQUE_COMPARE_PATH =
  "/compare/contaestoque-vs-purple-stock";

export const CONTAESTOQUE_COMPARE_PAGE_TITLE =
  "ContaEstoque vs Purple Stock na locação";

export const CONTAESTOQUE_COMPARE_PAGE_DESCRIPTION = `ContaEstoque é app de estoque para loja. Purple Stock é QR, check-in e maleta na locação. Compare o recorte e teste 7 dias, ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.`;

export const ALMOXARIFADO_RECURSO_PAGE_TITLE =
  "Controle de Almoxarifado com QR no celular";

export const ALMOXARIFADO_RECURSO_PAGE_DESCRIPTION =
  "Controle de almoxarifado com QR Code: entrada, saída, inventário cíclico e rastreio por responsável. Para PME e canteiro. Teste 7 dias grátis.";
