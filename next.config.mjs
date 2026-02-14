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
        source: "/blog/sistema-de-controle-de-almoxarifado",
        destination: "/recursos/controle-de-almoxarifado",
      },
      {
        source: "/blog/como-implementar-um-controle-de-faccao-eficiente-estrategias-para-otimizar-a-producao-na-confeccao",
        destination: "/features/clothing-manufacturing",
      },
    ]

    return [
      ...legacyBlogSlugRedirects.map((redirect) => ({
        ...redirect,
        permanent: true,
      })),
      ...legacyBlogSlugRedirects.map((redirect) => ({
        ...redirect,
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
        permanent: true,
      })),
      ...legacyBlogSlugRedirects.map((redirect) => ({
        source: redirect.source.replace("/blog/", "/"),
        destination: redirect.destination,
        has: [{ type: "host", value: "blog.purplestock.com.br" }],
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
