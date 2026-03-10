import type { Metadata } from "next"
import { SITE_NAME } from "@/lib/site"

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
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
    robots,
  }
}
