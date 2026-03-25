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
    tsconfigPath:
      process.env.NODE_ENV === 'development' ? 'tsconfig.dev.json' : 'tsconfig.json',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
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

    return [
      ...legacyResourceRedirects.map((redirect) => ({
        source: redirect.source,
        destination: redirect.destination,
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
  async headers() {
    const isDevelopment = process.env.NODE_ENV === "development"
    const contentSecurityPolicy = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      `connect-src 'self' ${isDevelopment ? "ws: wss:" : ""} https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com`,
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
      "media-src 'self' https:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; ")

    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
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
