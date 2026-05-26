import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Controle de Estoque Completo: Inventário + QR Code + Relatórios",
  description:
    "Sistema de controle de estoque com inventário em tempo real, QR Code, alertas de ruptura e relatórios automáticos. Ideal para PMEs. Comece grátis hoje.",
  path: "/features/inventory-control",
});

export default function InventoryControlLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
