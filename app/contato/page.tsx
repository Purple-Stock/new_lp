import Link from "next/link";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { buildWhatsAppUrl, getCalendlyUrl } from "@/lib/contact";
import { buildPageMetadata } from "@/lib/metadata";
import { buildContactPageSchema } from "@/lib/structured-data";
import { SITE_CONTACT, SITE_NAME } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: `Contato | ${SITE_NAME}`,
  description:
    "Entre em contato com a Purple Stock por e-mail, telefone, WhatsApp ou agendamento. Suporte em português para operações de estoque.",
  path: "/contato",
});

export default function ContatoPage() {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Quero falar com a equipe Purple Stock."
  );

  return (
    <div className="ps-landing-canvas min-h-screen">
      <JsonLd data={buildContactPageSchema()} />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">Contato</h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          Fale com a equipe Purple Stock para entender se o sistema encaixa na
          sua operação de estoque, almoxarifado ou inventário.
        </p>

        <ul className="mt-8 space-y-4 text-slate-700">
          <li>
            <span className="font-semibold text-slate-900">E-mail: </span>
            <a
              href={`mailto:${SITE_CONTACT.email}`}
              className="text-violet-700 hover:underline"
            >
              {SITE_CONTACT.email}
            </a>
          </li>
          <li>
            <span className="font-semibold text-slate-900">Telefone: </span>
            <a
              href="tel:+5511995597242"
              className="text-violet-700 hover:underline"
            >
              +55 (11) 99559-7242
            </a>
          </li>
          <li>
            <span className="font-semibold text-slate-900">Local: </span>
            São Paulo, Brasil
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ps-btn-primary inline-flex px-5 py-2.5 text-sm font-semibold"
          >
            Falar no WhatsApp
          </Link>
          <Link
            href={getCalendlyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800"
          >
            Agendar conversa
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
