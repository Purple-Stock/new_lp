/**
 * Public href for a feature slug. English /features/* URLs stay as aliases
 * when a Portuguese money page already ranks or converts better.
 */
const FEATURE_HREF_BY_SLUG: Record<string, string> = {
  "inventory-app": "/recursos/aplicativo-de-estoque",
  "warehouse-control": "/recursos/controle-de-almoxarifado",
};

export function featureHref(slug: string): string {
  return FEATURE_HREF_BY_SLUG[slug] ?? `/features/${slug}`;
}
