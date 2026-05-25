import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Aplicativo de Controle de Estoque: Operação Completa pelo Celular",
  description:
    "App de estoque mobile: registre entradas, saídas, inventários e consultas de qualquer lugar. Substitua a planilha por um app que funciona offline. Teste grátis.",
  path: "/features/inventory-app",
});

export default function InventoryAppLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
