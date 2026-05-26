import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Gestão de Fábrica e PCP: Controle Produção e Materiais",
  description:
    "Sistema de gestão de fábrica: controle ordens de produção, matérias-primas e fluxo produtivo com rastreabilidade completa. Reduza desperdícios. Comece grátis.",
  path: "/features/factory-management",
});

export default function FactoryManagementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
