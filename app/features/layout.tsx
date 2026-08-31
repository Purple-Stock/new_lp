import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Recursos do sistema de estoque",
  description:
    "QR Code, código de barras, inventário no celular, almoxarifado e relatórios do Purple Stock para PME.",
  path: "/features",
});

export default function FeaturesLayout({ children }: { children: ReactNode }) {
  return children;
}
