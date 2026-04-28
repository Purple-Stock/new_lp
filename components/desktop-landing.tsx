"use client"

import dynamic from "next/dynamic"
import { useCallback, useEffect, useMemo, useRef, useState, type ComponentType, type MouseEvent as ReactMouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AppWindow,
  BadgePercent,
  CheckCircle2,
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
  Smartphone,
  BarChart3,
  MapPin,
  Box,
  RefreshCw,
  ArrowRight,
  Zap,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { cn } from "@/lib/utils"
import { trackCtaClick } from "@/lib/analytics"
import { MacOSFolderIcon } from "@/components/macos-folder-icon"
import { DraggableFolder } from "@/components/draggable-folder"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { buildWhatsAppUrl, getCalendlyUrl } from "@/lib/contact"

const HeroVideoModal = dynamic(
  () => import("@/components/hero-video-modal").then((mod) => mod.HeroVideoModal),
  { ssr: false },
)

type StageKey = "startup" | "growth" | "scale"
type WindowKey = "inventory" | "analytics" | "qr" | "support"

const WINDOW_LAYOUT: Record<WindowKey, { top: string; left: string; width: string }> = {
  inventory: { top: "15%", left: "50%", width: "420px" },
  analytics: { top: "15%", left: "50%", width: "430px" },
  qr: { top: "15%", left: "50%", width: "380px" },
  support: { top: "15%", left: "50%", width: "360px" },
}

export function DesktopLanding() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [activeStage, setActiveStage] = useState<StageKey>("growth")
  const [openWindows, setOpenWindows] = useState<WindowKey[]>([])
  const [windowOffsets, setWindowOffsets] = useState<Record<WindowKey, { x: number; y: number }>>({
    inventory: { x: 0, y: 0 },
    analytics: { x: 0, y: 0 },
    qr: { x: 0, y: 0 },
    support: { x: 0, y: 0 },
  })
  const [draggingWindowKey, setDraggingWindowKey] = useState<WindowKey | null>(null)
  const [windowDragStart, setWindowDragStart] = useState<{ x: number; y: number } | null>(null)
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [mainBoxPosition, setMainBoxPosition] = useState({ x: 0, y: 0 })
  const [isDraggingMainBox, setIsDraggingMainBox] = useState(false)
  const [mainBoxDragStart, setMainBoxDragStart] = useState<{ x: number; y: number } | null>(null)
  const mainBoxRef = useRef<HTMLDivElement>(null)
  const [shouldLoadVideoModal, setShouldLoadVideoModal] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [sectorIndex, setSectorIndex] = useState(0)
  const [usePainCta, setUsePainCta] = useState(false)
  const demoVideoUrl = "https://www.youtube.com/watch?v=fD4amz78t8c"

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
        customers: "Clientes",
        docs: "Documentação",
        demo: "Ver demo",
        talk: "Falar com humano",
        ask: "Perguntar algo",
        signup: "Criar conta",
        topProduct: "Produto",
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
        testimonial: "“Com Purple Stock, nosso controle de estoque ficou padronizado e rastreável.”",
        testimonialCompany: "Purchase Store",
        stageTag: "Começa com",
        stageHighlight: "Purple Stock",
        install: "Instalar com IA",
        installHint: "Conecte seus dados via API e tenha automações em minutos.",
      },
      en: {
        home: "Home",
        product: "Product OS",
        customers: "Customers",
        docs: "Documentation",
        demo: "Watch demo",
        talk: "Talk to a human",
        ask: "Ask a question",
        signup: "Sign up",
        topProduct: "Product",
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
        testimonial: "“Purple Stock helped us standardize inventory routines without spreadsheets.”",
        testimonialCompany: "Purchase Store",
        stageTag: t.hero.subtitle,
        stageHighlight: t.hero.subtitleHighlight,
        install: "Connect integrations",
        installHint: "Connect your data sources and keep updates in one flow.",
      },
      fr: {
        home: "Accueil",
        product: "Plateforme",
        customers: "Clients",
        docs: "Documentation",
        demo: "Voir la démo",
        talk: "Parler à un humain",
        ask: "Poser une question",
        signup: "Créer un compte",
        topProduct: "Produit",
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
        testimonial: "« Purple Stock a aidé notre equipe a standardiser la gestion de stock sans tableurs. »",
        testimonialCompany: "Purchase Store",
        stageTag: "Commence avec",
        stageHighlight: "Purple Stock",
        install: "Connecter les integrations",
        installHint: "Connectez vos sources de donnees et centralisez les mises a jour.",
      },
    }[language]
  }, [language, t.hero.subtitle, t.hero.subtitleHighlight])

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

  const openVideoModal = useCallback((ctaName: string) => {
    setShouldLoadVideoModal(true)
    setIsVideoModalOpen(true)
    trackCtaClick({
      cta_name: ctaName,
      cta_target: "video_modal",
      page_section: "hero_media",
    })
  }, [])

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
        label: osText.docs,
        href: "/documentacao",
        icon: MacOSFolderIcon,
        folderColor: "blue" as const,
      },
      {
        label: osText.ask,
        href: "/glossario",
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

  const cycleLanguage = useCallback(() => {
    if (language === "pt") setLanguage("en")
    else if (language === "en") setLanguage("fr")
    else setLanguage("pt")
  }, [language, setLanguage])

  const goBack = useCallback(() => {
    if (typeof window === "undefined") return
    if (window.history.length > 1) {
      window.history.back()
      return
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const goForward = useCallback(() => {
    if (typeof window === "undefined") return
    window.history.forward()
  }, [])

  const reloadPage = useCallback(() => {
    if (typeof window === "undefined") return
    window.location.reload()
  }, [])

  const openPricing = useCallback(() => {
    if (typeof window === "undefined") return
    window.location.href = "/precos"
  }, [])

  const openApp = useCallback(() => {
    if (typeof window === "undefined") return
    window.open("https://app.purplestock.com.br/", "_blank", "noopener,noreferrer")
  }, [])

  const closeMainPreviewWindows = useCallback(() => {
    setOpenWindows([])
  }, [])

  const resetMainPreview = useCallback(() => {
    setMainBoxPosition({ x: 0, y: 0 })
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  const windowsConfig = useMemo(
    () =>
      ({
        inventory: {
          title: language === "pt" ? "Visão do Estoque" : language === "fr" ? "Vue de Stock" : "Inventory Overview",
          subtitle:
            language === "pt"
              ? "Acompanhe itens por localização e status, com atualização imediata."
              : language === "fr"
                ? "Suivez chaque article par emplacement et statut en temps reel."
                : "Track every item by location and status in real time.",
          highlights: [
            language === "pt"
              ? "Cadastro central de itens, categorias e localizações."
              : language === "fr"
                ? "Catalogue centralise des articles, categories et emplacements."
                : "Central catalog for items, categories, and locations.",
            language === "pt"
              ? "Histórico de movimentações com rastreabilidade por item."
              : language === "fr"
                ? "Historique des mouvements avec tracabilite par article."
                : "Movement history with traceability per item.",
          ],
          stats: [
            { label: language === "pt" ? "Times" : language === "fr" ? "Equipes" : "Teams", value: "Multi" },
            { label: language === "pt" ? "Atualização" : language === "fr" ? "Mise a jour" : "Updates", value: "Em tempo real" },
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
              ? "Consolide o que entrou, saiu e foi ajustado no estoque."
              : language === "fr"
                ? "Consolidez les entrees, sorties et ajustements de stock."
                : "Consolidate inbound, outbound, and adjustment activity.",
          highlights: [
            language === "pt"
              ? "Relatórios por time para operação e gestão."
              : language === "fr"
                ? "Rapports par equipe pour l'operation et la gestion."
                : "Team-level reports for operations and management.",
            language === "pt"
              ? "Visão clara para reposição, perdas e desempenho."
              : language === "fr"
                ? "Vue claire sur le reassort, les pertes et la performance."
                : "Clear view of replenishment, losses, and performance.",
          ],
          stats: [
            { label: language === "pt" ? "Movimentos" : language === "fr" ? "Mouvements" : "Movements", value: "5 tipos" },
            { label: language === "pt" ? "Histórico" : language === "fr" ? "Historique" : "History", value: "Auditável" },
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
              ? "Identifique itens com QR Code e execute operações no celular."
              : language === "fr"
                ? "Identifiez les articles via QR code et operez sur mobile."
                : "Identify items with QR codes and execute actions on mobile.",
          highlights: [
            language === "pt"
              ? "Fluxo rápido para inventário cíclico e conferência."
              : language === "fr"
                ? "Flux rapide pour inventaire cyclique et verification."
                : "Fast workflow for cycle counts and verification.",
            language === "pt"
              ? "Menos erro manual em entrada, saída e transferência."
              : language === "fr"
                ? "Moins d'erreurs manuelles sur entree, sortie et transfert."
                : "Fewer manual errors on inbound, outbound, and transfers.",
          ],
          stats: [
            { label: language === "pt" ? "Operacao" : language === "fr" ? "Operation" : "Operation", value: "Mobile" },
            { label: language === "pt" ? "Leitura" : language === "fr" ? "Lecture" : "Scanning", value: "QR Code" },
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
            href: buildWhatsAppUrl("Hello! I'd like to speak with someone about Purple Stock."),
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
    [language],
  )

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

  const handleWindowHeaderMouseDown = useCallback(
    (key: WindowKey, event: ReactMouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement
      if (target.closest("button, a, input, textarea")) return
      if (event.button !== 0) return

      event.preventDefault()
      openWindow(key)
      setDraggingWindowKey(key)
      setWindowDragStart({
        x: event.clientX,
        y: event.clientY,
      })
    },
    [openWindow],
  )

  const handleWindowDragMove = useCallback(
    (event: MouseEvent) => {
      if (!draggingWindowKey || !windowDragStart) return

      const deltaX = event.clientX - windowDragStart.x
      const deltaY = event.clientY - windowDragStart.y

      const layout = WINDOW_LAYOUT[draggingWindowKey]
      const windowWidth = Number.parseInt(layout.width, 10)
      const baseLeft = layout.left.endsWith("%")
        ? (Number.parseFloat(layout.left) / 100) * window.innerWidth
        : Number.parseFloat(layout.left)
      const baseTop = layout.top.endsWith("%")
        ? (Number.parseFloat(layout.top) / 100) * window.innerHeight
        : Number.parseFloat(layout.top)

      const minLeft = 24
      const maxLeft = window.innerWidth - 24
      const minTop = 12
      const maxTop = window.innerHeight - 56

      setWindowOffsets((prev) => ({
        ...prev,
        [draggingWindowKey]: (() => {
          const nextX = prev[draggingWindowKey].x + deltaX
          const nextY = prev[draggingWindowKey].y + deltaY

          const nextLeft = baseLeft - windowWidth / 2 + nextX
          const nextTop = baseTop + nextY

          const clampedLeft = Math.min(Math.max(nextLeft, minLeft), maxLeft)
          const clampedTop = Math.min(Math.max(nextTop, minTop), maxTop)

          return {
            x: clampedLeft - (baseLeft - windowWidth / 2),
            y: clampedTop - baseTop,
          }
        })(),
      }))

      setWindowDragStart({
        x: event.clientX,
        y: event.clientY,
      })
    },
    [draggingWindowKey, windowDragStart],
  )

  const handleWindowDragEnd = useCallback(() => {
    setDraggingWindowKey(null)
    setWindowDragStart(null)
  }, [])

  useEffect(() => {
    if (!draggingWindowKey || !windowDragStart) return

    window.addEventListener("mousemove", handleWindowDragMove)
    window.addEventListener("mouseup", handleWindowDragEnd)

    return () => {
      window.removeEventListener("mousemove", handleWindowDragMove)
      window.removeEventListener("mouseup", handleWindowDragEnd)
    }
  }, [draggingWindowKey, windowDragStart, handleWindowDragMove, handleWindowDragEnd])

  const testimonial = translations[language].testimonials?.[0]

  const playbookContent = useMemo(
    () =>
      ({
        pt: {
          uvpBadge:
            "Para empresas que já cansaram de perder venda por falta de produto, erro de contagem ou estoque sumido no almoxarifado.",
          uvpText:
            "Purple Stock organiza entrada, saída, transferência, ajuste e inventário em um único fluxo rastreável, para qualquer pessoa do time saber o que tem, onde está e quem mexeu, sem virar um projeto gigante de sistema.",
          howItWorksTitle: "Como funciona o sistema de controle de estoque na prática",
          howItWorksSubtitle: "Do cadastro ao relatório, em um fluxo único e rastreável.",
          steps: [
            {
              title: "1. Estruture seu time e seus locais",
              body: "Crie o time, convide usuários e organize localizações para separar operação e responsabilidade.",
            },
            {
              title: "2. Cadastre itens com rastreabilidade",
              body: "Registre itens e categorias uma vez e acompanhe saldo, movimentações e histórico por contexto.",
            },
            {
              title: "3. Execute movimentos operacionais",
              body: "Lance entradas, saídas, transferências, ajustes e contagens com consistência e atualização em tempo real.",
            },
            {
              title: "4. Decida com relatórios consolidados",
              body: "Acompanhe perdas, reposição e desempenho para agir rápido sem consolidação manual.",
            },
          ],
          proofTitle: "O que a equipe consegue auditar no dia a dia",
          proofItems: [
            {
              metric: "Rastreabilidade por item",
              detail: "Quem movimentou, quando movimentou e em qual local a operação aconteceu.",
            },
            {
              metric: "Histórico único de movimentações",
              detail: "Entrada, saída, transferência, ajuste e contagem no mesmo fluxo operacional.",
            },
            {
              metric: "Conferência por localização",
              detail: "Consulta de saldo e inventário por local sem consolidar planilhas manualmente.",
            },
          ],
          compareTitle: "Purple Stock vs ERP tradicional",
          compareSubtitle: "Quando o foco é operação de estoque rápida, o modelo de implantação faz diferença.",
          compareRows: [
            { label: "Implantação", purple: "Setup leve e progressivo", erp: "Projeto mais extenso em média" },
            { label: "Curva de uso para operação", purple: "Fluxo direto para almoxarifado", erp: "Treinamento mais extenso em média" },
            { label: "Operação no celular + QR", purple: "Nativo no fluxo diário", erp: "Geralmente depende de módulo extra" },
            { label: "Foco inicial", purple: "Controle de estoque e rastreabilidade", erp: "Suite ampla com escopo maior" },
          ],
          objectionsTitle: "Perguntas frequentes: dúvidas antes de contratar",
          objections: [
            {
              q: "Dá para começar sem migração complexa?",
              a: "Sim. Você pode iniciar com o cadastro essencial e evoluir por etapas, sem parar a operação.",
            },
            {
              q: "Meus dados ficam seguros e separados por equipe?",
              a: "Sim. O sistema opera por times com contexto ativo e permissões por usuário, mantendo cada operação isolada.",
            },
            {
              q: "Funciona no celular no dia a dia da operação?",
              a: "Sim. Os fluxos de entrada, saída, transferência e contagem são diretos e podem ser feitos no celular.",
            },
            {
              q: "Posso testar sem ficar preso?",
              a: "Sim. O teste utiliza cartão de crédito e você pode cancelar quando quiser dentro do período de avaliação.",
            },
            {
              q: "Quanto custa para começar?",
              a: "O plano de entrada começa em R$29,90/mês na oferta atual, com revisão de preço conforme evolução da operação.",
            },
          ],
        },
        en: {
          uvpBadge: "For SMB teams that cannot lose sales due to stock mistakes",
          uvpText:
            "Purple Stock keeps inbound, outbound, transfer, adjustment, and count workflows in one traceable system. Teams can leave spreadsheets and standardize operations in days.",
          howItWorksTitle: "How the inventory control system works in practice",
          howItWorksSubtitle: "From setup to reporting in one traceable flow.",
          steps: [
            {
              title: "1. Set up teams and locations",
              body: "Create teams, invite users, and organize locations to structure responsibility.",
            },
            {
              title: "2. Register items with traceability",
              body: "Set up items and categories once, then track balance and movement history.",
            },
            {
              title: "3. Execute operational movements",
              body: "Run stock in, stock out, move, adjust, and count with real-time updates.",
            },
            {
              title: "4. Decide with consolidated reports",
              body: "Track losses, replenishment, and team performance without manual consolidation.",
            },
          ],
          proofTitle: "What teams can audit in daily operations",
          proofItems: [
            {
              metric: "Item-level traceability",
              detail: "Who moved stock, when it happened, and where it happened.",
            },
            {
              metric: "Single movement history",
              detail: "Inbound, outbound, transfer, adjustment, and count in one operational flow.",
            },
            {
              metric: "Location-based checks",
              detail: "Review stock and inventory by location without manual spreadsheet consolidation.",
            },
          ],
          compareTitle: "Purple Stock vs traditional ERP",
          compareSubtitle: "For fast inventory operations, implementation model matters.",
          compareRows: [
            { label: "Implementation", purple: "Light, progressive setup", erp: "Usually a longer rollout project" },
            { label: "Operational learning curve", purple: "Direct warehouse workflows", erp: "Usually longer training period" },
            { label: "Mobile + QR daily usage", purple: "Native in core flow", erp: "Often depends on add-on modules" },
            { label: "Initial focus", purple: "Inventory control and traceability", erp: "Broader suite with larger scope" },
          ],
          objectionsTitle: "Questions teams ask before buying",
          objections: [
            {
              q: "Can we start without a heavy migration?",
              a: "Yes. You can begin with core setup and expand in phases without stopping operations.",
            },
            {
              q: "Are data secure and separated by team?",
              a: "Yes. The system runs with active team context and user permissions, keeping operations separated.",
            },
            {
              q: "Does it work on mobile for daily operations?",
              a: "Yes. Inbound, outbound, transfer, and counting flows are direct and mobile-friendly.",
            },
            {
              q: "Can we test without long-term lock-in?",
              a: "Yes. The trial requires a credit card, and you can cancel anytime during the trial period.",
            },
            {
              q: "What is the starting cost?",
              a: "Entry pricing currently starts at R$29.90/month, with review as operations grow.",
            },
          ],
        },
        fr: {
          uvpBadge: "Pour les PME qui ne peuvent pas perdre des ventes a cause du stock",
          uvpText:
            "Purple Stock regroupe entrees, sorties, transferts, ajustements et inventaires dans un flux tracable. Les equipes quittent les tableurs et standardisent l'operation en quelques jours.",
          howItWorksTitle: "Comment fonctionne le systeme de gestion de stock",
          howItWorksSubtitle: "Du parametrage au rapport dans un flux unique et tracable.",
          steps: [
            {
              title: "1. Structurez equipes et emplacements",
              body: "Creez les equipes, invitez les utilisateurs et organisez les emplacements operationnels.",
            },
            {
              title: "2. Enregistrez les articles avec tracabilite",
              body: "Configurez articles et categories puis suivez soldes et historique des mouvements.",
            },
            {
              title: "3. Executez les mouvements quotidiens",
              body: "Gerez stock in, stock out, move, adjust et count avec mise a jour en temps reel.",
            },
            {
              title: "4. Pilotez avec des rapports consolides",
              body: "Suivez pertes, reassort et performance sans consolidation manuelle.",
            },
          ],
          proofTitle: "Ce que l'equipe peut auditer au quotidien",
          proofItems: [
            {
              metric: "Tracabilite par article",
              detail: "Qui a bouge le stock, quand et dans quel emplacement.",
            },
            {
              metric: "Historique unique des mouvements",
              detail: "Entree, sortie, transfert, ajustement et comptage dans le meme flux operationnel.",
            },
            {
              metric: "Controle par emplacement",
              detail: "Lecture de stock et inventaire par emplacement sans consolidation manuelle des tableurs.",
            },
          ],
          compareTitle: "Purple Stock vs ERP traditionnel",
          compareSubtitle: "Pour une operation stock rapide, le modele de deploiement compte.",
          compareRows: [
            { label: "Deploiement", purple: "Setup leger et progressif", erp: "Projet de deploiement plus long en moyenne" },
            { label: "Courbe d'apprentissage", purple: "Flux direct pour magasin", erp: "Formation plus longue en moyenne" },
            { label: "Mobile + QR au quotidien", purple: "Natif dans le flux principal", erp: "Souvent via module additionnel" },
            { label: "Focus initial", purple: "Controle stock et tracabilite", erp: "Suite large avec scope plus vaste" },
          ],
          objectionsTitle: "Questions avant de choisir la plateforme",
          objections: [
            {
              q: "Peut-on commencer sans migration lourde?",
              a: "Oui. Vous pouvez debuter avec le socle et evoluer par etapes sans arreter l'operation.",
            },
            {
              q: "Les donnees sont-elles securisees et separees par equipe?",
              a: "Oui. Le systeme fonctionne par equipes avec contexte actif et permissions par utilisateur.",
            },
            {
              q: "Est-ce utilisable sur mobile au quotidien?",
              a: "Oui. Les flux entree, sortie, transfert et comptage sont simples et mobiles.",
            },
            {
              q: "Peut-on tester sans engagement long?",
              a: "Oui. L'essai demande une carte bancaire et vous pouvez annuler a tout moment pendant la periode d'essai.",
            },
            {
              q: "Quel est le cout de depart?",
              a: "Le plan d'entree commence actuellement a R$29,90/mois, avec revision selon l'evolution de l'operation.",
            },
          ],
        },
      })[language],
    [language],
  )

  const rotatingSectors = useMemo(
    () =>
      ({
        pt: ["almoxarifado", "eventos", "varejo", "indústria", "escolas", "clínicas"],
        en: ["warehouses", "events", "retail", "manufacturing", "schools", "clinics"],
        fr: ["entrepôts", "événements", "commerce", "industrie", "écoles", "cliniques"],
      })[language],
    [language],
  )

  useEffect(() => {
    if (typeof window === "undefined") return
    const mode = new URLSearchParams(window.location.search).get("cta")
    setUsePainCta(mode === "pain")
  }, [])

  const primaryHeroCta = useMemo(() => {
    if (language === "pt") {
      return usePainCta ? "Quero parar de perder vendas agora" : "Começar teste grátis de 7 dias"
    }
    if (language === "fr") {
      return usePainCta ? "Je veux arreter de perdre des ventes maintenant" : "Commencer l'essai gratuit de 7 jours"
    }
    return usePainCta ? "I want to stop losing sales now" : "Start 7-day free trial"
  }, [language, usePainCta])

  const logoCases = useMemo(
    () =>
      ({
        pt: [
          {
            name: "VHS",
            logo: "/images/logos/vhs.jpg",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result: "\"Antes era difícil rastrear movimentação. Hoje entrada, saída e transferência ficam no mesmo histórico.\"",
          },
          {
            name: "St. Nicholas School",
            logo: "/images/logos/st-nicholas-school.webp",
            width: 240,
            height: 55,
            maxWidth: "max-w-[240px]",
            result: "\"A equipe passou a conferir estoque por localização sem perder tempo procurando item.\"",
          },
          {
            name: "Da Rua",
            logo: "/images/logos/da-rua.png",
            width: 120,
            height: 40,
            maxWidth: "max-w-[120px]",
            result: "\"Parou de existir planilha paralela para controle diário de estoque.\"",
          },
          {
            name: "DPS Brasil",
            logo: "/images/logos/dps-brasil-preto.png",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result: "\"Hoje o time enxerga saldo e movimentações no mesmo painel operacional.\"",
          },
        ],
        en: [
          {
            name: "VHS",
            logo: "/images/logos/vhs.jpg",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result: "\"Inbound, outbound, and transfer are now tracked in one single movement history.\"",
          },
          {
            name: "St. Nicholas School",
            logo: "/images/logos/st-nicholas-school.webp",
            width: 240,
            height: 55,
            maxWidth: "max-w-[240px]",
            result: "\"The team now runs stock checks by location without wasting time searching items.\"",
          },
          {
            name: "Da Rua",
            logo: "/images/logos/da-rua.png",
            width: 120,
            height: 40,
            maxWidth: "max-w-[120px]",
            result: "\"Daily stock control no longer depends on parallel spreadsheets.\"",
          },
          {
            name: "DPS Brasil",
            logo: "/images/logos/dps-brasil-preto.png",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result: "\"Operations now see stock balance and movement history in one place.\"",
          },
        ],
        fr: [
          {
            name: "VHS",
            logo: "/images/logos/vhs.jpg",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result: "\"Entree, sortie et transfert sont maintenant suivis dans un historique unique.\"",
          },
          {
            name: "St. Nicholas School",
            logo: "/images/logos/st-nicholas-school.webp",
            width: 240,
            height: 55,
            maxWidth: "max-w-[240px]",
            result: "\"L'equipe controle le stock par emplacement sans perdre du temps a chercher les articles.\"",
          },
          {
            name: "Da Rua",
            logo: "/images/logos/da-rua.png",
            width: 120,
            height: 40,
            maxWidth: "max-w-[120px]",
            result: "\"Le controle quotidien ne depend plus de tableurs paralleles.\"",
          },
          {
            name: "DPS Brasil",
            logo: "/images/logos/dps-brasil-preto.png",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result: "\"Les soldes et mouvements sont visibles dans le meme panneau operationnel.\"",
          },
        ],
      })[language],
    [language],
  )

  // Dynamic questions array
  const questions = useMemo(() => {
    return {
      pt: [
        "Seu time precisa controlar estoque por localização sem planilhas?",
        "Você quer registrar entrada, saída, ajuste e transferência no mesmo fluxo?",
        "Precisa rastrear itens com QR Code direto pelo celular?",
        "Quer relatórios consolidados por time para decidir reposição?",
      ],
      en: [
        "Does your team need location-based stock control without spreadsheets?",
        "Do you want inbound, outbound, transfer, and adjustment in one flow?",
        "Need to track items with QR code directly from mobile devices?",
        "Want consolidated team reports to improve replenishment decisions?",
      ],
      fr: [
        "Votre equipe doit controler le stock par emplacement sans tableurs?",
        "Voulez-vous gerer entree, sortie, transfert et ajustement dans un seul flux?",
        "Besoin de suivre les articles par QR code depuis le mobile?",
        "Voulez-vous des rapports consolides par equipe pour le reassort?",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setSectorIndex((prev) => (prev + 1) % rotatingSectors.length)
    }, 2200)

    return () => clearInterval(interval)
  }, [rotatingSectors.length])

  useEffect(() => {
    setSectorIndex(0)
  }, [language])

  const rotatingSectorLabel = useMemo(() => {
    const sector = rotatingSectors[sectorIndex] ?? ""
    return sector.charAt(0).toUpperCase() + sector.slice(1)
  }, [rotatingSectors, sectorIndex])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),radial-gradient(circle_at_50%_80%,rgba(147,112,219,0.1),transparent_40%),linear-gradient(180deg,#f8f6ff,#f3ede7)] text-slate-900">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[120] -translate-y-16 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
      >
        {language === "pt" ? "Pular para o conteúdo" : language === "en" ? "Skip to content" : "Aller au contenu"}
      </a>
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-80" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-200/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>
      <Navbar />
      <main id="main-content" className="relative">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1320px] flex-col gap-8 px-4 pt-24 pb-4 md:flex-row md:gap-6 md:px-10 md:pt-24">
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

        <div className="relative z-0 flex flex-1 flex-col gap-8">
          <div 
            ref={mainBoxRef}
            className="relative z-0 flex min-h-[calc(100vh-7.5rem)] flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white/95 shadow-[0_25px_100px_-30px_rgba(59,7,100,0.35),0_10px_40px_-20px_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-transform cursor-move"
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
                  <button
                    className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ff6058] to-[#e4473c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#ff7066] hover:to-[#e4554a] group-hover:scale-105"
                    onClick={closeMainPreviewWindows}
                    aria-label="Close all preview windows"
                    title="Close all preview windows"
                  >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d0000] font-bold">×</span>
                  </button>
                  <button
                    className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ffbd2e] to-[#e5a319] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#ffc940] hover:to-[#e5ae25] group-hover:scale-105"
                    onClick={resetMainPreview}
                    aria-label="Reset preview position"
                    title="Reset preview position"
                  >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d3800] font-bold">−</span>
                  </button>
                  <button
                    className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#28c840] to-[#1aab2c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#34d44c] hover:to-[#26b738] group-hover:scale-105"
                    onClick={openApp}
                    aria-label="Open Purple Stock app"
                    title="Open Purple Stock app"
                  >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[6px] text-[#003d00]">⤢</span>
                  </button>
                </div>
              </div>

              {/* Center Title */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                <Link
                  href="/"
                  className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-purple-600 shadow-sm"
                  aria-label="Go to homepage"
                  title="Go to homepage"
                >
                  <Box className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </Link>
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
                <span className="text-[11px] text-slate-400 font-medium hidden md:block">{language === "pt" ? "Workspace de Operação" : language === "fr" ? "Espace des Operations" : "Operations Workspace"}</span>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-2 bg-gradient-to-b from-slate-50/80 to-white/60 border-b border-slate-200/50 flex-shrink-0">
              <div className="flex items-center gap-1">
                <button
                  className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
                  onClick={goBack}
                  aria-label="Back"
                  title="Back"
                >
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={2.5} />
                </button>
                <button
                  className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
                  onClick={goForward}
                  aria-label="Forward"
                  title="Forward"
                >
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
                <div className="w-px h-4 bg-slate-200 mx-1" />
                <button
                  className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
                  onClick={reloadPage}
                  aria-label="Reload page"
                  title="Reload page"
                >
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
                <button
                  className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
                  onClick={cycleLanguage}
                  aria-label="Switch language"
                  title="Switch language"
                >
                  <Globe className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
                <button
                  className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
                  onClick={openPricing}
                  aria-label="Open pricing"
                  title="Open pricing"
                >
                  <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-8 overflow-visible px-4 py-8 sm:px-10 sm:py-10">
              {/* Top Section - Title and Description */}
              <div className="text-center space-y-6 mb-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                  {language === "pt" 
                    ? (
                      <>
                        {"Pare de perder venda porque o estoque não bate"}
                      </>
                    )
                    : language === "en" 
                      ? (
                        <>
                          {"Stop losing sales because stock records do not match"}
                        </>
                      )
                      : (
                        <>
                          {"Arretez de perdre des ventes parce que le stock ne correspond pas"}
                        </>
                      )}
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {language === "pt"
                    ? "Em poucos dias, seu time sai da planilha para um controle de estoque simples, no celular, com QR Code e histórico do que entrou, saiu e foi para cada lugar."
                    : language === "en"
                      ? "In a few days, your team moves from spreadsheets to simple stock control on mobile, with QR code and history of what came in, what went out, and where each move happened."
                      : "En quelques jours, votre equipe passe du tableur a un controle de stock simple sur mobile, avec QR code et historique des entrees, sorties et emplacements."}
                </p>
                <div className="mx-auto max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/80 px-5 py-4 text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{playbookContent.uvpBadge}</p>
                  <p className="mt-2 text-sm text-slate-700 sm:text-base">{playbookContent.uvpText}</p>
                </div>
                <div className="mx-auto grid w-full max-w-3xl gap-3 text-left sm:grid-cols-3">
                  {[
                    {
                      title: language === "pt" ? "Setup guiado" : language === "en" ? "Guided setup" : "Mise en route guidee",
                      value:
                        language === "pt"
                          ? "Onboarding assistido para começar com o básico sem parar a operação."
                          : language === "en"
                            ? "Assisted onboarding to start with the essentials without stopping operations."
                            : "Onboarding assiste pour commencer avec l'essentiel sans arreter l'operation.",
                    },
                    {
                      title: language === "pt" ? "Fluxo operacional" : language === "en" ? "Operations flow" : "Flux operationnel",
                      value:
                        language === "pt"
                          ? "5 movimentos padrão: entrada, saída, transferência, ajuste e contagem."
                          : language === "en"
                            ? "5 standard movements: stock in, stock out, transfer, adjustment, and count."
                            : "5 mouvements standard: entree, sortie, transfert, ajustement et comptage.",
                    },
                    {
                      title: language === "pt" ? "Execucao diaria" : language === "en" ? "Daily execution" : "Execution quotidienne",
                      value:
                        language === "pt"
                          ? "Operação no celular com QR Code, sem depender de computador no almoxarifado."
                          : language === "en"
                            ? "Mobile operation with QR code, without depending on a desktop in the warehouse."
                            : "Operation mobile avec QR code, sans dependre d'un ordinateur dans l'entrepot.",
                    },
                  ].map((proof) => (
                    <div key={proof.title} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{proof.title}</p>
                      <p className="mt-1 text-base font-bold text-slate-900">{proof.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mx-auto w-full max-w-2xl rounded-2xl border border-purple-200 bg-gradient-to-r from-purple-50 via-white to-purple-50 px-5 py-4 shadow-sm">
                  <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                      <BadgePercent className="h-3.5 w-3.5" />
                      {language === "pt"
                        ? "Oferta de lançamento"
                        : language === "en"
                          ? "Launch offer"
                          : "Offre de lancement"}
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-extrabold leading-none text-purple-700 sm:text-4xl">
                        R$29,90
                      </span>
                      <span className="pb-1 text-xs font-semibold text-purple-600 sm:text-sm">
                        /{language === "pt" ? "mês" : language === "en" ? "month" : "mois"}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-purple-700">
                    {language === "pt"
                      ? "Lote de lançamento com revisão semanal de preço"
                      : language === "en"
                        ? "Launch lot with weekly price review"
                        : "Lot de lancement avec revision hebdomadaire du prix"}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    {language === "pt"
                      ? "Pensado para uma operação começar pequena e testar na prática antes de qualquer projeto grande."
                      : language === "en"
                        ? "Built for teams that want to start small and validate the operation before any large system project."
                        : "Concu pour demarrer petit et valider l'operation avant tout grand projet de systeme."}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {language === "pt"
                      ? "Teste com cartão de crédito e cancelamento a qualquer momento."
                      : language === "en"
                        ? "Trial with credit card and cancel anytime."
                        : "Essai avec carte bancaire et annulation a tout moment."}
                  </p>
                  <div className="mt-3">
                    <Button
                      asChild
                      size="sm"
                      className="bg-purple-700 text-white hover:bg-purple-800"
                    >
                      <Link
                        href="https://app.purplestock.com.br/"
                        onClick={() =>
                          trackCtaClick({
                          cta_name: "desktop_launch_offer",
                          cta_target: "app",
                          page_section: "hero_offer",
                        })
                      }
                    >
                      {language === "pt"
                        ? "Assinar por R$29,90"
                        : language === "en"
                          ? "Subscribe for R$29.90"
                          : "Souscrire pour R$29,90"}
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
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
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-purple-300 bg-white/90 px-8 py-6 text-base font-semibold text-purple-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-50"
                  >
                    <Link
                      href={buildWhatsAppUrl("Olá! Quero entender como o Purple Stock pode organizar meu estoque.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackCtaClick({
                          cta_name: "desktop_whatsapp_secondary",
                          cta_target: "whatsapp",
                          page_section: "hero_cta",
                          cta_variant: "secondary",
                        })
                      }
                    >
                      {language === "pt" ? "Falar com especialista" : language === "en" ? "Talk to a specialist" : "Parler a un specialiste"}
                    </Link>
                  </Button>
                </div>
                <Link
                  href={demoVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto inline-flex items-center text-sm font-medium text-purple-700 underline underline-offset-2 hover:text-purple-800"
                  onClick={(event) => {
                    event.preventDefault()
                    setIsVideoModalOpen(true)
                    trackCtaClick({
                      cta_name: "desktop_view_demo_primary",
                      cta_target: "video_modal",
                      page_section: "hero_cta",
                    })
                  }}
                >
                  {language === "pt"
                    ? "Prefere ver primeiro? Ver demonstração em vídeo"
                    : language === "en"
                      ? "Prefer to watch first? Watch the video demo"
                      : "Vous preferez voir d'abord? Voir la demonstration video"}
                </Link>
                <p className="text-sm text-slate-500">
                  {language === "pt"
                    ? "Teste com cartão de crédito • Cancele quando quiser • Setup guiado"
                    : language === "en"
                      ? "Trial with credit card • Cancel anytime • Guided setup"
                      : "Essai avec carte bancaire • Annulation a tout moment • Setup guide"}
                </p>
                <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700">
                    <Smartphone className="h-3.5 w-3.5" />
                    {language === "pt" ? "Compatível com iOS" : language === "en" ? "Compatible with iOS" : "Compatible iOS"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700">
                    <Smartphone className="h-3.5 w-3.5" />
                    {language === "pt" ? "Compatível com Android" : language === "en" ? "Compatible with Android" : "Compatible Android"}
                  </span>
                </div>
              </div>

              {/* Main Content Area - App Screenshot */}
              <div className="relative py-12">
                <div className="relative mx-auto max-w-6xl">
                  <div className="relative rounded-3xl border-4 border-white bg-white p-2 shadow-2xl overflow-visible">
                    <div className="relative h-auto w-full">
                      <Image
                        src="/images/app-items-list-1200.webp"
                        alt={language === "pt" ? "Interface do Purple Stock - Lista de Itens" : language === "en" ? "Purple Stock Interface - Items List" : "Interface Purple Stock - Liste des Articles"}
                        width={1200}
                        height={674}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
                        className="h-auto w-full rounded-2xl object-contain"
                        priority
                      />
                      {shouldLoadVideoModal ? (
                        <HeroVideoModal
                          language={language}
                          onOpen={openVideoModal}
                          open={isVideoModalOpen}
                          onOpenChange={setIsVideoModalOpen}
                        />
                      ) : (
                        <button
                          type="button"
                          aria-label={language === "pt" ? "Abrir demonstração em vídeo" : language === "en" ? "Open video demo" : "Ouvrir la demonstration video"}
                          className="absolute inset-0 flex items-center justify-center rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                          onClick={() => openVideoModal("desktop_video_overlay")}
                        >
                          <span className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-purple-600 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-purple-500/50">
                            <span className="ml-1 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-purple-600 border-t-transparent" />
                          </span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    {!shouldLoadVideoModal ? (
                      <Button
                        size="lg"
                        className="rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:from-purple-700 hover:to-purple-800"
                        onClick={() => openVideoModal("desktop_watch_demo_button")}
                      >
                        <PlayCircle className="mr-2 h-5 w-5" strokeWidth={2.5} style={{ strokeLinecap: "round", strokeLinejoin: "round" }} />
                        {language === "pt" ? "Ver Demonstração" : language === "en" ? "Watch demo" : "Voir la demonstration"}
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Trusted By Section */}
              <div className="pt-12 pb-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {language === "pt" 
                      ? "Empresas que usam Purple Stock na operação"
                      : language === "en"
                      ? "Teams running operations with Purple Stock"
                      : "Equipes qui operent avec Purple Stock"}
                  </h2>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {logoCases.map((logoCase) => (
                    <div
                      key={logoCase.name}
                      className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-purple-200 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center justify-center h-14">
                          <Image
                            src={logoCase.logo}
                            alt={logoCase.name}
                            width={logoCase.width}
                            height={logoCase.height}
                            className={`h-full w-auto object-contain ${logoCase.maxWidth}`}
                          />
                        </div>
                        <span className="rounded-full bg-purple-50 px-2 py-1 text-[11px] font-semibold text-purple-700">
                          {language === "pt" ? "Caso rápido" : language === "en" ? "Quick case" : "Cas rapide"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{logoCase.result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Button */}
              <div className="flex justify-center mb-6 pt-8">
                <button className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                  <Sparkles className="w-4 h-4 mr-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                  {language === "pt" ? "Dúvidas comuns antes de contratar" : language === "en" ? "Frequently Asked Questions" : "Questions Fréquentes"}
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
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-slate-700">
                    {language === "pt" 
                      ? (
                        <>
                          {"Gestão para "}
                          <span
                            key={`title-sector-${language}-${sectorIndex}`}
                            className="inline-block text-slate-900 animate-in fade-in slide-in-from-bottom-1 duration-500"
                          >
                            {rotatingSectorLabel}
                          </span>
                          {" e Inventário com QR Code"}
                        </>
                      )
                      : language === "en" 
                        ? (
                          <>
                            {"Management for "}
                            <span
                              key={`title-sector-${language}-${sectorIndex}`}
                              className="inline-block text-slate-900 animate-in fade-in slide-in-from-bottom-1 duration-500"
                            >
                              {rotatingSectorLabel}
                            </span>
                            {" and QR Code Inventory"}
                          </>
                        )
                        : (
                          <>
                            {"Gestion pour "}
                            <span
                              key={`title-sector-${language}-${sectorIndex}`}
                              className="inline-block text-slate-900 animate-in fade-in slide-in-from-bottom-1 duration-500"
                            >
                              {rotatingSectorLabel}
                            </span>
                            {" et inventaire QR Code"}
                          </>
                        )}
                  </span>
                  <br />
                  <span className="text-purple-600">
                    {language === "pt" 
                      ? "Purple Stock" 
                      : language === "en" 
                        ? "Purple Stock" 
                        : "Purple Stock"}
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {language === "pt"
                    ? "Do cadastro ao relatório: registre entradas, saídas, ajustes, contagens e transferências com histórico auditável por time e por localização."
                    : language === "en"
                      ? "From setup to reporting: record inbound, outbound, adjustments, counts, and transfers with auditable history by team and location."
                      : "Du parametrage au rapport: enregistrez entrees, sorties, ajustements, comptages et transferts avec un historique auditable par equipe et emplacement."}
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Card 1 - Controle Total */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-3 py-2">
                    <div className="h-7 w-7 rounded-md bg-purple-600/90 p-1.5 shadow-sm">
                      <CheckCircle2 className="h-full w-full text-white" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                      {language === "pt" ? "Operação" : language === "en" ? "Operations" : "Operation"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {language === "pt" 
                      ? "Visão de estoque" 
                      : language === "en" 
                        ? "Total Control" 
                        : "Contrôle Total"}
                  </h3>
                  <p className="text-slate-600">
                    {language === "pt"
                      ? "Visualize saldo e localização de cada item em tempo real."
                      : language === "en"
                        ? "See item balance and location in real time."
                        : "Visualisez le solde et l'emplacement de chaque article en temps reel."}
                  </p>
                </div>

                {/* Card 2 - Automação Inteligente */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
                    <div className="h-7 w-7 rounded-md bg-blue-600/90 p-1.5 shadow-sm">
                      <Zap className="h-full w-full text-white" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                      {language === "pt" ? "Padrão" : language === "en" ? "Standard" : "Standard"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {language === "pt" 
                      ? "Fluxo operacional padronizado" 
                      : language === "en" 
                        ? "Standardized operations flow" 
                        : "Flux operationnel standardise"}
                  </h3>
                  <p className="text-slate-600">
                    {language === "pt"
                      ? "Padronize operações com tipos claros: entrada, saída, transferência, ajuste e contagem."
                      : language === "en"
                        ? "Standardize operations with clear types: stock in, stock out, move, adjust, and count."
                        : "Standardisez les operations avec des types clairs: stock in, stock out, move, adjust et count."}
                  </p>
                </div>

                {/* Card 3 - Relatórios Avançados */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2">
                    <div className="h-7 w-7 rounded-md bg-emerald-600/90 p-1.5 shadow-sm">
                      <BarChart3 className="h-full w-full text-white" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      {language === "pt" ? "Gestão" : language === "en" ? "Management" : "Gestion"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {language === "pt" 
                      ? "Relatórios por time" 
                      : language === "en" 
                        ? "Reports by team" 
                        : "Rapports par equipe"}
                  </h3>
                  <p className="text-slate-600">
                    {language === "pt"
                      ? "Relatórios consolidados para reposição, perdas e desempenho por time."
                      : language === "en"
                        ? "Consolidated reports for replenishment, losses, and team performance."
                        : "Rapports consolides pour le reassort, les pertes et la performance par equipe."}
                  </p>
                </div>
              </div>

              <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{playbookContent.howItWorksTitle}</h2>
                  <p className="mt-2 text-slate-600">{playbookContent.howItWorksSubtitle}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {playbookContent.steps.map((step) => (
                    <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h3 className="font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12 rounded-3xl border border-violet-100 bg-violet-50/40 p-6 sm:p-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                  <FileCode className="h-3.5 w-3.5" />
                  {language === "pt" ? "Recursos técnicos (opcional)" : language === "en" ? "Technical resources (optional)" : "Ressources techniques (optionnel)"}
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {language === "pt"
                    ? "Para times técnicos: funcionalidades por tópico"
                    : language === "en"
                      ? "For technical teams: features by topic"
                      : "Pour les equipes techniques: fonctionnalités par thème"}
                </h2>
                <p className="mt-2 text-slate-600">
                  {language === "pt"
                    ? "Abrimos uma rota dedicada com módulos, fluxos e endpoints do Purple Stock."
                    : language === "en"
                      ? "We added a dedicated route with Purple Stock modules, flows, and endpoints."
                      : "Nous avons ajouté une route dédiée avec modules, flux et endpoints Purple Stock."}
                </p>
                <div className="mt-5">
                  <Button asChild className="bg-violet-700 text-white hover:bg-violet-800">
                    <Link href="/documentacao">
                      {language === "pt" ? "Abrir documentação" : language === "en" ? "Open documentation" : "Ouvrir la documentation"}
                    </Link>
                  </Button>
                </div>
              </section>

              <section className="mb-12 rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {language === "pt"
                    ? "Software de estoque para pequenas e médias empresas"
                    : language === "en"
                      ? "Inventory system for small and mid-sized businesses"
                      : "Systeme de stock pour petites et moyennes entreprises"}
                </h2>
                <p className="mt-3 text-slate-600">
                  {language === "pt"
                    ? "Se você precisa controlar estoque, almoxarifado e inventário com QR Code, o Purple Stock organiza a operação em um fluxo único."
                    : language === "en"
                      ? "If you need inventory software for warehouse control and QR code inventory, Purple Stock centralizes operations and decision-making in one flow."
                      : "Si vous cherchez un logiciel de gestion de stock, d'entrepot et d'inventaire QR code, Purple Stock centralise operation et pilotage dans un seul flux."}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link className="text-indigo-700 underline underline-offset-2" href="/recursos/controle-de-almoxarifado">
                    {language === "pt" ? "Guia de controle de almoxarifado" : language === "en" ? "Warehouse control guide" : "Guide de controle d'entrepot"}
                  </Link>
                  <Link className="text-indigo-700 underline underline-offset-2" href="/features/qr-code-management">
                    {language === "pt" ? "Funcionalidade de inventário com QR Code" : language === "en" ? "QR code inventory feature" : "Fonction inventaire QR code"}
                  </Link>
                </div>
              </section>

              <section className="mb-12 rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{playbookContent.proofTitle}</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {playbookContent.proofItems.map((item) => (
                    <div key={item.metric} className="rounded-2xl border border-emerald-100 bg-white p-4">
                      <p className="text-lg font-bold text-emerald-700">{item.metric}</p>
                      <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{playbookContent.compareTitle}</h2>
                <p className="mt-2 text-slate-600">{playbookContent.compareSubtitle}</p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-left text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-600">
                          {language === "pt" ? "Criterio" : language === "en" ? "Criteria" : "Critere"}
                        </th>
                        <th className="px-4 py-3 font-semibold text-purple-700">Purple Stock</th>
                        <th className="px-4 py-3 font-semibold text-slate-600">
                          {language === "pt" ? "ERP tradicional" : language === "en" ? "Traditional ERP" : "ERP traditionnel"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {playbookContent.compareRows.map((row) => (
                        <tr key={row.label} className="border-t border-slate-100">
                          <td className="px-4 py-3 font-medium text-slate-900">{row.label}</td>
                          <td className="px-4 py-3 text-slate-700">{row.purple}</td>
                          <td className="px-4 py-3 text-slate-600">{row.erp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12 rounded-3xl border border-amber-100 bg-amber-50/50 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{playbookContent.objectionsTitle}</h2>
                <div className="mt-5 space-y-4">
                  {playbookContent.objections.map((item) => (
                    <div key={item.q} className="rounded-2xl border border-amber-100 bg-white p-4">
                      <p className="font-semibold text-slate-900">{item.q}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
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
                    <Sparkles className="w-5 h-5 mr-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    {language === "pt" ? "Começar teste grátis de 7 dias" : language === "en" ? "Start 7-day free trial" : "Commencer l'essai gratuit de 7 jours"}
                    <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
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
                    <MessageCircle className="w-5 h-5 mr-2" strokeWidth={2.5} style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }} />
                    {language === "pt" ? "Falar com especialista" : language === "en" ? "Talk to a specialist" : "Parler a un specialiste"}
                  </Link>
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
              onClick={() =>
                trackCtaClick({
                  cta_name: "desktop_dock_open_app",
                  cta_target: "app",
                  page_section: "dock",
                })
              }
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

            <Link
              href="/documentacao"
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
          const layout = WINDOW_LAYOUT[key]
          const offset = windowOffsets[key]
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
                transform: `translate(-50%, 0) translate(${offset.x}px, ${offset.y}px)`,
              }}
              className="pointer-events-auto hidden rounded-xl border border-slate-200/80 bg-white/95 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.25),0_10px_30px_-15px_rgba(0,0,0,0.15)] backdrop-blur-2xl transition-all animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300 md:absolute md:block overflow-hidden"
              onMouseDown={() => openWindow(key)}
            >
              {/* Window Header */}
              <div
                className="flex cursor-grab select-none items-center justify-between border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white/80 px-4 py-2.5 active:cursor-grabbing"
                onMouseDown={(event) => handleWindowHeaderMouseDown(key, event)}
              >
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
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        if (typeof window !== "undefined") {
                          window.open(config.action.href, config.action.href.startsWith("http") ? "_blank" : "_self")
                        }
                      }}
                      className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#28c840] to-[#1aab2c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:scale-110"
                      aria-label="Open action"
                      title="Open action"
                    >
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[6px] text-[#003d00]">⤢</span>
                    </button>
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
      <Footer />
      </main>
    </div>
  )
}
