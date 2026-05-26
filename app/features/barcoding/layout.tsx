import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Código de Barras no Estoque: Gere, Leia e Controle em Segundos",
  description:
    "Sistema de código de barras para estoque: gere etiquetas, faça leituras via celular e acelere inventário em até 3x. Sem hardware extra. Teste grátis.",
  path: "/features/barcoding",
});

export default function BarcodingLayout({ children }: { children: ReactNode }) {
  return children;
}
