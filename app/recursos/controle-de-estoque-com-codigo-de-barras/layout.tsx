import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  CONTROLE_CODIGO_BARRAS_PAGE_DESCRIPTION,
  CONTROLE_CODIGO_BARRAS_PAGE_TITLE,
  CONTROLE_CODIGO_BARRAS_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: CONTROLE_CODIGO_BARRAS_PAGE_TITLE,
  description: CONTROLE_CODIGO_BARRAS_PAGE_DESCRIPTION,
  path: CONTROLE_CODIGO_BARRAS_PATH,
});

export default function ControleCodigoBarrasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
