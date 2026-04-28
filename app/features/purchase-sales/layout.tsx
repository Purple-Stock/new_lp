import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Compras e Vendas Integradas ao Estoque",
  description:
    "Conecte compras, vendas e saldo de estoque para reduzir rupturas e melhorar a tomada de decisao comercial.",
  path: "/features/purchase-sales",
});

export default function PurchaseSalesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
