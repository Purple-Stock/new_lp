import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Relatorios e Analytics de Estoque",
  description:
    "Acompanhe indicadores, movimentacoes e desempenho operacional com relatorios e analytics em tempo real.",
  path: "/features/analytics-reporting",
});

export default function AnalyticsReportingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
