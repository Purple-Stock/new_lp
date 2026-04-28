import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Aplicativo de Estoque para Operacao em Campo",
  description:
    "Use o app de estoque do Purple Stock para registrar movimentacoes, inventarios e consultas em tempo real.",
  path: "/features/inventory-app",
});

export default function InventoryAppLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
