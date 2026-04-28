import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Gestao de Estoque para Setor Eletrico",
  description:
    "Controle equipamentos, componentes e ferramentas do setor eletrico com mais rastreabilidade e eficiencia operacional.",
  path: "/industrias/electrical",
});

export default function ElectricalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
