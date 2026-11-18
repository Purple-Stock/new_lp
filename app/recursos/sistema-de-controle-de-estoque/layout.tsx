import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  SISTEMA_CONTROLE_ESTOQUE_PAGE_DESCRIPTION,
  SISTEMA_CONTROLE_ESTOQUE_PAGE_TITLE,
  SISTEMA_CONTROLE_ESTOQUE_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: SISTEMA_CONTROLE_ESTOQUE_PAGE_TITLE,
  description: SISTEMA_CONTROLE_ESTOQUE_PAGE_DESCRIPTION,
  path: SISTEMA_CONTROLE_ESTOQUE_PATH,
});

export default function SistemaControleEstoqueLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
