"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { trackSeoCtaClick } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/contact";

const checklist = [
  "Padronizar cadastro de itens com SKU, unidade e localização",
  "Definir fluxo único de entrada, saída, ajuste e transferência",
  "Criar rotina de inventário cíclico semanal",
  "Configurar alertas de estoque mínimo por item",
  "Treinar equipe para operação com QR Code e histórico de auditoria",
];

const faqs = [
  {
    q: "Qual o primeiro passo para organizar o almoxarifado?",
    a: "Comece pelo cadastro padronizado de itens e localizações. Sem isso, qualquer sistema vira retrabalho.",
  },
  {
    q: "Preciso trocar meu ERP para controlar almoxarifado?",
    a: "Não. Muitas PMEs começam com uma camada especializada em estoque e mantêm o ERP atual no financeiro.",
  },
  {
    q: "Em quanto tempo dá para ver resultado?",
    a: "As primeiras semanas já mostram ganho em acuracidade de saldo e redução de perdas por ruptura.",
  },
];

export default function ControleAlmoxarifadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 pt-24 pb-16">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Controle de Almoxarifado para PMEs
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 md:text-xl">
            Estruture entrada, saída, inventário cíclico e rastreabilidade em
            uma rotina simples para reduzir erros e ruptura.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.purplestock.com.br/?utm_source=site&utm_medium=organic&utm_campaign=controle_almoxarifado"
              onClick={() =>
                trackSeoCtaClick({
                  cta_name: "almoxarifado_hero_primary",
                  cta_target: "app",
                  page_section: "resource_hero",
                  query_cluster: "controle-de-almoxarifado",
                })
              }
            >
              <Button className="bg-white text-purple-700 hover:bg-gray-100">
                Começar teste grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href={buildWhatsAppUrl(
                "Olá! Quero implantar controle de almoxarifado na minha empresa."
              )}
              onClick={() =>
                trackSeoCtaClick({
                  cta_name: "almoxarifado_hero_secondary",
                  cta_target: "whatsapp",
                  page_section: "resource_hero",
                  query_cluster: "controle-de-almoxarifado",
                })
              }
            >
              <Button
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Tirar dúvidas no WhatsApp
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/80">
            Também pode comparar opções por setor em{" "}
            <Link href="/industrias" className="font-semibold underline">
              /industrias
            </Link>{" "}
            e preço em{" "}
            <Link href="/precos" className="font-semibold underline">
              /precos
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              Checklist de implantação em 30 dias
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Use este roteiro para sair da planilha sem interromper a operação
              e ganhar previsibilidade no estoque.
            </p>
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-2xl border border-purple-200 bg-purple-50/60 p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Ganhos operacionais esperados
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                Menos divergência de inventário e menos compras de urgência.
              </p>
              <p>Rastreabilidade por usuário e horário em toda movimentação.</p>
              <p>Tempo de conferência reduzido com leitura por QR Code.</p>
            </div>
            <div className="mt-8 rounded-xl border border-purple-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">
                Próximos passos sugeridos
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>
                  1. Revisar setores e fluxo em{" "}
                  <Link
                    href="/industrias"
                    className="font-semibold text-purple-700"
                  >
                    /industrias
                  </Link>
                </li>
                <li>
                  2. Validar custo de implantação em{" "}
                  <Link
                    href="/precos"
                    className="font-semibold text-purple-700"
                  >
                    /precos
                  </Link>
                </li>
                <li>3. Abrir trial para o time operacional</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Perguntas frequentes sobre almoxarifado
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.q}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
