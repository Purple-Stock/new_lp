"use client";

import {
  ArrowRight,
  Box,
  Check,
  MessageCircle,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackSeoCtaClick } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/contact";

const MONTHLY_PRICE = 59;

const priceDisplay = {
  pt: "R$ 59,00",
  en: "R$ 59.00",
  fr: "R$ 59,00",
} as const;

export default function PricingPage() {
  const { language } = useLanguage();
  const formattedPrice = priceDisplay[language];

  const copy = {
    pt: {
      badge: "Plano único",
      title:
        "Sistema de controle de estoque com preço simples para o time inteiro",
      subtitle:
        "Veja o preço da Purple Stock para PME: R$ 59,00 por time, 7 dias grátis e implantação rápida para sair da planilha sem travar a operação.",
      priceLabel: "por time / mês",
      ctaPrimary: "Começar teste grátis de 7 dias",
      ctaSecondary: "Tirar dúvidas sobre preço",
      cardTitle: "Purple Stock",
      cardDescription:
        "Tudo que sua operação precisa para controlar estoque com rastreabilidade, rotina simples e preço direto.",
      guaranteeTitle: "Sem risco para começar",
      guarantees: [
        "7 dias grátis",
        "Sem fidelidade",
        "Cancele quando quiser",
        "Suporte na ativação",
      ],
      includedTitle: "O que está incluso",
      included: [
        "Controle de entrada, saída e ajustes",
        "Inventário e rastreabilidade por item",
        "Operação com QR Code e código de barras",
        "Dashboard com indicadores essenciais",
        "Suporte para implantação inicial",
      ],
      benefitsTitle: "Por que este modelo funciona",
      benefitsSubtitle:
        "Menos atrito na contratação, mais foco em colocar o estoque para rodar rápido.",
      benefits: [
        {
          title: "Preço direto",
          description:
            "R$ 59,00 por time, sem matriz confusa de funcionalidades.",
        },
        {
          title: "Ativação rápida",
          description:
            "Fluxo pensado para sair da planilha sem travar a operação.",
        },
        {
          title: "Escalável",
          description:
            "Comece simples e cresça mantendo padronização de processo.",
        },
      ],
      faqTitle: "Perguntas frequentes",
      faqs: [
        {
          q: "Esse valor é por usuário?",
          a: "Não. O valor é por time: R$ 59,00 por mês para sua equipe operar no Purple Stock.",
        },
        {
          q: "Preciso trocar meu ERP para usar?",
          a: "Não. Você pode começar no estoque e manter seu ERP atual.",
        },
        {
          q: "Tem fidelidade?",
          a: "Não. Você pode cancelar quando quiser, sem multa.",
        },
        {
          q: "Vou parar a operação para implantar?",
          a: "Não. A implantação começa com um fluxo mínimo e evolução por etapas.",
        },
      ],
      finalTitle: "Pronto para padronizar seu estoque?",
      finalSubtitle:
        "Ative seu time com teste grátis, preço único e uma rotina que a operação consegue usar no dia a dia.",
      finalPrimary: "Testar agora",
      finalSecondary: "Falar sobre implantação",
    },
    en: {
      badge: "Single plan",
      title:
        "Inventory control software with simple pricing for your whole team",
      subtitle:
        "See Purple Stock pricing for SMEs: R$ 59.00 per team, 7-day free trial, and fast setup to leave spreadsheets behind.",
      priceLabel: "per team / month",
      ctaPrimary: "Start 7-day free trial",
      ctaSecondary: "Ask about pricing",
      cardTitle: "Purple Stock",
      cardDescription:
        "Everything your operation needs to control inventory with traceability and a simple routine.",
      guaranteeTitle: "Low-risk start",
      guarantees: [
        "7-day free trial",
        "No lock-in",
        "Cancel anytime",
        "Onboarding support",
      ],
      includedTitle: "What is included",
      included: [
        "Inbound, outbound, and adjustment control",
        "Inventory and item-level traceability",
        "QR Code and barcode operations",
        "Dashboard with essential KPIs",
        "Initial onboarding support",
      ],
      benefitsTitle: "Why this model works",
      benefitsSubtitle:
        "Less buying friction, more focus on making stock operations work fast.",
      benefits: [
        {
          title: "Straightforward pricing",
          description: "R$ 59.00 per team, with no confusing feature matrix.",
        },
        {
          title: "Fast activation",
          description:
            "Designed to move you off spreadsheets without operational disruption.",
        },
        {
          title: "Scalable",
          description:
            "Start simple and scale while keeping process consistency.",
        },
      ],
      faqTitle: "Frequently asked questions",
      faqs: [
        {
          q: "Is this price per user?",
          a: "No. The price is per team: R$ 59.00 per month for your team.",
        },
        {
          q: "Do I need to replace my ERP?",
          a: "No. You can start with stock operations and keep your current ERP.",
        },
        {
          q: "Is there a lock-in period?",
          a: "No. You can cancel any time with no penalty.",
        },
        {
          q: "Will implementation stop operations?",
          a: "No. It starts with a minimum workflow and scales in phases.",
        },
      ],
      finalTitle: "Ready to standardize your inventory?",
      finalSubtitle:
        "Start with a free trial, one price for the team, and a workflow your operation can actually use.",
      finalPrimary: "Start now",
      finalSecondary: "Talk about setup",
    },
    fr: {
      badge: "Plan unique",
      title:
        "Logiciel de gestion de stock avec tarif simple pour toute votre équipe",
      subtitle:
        "Découvrez le prix de Purple Stock pour PME: R$ 59,00 par équipe, essai gratuit 7 jours et mise en route rapide.",
      priceLabel: "par équipe / mois",
      ctaPrimary: "Commencer l'essai gratuit",
      ctaSecondary: "Poser une question sur le prix",
      cardTitle: "Purple Stock",
      cardDescription:
        "Tout ce dont votre opération a besoin pour gérer le stock avec traçabilité et routine simple.",
      guaranteeTitle: "Démarrage sans risque",
      guarantees: [
        "Essai gratuit 7 jours",
        "Sans engagement",
        "Annulation à tout moment",
        "Support d'activation",
      ],
      includedTitle: "Ce qui est inclus",
      included: [
        "Contrôle des entrées, sorties et ajustements",
        "Inventaire et traçabilité par article",
        "Opération avec QR Code et code-barres",
        "Tableau de bord avec KPI essentiels",
        "Support initial de mise en place",
      ],
      benefitsTitle: "Pourquoi ce modèle fonctionne",
      benefitsSubtitle:
        "Moins de friction à l'achat, plus de rapidité pour faire tourner le stock.",
      benefits: [
        {
          title: "Prix direct",
          description:
            "R$ 59,00 par équipe, sans matrice de fonctionnalités complexe.",
        },
        {
          title: "Activation rapide",
          description:
            "Conçu pour quitter les tableurs sans bloquer l'opération.",
        },
        {
          title: "Évolutif",
          description:
            "Commencez simple et développez avec une exécution standardisée.",
        },
      ],
      faqTitle: "Questions fréquentes",
      faqs: [
        {
          q: "Ce prix est-il par utilisateur ?",
          a: "Non. Le prix est par équipe: R$ 59,00 par mois pour votre équipe.",
        },
        {
          q: "Dois-je remplacer mon ERP ?",
          a: "Non. Vous pouvez commencer par le stock et garder votre ERP actuel.",
        },
        {
          q: "Y a-t-il un engagement ?",
          a: "Non. Vous pouvez annuler à tout moment, sans pénalité.",
        },
        {
          q: "La mise en place bloque-t-elle l'opération ?",
          a: "Non. Elle commence avec un flux minimum puis évolue par étapes.",
        },
      ],
      finalTitle: "Prêt à standardiser votre stock ?",
      finalSubtitle:
        "Démarrez avec essai gratuit, prix unique et une routine que l'équipe peut adopter rapidement.",
      finalPrimary: "Tester maintenant",
      finalSecondary: "Parler de la mise en place",
    },
  }[language];

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Purple Stock",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Sistema de controle de estoque com inventario, rastreabilidade, QR Code, teste gratis e operacao em tempo real para PMEs.",
    offers: {
      "@type": "Offer",
      price: "59.00",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: "https://www.purplestock.com.br/precos",
      description:
        "Plano unico por time com 7 dias gratis, sem fidelidade e ativacao rapida.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    provider: {
      "@type": "Organization",
      name: "Purple Stock",
      url: "https://www.purplestock.com.br",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="ps-landing-canvas relative min-h-screen overflow-x-hidden">
      <div className="ps-landing-bg" aria-hidden="true">
        <div className="ps-landing-bg-glow" />
        <div className="ps-landing-bg-lines" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="relative pb-20">
        <section className="relative z-[1] pt-24 pb-12">
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
                    Purple Stock · Preços
                  </span>
                </div>

                <span className="text-[10px] font-medium text-slate-400">
                  {language === "pt"
                    ? "Plano por time"
                    : language === "fr"
                      ? "Plan par équipe"
                      : "Per-team plan"}
                </span>
              </div>

              <div className="p-8 text-center md:p-12">
                <div className="ps-badge-violet mb-6 inline-flex items-center px-4 py-2 text-sm normal-case tracking-normal">
                  <Zap className="mr-2 h-4 w-4" />
                  {copy.badge}
                </div>
                <h1 className="ps-display text-4xl md:text-5xl lg:text-6xl">
                  {copy.title}
                </h1>
                <p className="ps-lead mx-auto mt-6 max-w-3xl text-xl">
                  {copy.subtitle}
                </p>
                <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500">
                  Compare também por cenário em{" "}
                  <Link
                    href="/industrias"
                    className="ps-link-editorial font-semibold"
                  >
                    soluções por setor
                  </Link>{" "}
                  e no guia de{" "}
                  <Link
                    href="/recursos/controle-de-almoxarifado"
                    className="ps-link-editorial font-semibold"
                  >
                    controle de almoxarifado
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-[1] pb-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="ps-panel overflow-hidden border-2 border-brand-ui-primary/20">
              <div className="ps-panel-chrome flex items-center gap-2 px-4 py-2 sm:px-5">
                <span className="text-[11px] font-medium text-slate-500">
                  Purple Stock · Plano único
                </span>
              </div>

              <div className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-brand-ink">
                    {copy.cardTitle}
                  </h2>
                  <p className="mt-2 text-slate-600">{copy.cardDescription}</p>
                </div>

                <div className="mt-8 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-bold text-brand-ui-primary">
                      {formattedPrice}
                    </span>
                    <span className="text-lg text-slate-500">
                      {copy.priceLabel}
                    </span>
                  </div>
                </div>

                <div className="ps-callout mt-6 p-4">
                  <h3 className="text-sm font-semibold text-brand-link-blue">
                    {copy.guaranteeTitle}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {copy.guarantees.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-brand-border-soft bg-white px-3 py-1 text-xs font-medium text-brand-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-brand-ink">
                    {copy.includedTitle}
                  </h3>
                  <ul className="space-y-3">
                    {copy.included.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-ui-primary">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://app.purplestock.com.br/"
                    className="flex-1"
                    onClick={() =>
                      trackSeoCtaClick({
                        cta_name: "pricing_single_plan_primary",
                        cta_target: "app",
                        page_section: "pricing_single_card",
                        price_value: MONTHLY_PRICE,
                        query_cluster: "pricing",
                      })
                    }
                  >
                    <Button className="ps-btn-primary w-full py-6 text-lg">
                      {copy.ctaPrimary}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link
                    href={buildWhatsAppUrl(
                      `Olá! Quero entender o plano de ${formattedPrice} por time.`
                    )}
                    className="flex-1"
                    onClick={() =>
                      trackSeoCtaClick({
                        cta_name: "pricing_single_plan_secondary",
                        cta_target: "whatsapp",
                        page_section: "pricing_single_card",
                        price_value: MONTHLY_PRICE,
                        query_cluster: "pricing",
                      })
                    }
                  >
                    <Button
                      variant="outline"
                      className="ps-btn-outline w-full py-6 text-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {copy.ctaSecondary}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-[1] py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="ps-display text-3xl md:text-4xl">
                {copy.benefitsTitle}
              </h2>
              <p className="ps-lead mx-auto mt-3 max-w-3xl text-lg">
                {copy.benefitsSubtitle}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="ps-card p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-surface-soft">
                  <Shield className="h-6 w-6 text-brand-ui-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-ink">
                  {copy.benefits[0].title}
                </h3>
                <p className="mt-2 text-slate-600">
                  {copy.benefits[0].description}
                </p>
              </div>
              <div className="ps-card p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-surface-soft">
                  <Zap className="h-6 w-6 text-brand-ui-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-ink">
                  {copy.benefits[1].title}
                </h3>
                <p className="mt-2 text-slate-600">
                  {copy.benefits[1].description}
                </p>
              </div>
              <div className="ps-card p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-surface-soft">
                  <Users className="h-6 w-6 text-brand-ui-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-ink">
                  {copy.benefits[2].title}
                </h3>
                <p className="mt-2 text-slate-600">
                  {copy.benefits[2].description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-[1] py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="ps-display text-3xl md:text-4xl">
                {copy.faqTitle}
              </h2>
            </div>
            <div className="space-y-5">
              {copy.faqs.map((faq) => (
                <div key={faq.q} className="ps-card p-6">
                  <h3 className="text-lg font-semibold text-brand-ink">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-slate-600">{faq.a}</p>
                </div>
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
            <h2 className="ps-display text-4xl text-white md:text-5xl">
              {copy.finalTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-violet-100/90">
              {copy.finalSubtitle}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="https://app.purplestock.com.br/"
                onClick={() =>
                  trackSeoCtaClick({
                    cta_name: "pricing_single_bottom_primary",
                    cta_target: "app",
                    page_section: "pricing_bottom_cta",
                    price_value: MONTHLY_PRICE,
                    query_cluster: "pricing",
                  })
                }
              >
                <Button
                  size="lg"
                  className="ps-btn-primary px-8 py-4 text-lg shadow-[0_8px_28px_rgba(139,92,246,0.4)]"
                >
                  {copy.finalPrimary}
                </Button>
              </Link>
              <Link
                href={buildWhatsAppUrl(
                  `Olá! Quero tirar dúvidas sobre o plano de ${formattedPrice} por time.`
                )}
                onClick={() =>
                  trackSeoCtaClick({
                    cta_name: "pricing_single_bottom_secondary",
                    cta_target: "whatsapp",
                    page_section: "pricing_bottom_cta",
                    price_value: MONTHLY_PRICE,
                    query_cluster: "pricing",
                  })
                }
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/15"
                >
                  {copy.finalSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
