import {
  getSiteUrl,
  SITE_CONTACT,
  SITE_DESCRIPTION,
  SITE_LOGO_PATH,
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
    logo: absoluteUrl(SITE_LOGO_PATH),
    description: SITE_DESCRIPTION,
    email: SITE_CONTACT.email,
    telephone: SITE_CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONTACT.addressLocality,
      addressCountry: SITE_CONTACT.addressCountry,
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
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
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

export function buildHomePageGraph({ faqs }: { faqs: FaqItem[] }) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: `${SITE_NAME} | Sistema de Controle de Estoque com QR Code`,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#organization` },
        inLanguage: "pt-BR",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}/#software`,
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: SITE_DESCRIPTION,
        url,
        offers: {
          "@type": "Offer",
          price: "59.00",
          priceCurrency: "BRL",
          url: `${url}/precos`,
        },
        provider: { "@id": `${url}/#organization` },
      },
      buildFaqPageSchema(faqs),
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
          availableLanguage: ["Portuguese", "English"],
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
