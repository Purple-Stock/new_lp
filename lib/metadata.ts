import type { Metadata } from "next"
import { SITE_NAME } from "@/lib/site"

const DEFAULT_SOCIAL_IMAGE = "/images/hero-photo-1800x1200.webp"

type PageMetadataInput = {
  title: string
  description?: string
  path: string
  robots?: Metadata["robots"]
}

export function buildPageMetadata({
  title,
  description,
  path,
  robots,
}: PageMetadataInput): Metadata {
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title: socialTitle,
      description,
      images: [
        {
          url: DEFAULT_SOCIAL_IMAGE,
          width: 1800,
          height: 1200,
          alt: `${SITE_NAME} controle de estoque com QR Code`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    robots,
  }
}
