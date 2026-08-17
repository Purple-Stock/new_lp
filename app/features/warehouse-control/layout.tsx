import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Controle de Almoxarifado com QR Code e Inventário Rotativo",
  description:
    "Sistema de controle de almoxarifado com QR Code, inventário rotativo e alertas automáticos. Menos erro de separação e saldo que o time confia. Teste grátis.",
  path: "/features/warehouse-control",
});

export default function WarehouseControlLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
