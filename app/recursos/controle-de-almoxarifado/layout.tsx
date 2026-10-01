import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  ALMOXARIFADO_RECURSO_PAGE_DESCRIPTION,
  ALMOXARIFADO_RECURSO_PAGE_TITLE,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: ALMOXARIFADO_RECURSO_PAGE_TITLE,
  description: ALMOXARIFADO_RECURSO_PAGE_DESCRIPTION,
  path: "/recursos/controle-de-almoxarifado",
});

export default function ControleAlmoxarifadoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
