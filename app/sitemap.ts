import { MetadataRoute } from 'next'
import { getAllArticles } from '@/utils/markdown'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://purplestock.com.br'
  
  // Get all articles for dynamic routes
  const articles = await getAllArticles()
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/artigos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industrias`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/precos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossario`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/codigo-de-barras-gratis`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/coming-soon`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Feature routes
  const featureRoutes = [
    'analytics-reporting',
    'barcoding',
    'clothing-manufacturing',
    'equipment-management',
    'factory-management',
    'inventory-app',
    'inventory-control',
    'purchase-sales',
    'qr-code-management',
    'warehouse-control',
  ].map(feature => ({
    url: `${baseUrl}/features/${feature}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Resource routes
  const resourceRoutes = [
    'codigo-de-barras',
    'controle-de-almoxarifado',
    'gerenciamento-equipamentos-qr-code',
    'gestao-de-estoque',
  ].map(resource => ({
    url: `${baseUrl}/recursos/${resource}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Industry routes (dynamic based on the industries array)
  const industryRoutes = [
    'retail',
    'manufacturing',
    'logistics',
    'food',
    'pharmaceutical',
    'automotive',
    'construction',
    'technology',
    'audiovisual',
  ].map(industry => ({
    url: `${baseUrl}/industrias/${industry}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Article routes (dynamic from markdown files)
  const articleRoutes = articles.map(article => ({
    url: `${baseUrl}/artigos/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...featureRoutes,
    ...resourceRoutes,
    ...industryRoutes,
    ...articleRoutes,
  ]
}
