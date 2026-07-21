import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Código de Barras Grátis Online: Gere EAN, Code 128 e QR",
  description:
    "Gerador de código de barras grátis online: EAN-13, Code 128, QR Code e mais. Sem cadastro, baixe em PNG e use no estoque ou etiquetas.",
  path: "/codigo-de-barras-gratis",
});

export default function BarcodeGeneratorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
