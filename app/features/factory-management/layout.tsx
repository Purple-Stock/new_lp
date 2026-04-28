import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Gestao de Fabrica e Producao",
  description:
    "Controle operacoes de fabrica, materiais e fluxo produtivo com mais previsibilidade, rastreabilidade e eficiencia.",
  path: "/features/factory-management",
});

export default function FactoryManagementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
