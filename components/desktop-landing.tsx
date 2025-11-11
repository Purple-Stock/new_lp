"use client"

import { useMemo, useState, type ComponentType } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AppWindow,
  BadgePercent,
  CheckCircle2,
  CircleDollarSign,
  FileCode,
  HelpCircle,
  Laptop,
  MessageCircleQuestion,
  Package,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { cn } from "@/lib/utils"

type StageKey = "startup" | "growth" | "scale"

export function DesktopLanding() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [activeStage, setActiveStage] = useState<StageKey>("growth")

  const osText = useMemo(() => {
    return {
      pt: {
        home: "Início",
        product: "Plataforma",
        pricing: "Planos",
        customers: "Clientes",
        docs: "Documentação",
        demo: "Ver demo",
        talk: "Falar com humano",
        ask: "Perguntar algo",
        signup: "Criar conta",
        topProduct: "Produto",
        topPricing: t.nav.pricing,
        topDocs: "Documentação",
        topCommunity: "Comunidade",
        topCompany: "Empresa",
        topMore: "Mais",
        explore: "Explore recursos por estágio da empresa",
        library: "Ver biblioteca completa",
        startup: "Início",
        growth: "Crescimento",
        scale: "Escala",
        spotlight: "Visão geral em tempo real",
        spotlightCopy: "Tenha indicadores críticos do estoque em um único painel.",
        uptime: "Disponibilidade",
        support: "Suporte",
        customersLove: "Empresas que aceleram com Purple Stock",
        testimonial:
          "“O Purple Stock revolucionou nossa gestão de estoque. Agora temos controle total do inventário.”",
        testimonialCompany: "Purchase Store",
        stageTag: "Começa com",
        stageHighlight: "Purple Stock",
        install: "Instalar com IA",
        installHint: "Conecte seus dados via API e tenha automações em minutos.",
      },
      en: {
        home: "Home",
        product: "Product OS",
        pricing: t.nav.pricing,
        customers: "Customers",
        docs: "Documentation",
        demo: "Watch demo",
        talk: "Talk to a human",
        ask: "Ask a question",
        signup: "Sign up",
        topProduct: "Product",
        topPricing: t.nav.pricing,
        topDocs: "Docs",
        topCommunity: "Community",
        topCompany: "Company",
        topMore: "More",
        explore: "Explore features by company stage",
        library: "Browse feature library",
        startup: "Startup",
        growth: "Growth",
        scale: "Scale",
        spotlight: "Real-time spotlight",
        spotlightCopy: "Keep every stock KPI visible in one adaptive dashboard.",
        uptime: "Uptime",
        support: "Support",
        customersLove: "Companies scaling with Purple Stock",
        testimonial:
          "“Purple Stock transformed our inventory processes. Total control, without spreadsheets.”",
        testimonialCompany: "Purchase Store",
        stageTag: t.hero.subtitle,
        stageHighlight: t.hero.subtitleHighlight,
        install: "Install with AI",
        installHint: "Connect APIs and automate updates in minutes.",
      },
      fr: {
        home: "Accueil",
        product: "Plateforme",
        pricing: t.nav.pricing,
        customers: "Clients",
        docs: "Documentation",
        demo: "Voir la démo",
        talk: "Parler à un humain",
        ask: "Poser une question",
        signup: "Créer un compte",
        topProduct: "Produit",
        topPricing: t.nav.pricing,
        topDocs: "Docs",
        topCommunity: "Communauté",
        topCompany: "Entreprise",
        topMore: "Plus",
        explore: "Explorez les fonctionnalités selon votre étape",
        library: "Parcourir toutes les fonctionnalités",
        startup: "Démarrage",
        growth: "Croissance",
        scale: "Échelle",
        spotlight: "Vue en temps réel",
        spotlightCopy: "Gardez vos indicateurs d'inventaire visibles dans un seul tableau.",
        uptime: "Disponibilité",
        support: "Support",
        customersLove: "Entreprises qui accélèrent avec Purple Stock",
        testimonial:
          "« Purple Stock a révolutionné notre gestion des stocks. Contrôle total, sans feuilles de calcul. »",
        testimonialCompany: "Purchase Store",
        stageTag: "Commence avec",
        stageHighlight: "Purple Stock",
        install: "Installer avec IA",
        installHint: "Connectez vos données via API et automatisez en quelques minutes.",
      },
    }[language]
  }, [language, t.nav.pricing, t.hero.subtitle, t.hero.subtitleHighlight])

  const heroBenefits = useMemo(() => {
    return [
      language === "pt"
        ? "Controle total do inventário"
        : language === "fr"
          ? "Contrôle total de l'inventaire"
          : "Complete inventory control",
      language === "pt"
        ? "Relatórios em tempo real"
        : language === "fr"
          ? "Rapports en temps réel"
          : "Real-time reporting",
      language === "pt"
        ? "Integração com QR Code"
        : language === "fr"
          ? "Intégration QR Code"
          : "QR Code integration",
      language === "pt"
        ? "Inventário pelo celular"
        : language === "fr"
          ? "Inventaire sur mobile"
          : "Mobile-first inventory",
    ]
  }, [language])

  const stageMap: Record<StageKey, Array<{ title: string; description: string; icon: ComponentType<{ className?: string }> }>> = {
    startup: [
      {
        title: t.features.realTime.title,
        description: t.features.realTime.description[0],
        icon: AppWindow,
      },
      {
        title: t.features.inventoryLink.title,
        description: t.features.inventoryLink.description[0],
        icon: MessageCircleQuestion,
      },
      {
        title: t.features.security.title,
        description: t.features.security.description[0],
        icon: ShieldCheck,
      },
    ],
    growth: [
      {
        title: t.features.orderManagement.title,
        description: t.features.orderManagement.description[0],
        icon: Package,
      },
      {
        title: t.features.barcode.title,
        description: t.features.barcode.description[0],
        icon: BadgePercent,
      },
      {
        title: t.features.realTime.title,
        description: t.features.realTime.description[1],
        icon: Laptop,
      },
    ],
    scale: [
      {
        title: t.features.security.title,
        description: t.features.security.description[1],
        icon: ShieldCheck,
      },
      {
        title: t.features.inventoryLink.title,
        description: t.features.inventoryLink.description[1],
        icon: UsersRound,
      },
      {
        title: t.features.realTime.title,
        description: t.features.realTime.description[2],
        icon: AppWindow,
      },
    ],
  }

  const sideIcons = useMemo(
    () => [
      {
        label: osText.home,
        href: "/",
        icon: Sparkles,
      },
      {
        label: osText.product,
        href: "/features/inventory-control",
        icon: AppWindow,
      },
      {
        label: osText.pricing,
        href: "/precos",
        icon: CircleDollarSign,
      },
      {
        label: osText.customers,
        href: "/artigos",
        icon: UsersRound,
      },
      {
        label: osText.docs,
        href: "/recursos/gestao-de-estoque",
        icon: FileCode,
      },
      {
        label: osText.demo,
        href: "https://app.purplestock.com.br/",
        icon: PlayCircle,
      },
      {
        label: osText.talk,
        href: "https://wa.me/554891120022",
        icon: HelpCircle,
      },
      {
        label: osText.ask,
        href: "/artigos",
        icon: MessageCircleQuestion,
      },
      {
        label: osText.signup,
        href: "https://app.purplestock.com.br/",
        icon: UsersRound,
      },
    ],
    [osText],
  )

  const dockIcons = useMemo(
    () => [
      {
        label: osText.product,
        href: "/features/inventory-control",
        icon: AppWindow,
      },
      {
        label: t.nav.pricing,
        href: "/precos",
        icon: CircleDollarSign,
      },
      {
        label: "QR Code",
        href: "/features/qr-code-management",
        icon: Package,
      },
      {
        label: "Controle",
        href: "/features/inventory-control",
        icon: ShieldCheck,
      },
      {
        label: "App Mobile",
        href: "/features/inventory-app",
        icon: Laptop,
      },
    ],
    [osText.product, t.nav.pricing],
  )

  const testimonial = translations[language].testimonials?.[0]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.18),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff1a%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1320px] flex-col gap-8 px-4 py-10 md:flex-row md:gap-10 md:px-10">
        <aside className="hidden shrink-0 flex-col justify-between pt-4 text-sm font-medium text-slate-700 md:flex md:w-32 lg:w-40">
          <div className="space-y-3">
            {sideIcons.slice(0, 5).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center gap-2 rounded-2xl bg-white/60 p-4 text-center shadow-sm ring-1 ring-purple-200/40 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-purple-300"
              >
                <item.icon className="h-6 w-6 text-purple-500 transition-colors group-hover:text-purple-600" />
                <span className="text-xs font-semibold leading-tight text-slate-600">{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            {sideIcons.slice(5).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center gap-2 rounded-2xl bg-white/50 p-4 text-center shadow-sm ring-1 ring-purple-200/30 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-purple-300"
              >
                <item.icon className="h-6 w-6 text-purple-400 transition-colors group-hover:text-purple-600" />
                <span className="text-xs font-semibold leading-tight text-slate-600">{item.label}</span>
              </Link>
            ))}
          </div>
        </aside>

        <div className="flex flex-1 flex-col gap-8 pb-20">
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_28px_120px_-60px_rgba(59,7,100,0.7)] backdrop-blur-xl">
            <div className="border-b border-white/70 bg-gradient-to-r from-white via-white/80 to-purple-50/60 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="hidden items-center gap-5 text-sm font-semibold text-slate-500 sm:flex">
                  {[osText.topProduct, osText.topPricing, osText.topDocs, osText.topCommunity, osText.topCompany, osText.topMore].map((label) => (
                    <Link key={label} href="#">
                      <span className="transition-colors hover:text-purple-600">{label}</span>
                    </Link>
                  ))}
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="hidden rounded-full border-white/60 bg-white/40 px-4 text-xs font-medium text-purple-600 transition-colors hover:bg-white hover:text-purple-700 sm:inline-flex"
                    onClick={() => {
                      if (language === "pt") setLanguage("en")
                      else if (language === "en") setLanguage("fr")
                      else setLanguage("pt")
                    }}
                  >
                    {language === "pt" ? "PT" : language === "en" ? "EN" : "FR"}
                  </Button>
                  <Button
                    asChild
                    className="hidden rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-5 text-xs font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl sm:inline-flex"
                  >
                    <Link href="https://app.purplestock.com.br/">{t.hero.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-8 px-4 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-full border border-purple-200/70 bg-purple-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 shadow-sm">
                    <Sparkles className="h-4 w-4 text-purple-500" />
                    <span>
                      {osText.stageTag} <span className="text-purple-900">{osText.stageHighlight}</span>
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                      {t.hero.title}
                    </h1>
                    <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                      {t.hero.description2 ?? t.hero.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 text-base font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl"
                    >
                      <Link href="https://app.purplestock.com.br/">
                        <Sparkles className="mr-2 h-5 w-5" />
                        {t.hero.cta}
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full border-purple-200/80 bg-white/80 px-6 py-6 text-base font-semibold text-purple-700 shadow-sm hover:bg-white"
                    >
                      <PlayCircle className="mr-2 h-5 w-5" />
                      {osText.demo}
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="lg"
                      className="rounded-full bg-white/60 px-6 py-6 text-base font-semibold text-purple-700 shadow-sm hover:bg-white"
                    >
                      <Link href="https://app.purplestock.com.br/">
                        <Laptop className="mr-2 h-5 w-5" />
                        {osText.install}
                      </Link>
                    </Button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {heroBenefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-gradient-to-r from-purple-600/10 via-purple-500/10 to-purple-400/10 p-5 ring-1 ring-purple-200/50">
                    <ShieldCheck className="h-10 w-10 text-purple-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-purple-900">{osText.installHint}</p>
                      <div className="flex items-center gap-6 text-xs uppercase tracking-wide text-purple-700">
                        <span>{osText.uptime}: <span className="font-semibold text-purple-900">99.9%</span></span>
                        <span>{osText.support}: <span className="font-semibold text-purple-900">24/7</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-200/50 via-purple-100/40 to-white/30 shadow-inner" />
                  <div className="relative rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-purple-900">{osText.spotlight}</span>
                      <span className="text-xs text-slate-400">Live</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{osText.spotlightCopy}</p>

                    <div className="mt-6 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-500 p-5 text-white shadow-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-purple-100">Inventário disponível</p>
                          <p className="mt-1 text-3xl font-bold">7.482 itens</p>
                        </div>
                        <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-purple-50">
                          +18% vs último mês
                        </div>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-white/10 p-3">
                          <p className="text-xs text-purple-100">Custo médio</p>
                          <p className="text-lg font-semibold">R$ 58,20</p>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                          <p className="text-xs text-purple-100">Pedidos em trânsito</p>
                          <p className="text-lg font-semibold">42</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-purple-100/60 bg-white/90 shadow-inner">
                      <div className="flex items-center justify-between border-b border-purple-100/60 bg-purple-50/80 px-4 py-3">
                        <div>
                          <p className="text-sm font-semibold text-purple-900">{stageMap[activeStage][0].title}</p>
                          <p className="text-xs text-purple-500">{activeStage === "startup" ? osText.startup : activeStage === "growth" ? osText.growth : osText.scale}</p>
                        </div>
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-4 text-xs font-semibold shadow-purple-500/20 hover:shadow-lg"
                        >
                          <Link href="https://app.purplestock.com.br/">{t.hero.cta}</Link>
                        </Button>
                      </div>
                      <div className="relative h-56 w-full overflow-hidden rounded-b-2xl">
                        <Image
                          src="/images/app-benefits.png"
                          alt="Purple Stock dashboard preview"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">{osText.explore}</p>
                  <div className="mt-6 flex gap-3">
                    {(["startup", "growth", "scale"] as StageKey[]).map((stage) => (
                      <button
                        key={stage}
                        onClick={() => setActiveStage(stage)}
                        className={cn(
                          "flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200",
                          activeStage === stage
                            ? "border-purple-200 bg-purple-600/90 text-white shadow-lg shadow-purple-400/40"
                            : "border-purple-100 bg-white/70 text-purple-600 hover:border-purple-200 hover:bg-white",
                        )}
                      >
                        {stage === "startup" ? osText.startup : stage === "growth" ? osText.growth : osText.scale}
                      </button>
                    ))}
                  </div>
                  <Link
                    href="/features/inventory-control"
                    className="mt-5 inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700"
                  >
                    {osText.library}
                  </Link>
                </div>

                <div className="grid gap-4">
                  {stageMap[activeStage].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/10 to-purple-500/20 text-purple-600">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-800">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm sm:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">{osText.customersLove}</p>
                  <p className="text-2xl font-bold text-slate-900">{testimonial?.quote ?? osText.testimonial}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-purple-100">
                      <Image
                        src="/images/logos/purchase-store.png"
                        alt="Purchase Store"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{osText.testimonialCompany}</p>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Retail · Purple Stock customer since 2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 p-6 text-white shadow-lg">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-purple-200">{osText.spotlight}</p>
                    <p className="mt-2 text-3xl font-bold">+32%</p>
                    <p className="text-sm text-purple-100">
                      {language === "pt"
                        ? "Redução média em perdas de estoque após 90 dias."
                        : language === "fr"
                          ? "Réduction moyenne des ruptures après 90 jours."
                          : "Average stock loss reduction after 90 days."}
                    </p>
                  </div>
                  <div className="mt-6 rounded-2xl bg-white/15 p-4">
                    <p className="text-xs uppercase tracking-wide text-purple-100">Integrations</p>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-sm font-semibold text-purple-50">
                      <span>ERP</span>
                      <span>eCommerce</span>
                      <span>WMS</span>
                      <span>API</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden h-24 items-end justify-center rounded-3xl border border-white/60 bg-white/70 px-6 py-4 shadow-lg backdrop-blur md:flex">
            <div className="flex items-end gap-4">
              {dockIcons.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col items-center gap-2 rounded-2xl bg-white/60 px-4 pb-2 pt-3 text-xs font-semibold text-slate-600 shadow-sm transition-all hover:-translate-y-2 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/15 to-purple-500/20 text-purple-600 shadow-inner transition-shadow group-hover:shadow-[0_10px_25px_-12px_rgba(109,40,217,0.6)]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


