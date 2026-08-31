import { LanguageProvider } from "@/contexts/LanguageContext";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScheduleButton } from "@/components/schedule-button";
import { RouteViewTracker } from "@/components/route-view-tracker";
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  DEFAULT_SOCIAL_IMAGE_HEIGHT,
  DEFAULT_SOCIAL_IMAGE_WIDTH,
} from "@/lib/metadata";
import { JsonLd } from "@/components/json-ld";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/structured-data";
import {
  BLOG_RSS_PATH,
  getBlogRssFeedHref,
  getBlogRssFeedTitle,
} from "@/lib/site-feed";
import {
  HOME_PAGE_DESCRIPTION,
  HOME_PAGE_DOCUMENT_TITLE,
} from "@/lib/seo-page-copy";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import { Merriweather, Poppins } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import type React from "react";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-editorial",
  preload: false,
});

const siteUrl = getSiteUrl();
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    types: {
      "application/rss+xml": [
        { url: BLOG_RSS_PATH, title: getBlogRssFeedTitle() },
      ],
    },
  },
  title: {
    default: HOME_PAGE_DOCUMENT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_PAGE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: HOME_PAGE_DOCUMENT_TITLE,
    description: HOME_PAGE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_SOCIAL_IMAGE,
        width: DEFAULT_SOCIAL_IMAGE_WIDTH,
        height: DEFAULT_SOCIAL_IMAGE_HEIGHT,
        alt: DEFAULT_SOCIAL_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_PAGE_DOCUMENT_TITLE,
    description: HOME_PAGE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogRssFeedHref = getBlogRssFeedHref(siteUrl);

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={getBlogRssFeedTitle()}
          href={blogRssFeedHref}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${poppins.className} ${merriweather.variable}`}
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [buildOrganizationSchema(), buildWebSiteSchema()],
          }}
        />
        {gaMeasurementId ? (
          <>
            <Script
              id="ga4-src"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
        <LanguageProvider>
          <RouteViewTracker />
          {children}
          <ScheduleButton />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
