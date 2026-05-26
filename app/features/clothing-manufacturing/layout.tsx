import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Sistema para Confecção: Controle de Facção com Rastreabilidade",
  description:
    "Controle de facção na confecção: rastreie etapas de produção, reduza atrasos e retrabalho. Gestão de tecidos, aviamentos e peças prontas. Teste grátis.",
  path: "/features/clothing-manufacturing",
});

export default function ClothingManufacturingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
