import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION,
  APLICATIVO_DE_ESTOQUE_PAGE_TITLE,
  APLICATIVO_DE_ESTOQUE_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: APLICATIVO_DE_ESTOQUE_PAGE_TITLE,
  description: APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION,
  path: APLICATIVO_DE_ESTOQUE_PATH,
});

export default function AplicativoDeEstoqueLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
