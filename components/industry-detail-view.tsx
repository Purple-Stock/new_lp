import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Check,
  Clock,
  MessageCircle,
  QrCode,
  ScanLine,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCalendlyUrl } from "@/lib/contact";
import {
  getRelatedIndustries,
  industryStats,
  type IndustryRecord,
} from "@/lib/industries-data";

const DEFAULT_STAT = { value: "40%", label: "Aumento na eficiência" };

const IMPLEMENTATION_STEPS = [
  {
    icon: ScanLine,
    title: "Cadastre itens e locais",
    description:
      "Importe seu estoque atual ou comece com um fluxo mínimo em poucos minutos.",
  },
  {
    icon: QrCode,
    title: "Escaneie na operação",
    description:
      "Entrada, saída e inventário com QR Code ou código de barras no chão de fábrica.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhe em tempo real",
    description:
      "Dashboard com saldos, movimentações e alertas para decidir com dados.",
  },
];

const PROOF_STATS = [
  { icon: TrendingUp, value: "40%", label: "Aumento na Eficiência" },
  { icon: Shield, value: "99.9%", label: "Precisão no Controle" },
  { icon: Clock, value: "24/7", label: "Disponibilidade" },
  { icon: Users, value: "100%", label: "Satisfação" },
];

type IndustryDetailViewProps = {
  industry: IndustryRecord;
};

export function IndustryDetailView({ industry }: IndustryDetailViewProps) {
  const heroStat = industryStats[industry.slug] ?? DEFAULT_STAT;
  const relatedIndustries = getRelatedIndustries(industry.slug);

  return (
    <main className="relative pb-20">
      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="ps-panel overflow-hidden">
            <div className="ps-panel-chrome relative flex items-center justify-between px-4 py-2.5 sm:px-5">
              <div className="flex items-center gap-[6px]" aria-hidden="true">
                <span className="h-[12px] w-[12px] rounded-full bg-[#e86a63] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                <span className="h-[12px] w-[12px] rounded-full bg-[#e9b54c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                <span className="h-[12px] w-[12px] rounded-full bg-[#4ab96a] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
              </div>

              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded bg-brand-ui-primary shadow-sm">
                  <Box className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-[12px] font-semibold tracking-wide text-slate-600">
                  Purple Stock · {industry.name}
                </span>
              </div>

              <span className="text-[10px] font-medium text-slate-400">
                Solução especializada
              </span>
            </div>

            <div className="relative h-[300px] overflow-hidden sm:h-[360px] lg:h-[420px]">
              <Image
                src={industry.image || "/placeholder.svg"}
                alt={industry.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />

              <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                <div className="rounded-xl border border-white/20 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-brand-ui-primary">
                    {heroStat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    {heroStat.label}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-6 md:p-10">
                  <Link
                    href="/industrias"
                    className="group mb-5 inline-flex items-center text-sm font-semibold text-white/90 transition-colors hover:text-white"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Voltar para setores
                  </Link>

                  <div className="ps-badge-violet mb-4 inline-flex items-center border-white/20 bg-white/15 px-4 py-2 text-sm normal-case tracking-normal text-white">
                    <Star className="mr-2 h-4 w-4" />
                    Solução Especializada
                  </div>

                  <h1 className="ps-display max-w-4xl text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {industry.name}
                  </h1>

                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ps-panel mt-6 overflow-hidden">
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-sm text-slate-600">
                Plano único{" "}
                <Link
                  href="/precos"
                  className="ps-link-editorial font-semibold"
                >
                  R$ 59,00 por time
                </Link>{" "}
                · 7 dias grátis · sem fidelidade
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://app.purplestock.com.br/">
                  <Button size="sm" className="ps-btn-primary">
                    <Zap className="mr-2 h-4 w-4" />
                    Teste grátis
                  </Button>
                </Link>
                <Link href="/precos">
                  <Button
                    size="sm"
                    variant="outline"
                    className="ps-btn-outline"
                  >
                    Ver preços
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="ps-panel overflow-hidden">
              <div className="ps-panel-chrome px-4 py-2.5 sm:px-5">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Benefícios para {industry.name}
                </span>
              </div>
              <div className="space-y-3 p-5 sm:p-6">
                {industry.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="ps-proof-card flex items-start gap-4 p-4"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-ui-primary">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm font-semibold leading-relaxed text-brand-ink sm:text-base">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ps-panel overflow-hidden">
              <div className="ps-panel-chrome px-4 py-2.5 sm:px-5">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Recursos principais
                </span>
              </div>
              <div className="space-y-3 p-5 sm:p-6">
                {industry.features.map((feature) => (
                  <div
                    key={feature}
                    className="ps-card flex items-start gap-4 p-4"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-surface-soft">
                      <Star className="h-4 w-4 text-brand-ui-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="ps-display text-3xl md:text-4xl">
              Como implantar em {industry.name}
            </h2>
            <p className="ps-lead mx-auto mt-3 max-w-2xl text-lg">
              Um fluxo simples para sair da planilha sem travar a operação.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {IMPLEMENTATION_STEPS.map((step, index) => (
              <div key={step.title} className="ps-card relative p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-surface-soft">
                    <step.icon className="h-5 w-5 text-brand-ui-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-ui-primary">
                    Etapa {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="ps-panel overflow-hidden p-6 sm:p-8">
            <div className="mb-8 text-center">
              <h2 className="ps-display text-3xl md:text-4xl">
                Resultados comprovados
              </h2>
              <p className="ps-lead mx-auto mt-3 max-w-2xl text-lg">
                Empresas de {industry.name} já operam com mais controle e menos
                atrito.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PROOF_STATS.map((stat) => (
                <div key={stat.label} className="ps-card p-5 text-center">
                  <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-surface-soft">
                    <stat.icon className="h-6 w-6 text-brand-ui-primary" />
                  </div>
                  <div className="text-2xl font-bold text-brand-ui-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="ps-display text-3xl md:text-4xl">
              Casos de sucesso
            </h2>
            <p className="ps-lead mx-auto mt-3 max-w-2xl text-lg">
              Times que padronizaram o estoque e ganharam previsibilidade.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Star,
                quote:
                  "O Purple Stock revolucionou nossa gestão de estoque. Conseguimos reduzir perdas em 30% e aumentar a eficiência operacional significativamente.",
              },
              {
                icon: TrendingUp,
                quote:
                  "A implementação foi rápida e os resultados foram imediatos. Nossa equipe adorou a facilidade de uso e a interface intuitiva.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="ps-panel overflow-hidden">
                <div className="border-l-4 border-brand-ui-primary p-6 sm:p-8">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-ui-primary">
                      <testimonial.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-ink">
                        Empresa de {industry.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        Setor: {industry.name}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-base leading-relaxed text-slate-700 sm:text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center text-sm text-slate-500">
                    <div className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                    Cliente desde 2023
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="ps-callout flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-brand-ink sm:text-2xl">
                Preço direto para o time inteiro
              </h2>
              <p className="mt-2 max-w-xl text-slate-600">
                R$ 59,00 por time, 7 dias grátis e implantação rápida. Sem
                matriz confusa de funcionalidades.
              </p>
            </div>
            <Link href="/precos">
              <Button className="ps-btn-primary whitespace-nowrap">
                Ver plano completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="ps-display text-2xl md:text-3xl">
                Outros setores
              </h2>
              <p className="mt-2 text-slate-600">
                Explore soluções para operações parecidas.
              </p>
            </div>
            <Link
              href="/industrias"
              className="ps-link-editorial hidden text-sm font-semibold sm:inline-flex sm:items-center"
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedIndustries.map((related) => (
              <Link
                key={related.slug}
                href={`/industrias/${related.slug}`}
                className="ps-card group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={related.image || "/placeholder.svg"}
                    alt={related.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-lg font-bold text-white">
                      {related.name}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="line-clamp-2 text-sm text-slate-600">
                    {related.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-semibold text-brand-ui-primary">
                    Conhecer setor
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-brand-violet/15 py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#2d2248] via-brand-chrome-graphite to-[#1a2f4f]"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-violet/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-link-blue/25 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="ps-display text-3xl text-white sm:text-4xl md:text-5xl">
            Transforme sua gestão de estoque hoje
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-violet-100/90">
            Junte-se a empresas de {industry.name} que já padronizaram entrada,
            saída e inventário com o Purple Stock.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="https://app.purplestock.com.br/">
              <Button
                size="lg"
                className="ps-btn-primary px-8 py-4 text-lg shadow-[0_8px_28px_rgba(139,92,246,0.4)]"
              >
                <Zap className="mr-2 h-5 w-5" />
                Começar teste gratuito
              </Button>
            </Link>

            <Link href={getCalendlyUrl()}>
              <Button
                variant="outline"
                size="lg"
                className="border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/15"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
