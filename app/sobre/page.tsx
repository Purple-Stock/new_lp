import Link from "next/link";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { buildPageMetadata } from "@/lib/metadata";
import { buildAboutPageSchema } from "@/lib/structured-data";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: `Sobre a ${SITE_NAME} | Controle de Estoque com QR Code`,
  description:
    "A Purple Stock é um sistema brasileiro de controle de estoque e almoxarifado com QR Code, feito para PMEs que precisam de rastreabilidade sem projeto de ERP.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <div className="ps-landing-canvas min-h-screen">
      <JsonLd data={buildAboutPageSchema()} />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Sobre a Purple Stock
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          A Purple Stock nasceu para resolver um problema prático: equipes de
          estoque que ainda dependem de planilhas e não conseguem rastrear quem
          moveu o quê, quando e onde. Oferecemos controle de estoque,
          almoxarifado e inventário com QR Code no celular, com implantação leve
          e operação em tempo real.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Atendemos PMEs de varejo, manufatura, logística, alimentação e outros
          segmentos que precisam de saldo confiável antes de assumir um ERP
          completo.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/precos"
            className="ps-btn-primary inline-flex px-5 py-2.5 text-sm font-semibold"
          >
            Ver preços
          </Link>
          <Link
            href="/contato"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800"
          >
            Falar com a equipe
          </Link>
        </div>
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">Leia também</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link
                href="/blog/inventario-fisico-passo-a-passo-2026"
                className="text-violet-700 hover:underline"
              >
                Inventário físico passo a passo para PME [2026]
              </Link>
            </li>
            <li>
              <Link
                href="/blog/abc-curva-abc-estoque-pme"
                className="text-violet-700 hover:underline"
              >
                Curva ABC no estoque: como priorizar itens na PME
              </Link>
            </li>
            <li>
              <Link
                href="/blog/guia-completo-sistema-de-estoque"
                className="text-violet-700 hover:underline"
              >
                Guia completo de sistema de estoque
              </Link>
            </li>
            <li>
              <Link
                href="/blog/como-usar-qr-code-controle-estoque"
                className="text-violet-700 hover:underline"
              >
                Como usar QR Code no controle de estoque
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
