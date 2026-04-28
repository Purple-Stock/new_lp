import { MetadataRoute } from "next";
import { getAllPosts, getAllTagSlugs } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { glossaryTerms } from "@/data/glossary";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const posts = await getAllPosts();
  const tagSlugs = await getAllTagSlugs();
  const industrySlugs = [
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
    "beauty",
    "commerce",
    "education",
    "technology",
    "audiovisual",
    "events",
  ];

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/industrias`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/precos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossario`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/codigo-de-barras-gratis`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/documentacao`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    // {
    //   url: `${baseUrl}/coming-soon`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.5,
    // },
  ];

  // Feature routes
  const featureRoutes = [
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
  ].map((feature) => ({
    url: `${baseUrl}/features/${feature}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Resource routes (only pages that don't redirect)
  const resourceRoutes = ["controle-de-almoxarifado"].map((resource) => ({
    url: `${baseUrl}/recursos/${resource}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Industry routes (dynamic based on the industries array)
  const industryRoutes = industrySlugs.map((industry) => ({
    url: `${baseUrl}/industrias/${industry}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const tagRoutes = tagSlugs.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
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
    ...blogRoutes,
    ...tagRoutes,
    ...glossaryRoutes,
  ];
}
