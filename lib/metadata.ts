import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const DEFAULT_SOCIAL_IMAGE = "/og-image.png";
export const DEFAULT_SOCIAL_IMAGE_WIDTH = 1200;
export const DEFAULT_SOCIAL_IMAGE_HEIGHT = 630;
export const DEFAULT_SOCIAL_IMAGE_ALT = `${SITE_NAME} controle de estoque com QR Code`;

type PageMetadataInput = {
  title: string;
  description?: string;
  path: string;
  robots?: Metadata["robots"];
};

export function buildPageMetadata({
  title,
  description,
  path,
  robots,
}: PageMetadataInput): Metadata {
  const socialTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

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
          width: DEFAULT_SOCIAL_IMAGE_WIDTH,
          height: DEFAULT_SOCIAL_IMAGE_HEIGHT,
          alt: DEFAULT_SOCIAL_IMAGE_ALT,
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
  };
}
