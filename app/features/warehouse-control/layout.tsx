import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Controle de Almoxarifado: Reduza Ruptura em 70% com QR Code",
  description:
    "Sistema de controle de almoxarifado com QR Code, inventário rotativo e alertas automáticos. Reduza erros de separação e ruptura em até 70%. Teste grátis.",
  path: "/features/warehouse-control",
});

export default function WarehouseControlLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
