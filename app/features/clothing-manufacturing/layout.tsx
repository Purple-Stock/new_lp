import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Sistema para Confecção e Facção: Controle de Produção",
  description:
    "Controle de facção e confecção com rastreabilidade: tecidos, aviamentos, etapas de produção e peças prontas. Menos atraso e retrabalho. Teste grátis.",
  path: "/features/clothing-manufacturing",
});

export default function ClothingManufacturingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
