import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Sistema de Codigo de Barras para Estoque",
  description:
    "Use leitura e geracao de codigo de barras para acelerar entradas, saidas e inventario com mais precisao.",
  path: "/features/barcoding",
});

export default function BarcodingLayout({ children }: { children: ReactNode }) {
  return children;
}
