import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  INDUSTRIES_PAGE_DESCRIPTION,
  INDUSTRIES_PAGE_TITLE,
} from "@/lib/seo-page-copy";

export const metadata: Metadata = {
  title: INDUSTRIES_PAGE_TITLE,
  description: INDUSTRIES_PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.purplestock.com.br/industrias",
  },
  openGraph: {
    type: "website",
    title: INDUSTRIES_PAGE_TITLE,
    description: INDUSTRIES_PAGE_DESCRIPTION,
    url: "/industrias",
  },
  twitter: {
    card: "summary_large_image",
    title: INDUSTRIES_PAGE_TITLE,
    description: INDUSTRIES_PAGE_DESCRIPTION,
  },
};

export default function IndustriasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="ps-landing-canvas relative min-h-screen overflow-x-hidden">
      <div className="ps-landing-bg" aria-hidden="true">
        <div className="ps-landing-bg-glow" />
        <div className="ps-landing-bg-lines" />
      </div>
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
