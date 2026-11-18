import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  SISTEMA_ESTOQUE_LOJA_PAGE_DESCRIPTION,
  SISTEMA_ESTOQUE_LOJA_PAGE_TITLE,
  SISTEMA_ESTOQUE_LOJA_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: SISTEMA_ESTOQUE_LOJA_PAGE_TITLE,
  description: SISTEMA_ESTOQUE_LOJA_PAGE_DESCRIPTION,
  path: SISTEMA_ESTOQUE_LOJA_PATH,
});

export default function SistemaEstoqueLojaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
