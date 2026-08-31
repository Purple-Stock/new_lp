import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const FEATURE_LINKS = [
  {
    href: "/features/inventory-control",
    title: "Controle de inventário",
    body: "Saldo, localização e histórico de movimentação.",
  },
  {
    href: "/features/inventory-app",
    title: "App de estoque",
    body: "Entrada, saída e contagem no celular.",
  },
  {
    href: "/features/barcoding",
    title: "Código de barras",
    body: "EAN, Code 128 e etiquetas no fluxo de estoque.",
  },
  {
    href: "/features/qr-code-management",
    title: "Gestão de QR Code",
    body: "Etiqueta por item e check-in/check-out de equipamentos.",
  },
  {
    href: "/recursos/controle-de-almoxarifado",
    title: "Controle de almoxarifado",
    body: "Endereçamento, inventário rotativo e rastreabilidade.",
  },
  {
    href: "/features/equipment-management",
    title: "Gestão de equipamentos",
    body: "Responsável, status e histórico de cada ativo.",
  },
  {
    href: "/codigo-de-barras-gratis",
    title: "Gerador de código de barras grátis",
    body: "EAN-13, Code 128 e QR em PNG, sem cadastro.",
  },
] as const;

export default function FeaturesIndexPage() {
  return (
    <div className="ps-landing-canvas min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Recursos do sistema de estoque
        </h1>
        <p className="mt-4 text-slate-600">
          O Purple Stock cobre o fluxo operacional: cadastro, etiqueta,
          movimento no celular e relatório. Não é ERP fiscal nem WMS de galpão.
        </p>
        <ul className="mt-8 space-y-4">
          {FEATURE_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-violet-300"
              >
                <h2 className="font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{item.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
