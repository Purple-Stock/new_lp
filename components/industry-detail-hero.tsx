import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Box, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IndustryRecord } from "@/lib/industries-data";
import {
  isEquipmentIndustry,
  resolveEquipmentAudience,
} from "@/lib/industry-detail-helpers";

type IndustryDetailHeroProps = {
  industry: IndustryRecord;
  heroStat: { value: string; label: string };
};

export function IndustryDetailHero({
  industry,
  heroStat,
}: IndustryDetailHeroProps) {
  const isEquipmentVertical = isEquipmentIndustry(industry.slug);

  return (
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

          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:h-[360px] lg:h-[420px]">
            <Image
              src={industry.image || "/placeholder.svg"}
              alt={industry.name}
              fill
              sizes="(max-width: 640px) 100vw, 1152px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />

            <div className="absolute right-4 top-12 sm:right-6 sm:top-6">
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
              <div className="w-full p-6 pt-16 md:p-10">
                <Link
                  href="/industrias"
                  className="group mb-3 hidden items-center text-sm font-semibold text-white/90 transition-colors hover:text-white sm:inline-flex"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Voltar para setores
                </Link>

                <div className="ps-badge-violet mb-3 hidden items-center border-white/20 bg-white/15 px-4 py-2 text-sm normal-case tracking-normal text-white sm:inline-flex">
                  <Star className="mr-2 h-4 w-4" />
                  {isEquipmentVertical
                    ? "Check-in / check-out com QR Code"
                    : "Solução especializada"}
                </div>

                <h1 className="ps-display max-w-4xl text-2xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {industry.seoHeadline ?? industry.name}
                </h1>

                <p className="mt-3 hidden max-w-3xl text-base leading-relaxed text-white/90 sm:block sm:text-lg md:text-xl">
                  {industry.description}
                </p>
              </div>
            </div>
          </div>
          <p className="px-6 py-4 text-sm leading-relaxed text-slate-600 sm:hidden">
            {industry.description}
          </p>
        </div>

        <div className="ps-panel mt-6 overflow-hidden">
          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm text-slate-600">
              {isEquipmentVertical ? (
                <>
                  {resolveEquipmentAudience(industry.slug)} · Plano{" "}
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
                <Button size="sm" variant="outline" className="ps-btn-outline">
                  Ver preços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
