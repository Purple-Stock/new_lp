let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async redirects() {
    const legacyBlogSlugRedirects = [
      {
        source: "/blog/controle-de-estoque-por-qr-code-versus-gerenciamento-de-estoque-tradicional",
        destination: "/blog/como-usar-qr-code-controle-estoque",
      },
      {
        source: "/blog/aplicativo-para-controle-de-estoque-com-qr-code",
        destination: "/blog/aplicativo-para-controle-de-estoque",
      },
      {
        source: "/blog/open-erp-o-que-e-como-funciona",
        destination: "/blog/open-erp-o-que-e-e-quando-usar",
      },
      {
        source: "/blog/open-erp-o-que-e",
        destination: "/blog/open-erp-o-que-e-e-quando-usar",
      },
      {
        source: "/blog/open-erp-o-que-e-e-como-ele-pode-ajudar-sua-empresa",
        destination: "/blog/open-erp-o-que-e-e-quando-usar",
      },
      {
        source: "/blog/sistema-de-controle-de-almoxarifado",
        destination: "/recursos/controle-de-almoxarifado",
      },
      {
        source: "/blog/sistema-de-controle-de-almoxarifado-a-solucao-para-a-eficiencia-e-reducao-de-custos-na-gestao-de-estoques",
        destination: "/recursos/controle-de-almoxarifado",
      },
      {
        source: "/blog/como-implementar-um-controle-de-faccao-eficiente-estrategias-para-otimizar-a-producao-na-confeccao",
        destination: "/features/clothing-manufacturing",
      },
      {
        source: "/blog/maximizando-a-eficiencia-do-controle-de-inventario-com-tecnologia-qr-code",
        destination: "/blog/como-usar-qr-code-controle-estoque",
      },
      {
        source: "/blog/purple-stock-bi-bling-a-revolucao-dos-dashboards-sem-power-bi",
        destination: "/features/analytics-reporting",
      },
      {
        source: "/blog/sistema-para-confeccao-a-solucao-para-otimizar-sua-producao-e-reduzir-custos",
        destination: "/features/clothing-manufacturing",
      },
      {
        source: "/blog/a-historia-do-qr-code",
        destination: "/blog/como-usar-qr-code-controle-estoque",
      },
      {
        source: "/blog/codigo-de-barras-vs-rfid-escolhendo-a-tecnologia-ideal-para-otimizar-seu-negocio",
        destination: "/features/barcoding",
      },
      {
        source: "/blog/digitalize-seu-estoque-a-revolucao-do-controle-de-inventario-com-qr-code",
        destination: "/blog/como-usar-qr-code-controle-estoque",
      },
      {
        source: "/blog/como-rastrear-inventario-com-qr-code",
        destination: "/blog/como-usar-qr-code-controle-estoque",
      },
      {
        source: "/blog/controle-de-estoque-por-qr-code",
        destination: "/blog/como-usar-qr-code-controle-estoque",
      },
      {
        source: "/blog/afine-a-gestao-do-seu-show-qr-codes-no-controle-de-instrumentos-musicais",
        destination: "/industrias/events",
      },
      {
        source: "/blog/como-escolher-o-melhor-sistema-para-gerenciar-estoque-e-impulsionar-sua-empresa",
        destination: "/blog/aplicativo-para-controle-de-estoque",
      },
      {
        source: "/blog/sistema-para-pcp-otimize-a-producao-da-sua-empresa",
        destination: "/blog/sistema-pcp-para-industria-como-implementar",
      },
      {
        source: "/blog/controle-de-estoque-de-codigo-aberto-para-empresas",
        destination: "/blog/open-erp-o-que-e-e-quando-usar",
      },
      {
        source: "/blog/transforme-sua-gestao-de-inventario-com-aplicativos-de-controle-de-estoque",
        destination: "/blog/aplicativo-para-controle-de-estoque",
      },
    ]

    const legacyResourceRedirects = [
      {
        source: "/recursos/codigo-de-barras",
        destination: "/codigo-de-barras-gratis",
      },
      {
        source: "/recursos/gerenciamento-equipamentos-qr-code",
        destination: "/features/equipment-management",
      },
      {
        source: "/recursos/gestao-de-estoque",
        destination: "/features/inventory-control",
      },
    ]

    const legacyUtilityRedirects = [
      {
        source: "/archive",
        destination: "/blog",
      },
      {
        source: "/newsletter",
        destination: "/blog",
      },
      {
        source: "/tag/inventory-management",
        destination: "/blog/tag/gestao-de-estoque",
      },
      {
        source: "/index.html",
        destination: "/",
      },
      {
        source: "/artigos/:slug",
        destination: "/blog/:slug",
      },
    ]

    const legacyBlogRssRedirects = legacyBlogSlugRedirects.map((redirect) => ({
      source: `${redirect.source}/rss.xml`,
      destination: redirect.destination,
    }))

    return [
      ...legacyResourceRedirects.map((redirect) => ({
        source: redirect.source,
        destination: redirect.destination,
        permanent: true,
      })),
      ...legacyUtilityRedirects.map((redirect) => ({
        source: redirect.source,
        destination: `https://www.purplestock.com.br${redirect.destination}`,
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
        permanent: true,
      })),
      ...legacyUtilityRedirects.map((redirect) => ({
        source: redirect.source,
        destination: `https://www.purplestock.com.br${redirect.destination}`,
        has: [{ type: "host", value: "purplestock.com.br" }],
        permanent: true,
      })),
      ...legacyUtilityRedirects.map((redirect) => ({
        source: redirect.source,
        destination: redirect.destination,
        permanent: true,
      })),
      ...legacyBlogRssRedirects.map((redirect) => ({
        source: redirect.source,
        destination: `https://www.purplestock.com.br${redirect.destination}`,
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
        permanent: true,
      })),
      ...legacyBlogRssRedirects.map((redirect) => ({
        source: redirect.source.replace("/blog/", "/"),
        destination: `https://www.purplestock.com.br${redirect.destination}`,
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
        permanent: true,
      })),
      ...legacyBlogRssRedirects.map((redirect) => ({
        source: redirect.source,
        destination: `https://www.purplestock.com.br${redirect.destination}`,
        permanent: true,
      })),
      ...legacyBlogSlugRedirects.map((redirect) => ({
        source: redirect.source,
        destination: `https://www.purplestock.com.br${redirect.destination}`,
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
        permanent: true,
      })),
      ...legacyBlogSlugRedirects.map((redirect) => ({
        source: redirect.source.replace("/blog/", "/"),
        destination: `https://www.purplestock.com.br${redirect.destination}`,
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
        permanent: true,
      })),
      ...legacyBlogSlugRedirects.map((redirect) => ({
        source: redirect.source,
        destination: `https://www.purplestock.com.br${redirect.destination}`,
        permanent: true,
      })),
      {
        source: "/:path*",
        has: [{ type: "host", value: "purplestock.com.br" }],
        destination: "https://www.purplestock.com.br/:path*",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
        destination: "https://www.purplestock.com.br/blog/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
        destination: "https://www.purplestock.com.br/blog/:path*",
        permanent: true,
      },
    ]
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
