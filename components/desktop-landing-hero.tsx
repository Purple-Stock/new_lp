"use client";

import Image from "next/image";
import Link from "next/link";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackCtaClick } from "@/lib/analytics";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_EN,
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";
import { HOME_PAGE_H1_PT } from "@/lib/seo-page-copy";
import type { LandingLanguage } from "@/lib/desktop-landing-copy";

type DesktopLandingHeroProps = {
  language: LandingLanguage;
  rotatingSectorLabel: string;
  primaryHeroCta: string;
  usePainCta: boolean;
  isVideoModalOpen: boolean;
  onVideoModalOpenChange: (open: boolean) => void;
};

function pick(
  language: LandingLanguage,
  pt: string,
  en: string,
  fr: string
): string {
  if (language === "pt") return pt;
  if (language === "en") return en;
  return fr;
}

export function DesktopLandingHero({
  language,
  rotatingSectorLabel,
  primaryHeroCta,
  usePainCta,
  isVideoModalOpen,
  onVideoModalOpenChange,
}: DesktopLandingHeroProps) {
  const h1 =
    language === "pt"
      ? HOME_PAGE_H1_PT
      : language === "en"
        ? "QR inventory system: stop losing sales to stock mismatches"
        : "Systeme de stock avec QR Code: arretez les ecarts de stock";

  return (
    <>
      <div className="text-center space-y-6 mb-12">
        <h1 className="ps-display text-balance text-2xl sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
          {h1}
        </h1>
        <p className="ps-lead mx-auto max-w-3xl text-lg lg:text-xl">
          {language === "pt" ? (
            <>
              Para{" "}
              <span
                key={rotatingSectorLabel}
                className="font-semibold text-brand-ui-primary transition-opacity duration-300"
              >
                {rotatingSectorLabel}
              </span>
              : em poucos dias, seu time sai da planilha para controle no
              celular, com QR Code e histórico de entradas, saídas e
              transferências.
            </>
          ) : language === "en" ? (
            <>
              For{" "}
              <span
                key={rotatingSectorLabel}
                className="font-semibold text-brand-ui-primary transition-opacity duration-300"
              >
                {rotatingSectorLabel}
              </span>
              : in a few days, move from spreadsheets to mobile stock control
              with QR code and full movement history.
            </>
          ) : (
            <>
              Pour{" "}
              <span
                key={rotatingSectorLabel}
                className="font-semibold text-brand-ui-primary transition-opacity duration-300"
              >
                {rotatingSectorLabel}
              </span>
              : en quelques jours, passez du tableur au controle mobile avec QR
              code et historique des mouvements.
            </>
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            asChild
            size="lg"
            className="ps-btn-primary px-8 py-6 text-base"
          >
            <Link
              href="https://app.purplestock.com.br/"
              onClick={() =>
                trackCtaClick({
                  cta_name: "desktop_trial_primary",
                  cta_target: "app",
                  page_section: "hero_cta",
                  cta_variant: usePainCta ? "pain" : "default",
                })
              }
            >
              {primaryHeroCta}
            </Link>
          </Button>
        </div>
        <p className="text-sm font-semibold text-slate-700">
          {pick(
            language,
            `A partir de ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por time / mês · ${TEAM_PLAN_TRIAL_DAYS} dias grátis`,
            `From ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_EN} per team / month · ${TEAM_PLAN_TRIAL_DAYS}-day trial`,
            `A partir de ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} par equipe / mois · ${TEAM_PLAN_TRIAL_DAYS} jours d'essai`
          )}
        </p>
        <p className="text-sm text-slate-500">
          {pick(
            language,
            "Teste com cartão de crédito • Cancele quando quiser • Setup guiado",
            "Trial with credit card • Cancel anytime • Guided setup",
            "Essai avec carte bancaire • Annulation a tout moment • Setup guide"
          )}
        </p>
        <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700">
            <Smartphone className="h-3.5 w-3.5" />
            {pick(
              language,
              "Compatível com iOS",
              "Compatible with iOS",
              "Compatible iOS"
            )}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700">
            <Smartphone className="h-3.5 w-3.5" />
            {pick(
              language,
              "Compatível com Android",
              "Compatible with Android",
              "Compatible Android"
            )}
          </span>
        </div>
      </div>

      <div className="relative py-12">
        <div className="relative mx-auto max-w-6xl">
          <Dialog open={isVideoModalOpen} onOpenChange={onVideoModalOpenChange}>
            <div className="relative overflow-visible rounded-2xl border border-brand-border-soft bg-brand-canvas p-2 shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05),0_20px_40px_-24px_rgba(10,10,10,0.12)]">
              <div className="relative w-full h-auto">
                <Image
                  src="/images/app-items-list.png"
                  alt={pick(
                    language,
                    "Interface do Purple Stock - Lista de Itens",
                    "Purple Stock Interface - Items List",
                    "Interface Purple Stock - Liste des Articles"
                  )}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority
                  fetchPriority="high"
                />
                <DialogTrigger asChild>
                  <button className="absolute inset-0 flex items-center justify-center group cursor-pointer rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-ui-primary/40 focus:ring-offset-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-border-soft bg-white/95 text-brand-ui-primary shadow-[0_4px_12px_rgba(10,10,10,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_12px_rgba(139,92,246,0.25)]">
                      <div className="ml-1 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-brand-ui-primary border-t-transparent" />
                    </div>
                  </button>
                </DialogTrigger>
              </div>
            </div>

            <DialogContent className="max-w-4xl w-full p-0 bg-black">
              <DialogTitle className="sr-only">
                {pick(
                  language,
                  "Demonstração do Purple Stock",
                  "Purple Stock Demo",
                  "Démo Purple Stock"
                )}
              </DialogTitle>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/fD4amz78t8c?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
