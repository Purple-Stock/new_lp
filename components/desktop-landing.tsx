"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCtaClick, trackSeoLandingView } from "@/lib/analytics";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getCalendlyUrl } from "@/lib/contact";
import {
  getLandingLogoCases,
  getLandingPlaybook,
  getLandingPrimaryHeroCta,
  getLandingRotatingSectors,
  type LandingLanguage,
} from "@/lib/desktop-landing-copy";
import { DesktopLandingWindowChrome } from "@/components/desktop-landing-window-chrome";
import { DesktopLandingHero } from "@/components/desktop-landing-hero";
import { DesktopLandingSocialProof } from "@/components/desktop-landing-social-proof";
import { DesktopLandingPlaybookSections } from "@/components/desktop-landing-playbook-sections";

function asLandingLanguage(language: string): LandingLanguage {
  if (language === "en" || language === "fr" || language === "pt") {
    return language;
  }
  return "pt";
}

export function DesktopLanding({
  beforeFooter,
}: {
  beforeFooter?: React.ReactNode;
}) {
  const { language: rawLanguage, setLanguage } = useLanguage();
  const language = asLandingLanguage(rawLanguage);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [usePainCta] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return new URLSearchParams(window.location.search).get("cta") === "pain";
  });

  useEffect(() => {
    trackSeoLandingView({
      page_path: "/",
      landing_name: "desktop_landing",
    });
  }, []);

  const cycleLanguage = useCallback(() => {
    if (language === "pt") setLanguage("en");
    else if (language === "en") setLanguage("fr");
    else setLanguage("pt");
  }, [language, setLanguage]);

  const goBack = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goForward = useCallback(() => {
    if (typeof window === "undefined") return;
    window.history.forward();
  }, []);

  const reloadPage = useCallback(() => {
    if (typeof window === "undefined") return;
    window.location.reload();
  }, []);

  const openPricing = useCallback(() => {
    if (typeof window === "undefined") return;
    window.location.href = "/precos";
  }, []);

  const openApp = useCallback(() => {
    if (typeof window === "undefined") return;
    window.open(
      "https://app.purplestock.com.br/",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const scrollLandingToTop = useCallback(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const playbookContent = useMemo(
    () => getLandingPlaybook(language),
    [language]
  );
  const rotatingSectors = useMemo(
    () => getLandingRotatingSectors(language),
    [language]
  );
  const logoCases = useMemo(() => getLandingLogoCases(language), [language]);
  const primaryHeroCta = useMemo(
    () => getLandingPrimaryHeroCta(language, usePainCta),
    [language, usePainCta]
  );

  const [sectorIndexes, setSectorIndexes] = useState<Record<string, number>>(
    {}
  );
  const sectorIndex = sectorIndexes[language] ?? 0;

  useEffect(() => {
    if (rotatingSectors.length === 0) return;
    const id = window.setInterval(() => {
      setSectorIndexes((previous) => ({
        ...previous,
        [language]:
          ((((previous[language] ?? 0) + 1) % rotatingSectors.length) +
            rotatingSectors.length) %
          rotatingSectors.length,
      }));
    }, 2800);
    return () => window.clearInterval(id);
  }, [language, rotatingSectors]);

  const rotatingSectorLabel = useMemo(() => {
    const sector = rotatingSectors[sectorIndex] ?? "";
    return sector.charAt(0).toUpperCase() + sector.slice(1);
  }, [rotatingSectors, sectorIndex]);

  const secondaryTrialLabel =
    language === "pt"
      ? "Começar teste grátis de 7 dias"
      : language === "en"
        ? "Start 7-day free trial"
        : "Commencer l'essai gratuit de 7 jours";
  const specialistLabel =
    language === "pt"
      ? "Falar com especialista"
      : language === "en"
        ? "Talk to a specialist"
        : "Parler a un specialiste";

  return (
    <div className="ps-landing-canvas relative min-h-screen overflow-x-hidden">
      <div className="ps-landing-bg" aria-hidden="true">
        <div className="ps-landing-bg-glow" />
        <div className="ps-landing-bg-lines" />
      </div>
      <Navbar />

      <div className="relative z-[1] mx-auto w-full max-w-4xl px-4 pt-24 pb-8 md:max-w-5xl md:px-10 md:pt-24">
        <div className="relative flex flex-col gap-8">
          <div className="ps-panel relative flex flex-col overflow-visible md:overflow-hidden">
            <DesktopLandingWindowChrome
              language={language}
              onReload={reloadPage}
              onScrollTop={scrollLandingToTop}
              onOpenApp={openApp}
              onBack={goBack}
              onForward={goForward}
              onCycleLanguage={cycleLanguage}
              onOpenPricing={openPricing}
            />

            <div className="flex-1 space-y-8 overflow-visible px-4 py-8 sm:px-10 sm:py-10">
              <DesktopLandingHero
                language={language}
                rotatingSectorLabel={rotatingSectorLabel}
                primaryHeroCta={primaryHeroCta}
                usePainCta={usePainCta}
                isVideoModalOpen={isVideoModalOpen}
                onVideoModalOpenChange={setIsVideoModalOpen}
              />

              <DesktopLandingSocialProof
                language={language}
                logoCases={logoCases}
              />

              <DesktopLandingPlaybookSections
                language={language}
                playbook={playbookContent}
              />

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="ps-btn-primary px-8 py-6 text-base"
                >
                  <Link
                    href="https://app.purplestock.com.br/"
                    onClick={() =>
                      trackCtaClick({
                        cta_name: "desktop_trial_secondary",
                        cta_target: "app",
                        page_section: "secondary_cta",
                      })
                    }
                  >
                    <Sparkles className="w-5 h-5 mr-2" strokeWidth={2.5} />
                    {secondaryTrialLabel}
                    <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="ps-btn-outline px-8 py-6 text-base"
                >
                  <Link
                    href={getCalendlyUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackCtaClick({
                        cta_name: "desktop_talk_specialist_secondary",
                        cta_target: "calendly",
                        page_section: "secondary_cta",
                      })
                    }
                  >
                    <MessageCircle className="w-5 h-5 mr-2" strokeWidth={2.5} />
                    {specialistLabel}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {beforeFooter}
      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  );
}
