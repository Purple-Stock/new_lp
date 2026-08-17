import type { SitemapEntry } from "@/lib/sitemap-blog";
import { glossaryTerms } from "@/data/glossary";

const INDUSTRY_SLUGS = [
  "atacado",
  "varejo",
  "manufatura",
  "logistica",
  "automotivo",
  "fashion",
  "food",
  "restaurantes",
  "electrical",
  "construction",
  "pharmaceutical",
  "odontologico",
  "telecomunicacoes",
  "beauty",
  "commerce",
  "education",
  "technology",
  "audiovisual",
  "events",
] as const;

const FEATURE_SLUGS = [
  "analytics-reporting",
  "barcoding",
  "clothing-manufacturing",
  "equipment-management",
  "factory-management",
  "inventory-app",
  "inventory-control",
  "purchase-sales",
  "qr-code-management",
  "warehouse-control",
] as const;

export async function buildPagesSitemapEntries(
  baseUrl: string
): Promise<SitemapEntry[]> {
  const now = new Date();

  const staticRoutes: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/industrias`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/precos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossario`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/codigo-de-barras-gratis`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/documentacao`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const featureRoutes = FEATURE_SLUGS.map((feature) => ({
    url: `${baseUrl}/features/${feature}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourceRoutes = ["controle-de-almoxarifado"].map((resource) => ({
    url: `${baseUrl}/recursos/${resource}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes = INDUSTRY_SLUGS.map((industry) => ({
    url: `${baseUrl}/industrias/${industry}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const glossaryRoutes = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossario/${term.slug}`,
    lastModified: new Date("2026-04-07"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...featureRoutes,
    ...resourceRoutes,
    ...industryRoutes,
    ...glossaryRoutes,
  ];
}
