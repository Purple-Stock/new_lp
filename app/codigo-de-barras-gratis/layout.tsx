import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Gerador de Codigo de Barras Gratis Online",
  description:
    "Gere codigo de barras e QR Code gratis online, com configuracoes de tamanho, formato e download imediato.",
  path: "/codigo-de-barras-gratis",
});

export default function BarcodeGeneratorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
