import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Controle de Faccao: Como Reduzir Atrasos na Producao",
  description:
    "Aprenda a estruturar controle de faccao na confeccao com rastreabilidade por etapa, menos retrabalho e mais previsibilidade de entrega.",
  path: "/features/clothing-manufacturing",
});

export default function ClothingManufacturingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
