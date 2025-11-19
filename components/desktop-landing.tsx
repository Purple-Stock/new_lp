"use client"

import { useCallback, useEffect, useMemo, useRef, useState, type ComponentType } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AppWindow,
  BadgePercent,
  CheckCircle2,
  CircleDollarSign,
  ChevronDown,
  FileCode,
  Globe,
  HelpCircle,
  Laptop,
  MessageCircleQuestion,
  Package,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
  ScanLine,
  BarChart3,
  MapPin,
  Box,
  RefreshCw,
  ArrowRight,
  Zap,
  Calendar,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { cn } from "@/lib/utils"
import { MacOSFolderIcon } from "@/components/macos-folder-icon"
import { DraggableFolder } from "@/components/draggable-folder"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

type StageKey = "startup" | "growth" | "scale"
type WindowKey = "inventory" | "analytics" | "qr" | "support"

export function DesktopLanding() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [activeStage, setActiveStage] = useState<StageKey>("growth")
  const [openWindows, setOpenWindows] = useState<WindowKey[]>([])
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)
  const [mainBoxPosition, setMainBoxPosition] = useState({ x: 0, y: 0 })
  const [isDraggingMainBox, setIsDraggingMainBox] = useState(false)
  const [mainBoxDragStart, setMainBoxDragStart] = useState<{ x: number; y: number } | null>(null)
  const mainBoxRef = useRef<HTMLDivElement>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [featuresRef])

  // Handle main box dragging
  const handleMainBoxMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Only allow dragging from the header area
    const target = e.target as HTMLElement
    if (!target.closest('.main-box-header')) return
    
    if (e.button !== 0) return
    const rect = mainBoxRef.current?.getBoundingClientRect()
    if (rect) {
      setMainBoxDragStart({
        x: e.clientX,
        y: e.clientY,
      })
    }
  }, [])

  const handleMainBoxMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!mainBoxDragStart) return

      const deltaX = e.clientX - mainBoxDragStart.x
      const deltaY = e.clientY - mainBoxDragStart.y

      const threshold = 5
      const hasMoved = Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold

      if (!isDraggingMainBox && hasMoved) {
        setIsDraggingMainBox(true)
        e.preventDefault()
      }

      if (isDraggingMainBox || hasMoved) {
        setMainBoxPosition((prev) => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }))

        setMainBoxDragStart({
          x: e.clientX,
          y: e.clientY,
        })
      }
    },
    [mainBoxDragStart, isDraggingMainBox],
  )

  const handleMainBoxMouseUp = useCallback(() => {
    setIsDraggingMainBox(false)
    setMainBoxDragStart(null)
  }, [])

  useEffect(() => {
    if (mainBoxDragStart !== null) {
      const handleGlobalMouseMove = (e: MouseEvent) => handleMainBoxMouseMove(e)
      const handleGlobalMouseUp = () => handleMainBoxMouseUp()

      window.addEventListener("mousemove", handleGlobalMouseMove)
      window.addEventListener("mouseup", handleGlobalMouseUp)

      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove)
        window.removeEventListener("mouseup", handleGlobalMouseUp)
      }
    }
  }, [mainBoxDragStart, handleMainBoxMouseMove, handleMainBoxMouseUp])

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

  const windowApps = useMemo(
    () => [
      {
        key: "inventory" as const,
        label: language === "pt" ? "Inventário" : language === "fr" ? "Inventaire" : "Inventory",
        icon: MacOSFolderIcon,
        folderColor: "blue" as const,
      },
      {
        key: "analytics" as const,
        label: language === "pt" ? "Relatórios" : language === "fr" ? "Rapports" : "Analytics",
        icon: MacOSFolderIcon,
        folderColor: "purple" as const,
      },
      {
        key: "qr" as const,
        label: language === "pt" ? "QR Codes" : language === "fr" ? "QR Codes" : "QR Codes",
        icon: MacOSFolderIcon,
        folderColor: "green" as const,
      },
      {
        key: "support" as const,
        label: language === "pt" ? "Suporte" : language === "fr" ? "Support" : "Support",
        icon: MacOSFolderIcon,
        folderColor: "yellow" as const,
      },
    ],
    [language],
  )

  const shortcutLinks = useMemo(
    () => [
      {
        label: osText.pricing,
        href: "/precos",
        icon: MacOSFolderIcon,
        folderColor: "orange" as const,
      },
      {
        label: osText.docs,
        href: "/recursos/gestao-de-estoque",
        icon: MacOSFolderIcon,
        folderColor: "blue" as const,
      },
      {
        label: osText.ask,
        href: "/artigos",
        icon: MacOSFolderIcon,
        folderColor: "purple" as const,
      },
      {
        label: osText.signup,
        href: "https://app.purplestock.com.br/",
        icon: MacOSFolderIcon,
        folderColor: "green" as const,
      },
    ],
    [osText],
  )

  const topNavItems = useMemo(
    () => [
      { label: osText.topProduct, href: "/features/inventory-control" },
      { label: osText.topPricing, href: "/precos" },
      { label: osText.topDocs, href: "/recursos/gestao-de-estoque" },
      { label: osText.topCommunity, href: "/artigos" },
      { label: osText.topCompany, href: "/industrias" },
      { label: osText.topMore, href: "/recursos" },
    ],
    [osText],
  )

  const windowsConfig = useMemo(
    () =>
      ({
        inventory: {
          title: language === "pt" ? "Visão do Estoque" : language === "fr" ? "Vue de Stock" : "Inventory Overview",
          subtitle:
            language === "pt"
              ? "Controle em tempo real de cada item do seu almoxarifado."
              : language === "fr"
                ? "Contrôle en temps réel de chaque article."
                : "Real-time tracking for every SKU.",
          highlights: [
            language === "pt"
              ? "Sincronização automática entre pontos físicos e canais digitais."
              : language === "fr"
                ? "Synchronisation automatique entre sites physiques et canaux digitaux."
                : "Automatic sync between warehouses and digital channels.",
            language === "pt"
              ? "Alertas inteligentes quando o estoque mínimo é atingido."
              : language === "fr"
                ? "Alertes intelligents lorsque le stock minimum est atteint."
                : "Smart alerts when safety stock is reached.",
          ],
          stats: [
            { label: language === "pt" ? "Itens com rastreio" : language === "fr" ? "Articles suivis" : "Tracked items", value: "3.248" },
            { label: language === "pt" ? "Reposições pendentes" : language === "fr" ? "Réapprovisionnements" : "Replenishments", value: "12" },
          ],
          icon: MacOSFolderIcon,
          folderColor: "blue" as const,
          action: {
            label: language === "pt" ? "Abrir painel completo" : language === "fr" ? "Ouvrir le tableau" : "Open full dashboard",
            href: "https://app.purplestock.com.br/",
          },
        },
        analytics: {
          title: language === "pt" ? "Relatórios de Performance" : language === "fr" ? "Rapports de Performance" : "Performance Analytics",
          subtitle:
            language === "pt"
              ? "Entenda custos, perdas e giro em segundos."
              : language === "fr"
                ? "Comprenez coûts, ruptures et rotation en secondes."
                : "Understand costs, shrinkage, and turnover instantly.",
          highlights: [
            language === "pt"
              ? "Indicadores prontos: giro, margem e curva ABC."
              : language === "fr"
                ? "Indicateurs prêts : rotation, marge et courbe ABC."
                : "Out-of-the-box KPIs: turnover, margin, ABC curve.",
            language === "pt"
              ? "Exportação em PDF e integração com BI."
              : language === "fr"
                ? "Export PDF et intégration BI."
                : "Export to PDF and connect to BI tools.",
          ],
          stats: [
            { label: "Fill rate", value: "97%" },
            { label: language === "pt" ? "Redução de perdas" : language === "fr" ? "Réduction des pertes" : "Loss reduction", value: "−32%" },
          ],
          icon: MacOSFolderIcon,
          folderColor: "purple" as const,
          action: {
            label: language === "pt" ? "Ver relatórios" : language === "fr" ? "Voir les rapports" : "See reports",
            href: "/features/analytics-reporting",
          },
        },
        qr: {
          title: language === "pt" ? "Gestão por QR Code" : language === "fr" ? "Gestion par QR Code" : "QR Code Management",
          subtitle:
            language === "pt"
              ? "Escaneie, mova e audite ativos com o celular."
              : language === "fr"
                ? "Scannez, déplacez et auditez avec le mobile."
                : "Scan, move, and audit assets from your phone.",
          highlights: [
            language === "pt"
              ? "Geração ilimitada de etiquetas com o padrão Purple Stock."
              : language === "fr"
                ? "Génération illimitée d'étiquettes au format Purple Stock."
                : "Unlimited label generation with Purple Stock templates.",
            language === "pt"
              ? "Histórico completo de movimentações por QR Code."
              : language === "fr"
                ? "Historique complet des mouvements via QR Code."
                : "Full movement history for each QR code.",
          ],
          stats: [
            { label: language === "pt" ? "Etiquetas ativas" : language === "fr" ? "Étiquettes actives" : "Active labels", value: "1.094" },
            { label: language === "pt" ? "Auditorias concluídas" : language === "fr" ? "Audits terminés" : "Audits completed", value: "54" },
          ],
          icon: MacOSFolderIcon,
          folderColor: "green" as const,
          action: {
            label: language === "pt" ? "Configurar etiquetas" : language === "fr" ? "Configurer les étiquettes" : "Configure labels",
            href: "/features/qr-code-management",
          },
        },
        support: {
          title: language === "pt" ? "Central de Suporte" : language === "fr" ? "Centre de Support" : "Support Center",
          subtitle:
            language === "pt"
              ? "Conte com especialistas Purple Stock quando precisar."
              : language === "fr"
                ? "Faites appel aux spécialistes Purple Stock à tout moment."
                : "Count on Purple Stock experts any time.",
          highlights: [
            language === "pt"
              ? "Atendimento 24/7 via chat, WhatsApp e e-mail."
              : language === "fr"
                ? "Support 24/7 par chat, WhatsApp et email."
                : "24/7 support by chat, WhatsApp, and email.",
            language === "pt"
              ? "Base de conhecimento com guias rápidos e vídeos."
              : language === "fr"
                ? "Base de connaissances avec guides et vidéos."
                : "Knowledge base packed with guides and videos.",
          ],
          stats: [
            { label: language === "pt" ? "Tempo médio de resposta" : language === "fr" ? "Temps de réponse" : "Avg. response time", value: "3 min" },
            { label: language === "pt" ? "Satisfação" : language === "fr" ? "Satisfaction" : "CSAT", value: "98%" },
          ],
          icon: MacOSFolderIcon,
          folderColor: "yellow" as const,
          action: {
            label: language === "pt" ? "Falar com humano" : language === "fr" ? "Parler à un humain" : "Talk to a human",
            href: "https://wa.me/554891120022",
          },
        },
      }) satisfies Record<WindowKey, {
        title: string
        subtitle: string
        highlights: string[]
        stats: Array<{ label: string; value: string }>
        icon: ComponentType<{ className?: string; color?: string }>
        folderColor?: "blue" | "purple" | "green" | "yellow" | "red" | "orange"
        action: { label: string; href: string }
      }>,
    [language, osText.ask, t.hero.subtitle, t.hero.subtitleHighlight],
  )

  const windowLayout: Record<WindowKey, { top: string; left: string; width: string }> = {
    inventory: { top: "15%", left: "50%", width: "420px" },
    analytics: { top: "15%", left: "50%", width: "430px" },
    qr: { top: "15%", left: "50%", width: "380px" },
    support: { top: "15%", left: "50%", width: "360px" },
  }

  const openWindow = useCallback(
    (key: WindowKey) => {
      setOpenWindows((prev) => {
        if (prev.includes(key)) {
          return [...prev.filter((item) => item !== key), key]
        }
        return [...prev, key]
      })
    },
    [],
  )

  const closeWindow = useCallback((key: WindowKey) => {
    setOpenWindows((prev) => prev.filter((item) => item !== key))
  }, [])

  const isWindowOpen = useCallback((key: WindowKey) => openWindows.includes(key), [openWindows])

  const testimonial = translations[language].testimonials?.[0]

  return (
    <div className="relative h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.18),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff1a%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <header className="fixed top-0 left-0 right-0 z-[80] bg-[rgba(255,255,255,0.65)] backdrop-blur-[20px] border-b border-[rgba(0,0,0,0.08)] supports-[backdrop-filter]:bg-[rgba(255,255,255,0.5)]">
        <div className="max-w-[1920px] mx-auto px-6">
          <div className="flex items-center justify-between h-[40px]">
            {/* Left: App Name */}
            <div className="flex items-center">
              <span className="text-[13px] font-medium text-[#1d1d1f] tracking-tight">
                Purple Stock
              </span>
            </div>

            {/* Center: Menu Items (macOS style) */}
            <div className="hidden md:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
              <div className="relative" ref={featuresRef}>
                <button
                  className="text-[14px] text-[#1d1d1f] hover:text-[#000000] px-2.5 py-1.5 rounded transition-colors duration-150 font-normal"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  {t.nav.resources}
                  <ChevronDown className={`inline-block w-3.5 h-3.5 ml-0.5 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                </button>

                {featuresOpen && (
                  <div className="absolute left-0 mt-1 w-72 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-[rgba(255,255,255,0.95)] backdrop-blur-[20px] border border-[rgba(0,0,0,0.1)] animate-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                      <div className="px-3 py-2 border-b border-[rgba(0,0,0,0.08)]">
                        <div className="text-[14px] font-semibold text-[#1d1d1f]">{t.nav.features.title}</div>
                        <div className="text-[12px] text-[#86868b] mt-0.5">{language === "pt" ? "Descubra todas as funcionalidades" : language === "en" ? "Discover all features" : "Découvrez toutes les fonctionnalités"}</div>
                      </div>
                      <Link
                        href="/features/inventory-control"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.inventoryControl}
                      </Link>
                      <Link
                        href="/features/barcoding"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.barcoding}
                      </Link>
                      <Link
                        href="/features/purchase-sales"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.purchaseSales}
                      </Link>
                      <Link
                        href="/features/analytics-reporting"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.analyticsReporting}
                      </Link>
                      <Link
                        href="/features/warehouse-control"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.warehouseControl}
                      </Link>
                      <Link
                        href="/features/qr-code-management"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.qrCodeManagement}
                      </Link>
                      <Link
                        href="/features/clothing-manufacturing"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.clothingManufacturing}
                      </Link>
                      <Link
                        href="/features/equipment-management"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.equipmentManagement}
                      </Link>
                      <Link
                        href="/features/factory-management"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.factoryManagement}
                      </Link>
                      <Link
                        href="/features/inventory-app"
                        className="block px-3 py-2 text-[14px] text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-150"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {t.nav.features.inventoryApp}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/precos" className="text-[14px] text-[#1d1d1f] hover:text-[#000000] px-2.5 py-1.5 rounded transition-colors duration-150 font-normal">
                {t.nav.pricing}
              </Link>
              <Link href="/industrias" className="text-[14px] text-[#1d1d1f] hover:text-[#000000] px-2.5 py-1.5 rounded transition-colors duration-150 font-normal">
                {t.nav.industries}
              </Link>
              <Link href="/artigos" className="text-[14px] text-[#1d1d1f] hover:text-[#000000] px-2.5 py-1.5 rounded transition-colors duration-150 font-normal">
                {t.nav.articles}
              </Link>
              <a
                href="https://blog.purplestock.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#1d1d1f] hover:text-[#000000] px-2.5 py-1.5 rounded transition-colors duration-150 font-normal"
              >
                {t.nav.blog}
              </a>
              <Link href="/codigo-de-barras-gratis" className="text-[14px] text-[#6e41e2] hover:text-[#5a2fc7] px-2.5 py-1.5 rounded transition-colors duration-150 font-normal">
                {t.nav.freeBarcode}
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2.5">
              <Link href="https://app.purplestock.com.br/">
                <Button className="h-7 px-4 text-[12px] font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-150 shadow-sm hover:shadow">
                  {t.nav.login}
                </Button>
              </Link>
              <Button 
                variant="ghost"
                className="h-7 px-2.5 text-[12px] font-normal text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)] transition-all duration-150 rounded-md"
                onClick={() => {
                  if (language === "pt") setLanguage("en");
                  else if (language === "en") setLanguage("fr");
                  else setLanguage("pt");
                }}
              >
                <Globe className="h-3.5 w-3.5 mr-1 text-[#86868b]" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                {language === "pt" ? "PT" : language === "en" ? "EN" : "FR"}
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="relative mx-auto flex h-full w-full max-w-[1320px] flex-col gap-8 px-4 pt-[48px] pb-4 md:flex-row md:gap-6 md:px-10 md:pt-[52px]">
        {/* Icons Left Side - Vertical */}
        <div className="relative z-[100] hidden md:block shrink-0 w-24 h-[calc(100vh-12rem)] min-h-[600px]">
          {windowApps.slice(0, 2).map((app, index) => (
            <DraggableFolder
              key={app.key}
              label={app.label}
              folderColor={app.folderColor}
              icon={app.icon}
              initialPosition={{
                x: 0,
                y: 80 + index * 180,
              }}
              storageKey={`window-app-left-${app.key}`}
              isSelected={selectedFolder === app.key}
              onDoubleClick={() => openWindow(app.key)}
              onClick={() => {
                setSelectedFolder(app.key)
              }}
            />
          ))}
          {shortcutLinks.slice(0, 2).map((item, index) => (
            <DraggableFolder
              key={item.label}
              label={item.label}
              folderColor={item.folderColor}
              icon={item.icon}
              initialPosition={{
                x: 0,
                y: 440 + index * 180,
              }}
              storageKey={`shortcut-left-${item.label}`}
              isSelected={selectedFolder === `shortcut-${item.label}`}
              onDoubleClick={() => {
                if (typeof window !== "undefined") {
                  window.open(item.href, item.href.startsWith("http") ? "_blank" : "_self")
                }
              }}
              onClick={() => {
                setSelectedFolder(`shortcut-${item.label}`)
              }}
            />
          ))}
        </div>

        <div className="flex flex-1 flex-col gap-8 relative z-0 overflow-hidden min-h-0">
          <div 
            ref={mainBoxRef}
            className="relative z-0 flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_28px_120px_-60px_rgba(59,7,100,0.7)] backdrop-blur-xl transition-transform cursor-move h-full min-h-0"
            style={{
              transform: `translate(${mainBoxPosition.x}px, ${mainBoxPosition.y}px)`,
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
            onMouseDown={handleMainBoxMouseDown}
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="main-box-header flex items-center justify-center border-b border-white/70 bg-gradient-to-r from-white via-white/80 to-purple-50/60 px-4 py-3 sm:px-6 relative cursor-grab active:cursor-grabbing flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs font-semibold uppercase tracking-wide text-purple-500">
                  Purple Stock OS
                </span>
              </div>
              <span className="absolute right-4 text-xs text-slate-400">{language === "pt" ? "Workspace de Crescimento" : language === "fr" ? "Espace de Croissance" : "Growth workspace"}</span>
            </div>

            <div className="space-y-8 px-4 py-8 sm:px-10 sm:py-10 flex-1 overflow-y-auto overflow-x-hidden scrollbar-purple min-h-0">
              {/* Top Section - Title and Description */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                  {language === "pt" 
                    ? "Gestão de Estoque Simplificada" 
                    : language === "en" 
                      ? "Inventory Management Made Simple" 
                      : "Gestion de Stock Simplifiée"}
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {language === "pt"
                    ? "Purple Stock: a solução mais simples de software de inventário para pequenas empresas rastrearem, gerenciarem e organizarem seu estoque."
                    : language === "en"
                      ? "Purple Stock: the simplest inventory software solution for small businesses to track, manage, and organize inventory."
                      : "Purple Stock: la solution de logiciel d'inventaire la plus simple pour que les petites entreprises suivent, gèrent et organisent leur stock."}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                  >
                    <Link href="https://app.purplestock.com.br/">
                      {language === "pt" ? "Experimente o Purple Stock grátis" : language === "en" ? "Try Purple Stock for free" : "Essayez Purple Stock gratuitement"}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 px-8 py-6 text-base font-semibold transition-all duration-300 rounded-lg bg-white"
                  >
                    <Link href="https://calendly.com/matheus-puppe" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5 mr-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                      {language === "pt" ? "Solicitar demonstração" : language === "en" ? "Get a demo" : "Obtenir une démo"}
                    </Link>
                  </Button>
                </div>
                
                {/* Free Trial Text */}
                <p className="text-sm text-slate-500 pt-2">
                  {language === "pt" 
                    ? "Teste grátis de 30 dias. Não é necessário cartão de crédito." 
                    : language === "en" 
                      ? "Free 30-day trial. No credit card needed." 
                      : "Essai gratuit de 30 jours. Aucune carte de crédit requise."}
                </p>
              </div>

              {/* Main Content Area - App Screenshot */}
              <div className="relative py-12">
                <div className="relative mx-auto max-w-6xl">
                  <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                    <div className="relative rounded-3xl shadow-2xl overflow-visible border-4 border-white bg-white p-2">
                      <div className="relative w-full h-auto">
                        <Image
                          src="/images/app-items-list.png"
                          alt={language === "pt" ? "Interface do Purple Stock - Lista de Itens" : language === "en" ? "Purple Stock Interface - Items List" : "Interface Purple Stock - Liste des Articles"}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain rounded-2xl"
                          priority
                        />
                        {/* Elegant Play Button */}
                        <DialogTrigger asChild>
                          <button className="absolute inset-0 flex items-center justify-center group cursor-pointer rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center text-purple-600 transition-all duration-300 group-hover:bg-white group-hover:scale-110 group-hover:shadow-purple-500/50">
                              <div className="w-0 h-0 border-l-[20px] border-l-purple-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                            </div>
                          </button>
                        </DialogTrigger>
                      </div>
                    </div>
                    
                    {/* YouTube Video Link */}
                    <div className="mt-6 flex justify-center">
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                          <PlayCircle className="w-5 h-5" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                          {language === "pt" ? "Ver Demonstração" : language === "en" ? "View Demo" : "Voir la Démo"}
                        </button>
                      </DialogTrigger>
                    </div>
                    
                    <DialogContent className="max-w-4xl w-full p-0 bg-black">
                      <DialogTitle className="sr-only">
                        {language === "pt" ? "Demonstração do Purple Stock" : language === "en" ? "Purple Stock Demo" : "Démo Purple Stock"}
                      </DialogTitle>
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
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
                  
                  {/* Floating Help Button */}
                  <div className="absolute -bottom-4 -right-4 z-20">
                    <button className="w-16 h-16 bg-purple-600 hover:bg-purple-700 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border-4 border-white">
                      <HelpCircle className="w-8 h-8" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Trusted By Section */}
              <div className="pt-12 pb-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {language === "pt" 
                      ? "Confiado por empresas em crescimento"
                      : language === "en"
                      ? "Trusted by growing businesses"
                      : "Fiable par les entreprises en croissance"}
                  </h2>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                  <div className="flex items-center justify-center h-16">
                    <Image
                      src="/images/logos/purchase-store.png"
                      alt="Purchase Moda Feminina"
                      width={180}
                      height={50}
                      className="h-full w-auto object-contain max-w-[180px]"
                    />
                  </div>
                  <div className="flex items-center justify-center h-16">
                    <Image
                      src="/images/logos/concrem-portas.webp"
                      alt="Concrem Portas Premium"
                      width={200}
                      height={60}
                      className="h-full w-auto object-contain max-w-[200px]"
                    />
                  </div>
                  <div className="flex items-center justify-center h-16">
                    <Image
                      src="/images/logos/da-rua.png"
                      alt="Da Rua"
                      width={120}
                      height={40}
                      className="h-full w-auto object-contain max-w-[120px]"
                    />
                  </div>
                  <div className="flex items-center justify-center h-16">
                    <Image
                      src="/images/logos/st-nicholas-school.webp"
                      alt="St. Nicholas School"
                      width={240}
                      height={55}
                      className="h-full w-auto object-contain max-w-[240px]"
                    />
                  </div>
                </div>
              </div>

              {/* FAQ Button */}
              <div className="flex justify-center mb-6 pt-8">
                <button className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                  <Sparkles className="w-4 h-4 mr-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                  {language === "pt" ? "Perguntas Frequentes" : language === "en" ? "Frequently Asked Questions" : "Questions Fréquentes"}
                </button>
              </div>

              {/* Question Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  {language === "pt" 
                    ? "Quer ter controle total do seu inventário em tempo real?" 
                    : language === "en" 
                      ? "Do you want to have total control of your inventory in real time?" 
                      : "Voulez-vous avoir un contrôle total de votre inventaire en temps réel?"}
                </h2>
                <div className="flex justify-center gap-2 mt-4">
                  <span className="h-2 w-2 rounded-full bg-purple-600"></span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="h-2 w-2 rounded-full bg-purple-600"></span>
                </div>
              </div>

              {/* Main Title Section */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-slate-700">
                    {language === "pt" 
                      ? "Controle de Estoque Inteligente Começa Com" 
                      : language === "en" 
                        ? "Intelligent Inventory Control Starts With" 
                        : "Le Contrôle Intelligent des Stocks Commence Par"}
                  </span>
                  <br />
                  <span className="text-purple-600">
                    {language === "pt" 
                      ? "Purple Stock" 
                      : language === "en" 
                        ? "Purple Stock" 
                        : "Purple Stock"}
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {language === "pt"
                    ? "Centralize seu inventário em uma plataforma poderosa e intuitiva. Com Purple Stock, tenha visibilidade total e controle preciso do seu estoque em qualquer dispositivo, a qualquer momento."
                    : language === "en"
                      ? "Centralize your inventory on a powerful and intuitive platform. With Purple Stock, have total visibility and precise control of your stock on any device, at any time."
                      : "Centralisez votre inventaire sur une plateforme puissante et intuitive. Avec Purple Stock, ayez une visibilité totale et un contrôle précis de votre stock sur n'importe quel appareil, à tout moment."}
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Card 1 - Controle Total */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {language === "pt" 
                      ? "Controle Total" 
                      : language === "en" 
                        ? "Total Control" 
                        : "Contrôle Total"}
                  </h3>
                  <p className="text-slate-600">
                    {language === "pt"
                      ? "Visibilidade completa do seu inventário em tempo real"
                      : language === "en"
                        ? "Complete visibility of your inventory in real time"
                        : "Visibilité complète de votre inventaire en temps réel"}
                  </p>
                </div>

                {/* Card 2 - Automação Inteligente */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Zap className="w-7 h-7 text-white" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {language === "pt" 
                      ? "Automação Inteligente" 
                      : language === "en" 
                        ? "Intelligent Automation" 
                        : "Automatisation Intelligente"}
                  </h3>
                  <p className="text-slate-600">
                    {language === "pt"
                      ? "Processos automatizados que economizam tempo e reduzem erros"
                      : language === "en"
                        ? "Automated processes that save time and reduce errors"
                        : "Processus automatisés qui font gagner du temps et réduisent les erreurs"}
                  </p>
                </div>

                {/* Card 3 - Relatórios Avançados */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-7 h-7 text-white" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {language === "pt" 
                      ? "Relatórios Avançados" 
                      : language === "en" 
                        ? "Advanced Reports" 
                        : "Rapports Avancés"}
                  </h3>
                  <p className="text-slate-600">
                    {language === "pt"
                      ? "Insights valiosos para tomada de decisões estratégicas"
                      : language === "en"
                        ? "Valuable insights for strategic decision-making"
                        : "Informations précieuses pour la prise de décisions stratégiques"}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <Link href="https://app.purplestock.com.br/">
                    <Sparkles className="w-5 h-5 mr-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    {language === "pt" ? "Começar Agora" : language === "en" ? "Start Now" : "Commencer Maintenant"}
                    <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <PlayCircle className="w-5 h-5 mr-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                  {language === "pt" ? "Ver Demonstração" : language === "en" ? "View Demo" : "Voir la Démo"}
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Icons Right Side - Vertical */}
        <div className="relative z-[100] hidden md:block shrink-0 w-24 h-[calc(100vh-12rem)] min-h-[600px]">
          {windowApps.slice(2).map((app, index) => (
            <DraggableFolder
              key={app.key}
              label={app.label}
              folderColor={app.folderColor}
              icon={app.icon}
              initialPosition={{
                x: 0,
                y: 80 + index * 180,
              }}
              storageKey={`window-app-right-${app.key}`}
              isSelected={selectedFolder === app.key}
              onDoubleClick={() => openWindow(app.key)}
              onClick={() => {
                setSelectedFolder(app.key)
              }}
            />
          ))}
          {shortcutLinks.slice(2).map((item, index) => (
            <DraggableFolder
              key={item.label}
              label={item.label}
              folderColor={item.folderColor}
              icon={item.icon}
              initialPosition={{
                x: 0,
                y: 440 + index * 180,
              }}
              storageKey={`shortcut-right-${item.label}`}
              isSelected={selectedFolder === `shortcut-${item.label}`}
              onDoubleClick={() => {
                if (typeof window !== "undefined") {
                  window.open(item.href, item.href.startsWith("http") ? "_blank" : "_self")
                }
              }}
              onClick={() => {
                setSelectedFolder(`shortcut-${item.label}`)
              }}
            />
          ))}
        </div>

        {openWindows.map((key, index) => {
          const config = windowsConfig[key]
          const Icon = config.icon
          const layout = windowLayout[key]
          return (
            <div
              key={key}
              style={{ 
                top: layout.top, 
                left: layout.left, 
                width: layout.width, 
                zIndex: 60 + index,
                transform: "translateX(-50%)"
              }}
              className="pointer-events-auto hidden rounded-3xl border border-white/70 bg-white/85 shadow-[0_30px_120px_-70px_rgba(59,7,100,0.8)] backdrop-blur-xl transition-all animate-in fade-in slide-in-from-top-4 md:absolute md:block"
              onMouseDown={() => openWindow(key)}
            >
              <div className="flex items-center justify-between rounded-t-3xl border-b border-white/70 bg-gradient-to-r from-white to-purple-50/70 px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        closeWindow(key)
                      }}
                      className="h-3.5 w-3.5 rounded-full border border-[#e06c67]/50 bg-[#ff5f56] transition-transform hover:scale-110"
                      aria-label="Close window"
                    />
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        closeWindow(key)
                      }}
                      className="h-3.5 w-3.5 rounded-full border border-[#e6b95c]/50 bg-[#ffbd2e] transition-transform hover:scale-110"
                      aria-label="Minimize window"
                    />
                    <span className="h-3.5 w-3.5 rounded-full border border-[#63c472]/40 bg-[#27c93f]" />
                  </div>
                  <Icon color={config.folderColor || "blue"} className="h-4 w-4" />
                  <span className="text-sm font-semibold text-slate-600">{config.title}</span>
                </div>
                <span className="text-xs uppercase tracking-wide text-purple-400">{language === "pt" ? "Ao vivo" : language === "fr" ? "En direct" : "Live"}</span>
              </div>
              <div className="space-y-4 px-5 py-5">
                <p className="text-sm text-slate-500">{config.subtitle}</p>
                <ul className="space-y-2">
                  {config.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-3 rounded-2xl border border-purple-100 bg-purple-50/60 p-4">
                  {config.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xs uppercase tracking-wide text-purple-400">{stat.label}</p>
                      <p className="text-xl font-semibold text-purple-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 text-sm font-semibold shadow-purple-500/30 hover:shadow-lg"
                >
                  <Link href={config.action.href}>{config.action.label}</Link>
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


