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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState<string | null>(null)

  // Update time on client side only
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString(language === "pt" ? "pt-BR" : language === "fr" ? "fr-FR" : "en-US", { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [language])

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

  // Dynamic questions array
  const questions = useMemo(() => {
    return {
      pt: [
        "Quer ter controle total do seu inventário em tempo real?",
        "Precisa de relatórios inteligentes para tomar decisões?",
        "Quer automatizar seu controle de estoque?",
        "Procura uma solução simples e eficiente?",
      ],
      en: [
        "Do you want to have total control of your inventory in real time?",
        "Do you need smart reports to make decisions?",
        "Want to automate your stock control?",
        "Looking for a simple and efficient solution?",
      ],
      fr: [
        "Voulez-vous avoir un contrôle total de votre inventaire en temps réel?",
        "Avez-vous besoin de rapports intelligents pour prendre des décisions?",
        "Voulez-vous automatiser votre contrôle des stocks?",
        "Vous cherchez une solution simple et efficace?",
      ],
    }[language]
  }, [language])

  // Auto-rotate questions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestionIndex((prev) => (prev + 1) % questions.length)
    }, 4000) // Change question every 4 seconds

    return () => clearInterval(interval)
  }, [questions.length])

  return (
    <div className="relative h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),radial-gradient(circle_at_50%_80%,rgba(147,112,219,0.1),transparent_40%),linear-gradient(180deg,#f8f6ff,#f3ede7)] text-slate-900">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-80" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-200/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>
      
      {/* macOS Menu Bar */}
      <header className="fixed top-0 left-0 right-0 z-[80] h-[25px] bg-gradient-to-b from-[#3d3d3d] to-[#2a2a2a] shadow-[0_1px_0_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div className="flex items-center justify-between h-full px-3 text-[13px] font-medium text-white/90">
          {/* Left: Apple-style Logo + App Menu */}
          <div className="flex items-center gap-0">
            {/* Purple Stock Logo (like Apple logo) */}
            <Link href="/" className="flex items-center justify-center w-8 h-full hover:bg-white/10 transition-colors">
              <Box className="w-[14px] h-[14px] text-white" strokeWidth={2.5} />
            </Link>

            {/* App Name - Bold */}
            <span className="px-3 py-0.5 font-semibold text-white hover:bg-white/10 rounded-[3px] cursor-default transition-colors">
              Purple Stock
            </span>

            {/* Menu Items */}
            <div className="hidden md:flex items-center">
              <div className="relative" ref={featuresRef}>
                <button
                  className={cn(
                    "px-3 py-0.5 rounded-[3px] transition-colors",
                    featuresOpen ? "bg-[#0058d0] text-white" : "hover:bg-white/10"
                  )}
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  {t.nav.resources}
                </button>

                {featuresOpen && (
                  <div className="absolute left-0 mt-[3px] w-64 rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.4)] bg-[#2d2d2d]/95 backdrop-blur-xl border border-white/10 animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden py-1">
                    {[
                      { href: "/features/inventory-control", label: t.nav.features.inventoryControl, shortcut: "⌘I" },
                      { href: "/features/barcoding", label: t.nav.features.barcoding, shortcut: "⌘B" },
                      { href: "/features/purchase-sales", label: t.nav.features.purchaseSales, shortcut: "⌘P" },
                      { href: "/features/analytics-reporting", label: t.nav.features.analyticsReporting, shortcut: "⌘R" },
                      { href: "/features/warehouse-control", label: t.nav.features.warehouseControl, shortcut: "⌘W" },
                      { href: "/features/qr-code-management", label: t.nav.features.qrCodeManagement, shortcut: "⌘Q" },
                    ].map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-1 text-[13px] text-white/90 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="text-[11px] text-white/40">{item.shortcut}</span>
                      </Link>
                    ))}
                    <div className="h-px bg-white/10 my-1 mx-3" />
                    {[
                      { href: "/features/clothing-manufacturing", label: t.nav.features.clothingManufacturing },
                      { href: "/features/equipment-management", label: t.nav.features.equipmentManagement },
                      { href: "/features/factory-management", label: t.nav.features.factoryManagement },
                      { href: "/features/inventory-app", label: t.nav.features.inventoryApp },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-3 py-1 text-[13px] text-white/90 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/precos" className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors">
                {t.nav.pricing}
              </Link>
              <Link href="/industrias" className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors">
                {t.nav.industries}
              </Link>
              <Link href="/artigos" className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors">
                {t.nav.articles}
              </Link>
              <a
                href="https://blog.purplestock.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
              >
                {t.nav.blog}
              </a>
              <Link href="/codigo-de-barras-gratis" className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors text-purple-300">
                {t.nav.freeBarcode}
              </Link>
            </div>
          </div>

          {/* Right: Status Icons (macOS style) */}
          <div className="flex items-center gap-1">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] hover:bg-white/10 transition-colors cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-white/70">Online</span>
            </div>

            {/* Divider */}
            <div className="w-px h-3 bg-white/20 mx-1 hidden sm:block" />

            {/* Language */}
            <button 
              className="flex items-center gap-1 px-2 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
              onClick={() => {
                if (language === "pt") setLanguage("en");
                else if (language === "en") setLanguage("fr");
                else setLanguage("pt");
              }}
            >
              <Globe className="w-3.5 h-3.5 text-white/70" strokeWidth={2} />
              <span className="text-[11px] uppercase">{language}</span>
            </button>

            {/* Time */}
            {currentTime && (
              <div className="hidden sm:flex items-center px-2 py-0.5 rounded-[3px] hover:bg-white/10 transition-colors cursor-default">
                <span className="text-[11px] text-white/90 font-medium tabular-nums">
                  {currentTime}
                </span>
              </div>
            )}

            {/* Divider */}
            <div className="w-px h-3 bg-white/20 mx-1" />

            {/* Login */}
            <Link 
              href="https://app.purplestock.com.br/"
              className="flex items-center gap-1 px-2 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
            >
              <span className="text-[11px]">{t.nav.login}</span>
              <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </header>
      <div className="relative mx-auto flex h-full w-full max-w-[1320px] flex-col gap-8 px-4 pt-[32px] pb-4 md:flex-row md:gap-6 md:px-10 md:pt-[32px]">
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
            className="relative z-0 flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white/95 shadow-[0_25px_100px_-30px_rgba(59,7,100,0.35),0_10px_40px_-20px_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-transform cursor-move h-full min-h-0"
            style={{
              transform: `translate(${mainBoxPosition.x}px, ${mainBoxPosition.y}px)`,
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
            onMouseDown={handleMainBoxMouseDown}
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="main-box-header flex items-center justify-between border-b border-white/60 bg-gradient-to-r from-slate-50/95 via-white/90 to-purple-50/80 px-4 py-2.5 sm:px-5 relative cursor-grab active:cursor-grabbing flex-shrink-0 shadow-[inset_0_-1px_0_rgba(255,255,255,0.8)]">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[6px] group">
                  <button className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ff6058] to-[#e4473c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#ff7066] hover:to-[#e4554a] group-hover:scale-105">
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d0000] font-bold">×</span>
                  </button>
                  <button className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ffbd2e] to-[#e5a319] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#ffc940] hover:to-[#e5ae25] group-hover:scale-105">
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d3800] font-bold">−</span>
                  </button>
                  <button className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#28c840] to-[#1aab2c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#34d44c] hover:to-[#26b738] group-hover:scale-105">
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[6px] text-[#003d00]">⤢</span>
                  </button>
                </div>
              </div>

              {/* Center Title */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-sm">
                  <Box className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-[12px] font-semibold text-slate-600 tracking-wide">
                  Purple Stock OS
                </span>
                <span className="text-[10px] text-slate-400 font-medium">v2.0</span>
              </div>

              {/* Right Side - Status */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_4px_rgba(16,185,129,0.5)]" />
                  <span className="text-[10px] text-emerald-600 font-medium">{language === "pt" ? "Online" : language === "fr" ? "En ligne" : "Online"}</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium hidden md:block">{language === "pt" ? "Workspace de Crescimento" : language === "fr" ? "Espace de Croissance" : "Growth Workspace"}</span>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-2 bg-gradient-to-b from-slate-50/80 to-white/60 border-b border-slate-200/50 flex-shrink-0">
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600">
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={2.5} />
                </button>
                <button className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
                <div className="w-px h-4 bg-slate-200 mx-1" />
                <button className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600">
                  <RefreshCw className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
              </div>
              
              {/* Search Bar */}
              <div className="hidden sm:flex items-center gap-2 bg-slate-100/80 rounded-lg px-3 py-1.5 flex-1 max-w-md mx-4 border border-slate-200/60">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-[11px] text-slate-400">{language === "pt" ? "Buscar recursos, docs, produtos..." : language === "fr" ? "Rechercher ressources, docs..." : "Search resources, docs, products..."}</span>
                <div className="ml-auto flex items-center gap-0.5">
                  <span className="text-[9px] text-slate-400 bg-white/80 px-1 py-0.5 rounded border border-slate-200/80 shadow-sm">⌘</span>
                  <span className="text-[9px] text-slate-400 bg-white/80 px-1 py-0.5 rounded border border-slate-200/80 shadow-sm">K</span>
                </div>
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600">
                  <Globe className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
                <button className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600">
                  <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
              </div>
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
                      {language === "pt" ? "Teste por 7 dias" : language === "en" ? "Test for 7 days" : "Testez pendant 7 jours"}
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
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                        >
                          <PlayCircle className="w-5 h-5 mr-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                          {language === "pt" ? "Ver Demonstração" : language === "en" ? "View Demo" : "Voir la Démo"}
                        </Button>
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
                <div className="min-h-[80px] flex items-center justify-center overflow-hidden">
                  <h2 
                    key={currentQuestionIndex}
                    className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-top-2 duration-500"
                  >
                    {questions[currentQuestionIndex]}
                  </h2>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuestionIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentQuestionIndex
                          ? "bg-purple-600 w-8"
                          : "bg-purple-300 w-2 hover:bg-purple-400"
                      }`}
                      aria-label={`Go to question ${index + 1}`}
                    />
                  ))}
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
                    {language === "pt" ? "Teste por 7 dias" : language === "en" ? "Test for 7 days" : "Testez pendant 7 jours"}
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

            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-2 bg-gradient-to-t from-slate-50/90 to-white/70 border-t border-slate-100 flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-slate-500">
                    {language === "pt" ? "Sincronizado" : language === "fr" ? "Synchronisé" : "Synced"}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-amber-500" strokeWidth={2.5} />
                  <span className="text-[10px] text-slate-500">
                    {language === "pt" ? "99.9% uptime" : language === "fr" ? "99.9% disponibilité" : "99.9% uptime"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-400">
                  {language === "pt" ? "Última atualização: agora" : language === "fr" ? "Dernière maj: maintenant" : "Last update: now"}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-purple-500 font-medium">Purple Stock</span>
                  <span className="text-[9px] text-slate-400">v2.0.0</span>
                </div>
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

        {/* macOS-style Dock */}
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[90] hidden md:block">
          <div className="flex items-end gap-1 px-3 py-2 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(255,255,255,0.2)]">
            {/* Dock Apps */}
            <Link 
              href="https://app.purplestock.com.br/" 
              className="group relative flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/40 transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110">
                <Box className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
                {language === "pt" ? "Abrir App" : language === "fr" ? "Ouvrir App" : "Open App"}
              </span>
              <div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 opacity-100" />
            </Link>

            <button 
              onClick={() => openWindow("inventory")}
              className="group relative flex flex-col items-center"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110",
                isWindowOpen("inventory") ? "shadow-blue-500/40" : "group-hover:shadow-blue-500/40"
              )}>
                <Package className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
                {language === "pt" ? "Inventário" : language === "fr" ? "Inventaire" : "Inventory"}
              </span>
              {isWindowOpen("inventory") && <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5" />}
            </button>

            <button 
              onClick={() => openWindow("analytics")}
              className="group relative flex flex-col items-center"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110",
                isWindowOpen("analytics") ? "shadow-violet-500/40" : "group-hover:shadow-violet-500/40"
              )}>
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
                {language === "pt" ? "Relatórios" : language === "fr" ? "Rapports" : "Analytics"}
              </span>
              {isWindowOpen("analytics") && <div className="w-1 h-1 rounded-full bg-violet-500 mt-1.5" />}
            </button>

            <div className="w-px h-10 bg-slate-300/50 mx-1 self-center" />

            <button 
              onClick={() => openWindow("qr")}
              className="group relative flex flex-col items-center"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110",
                isWindowOpen("qr") ? "shadow-emerald-500/40" : "group-hover:shadow-emerald-500/40"
              )}>
                <ScanLine className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
                QR Codes
              </span>
              {isWindowOpen("qr") && <div className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5" />}
            </button>

            <button 
              onClick={() => openWindow("support")}
              className="group relative flex flex-col items-center"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110",
                isWindowOpen("support") ? "shadow-amber-500/40" : "group-hover:shadow-amber-500/40"
              )}>
                <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
                {language === "pt" ? "Suporte" : language === "fr" ? "Support" : "Support"}
              </span>
              {isWindowOpen("support") && <div className="w-1 h-1 rounded-full bg-amber-500 mt-1.5" />}
            </button>

            <div className="w-px h-10 bg-slate-300/50 mx-1 self-center" />

            <Link 
              href="/precos" 
              className="group relative flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/40 transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110">
                <CircleDollarSign className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
                {language === "pt" ? "Preços" : language === "fr" ? "Prix" : "Pricing"}
              </span>
            </Link>

            <Link 
              href="/recursos/gestao-de-estoque" 
              className="group relative flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-lg group-hover:shadow-slate-500/40 transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110">
                <FileCode className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
                {language === "pt" ? "Documentação" : language === "fr" ? "Documentation" : "Docs"}
              </span>
            </Link>
          </div>
        </div>

        {openWindows.map((key, index) => {
          const config = windowsConfig[key]
          const Icon = config.icon
          const layout = windowLayout[key]
          const colorMap = {
            blue: "from-blue-500 to-blue-600",
            purple: "from-violet-500 to-violet-600",
            green: "from-emerald-500 to-emerald-600",
            yellow: "from-amber-500 to-amber-600",
            red: "from-red-500 to-red-600",
            orange: "from-orange-500 to-orange-600",
          }
          const iconGradient = colorMap[config.folderColor || "blue"]
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
              className="pointer-events-auto hidden rounded-xl border border-slate-200/80 bg-white/95 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.25),0_10px_30px_-15px_rgba(0,0,0,0.15)] backdrop-blur-2xl transition-all animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300 md:absolute md:block overflow-hidden"
              onMouseDown={() => openWindow(key)}
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white/80 px-4 py-2.5">
                <div className="flex items-center gap-3">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-[6px] group">
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        closeWindow(key)
                      }}
                      className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ff6058] to-[#e4473c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:scale-110"
                      aria-label="Close window"
                    >
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d0000] font-bold">×</span>
                    </button>
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        closeWindow(key)
                      }}
                      className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ffbd2e] to-[#e5a319] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:scale-110"
                      aria-label="Minimize window"
                    >
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d3800] font-bold">−</span>
                    </button>
                    <span className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#28c840] to-[#1aab2c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)]">
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[6px] text-[#003d00]">⤢</span>
                    </span>
                  </div>
                  
                  {/* App Icon & Title */}
                  <div className="flex items-center gap-2">
                    <div className={cn("w-5 h-5 rounded-md bg-gradient-to-br flex items-center justify-center shadow-sm", iconGradient)}>
                      {key === "inventory" && <Package className="w-3 h-3 text-white" strokeWidth={2.5} />}
                      {key === "analytics" && <BarChart3 className="w-3 h-3 text-white" strokeWidth={2.5} />}
                      {key === "qr" && <ScanLine className="w-3 h-3 text-white" strokeWidth={2.5} />}
                      {key === "support" && <MessageCircle className="w-3 h-3 text-white" strokeWidth={2.5} />}
                    </div>
                    <span className="text-[13px] font-semibold text-slate-700">{config.title}</span>
                  </div>
                </div>
                
                {/* Live Badge */}
                <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-medium text-emerald-600 uppercase tracking-wide">
                    {language === "pt" ? "Ao vivo" : language === "fr" ? "En direct" : "Live"}
                  </span>
                </div>
              </div>

              {/* Window Content */}
              <div className="space-y-4 px-5 py-5">
                <p className="text-sm text-slate-500 leading-relaxed">{config.subtitle}</p>
                
                {/* Highlights */}
                <ul className="space-y-2.5">
                  {config.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 p-4 border border-slate-100">
                  {config.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  asChild
                  className={cn(
                    "w-full rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all",
                    "bg-gradient-to-r text-white",
                    iconGradient
                  )}
                >
                  <Link href={config.action.href}>
                    {config.action.label}
                    <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.5} />
                  </Link>
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


