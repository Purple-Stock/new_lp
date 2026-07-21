import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Check,
  MessageCircle,
  QrCode,
  ScanLine,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCalendlyUrl } from "@/lib/contact";
import {
  getRelatedIndustries,
  industryStats,
  type IndustryRecord,
} from "@/lib/industries-data";
import { getIndustrySocialProof } from "@/data/industry-social-proof";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DEFAULT_STAT = { value: "40%", label: "Aumento na eficiência" };

const STEP_ICONS = [ScanLine, QrCode, TrendingUp] as const;

type IndustryDetailViewProps = {
  industry: IndustryRecord;
};

export function IndustryDetailView({ industry }: IndustryDetailViewProps) {
  const heroStat = industryStats[industry.slug] ?? DEFAULT_STAT;
  const relatedIndustries = getRelatedIndustries(industry.slug);
  const proof = getIndustrySocialProof(industry.slug);
  const isEquipmentVertical =
    industry.slug === "audiovisual" || industry.slug === "events";

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
                {isEquipmentVertical
                  ? "Vertical de alta conversão"
                  : "Solução especializada"}
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
                    {isEquipmentVertical
                      ? "Check-in / check-out com QR Code"
                      : "Solução especializada"}
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
                {isEquipmentVertical ? (
                  <>
                    Usado por produtoras, locadoras e eventos · Plano{" "}
                    <Link
                      href="/precos"
                      className="ps-link-editorial font-semibold"
                    >
                      R$ 59,00 por time
                    </Link>{" "}
                    · 7 dias grátis
                  </>
                ) : (
                  <>
                    Plano único{" "}
                    <Link
                      href="/precos"
                      className="ps-link-editorial font-semibold"
                    >
                      R$ 59,00 por time
                    </Link>{" "}
                    · 7 dias grátis · sem fidelidade
                  </>
                )}
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
              {isEquipmentVertical
                ? "Fluxo de check-in/check-out sem travar o fim de semana de jobs."
                : "Um fluxo simples para sair da planilha sem travar a operação."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {proof.steps.map((step, index) => {
              const Icon = STEP_ICONS[index] ?? ScanLine;
              return (
                <div key={step.title} className="ps-card relative p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-surface-soft">
                      <Icon className="h-5 w-5 text-brand-ui-primary" />
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
              );
            })}
          </div>

          {proof.relatedBlogHref && proof.relatedBlogLabel ? (
            <p className="mt-8 text-center text-sm text-slate-600">
              Guia completo:{" "}
              <Link
                href={proof.relatedBlogHref}
                className="ps-link-editorial font-semibold"
              >
                {proof.relatedBlogLabel}
              </Link>
            </p>
          ) : null}
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="ps-panel overflow-hidden p-6 sm:p-8">
            <div className="mb-8 text-center">
              <h2 className="ps-display text-3xl md:text-4xl">
                {proof.proofHeadline}
              </h2>
              <p className="ps-lead mx-auto mt-3 max-w-2xl text-lg">
                {proof.proofSubhead}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proof.stats.map((stat) => (
                <div key={stat.label} className="ps-card p-5 text-center">
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
              {proof.casesHeadline}
            </h2>
            <p className="ps-lead mx-auto mt-3 max-w-2xl text-lg">
              {proof.casesSubhead}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proof.cases.map((item) => (
              <div
                key={`${item.role}-${item.companyType}`}
                className="ps-panel overflow-hidden"
              >
                <div className="border-l-4 border-brand-ui-primary p-6 sm:p-7">
                  <div className="mb-4">
                    <h3 className="font-bold text-brand-ink">{item.role}</h3>
                    <p className="text-sm text-slate-500">{item.companyType}</p>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-slate-700 sm:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-ui-primary">
                    {item.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="ps-display text-3xl md:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="ps-lead mx-auto mt-3 max-w-2xl text-lg">
              Objeções comuns de quem controla operação em {industry.name}.
            </p>
          </div>

          <div className="ps-panel mx-auto max-w-3xl overflow-hidden px-4 sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {proof.faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-brand-ink">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="ps-callout flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-brand-ink sm:text-2xl">
                {isEquipmentVertical
                  ? "Teste o fluxo no próximo set ou evento"
                  : "Preço direto para o time inteiro"}
              </h2>
              <p className="mt-2 max-w-xl text-slate-600">
                R$ 59,00 por time, 7 dias grátis e implantação rápida. Sem
                matriz confusa de funcionalidades.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="https://app.purplestock.com.br/">
                <Button className="ps-btn-primary whitespace-nowrap">
                  Começar teste grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/precos">
                <Button
                  variant="outline"
                  className="ps-btn-outline whitespace-nowrap"
                >
                  Ver plano
                </Button>
              </Link>
            </div>
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
              className="hidden text-sm font-semibold text-brand-ui-primary sm:inline-flex"
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {relatedIndustries.map((related) => (
              <Link
                key={related.slug}
                href={`/industrias/${related.slug}`}
                className="ps-card group overflow-hidden transition hover:border-brand-ui-primary/40"
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-brand-ink">
                    {related.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                    {related.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <a
            href={getCalendlyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-brand-ui-primary"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Prefere falar com o time? Agende uma conversa
          </a>
        </div>
      </section>
    </main>
  );
}
