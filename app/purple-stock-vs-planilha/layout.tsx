import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  VS_PLANILHA_PAGE_DESCRIPTION,
  VS_PLANILHA_PAGE_TITLE,
  VS_PLANILHA_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: VS_PLANILHA_PAGE_TITLE,
  description: VS_PLANILHA_PAGE_DESCRIPTION,
  path: VS_PLANILHA_PATH,
});

export default function VsPlanilhaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
