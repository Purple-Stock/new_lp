import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Recursos e guias de estoque",
  description:
    "Guias de almoxarifado, aplicativo de estoque no celular e comparativo com planilha para PME.",
  path: "/recursos",
});

export default function RecursosIndexPage() {
  return (
    <div className="ps-landing-canvas min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Recursos e guias de estoque
        </h1>
        <p className="mt-4 text-slate-600">
          Conteúdo prático para sair da planilha: aplicativo no celular,
          almoxarifado e comparativo com Excel.
        </p>
        <ul className="mt-8 space-y-4">
          <li>
            <Link
              href="/recursos/aplicativo-de-estoque"
              className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-violet-300"
            >
              <h2 className="font-semibold text-slate-900">
                Aplicativo para controle de estoque
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                QR Code, entrada, saída e saldo por local no celular.
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/purple-stock-vs-planilha"
              className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-violet-300"
            >
              <h2 className="font-semibold text-slate-900">
                Purple Stock vs planilha
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Quando o Excel deixa de bater o saldo e como migrar.
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/recursos/controle-de-almoxarifado"
              className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-violet-300"
            >
              <h2 className="font-semibold text-slate-900">
                Controle de almoxarifado
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Entrada, saída, inventário cíclico e rastreabilidade.
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-violet-300"
            >
              <h2 className="font-semibold text-slate-900">
                Recursos do produto
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Inventário, QR Code, app e relatórios.
              </p>
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
