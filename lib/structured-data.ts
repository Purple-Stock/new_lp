import { TEAM_PLAN_MONTHLY_PRICE_SCHEMA } from "@/lib/pricing";
import {
  BARCODE_TOOL_PAGE_DESCRIPTION,
  BARCODE_TOOL_PAGE_TITLE,
  BARCODE_TOOL_PATH,
  HOME_PAGE_DOCUMENT_TITLE,
} from "@/lib/seo-page-copy";
import {
  getSiteUrl,
  SITE_CONTACT,
  SITE_DESCRIPTION,
  SITE_LOGO_HEIGHT,
  SITE_LOGO_PATH,
  SITE_LOGO_WIDTH,
  SITE_NAME,
  SITE_SAME_AS,
} from "@/lib/site";

type FaqItem = { q: string; a: string };

function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  return path.startsWith("http") ? path : `${base}${path}`;
}

export function buildOrganizationSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: SITE_NAME,
    url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE_LOGO_PATH),
      width: SITE_LOGO_WIDTH,
      height: SITE_LOGO_HEIGHT,
    },
    description: SITE_DESCRIPTION,
    email: SITE_CONTACT.email,
    telephone: SITE_CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONTACT.addressLocality,
      addressCountry: SITE_CONTACT.addressCountry,
    },
    founder: {
      "@type": "Person",
      "@id": `${url}/#founder`,
      name: "Matheus Puppe",
      url: `${url}/sobre`,
    },
    sameAs: [...SITE_SAME_AS],
  };
}

export function buildWebSiteSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: SITE_NAME,
    url,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "pt-BR",
  };
}

export function buildMonthlyOffer(url = `${getSiteUrl()}/precos`) {
  return {
    "@type": "Offer",
    price: TEAM_PLAN_MONTHLY_PRICE_SCHEMA,
    priceCurrency: "BRL",
    url,
    availability: "https://schema.org/InStock",
    name: "Plano único por equipe",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: TEAM_PLAN_MONTHLY_PRICE_SCHEMA,
      priceCurrency: "BRL",
      billingDuration: "P1M",
      unitText: "equipe",
    },
  };
}

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/**
 * Home graph without FAQPage JSON-LD.
 * Visible FAQ stays in the UI; Google limits FAQ rich results to a few site types,
 * so we keep markup lean (WebPage + SoftwareApplication + Offer).
 */
export function buildHomePageGraph() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: HOME_PAGE_DOCUMENT_TITLE,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#software` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}/#software`,
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        softwareVersion: "2.0",
        inLanguage: "pt-BR",
        description: SITE_DESCRIPTION,
        url,
        installUrl: "https://app.purplestock.com.br/",
        image: absoluteUrl("/og-image.png"),
        screenshot: absoluteUrl("/images/app-items-list-1200.webp"),
        featureList: [
          "Controle de entrada, saída, transferência e ajuste",
          "Inventário e rastreabilidade por item",
          "QR Code e código de barras no celular",
          "Times, localizações e permissões por usuário",
          "Dashboard e relatórios de estoque",
        ],
        offers: buildMonthlyOffer(`${url}/precos`),
        provider: { "@id": `${url}/#organization` },
      },
    ],
  };
}

export function buildBarcodeToolSchema() {
  const url = `${getSiteUrl()}${BARCODE_TOOL_PATH}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}/#webapp`,
    name: BARCODE_TOOL_PAGE_TITLE,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    description: BARCODE_TOOL_PAGE_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    provider: { "@id": `${getSiteUrl()}/#organization` },
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
  };
}

export function buildIndustryPageGraph(params: {
  slug: string;
  name: string;
  headline: string;
  description: string;
}) {
  const url = `${getSiteUrl()}/industrias/${params.slug}`;
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: params.headline,
        description: params.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Indústrias",
            item: `${siteUrl}/industrias`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: params.name,
            item: url,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}/#software`,
        name: `${SITE_NAME} para ${params.name}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: params.description,
        url,
        offers: buildMonthlyOffer(`${siteUrl}/precos`),
        provider: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

export function buildAboutPageSchema() {
  const url = `${getSiteUrl()}/sobre`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      {
        "@type": "AboutPage",
        "@id": `${url}/#aboutpage`,
        url,
        name: `Sobre a ${SITE_NAME}`,
        description:
          "Conheça a Purple Stock, sistema brasileiro de controle de estoque com QR Code para PMEs.",
        isPartOf: { "@id": `${getSiteUrl()}/#website` },
        about: { "@id": `${getSiteUrl()}/#organization` },
        inLanguage: "pt-BR",
      },
    ],
  };
}

export function buildContactPageSchema() {
  const url = `${getSiteUrl()}/contato`;
  const organization = buildOrganizationSchema();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organization,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SITE_CONTACT.email,
          telephone: SITE_CONTACT.phone,
          availableLanguage: ["Portuguese"],
          areaServed: "BR",
        },
      },
      {
        "@type": "ContactPage",
        "@id": `${url}/#contactpage`,
        url,
        name: `Contato | ${SITE_NAME}`,
        description:
          "Fale com a equipe Purple Stock por e-mail, telefone ou WhatsApp.",
        isPartOf: { "@id": `${getSiteUrl()}/#website` },
        inLanguage: "pt-BR",
      },
    ],
  };
}
