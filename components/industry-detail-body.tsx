import Link from "next/link";
import { Check, QrCode, ScanLine, Star, TrendingUp } from "lucide-react";
import type { IndustryRecord } from "@/lib/industries-data";
import type { IndustrySocialProof } from "@/data/industry-social-proof";
import { isEquipmentIndustry } from "@/lib/industry-detail-helpers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const STEP_ICONS = [ScanLine, QrCode, TrendingUp] as const;

type IndustryDetailBodyProps = {
  industry: IndustryRecord;
  proof: IndustrySocialProof;
};

export function IndustryDetailBody({
  industry,
  proof,
}: IndustryDetailBodyProps) {
  const isEquipmentVertical = isEquipmentIndustry(industry.slug);

  return (
    <>
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
    </>
  );
}
