import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  getLegalControllerLine,
  PRIVACY_PATH,
  TERMS_PAGE_TITLE,
  TERMS_PATH,
} from "@/lib/legal-pages";
import { buildPageMetadata } from "@/lib/metadata";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export const metadata = buildPageMetadata({
  title: TERMS_PAGE_TITLE,
  description:
    "Condições de uso do site e do plano Purple Stock: teste, preço por time e cancelamento.",
  path: TERMS_PATH,
});

export default function TermosDeUsoPage() {
  return (
    <div className="ps-landing-canvas min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {TERMS_PAGE_TITLE}
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          Estes termos regulam o uso do site www.purplestock.com.br e o acesso
          ao software Purple Stock. Fornecedor: {getLegalControllerLine()}
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">O serviço</h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          A Purple Stock é um sistema de controle de estoque e equipamentos com
          QR Code, oferecido em plano único por time. O preço público atual é{" "}
          {TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por time ao mês, com teste de{" "}
          {TEAM_PLAN_TRIAL_DAYS} dias. O teste pode exigir cartão. Não há
          fidelidade: você pode cancelar quando quiser.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">
          Uso aceitável
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          Você é responsável pelos dados que cadastra, pelas permissões do time
          e por não usar o serviço para fins ilícitos. O gerador gratuito de
          código de barras não emite GTIN oficial nem substitui registro em
          entidade de padronização.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Limitação</h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          O site institucional descreve o produto de boa-fé. Disponibilidade,
          suporte e SLA do app são os contratados na ativação da conta. Em caso
          de conflito, prevalece o combinado no momento da assinatura.
        </p>
        <p className="mt-6 text-sm text-slate-500">
          Também leia a{" "}
          <Link href={PRIVACY_PATH} className="text-violet-700 hover:underline">
            Política de Privacidade
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
