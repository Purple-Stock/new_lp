import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Gerador de Código de Barras Grátis Online — Crie e Baixe em PNG",
  description:
    "Gere código de barras e QR Code grátis online, com configurações de tamanho, formato e download imediato. Compatível com EAN-13, Code 128, QR Code e mais.",
  path: "/codigo-de-barras-gratis",
});

export default function BarcodeGeneratorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
