import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Compras e Vendas Integradas ao Estoque: Zero Ruptura",
  description:
    "Conecte pedidos de compra e vendas ao estoque em tempo real: alertas de ruptura, reposição automática e margem por produto. Pare de perder vendas. Teste grátis.",
  path: "/features/purchase-sales",
});

export default function PurchaseSalesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
