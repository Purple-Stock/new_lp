"use client";

import {
  ArrowRight,
  Check,
  MessageCircle,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackSeoCtaClick } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/contact";

export default function PricingPage() {
  const { language } = useLanguage();

  const copy = {
    pt: {
      badge: "Plano único",
      title:
        "Sistema de controle de estoque com preço simples para o time inteiro",
      subtitle:
        "Veja o preço da Purple Stock para PME: R$ 29,90 por time, 7 dias grátis e implantação rápida para sair da planilha sem travar a operação.",
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
            "R$ 29,90 por time, sem matriz confusa de funcionalidades.",
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
          a: "Não. O valor é por time: R$ 29,90 por mês para sua equipe operar no Purple Stock.",
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
        "See Purple Stock pricing for SMEs: R$ 29.90 per team, 7-day free trial, and fast setup to leave spreadsheets behind.",
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
          description: "R$ 29.90 per team, with no confusing feature matrix.",
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
          a: "No. The price is per team: R$ 29.90 per month for your team.",
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
        "Découvrez le prix de Purple Stock pour PME: R$ 29,90 par équipe, essai gratuit 7 jours et mise en route rapide.",
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
            "R$ 29,90 par équipe, sans matrice de fonctionnalités complexe.",
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
          a: "Non. Le prix est par équipe: R$ 29,90 par mois pour votre équipe.",
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
      price: "29.90",
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

      <section className="relative z-[1] pt-24 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="ps-panel p-8 text-center md:p-12">
            <div className="ps-badge-violet mb-6 inline-flex items-center px-4 py-2 text-sm">
              <Zap className="mr-2 h-4 w-4" />
              {copy.badge}
            </div>
            <h1 className="ps-display text-5xl md:text-6xl">{copy.title}</h1>
            <p className="ps-lead mx-auto mt-6 max-w-3xl text-xl">
              {copy.subtitle}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-500">
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
      </section>

      <section className="relative z-[1] pb-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="ps-panel border-2 border-brand-ui-primary/20 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {copy.cardTitle}
              </h2>
              <p className="mt-2 text-gray-600">{copy.cardDescription}</p>
            </div>

            <div className="mt-8 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold text-gray-900">
                  R$ 29,90
                </span>
                <span className="text-lg text-gray-500">{copy.priceLabel}</span>
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
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                {copy.includedTitle}
              </h3>
              <ul className="space-y-3">
                {copy.included.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-ui-primary">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
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
                    price_value: 29.9,
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
                  "Olá! Quero entender o plano de R$ 29,90 por time."
                )}
                className="flex-1"
                onClick={() =>
                  trackSeoCtaClick({
                    cta_name: "pricing_single_plan_secondary",
                    cta_target: "whatsapp",
                    page_section: "pricing_single_card",
                    price_value: 29.9,
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
      </section>

      <section className="relative z-[1] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              {copy.benefitsTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-xl text-gray-600">
              {copy.benefitsSubtitle}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="ps-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-surface-soft">
                <Shield className="h-6 w-6 text-brand-ui-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {copy.benefits[0].title}
              </h3>
              <p className="mt-2 text-gray-600">
                {copy.benefits[0].description}
              </p>
            </div>
            <div className="ps-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-surface-soft">
                <Zap className="h-6 w-6 text-brand-ui-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {copy.benefits[1].title}
              </h3>
              <p className="mt-2 text-gray-600">
                {copy.benefits[1].description}
              </p>
            </div>
            <div className="ps-card p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-surface-soft">
                <Users className="h-6 w-6 text-brand-ui-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {copy.benefits[2].title}
              </h3>
              <p className="mt-2 text-gray-600">
                {copy.benefits[2].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[1] py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              {copy.faqTitle}
            </h2>
          </div>
          <div className="space-y-5">
            {copy.faqs.map((faq) => (
              <div key={faq.q} className="ps-card p-6">
                <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-[1] overflow-hidden border-t border-brand-border-soft bg-brand-ink py-20">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white md:text-5xl tracking-tight">
            {copy.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-white/90">
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
                  price_value: 29.9,
                  query_cluster: "pricing",
                })
              }
            >
              <Button
                size="lg"
                className="bg-white px-8 py-4 text-lg font-semibold text-purple-700 hover:bg-gray-100"
              >
                {copy.finalPrimary}
              </Button>
            </Link>
            <Link
              href={buildWhatsAppUrl(
                "Olá! Quero tirar dúvidas sobre o plano de R$ 29,90 por time."
              )}
              onClick={() =>
                trackSeoCtaClick({
                  cta_name: "pricing_single_bottom_secondary",
                  cta_target: "whatsapp",
                  page_section: "pricing_bottom_cta",
                  price_value: 29.9,
                  query_cluster: "pricing",
                })
              }
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-semibold text-white hover:bg-white/10"
              >
                {copy.finalSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
