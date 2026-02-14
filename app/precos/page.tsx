"use client"

import { ArrowRight, Check, MessageCircle, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/contexts/LanguageContext"
import { trackCtaClick } from "@/lib/analytics"

export default function PricingPage() {
  const { language } = useLanguage()

  const copy = {
    pt: {
      badge: "Plano único",
      title: "Preço simples para todo o time",
      subtitle: "R$ 29,90 por time para sair da planilha e padronizar o estoque sem implantação longa.",
      priceLabel: "por time / mês",
      ctaPrimary: "Quero ativar meu time por R$ 29,90",
      ctaSecondary: "Tirar dúvidas no WhatsApp",
      cardTitle: "Purple Stock",
      cardDescription: "Tudo que sua operação precisa para controlar estoque sem retrabalho.",
      guaranteeTitle: "Sem risco para começar",
      guarantees: ["7 dias grátis", "Sem fidelidade", "Cancele quando quiser", "Suporte na ativação"],
      includedTitle: "O que está incluso",
      included: [
        "Controle de entrada, saída e ajustes",
        "Inventário e rastreabilidade por item",
        "Operação com QR Code e código de barras",
        "Dashboard com indicadores essenciais",
        "Suporte para implantação inicial",
      ],
      benefitsTitle: "Por que este modelo funciona",
      benefitsSubtitle: "Menos decisão de compra, mais foco em resultado operacional.",
      benefits: [
        {
          title: "Preço direto",
          description: "R$ 29,90 por time, sem matriz confusa de funcionalidades.",
        },
        {
          title: "Ativação rápida",
          description: "Fluxo pensado para sair da planilha sem travar a operação.",
        },
        {
          title: "Escalável",
          description: "Comece simples e cresça mantendo padronização de processo.",
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
      finalSubtitle: "Entre agora com preço único de lançamento e acelere sua operação.",
      finalPrimary: "Iniciar agora",
      finalSecondary: "Quero tirar dúvidas",
    },
    en: {
      badge: "Single plan",
      title: "Simple pricing for your whole team",
      subtitle: "R$ 29.90 per team to leave spreadsheets behind and standardize inventory quickly.",
      priceLabel: "per team / month",
      ctaPrimary: "Activate my team for R$ 29.90",
      ctaSecondary: "Talk on WhatsApp",
      cardTitle: "Purple Stock",
      cardDescription: "Everything your operation needs to control inventory without rework.",
      guaranteeTitle: "Low-risk start",
      guarantees: ["7-day free trial", "No lock-in", "Cancel anytime", "Onboarding support"],
      includedTitle: "What is included",
      included: [
        "Inbound, outbound, and adjustment control",
        "Inventory and item-level traceability",
        "QR Code and barcode operations",
        "Dashboard with essential KPIs",
        "Initial onboarding support",
      ],
      benefitsTitle: "Why this model works",
      benefitsSubtitle: "Less purchase friction, more operational outcome.",
      benefits: [
        {
          title: "Straightforward pricing",
          description: "R$ 29.90 per team, with no confusing feature matrix.",
        },
        {
          title: "Fast activation",
          description: "Designed to move you off spreadsheets without operational disruption.",
        },
        {
          title: "Scalable",
          description: "Start simple and scale while keeping process consistency.",
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
      finalSubtitle: "Start now with a single launch price and accelerate operations.",
      finalPrimary: "Start now",
      finalSecondary: "I have questions",
    },
    fr: {
      badge: "Plan unique",
      title: "Tarification simple pour toute votre équipe",
      subtitle: "R$ 29,90 par équipe pour quitter les tableurs et standardiser le stock rapidement.",
      priceLabel: "par équipe / mois",
      ctaPrimary: "Activer mon équipe pour R$ 29,90",
      ctaSecondary: "Parler sur WhatsApp",
      cardTitle: "Purple Stock",
      cardDescription: "Tout ce dont votre opération a besoin pour gérer le stock sans reprise.",
      guaranteeTitle: "Démarrage sans risque",
      guarantees: ["Essai gratuit 7 jours", "Sans engagement", "Annulation à tout moment", "Support d'activation"],
      includedTitle: "Ce qui est inclus",
      included: [
        "Contrôle des entrées, sorties et ajustements",
        "Inventaire et traçabilité par article",
        "Opération avec QR Code et code-barres",
        "Tableau de bord avec KPI essentiels",
        "Support initial de mise en place",
      ],
      benefitsTitle: "Pourquoi ce modèle fonctionne",
      benefitsSubtitle: "Moins de friction à l'achat, plus de résultat opérationnel.",
      benefits: [
        {
          title: "Prix direct",
          description: "R$ 29,90 par équipe, sans matrice de fonctionnalités complexe.",
        },
        {
          title: "Activation rapide",
          description: "Conçu pour quitter les tableurs sans bloquer l'opération.",
        },
        {
          title: "Évolutif",
          description: "Commencez simple et développez avec une exécution standardisée.",
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
      finalSubtitle: "Démarrez maintenant avec un prix unique de lancement.",
      finalPrimary: "Démarrer maintenant",
      finalSecondary: "J'ai des questions",
    },
  }[language]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)]">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <Navbar />

      <section className="relative pt-24 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-[0_25px_100px_-30px_rgba(59,7,100,0.35),0_10px_40px_-20px_rgba(0,0,0,0.1)] backdrop-blur-2xl md:p-12">
            <div className="mb-6 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
              <Zap className="mr-2 h-4 w-4" />
              {copy.badge}
            </div>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                {copy.title}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">{copy.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="relative pb-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-purple-200 bg-white/90 p-8 shadow-xl backdrop-blur-xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">{copy.cardTitle}</h2>
              <p className="mt-2 text-gray-600">{copy.cardDescription}</p>
            </div>

            <div className="mt-8 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold text-gray-900">R$ 29,90</span>
                <span className="text-lg text-gray-500">{copy.priceLabel}</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50/80 p-4">
              <h3 className="text-sm font-semibold text-green-800">{copy.guaranteeTitle}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {copy.guarantees.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-green-700 border border-green-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">{copy.includedTitle}</h3>
              <ul className="space-y-3">
                {copy.included.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600">
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
                  trackCtaClick({
                    cta_name: "pricing_single_plan_primary",
                    cta_target: "app",
                    page_section: "pricing_single_card",
                    price_value: 29.9,
                  })
                }
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 py-6 text-lg font-semibold text-white hover:from-purple-700 hover:to-purple-800">
                  {copy.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/5511995597242?text=Ol%C3%A1!%20Quero%20entender%20o%20plano%20de%20R%24%2029%2C90%20por%20time."
                className="flex-1"
                onClick={() =>
                  trackCtaClick({
                    cta_name: "pricing_single_plan_secondary",
                    cta_target: "whatsapp",
                    page_section: "pricing_single_card",
                    price_value: 29.9,
                  })
                }
              >
                <Button variant="outline" className="w-full border-2 border-purple-300 py-6 text-lg font-semibold text-purple-700 hover:bg-purple-50">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {copy.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900">{copy.benefitsTitle}</h2>
            <p className="mx-auto mt-3 max-w-3xl text-xl text-gray-600">{copy.benefitsSubtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/60 bg-white/80 p-6 text-center shadow-sm backdrop-blur-md">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{copy.benefits[0].title}</h3>
              <p className="mt-2 text-gray-600">{copy.benefits[0].description}</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/80 p-6 text-center shadow-sm backdrop-blur-md">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{copy.benefits[1].title}</h3>
              <p className="mt-2 text-gray-600">{copy.benefits[1].description}</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/80 p-6 text-center shadow-sm backdrop-blur-md">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{copy.benefits[2].title}</h3>
              <p className="mt-2 text-gray-600">{copy.benefits[2].description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900">{copy.faqTitle}</h2>
          </div>
          <div className="space-y-5">
            {copy.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-md">
                <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 py-20">
        <div className="absolute inset-0">
          <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white md:text-5xl">{copy.finalTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-white/90">{copy.finalSubtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.purplestock.com.br/"
              onClick={() =>
                trackCtaClick({
                  cta_name: "pricing_single_bottom_primary",
                  cta_target: "app",
                  page_section: "pricing_bottom_cta",
                  price_value: 29.9,
                })
              }
            >
              <Button size="lg" className="bg-white px-8 py-4 text-lg font-semibold text-purple-700 hover:bg-gray-100">
                {copy.finalPrimary}
              </Button>
            </Link>
            <Link
              href="https://wa.me/5511995597242?text=Ol%C3%A1!%20Quero%20tirar%20d%C3%BAvidas%20sobre%20o%20plano%20de%20R%24%2029%2C90%20por%20time."
              onClick={() =>
                trackCtaClick({
                  cta_name: "pricing_single_bottom_secondary",
                  cta_target: "whatsapp",
                  page_section: "pricing_bottom_cta",
                  price_value: 29.9,
                })
              }
            >
              <Button variant="outline" size="lg" className="border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-semibold text-white hover:bg-white/10">
                {copy.finalSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
