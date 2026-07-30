import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  PRICING_PAGE_DESCRIPTION,
  PRICING_PAGE_TITLE,
} from "@/lib/seo-page-copy";

export const metadata: Metadata = {
  title: PRICING_PAGE_TITLE,
  description: PRICING_PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.purplestock.com.br/precos",
  },
  openGraph: {
    type: "website",
    title: PRICING_PAGE_TITLE,
    description: PRICING_PAGE_DESCRIPTION,
    url: "/precos",
  },
  twitter: {
    card: "summary_large_image",
    title: PRICING_PAGE_TITLE,
    description: PRICING_PAGE_DESCRIPTION,
  },
};

export default function PrecosLayout({ children }: { children: ReactNode }) {
  return children;
}
