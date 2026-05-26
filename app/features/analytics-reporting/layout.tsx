import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Indicadores de Estoque: Dashboard com Ruptura, Giro e Acurácia",
  description:
    "Relatórios e analytics de estoque: acompanhe ruptura, giro, acurácia e custo médio em tempo real. Decisões baseadas em dados, não em achismo. Veja como funciona.",
  path: "/features/analytics-reporting",
});

export default function AnalyticsReportingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
