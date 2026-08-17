import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  getLegalControllerLine,
  PRIVACY_PAGE_TITLE,
  PRIVACY_PATH,
  TERMS_PATH,
} from "@/lib/legal-pages";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_CONTACT } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: PRIVACY_PAGE_TITLE,
  description:
    "Como a Purple Stock trata dados pessoais no site, no trial e no suporte, em linha com a LGPD.",
  path: PRIVACY_PATH,
});

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="ps-landing-canvas min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {PRIVACY_PAGE_TITLE}
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          Esta política descreve quais dados a Purple Stock coleta no site
          institucional e no início do teste, para que finalidade e como falar
          com o controlador. Controlador: {getLegalControllerLine()}
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">
          Dados que coletamos
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          No site, podemos tratar dados de navegação (páginas visitadas, origem
          e identificadores técnicos) para analytics. No formulário de contato e
          no WhatsApp, tratamos nome, e-mail, telefone e a mensagem que você
          envia. No teste de 7 dias, o app pode pedir dados de conta e cartão
          para ativar a assinatura — o processamento do cartão é feito pelo
          provedor de pagamento, não fica armazenado neste site.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">
          Finalidade e base legal
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          Usamos os dados para responder pedidos, ativar o teste, prestar
          suporte e melhorar o site. A base é execução de contrato ou medidas
          preliminares, cumprimento de obrigação legal quando couber, e legítimo
          interesse em entender o uso do site institucional.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">
          Seus direitos
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          Você pode pedir confirmação de tratamento, acesso, correção,
          anonimização, portabilidade ou eliminação dos dados, na forma da LGPD.
          Escreva para{" "}
          <a
            className="text-violet-700 hover:underline"
            href={`mailto:${SITE_CONTACT.email}`}
          >
            {SITE_CONTACT.email}
          </a>
          .
        </p>
        <p className="mt-6 text-sm text-slate-500">
          Também leia os{" "}
          <Link href={TERMS_PATH} className="text-violet-700 hover:underline">
            Termos de Uso
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
