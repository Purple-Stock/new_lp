import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "QR Code para Estoque: Rastreie Itens com o Celular em Tempo Real",
  description:
    "Gestão de estoque com QR Code: rastreie produtos, equipamentos e ativos com escaneamento pelo celular. Visibilidade total e zero erro manual. Comece grátis.",
  path: "/features/qr-code-management",
});

export default function QrCodeManagementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
