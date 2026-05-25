"use client";

import dynamic from "next/dynamic";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { cn } from "@/lib/utils";
import { trackCtaClick } from "@/lib/analytics";
import { MacOSFolderIcon } from "@/components/macos-folder-icon";
import { DraggableFolder } from "@/components/draggable-folder";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { buildWhatsAppUrl, getCalendlyUrl } from "@/lib/contact";

const HeroVideoModal = dynamic(
  () =>
    import("@/components/hero-video-modal").then((mod) => mod.HeroVideoModal),
  { ssr: false }
);

type StageKey = "startup" | "growth" | "scale";
type WindowKey = "inventory" | "analytics" | "qr" | "support";

const WINDOW_LAYOUT: Record<
  WindowKey,
  { top: string; left: string; width: string }
> = {
  inventory: { top: "15%", left: "50%", width: "420px" },
  analytics: { top: "15%", left: "50%", width: "430px" },
  qr: { top: "15%", left: "50%", width: "380px" },
  support: { top: "15%", left: "50%", width: "360px" },
};

export function DesktopLanding() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [activeStage, setActiveStage] = useState<StageKey>("growth");
  const [openWindows, setOpenWindows] = useState<WindowKey[]>([]);
  const [windowOffsets, setWindowOffsets] = useState<
    Record<WindowKey, { x: number; y: number }>
  >({
    inventory: { x: 0, y: 0 },
    analytics: { x: 0, y: 0 },
    qr: { x: 0, y: 0 },
    support: { x: 0, y: 0 },
  });
  const [draggingWindowKey, setDraggingWindowKey] = useState<WindowKey | null>(
    null
  );
  const [windowDragStart, setWindowDragStart] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [mainBoxPosition, setMainBoxPosition] = useState({ x: 0, y: 0 });
  const [isDraggingMainBox, setIsDraggingMainBox] = useState(false);
  const [mainBoxDragStart, setMainBoxDragStart] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideoModal, setShouldLoadVideoModal] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [sectorIndex, setSectorIndex] = useState(0);
  const [usePainCta, setUsePainCta] = useState(false);
  const demoVideoUrl = "https://www.youtube.com/watch?v=fD4amz78t8c";

  // Handle main box dragging
  const handleMainBoxMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Only allow dragging from the header area
      const target = e.target as HTMLElement;
      if (!target.closest(".main-box-header")) return;

      if (e.button !== 0) return;
      const rect = mainBoxRef.current?.getBoundingClientRect();
      if (rect) {
        setMainBoxDragStart({
          x: e.clientX,
          y: e.clientY,
        });
      }
    },
    []
  );

  const handleMainBoxMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!mainBoxDragStart) return;

      const deltaX = e.clientX - mainBoxDragStart.x;
      const deltaY = e.clientY - mainBoxDragStart.y;

      const threshold = 5;
      const hasMoved =
        Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold;

      if (!isDraggingMainBox && hasMoved) {
        setIsDraggingMainBox(true);
        e.preventDefault();
      }

      if (isDraggingMainBox || hasMoved) {
        setMainBoxPosition((prev) => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }));

        setMainBoxDragStart({
          x: e.clientX,
          y: e.clientY,
        });
      }
    },
    [mainBoxDragStart, isDraggingMainBox]
  );

  const handleMainBoxMouseUp = useCallback(() => {
    setIsDraggingMainBox(false);
    setMainBoxDragStart(null);
  }, []);

  useEffect(() => {
    if (mainBoxDragStart !== null) {
      const handleGlobalMouseMove = (e: MouseEvent) =>
        handleMainBoxMouseMove(e);
      const handleGlobalMouseUp = () => handleMainBoxMouseUp();

      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove);
        window.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [mainBoxDragStart, handleMainBoxMouseMove, handleMainBoxMouseUp]);

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
        spotlightCopy:
          "Tenha indicadores críticos do estoque em um único painel.",
        uptime: "Disponibilidade",
        support: "Suporte",
        customersLove: "Empresas que aceleram com Purple Stock",
        testimonial:
          "“Com Purple Stock, nosso controle de estoque ficou padronizado e rastreável.”",
        testimonialCompany: "Purchase Store",
        stageTag: "Começa com",
        stageHighlight: "Purple Stock",
        install: "Instalar com IA",
        installHint:
          "Conecte seus dados via API e tenha automações em minutos.",
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
        spotlightCopy:
          "Keep every stock KPI visible in one adaptive dashboard.",
        uptime: "Uptime",
        support: "Support",
        customersLove: "Companies scaling with Purple Stock",
        testimonial:
          "“Purple Stock helped us standardize inventory routines without spreadsheets.”",
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
        spotlightCopy:
          "Gardez vos indicateurs d'inventaire visibles dans un seul tableau.",
        uptime: "Disponibilité",
        support: "Support",
        customersLove: "Entreprises qui accélèrent avec Purple Stock",
        testimonial:
          "« Purple Stock a aidé notre equipe a standardiser la gestion de stock sans tableurs. »",
        testimonialCompany: "Purchase Store",
        stageTag: "Commence avec",
        stageHighlight: "Purple Stock",
        install: "Connecter les integrations",
        installHint:
          "Connectez vos sources de donnees et centralisez les mises a jour.",
      },
    }[language];
  }, [language, t.hero.subtitle, t.hero.subtitleHighlight]);

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
    ];
  }, [language]);

  const openVideoModal = useCallback((ctaName: string) => {
    setShouldLoadVideoModal(true);
    setIsVideoModalOpen(true);
    trackCtaClick({
      cta_name: ctaName,
      cta_target: "video_modal",
      page_section: "hero_media",
    });
  }, []);

  const stageMap: Record<
    StageKey,
    Array<{
      title: string;
      description: string;
      icon: ComponentType<{ className?: string }>;
    }>
  > = {
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
  };

  const windowApps = useMemo(
    () => [
      {
        key: "inventory" as const,
        label:
          language === "pt"
            ? "Inventário"
            : language === "fr"
              ? "Inventaire"
              : "Inventory",
        icon: MacOSFolderIcon,
        folderColor: "blue" as const,
      },
      {
        key: "analytics" as const,
        label:
          language === "pt"
            ? "Relatórios"
            : language === "fr"
              ? "Rapports"
              : "Analytics",
        icon: MacOSFolderIcon,
        folderColor: "purple" as const,
      },
      {
        key: "qr" as const,
        label:
          language === "pt"
            ? "QR Codes"
            : language === "fr"
              ? "QR Codes"
              : "QR Codes",
        icon: MacOSFolderIcon,
        folderColor: "green" as const,
      },
      {
        key: "support" as const,
        label:
          language === "pt"
            ? "Suporte"
            : language === "fr"
              ? "Support"
              : "Support",
        icon: MacOSFolderIcon,
        folderColor: "yellow" as const,
      },
    ],
    [language]
  );

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
    [osText]
  );

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

  const closeMainPreviewWindows = useCallback(() => {
    setOpenWindows([]);
  }, []);

  const resetMainPreview = useCallback(() => {
    setMainBoxPosition({ x: 0, y: 0 });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const windowsConfig = useMemo(
    () =>
      ({
        inventory: {
          title:
            language === "pt"
              ? "Visão do Estoque"
              : language === "fr"
                ? "Vue de Stock"
                : "Inventory Overview",
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
            {
              label:
                language === "pt"
                  ? "Times"
                  : language === "fr"
                    ? "Equipes"
                    : "Teams",
              value: "Multi",
            },
            {
              label:
                language === "pt"
                  ? "Atualização"
                  : language === "fr"
                    ? "Mise a jour"
                    : "Updates",
              value: "Em tempo real",
            },
          ],
          icon: MacOSFolderIcon,
          folderColor: "blue" as const,
          action: {
            label:
              language === "pt"
                ? "Abrir painel completo"
                : language === "fr"
                  ? "Ouvrir le tableau"
                  : "Open full dashboard",
            href: "https://app.purplestock.com.br/",
          },
        },
        analytics: {
          title:
            language === "pt"
              ? "Relatórios de Performance"
              : language === "fr"
                ? "Rapports de Performance"
                : "Performance Analytics",
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
            {
              label:
                language === "pt"
                  ? "Movimentos"
                  : language === "fr"
                    ? "Mouvements"
                    : "Movements",
              value: "5 tipos",
            },
            {
              label:
                language === "pt"
                  ? "Histórico"
                  : language === "fr"
                    ? "Historique"
                    : "History",
              value: "Auditável",
            },
          ],
          icon: MacOSFolderIcon,
          folderColor: "purple" as const,
          action: {
            label:
              language === "pt"
                ? "Ver relatórios"
                : language === "fr"
                  ? "Voir les rapports"
                  : "See reports",
            href: "/features/analytics-reporting",
          },
        },
        qr: {
          title:
            language === "pt"
              ? "Gestão por QR Code"
              : language === "fr"
                ? "Gestion par QR Code"
                : "QR Code Management",
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
            {
              label:
                language === "pt"
                  ? "Operacao"
                  : language === "fr"
                    ? "Operation"
                    : "Operation",
              value: "Mobile",
            },
            {
              label:
                language === "pt"
                  ? "Leitura"
                  : language === "fr"
                    ? "Lecture"
                    : "Scanning",
              value: "QR Code",
            },
          ],
          icon: MacOSFolderIcon,
          folderColor: "green" as const,
          action: {
            label:
              language === "pt"
                ? "Configurar etiquetas"
                : language === "fr"
                  ? "Configurer les étiquettes"
                  : "Configure labels",
            href: "/features/qr-code-management",
          },
        },
        support: {
          title:
            language === "pt"
              ? "Central de Suporte"
              : language === "fr"
                ? "Centre de Support"
                : "Support Center",
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
            {
              label:
                language === "pt"
                  ? "Tempo médio de resposta"
                  : language === "fr"
                    ? "Temps de réponse"
                    : "Avg. response time",
              value: "3 min",
            },
            {
              label:
                language === "pt"
                  ? "Satisfação"
                  : language === "fr"
                    ? "Satisfaction"
                    : "CSAT",
              value: "98%",
            },
          ],
          icon: MacOSFolderIcon,
          folderColor: "yellow" as const,
          action: {
            label:
              language === "pt"
                ? "Falar com humano"
                : language === "fr"
                  ? "Parler à un humain"
                  : "Talk to a human",
            href: buildWhatsAppUrl(
              "Hello! I'd like to speak with someone about Purple Stock."
            ),
          },
        },
      }) satisfies Record<
        WindowKey,
        {
          title: string;
          subtitle: string;
          highlights: string[];
          stats: Array<{ label: string; value: string }>;
          icon: ComponentType<{ className?: string; color?: string }>;
          folderColor?:
            | "blue"
            | "purple"
            | "green"
            | "yellow"
            | "red"
            | "orange";
          action: { label: string; href: string };
        }
      >,
    [language]
  );

  const openWindow = useCallback((key: WindowKey) => {
    setOpenWindows((prev) => {
      if (prev.includes(key)) {
        return [...prev.filter((item) => item !== key), key];
      }
      return [...prev, key];
    });
  }, []);

  const closeWindow = useCallback((key: WindowKey) => {
    setOpenWindows((prev) => prev.filter((item) => item !== key));
  }, []);

  const isWindowOpen = useCallback(
    (key: WindowKey) => openWindows.includes(key),
    [openWindows]
  );

  const handleWindowHeaderMouseDown = useCallback(
    (key: WindowKey, event: ReactMouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      if (target.closest("button, a, input, textarea")) return;
      if (event.button !== 0) return;

      event.preventDefault();
      openWindow(key);
      setDraggingWindowKey(key);
      setWindowDragStart({
        x: event.clientX,
        y: event.clientY,
      });
    },
    [openWindow]
  );

  const handleWindowDragMove = useCallback(
    (event: MouseEvent) => {
      if (!draggingWindowKey || !windowDragStart) return;

      const deltaX = event.clientX - windowDragStart.x;
      const deltaY = event.clientY - windowDragStart.y;

      const layout = WINDOW_LAYOUT[draggingWindowKey];
      const windowWidth = Number.parseInt(layout.width, 10);
      const baseLeft = layout.left.endsWith("%")
        ? (Number.parseFloat(layout.left) / 100) * window.innerWidth
        : Number.parseFloat(layout.left);
      const baseTop = layout.top.endsWith("%")
        ? (Number.parseFloat(layout.top) / 100) * window.innerHeight
        : Number.parseFloat(layout.top);

      const minLeft = 24;
      const maxLeft = window.innerWidth - 24;
      const minTop = 12;
      const maxTop = window.innerHeight - 56;

      setWindowOffsets((prev) => ({
        ...prev,
        [draggingWindowKey]: (() => {
          const nextX = prev[draggingWindowKey].x + deltaX;
          const nextY = prev[draggingWindowKey].y + deltaY;

          const nextLeft = baseLeft - windowWidth / 2 + nextX;
          const nextTop = baseTop + nextY;

          const clampedLeft = Math.min(Math.max(nextLeft, minLeft), maxLeft);
          const clampedTop = Math.min(Math.max(nextTop, minTop), maxTop);

          return {
            x: clampedLeft - (baseLeft - windowWidth / 2),
            y: clampedTop - baseTop,
          };
        })(),
      }));

      setWindowDragStart({
        x: event.clientX,
        y: event.clientY,
      });
    },
    [draggingWindowKey, windowDragStart]
  );

  const handleWindowDragEnd = useCallback(() => {
    setDraggingWindowKey(null);
    setWindowDragStart(null);
  }, []);

  useEffect(() => {
    if (!draggingWindowKey || !windowDragStart) return;

    window.addEventListener("mousemove", handleWindowDragMove);
    window.addEventListener("mouseup", handleWindowDragEnd);

    return () => {
      window.removeEventListener("mousemove", handleWindowDragMove);
      window.removeEventListener("mouseup", handleWindowDragEnd);
    };
  }, [
    draggingWindowKey,
    windowDragStart,
    handleWindowDragMove,
    handleWindowDragEnd,
  ]);

  const testimonial = translations[language].testimonials?.[0];

  const playbookContent = useMemo(
    () =>
      ({
        pt: {
          uvpBadge:
            "Para empresas que cansaram de passar aperto entre planilha, sistema e prateleira.",
          uvpText:
            "Purple Stock devolve controle para a operação. Entrada, saída, transferência, ajuste e inventário ficam no mesmo fluxo rastreável, para o time agir rápido, parar de improvisar e voltar a responder com segurança quando alguém pergunta onde está o item, quanto tem e quem mexeu por último.",
          howItWorksTitle:
            "Como funciona o sistema de controle de estoque na prática",
          howItWorksSubtitle:
            "Do cadastro ao relatório, em um fluxo único e rastreável.",
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
              detail:
                "Quem movimentou, quando movimentou e em qual local a operação aconteceu sem depender de memória, print ou planilha paralela.",
            },
            {
              metric: "Histórico único de movimentações",
              detail:
                "Entrada, saída, transferência, ajuste e contagem no mesmo fluxo operacional, sem cada pessoa controlar de um jeito.",
            },
            {
              metric: "Conferência por localização",
              detail:
                "Consulta de saldo e inventário por local para achar item rápido e evitar venda perdida por saldo que não bate.",
            },
          ],
          compareTitle: "Purple Stock vs ERP tradicional",
          compareSubtitle:
            "Quando o problema é caos operacional no estoque, velocidade de implantação e clareza no uso pesam mais que escopo gigante.",
          compareRows: [
            {
              label: "Implantação",
              purple: "Começa leve, entra rápido na rotina",
              erp: "Projeto mais pesado e demorado em média",
            },
            {
              label: "Curva de uso para operação",
              purple: "Fluxo direto para quem opera",
              erp: "Treinamento mais extenso em média",
            },
            {
              label: "Operação no celular + QR",
              purple: "Nativo no fluxo diário",
              erp: "Geralmente depende de módulo extra ou adaptação",
            },
            {
              label: "Foco inicial",
              purple: "Acabar com descontrole, retrabalho e saldo duvidoso",
              erp: "Suite ampla com escopo maior",
            },
          ],
          objectionsTitle: "Perguntas frequentes: dúvidas antes de contratar",
          objections: [
            {
              q: "Dá para começar sem migração complexa?",
              a: "Sim. Você pode começar pelo cadastro essencial e colocar a operação para rodar por etapas, sem travar o time nem entrar em projeto grande logo de cara.",
            },
            {
              q: "Meus dados ficam seguros e separados por equipe?",
              a: "Sim. O sistema opera por times com contexto ativo e permissões por usuário, para cada operação ficar separada e auditável.",
            },
            {
              q: "Funciona no celular no dia a dia da operação?",
              a: "Sim. Os fluxos de entrada, saída, transferência e contagem foram pensados para o dia a dia da operação, direto no celular.",
            },
            {
              q: "Posso testar sem ficar preso?",
              a: "Sim. O teste usa cartão de crédito, mas você pode cancelar quando quiser dentro do período de avaliação se não sentir a operação mais na mão.",
            },
            {
              q: "Quanto custa para começar?",
              a: "O plano de entrada começa em R$29,90/mês na oferta atual, para você validar rápido antes de assumir um projeto caro e demorado.",
            },
          ],
        },
        en: {
          uvpBadge:
            "For SMB teams that cannot lose sales due to stock mistakes",
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
              detail:
                "Who moved stock, when it happened, and where it happened.",
            },
            {
              metric: "Single movement history",
              detail:
                "Inbound, outbound, transfer, adjustment, and count in one operational flow.",
            },
            {
              metric: "Location-based checks",
              detail:
                "Review stock and inventory by location without manual spreadsheet consolidation.",
            },
          ],
          compareTitle: "Purple Stock vs traditional ERP",
          compareSubtitle:
            "For fast inventory operations, implementation model matters.",
          compareRows: [
            {
              label: "Implementation",
              purple: "Light, progressive setup",
              erp: "Usually a longer rollout project",
            },
            {
              label: "Operational learning curve",
              purple: "Direct warehouse workflows",
              erp: "Usually longer training period",
            },
            {
              label: "Mobile + QR daily usage",
              purple: "Native in core flow",
              erp: "Often depends on add-on modules",
            },
            {
              label: "Initial focus",
              purple: "Inventory control and traceability",
              erp: "Broader suite with larger scope",
            },
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
          uvpBadge:
            "Pour les PME qui ne peuvent pas perdre des ventes a cause du stock",
          uvpText:
            "Purple Stock regroupe entrees, sorties, transferts, ajustements et inventaires dans un flux tracable. Les equipes quittent les tableurs et standardisent l'operation en quelques jours.",
          howItWorksTitle: "Comment fonctionne le systeme de gestion de stock",
          howItWorksSubtitle:
            "Du parametrage au rapport dans un flux unique et tracable.",
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
              detail:
                "Entree, sortie, transfert, ajustement et comptage dans le meme flux operationnel.",
            },
            {
              metric: "Controle par emplacement",
              detail:
                "Lecture de stock et inventaire par emplacement sans consolidation manuelle des tableurs.",
            },
          ],
          compareTitle: "Purple Stock vs ERP traditionnel",
          compareSubtitle:
            "Pour une operation stock rapide, le modele de deploiement compte.",
          compareRows: [
            {
              label: "Deploiement",
              purple: "Setup leger et progressif",
              erp: "Projet de deploiement plus long en moyenne",
            },
            {
              label: "Courbe d'apprentissage",
              purple: "Flux direct pour magasin",
              erp: "Formation plus longue en moyenne",
            },
            {
              label: "Mobile + QR au quotidien",
              purple: "Natif dans le flux principal",
              erp: "Souvent via module additionnel",
            },
            {
              label: "Focus initial",
              purple: "Controle stock et tracabilite",
              erp: "Suite large avec scope plus vaste",
            },
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
    [language]
  );

  const heroSignalCards = useMemo(
    () =>
      ({
        pt: [
          {
            title: "Sem saldo duvidoso",
            body: "Seu time responde com histórico, localização e saldo confiável antes que a operação vire discussão.",
            icon: ShieldCheck,
            tone: "border-emerald-200 bg-emerald-50/80 text-emerald-700 shadow-emerald-100/80",
          },
          {
            title: "Sem caça ao culpado",
            body: "Entrada, saída, ajuste e transferência ficam no mesmo fluxo para parar o jogo de empurra.",
            icon: UsersRound,
            tone: "border-rose-200 bg-rose-50/80 text-rose-700 shadow-rose-100/80",
          },
          {
            title: "Sem planilha paralela",
            body: "QR Code no celular e rastreabilidade no dia a dia para ninguém depender de memória ou favor.",
            icon: ScanLine,
            tone: "border-violet-200 bg-violet-50/80 text-violet-700 shadow-violet-100/80",
          },
        ],
        en: [
          {
            title: "No unreliable stock balance",
            body: "Teams answer with history, location, and trusted balance before operations turn into blame.",
            icon: ShieldCheck,
            tone: "border-emerald-200 bg-emerald-50/80 text-emerald-700 shadow-emerald-100/80",
          },
          {
            title: "No blame game",
            body: "Inbound, outbound, adjustment, and transfer stay in one operational flow.",
            icon: UsersRound,
            tone: "border-rose-200 bg-rose-50/80 text-rose-700 shadow-rose-100/80",
          },
          {
            title: "No parallel spreadsheets",
            body: "QR code on mobile and traceability in daily routines instead of memory-based workarounds.",
            icon: ScanLine,
            tone: "border-violet-200 bg-violet-50/80 text-violet-700 shadow-violet-100/80",
          },
        ],
        fr: [
          {
            title: "Sans solde douteux",
            body: "L'equipe repond avec historique, emplacement et solde fiable avant que l'operation ne tourne au conflit.",
            icon: ShieldCheck,
            tone: "border-emerald-200 bg-emerald-50/80 text-emerald-700 shadow-emerald-100/80",
          },
          {
            title: "Sans jeu de faute",
            body: "Entree, sortie, ajustement et transfert restent dans un seul flux operationnel.",
            icon: UsersRound,
            tone: "border-rose-200 bg-rose-50/80 text-rose-700 shadow-rose-100/80",
          },
          {
            title: "Sans tableur parallele",
            body: "QR code sur mobile et tracabilite quotidienne sans dependance a la memoire.",
            icon: ScanLine,
            tone: "border-violet-200 bg-violet-50/80 text-violet-700 shadow-violet-100/80",
          },
        ],
      })[language],
    [language]
  );

  const rotatingSectors = useMemo(
    () =>
      ({
        pt: [
          "almoxarifado",
          "eventos",
          "varejo",
          "indústria",
          "escolas",
          "clínicas",
        ],
        en: [
          "warehouses",
          "events",
          "retail",
          "manufacturing",
          "schools",
          "clinics",
        ],
        fr: [
          "entrepôts",
          "événements",
          "commerce",
          "industrie",
          "écoles",
          "cliniques",
        ],
      })[language],
    [language]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mode = new URLSearchParams(window.location.search).get("cta");
    setUsePainCta(mode === "pain");
  }, []);

  const primaryHeroCta = useMemo(() => {
    if (language === "pt") {
      return usePainCta
        ? "Quero parar de perder vendas agora"
        : "Quero colocar meu estoque na mão de novo";
    }
    if (language === "fr") {
      return usePainCta
        ? "Je veux arreter de perdre des ventes maintenant"
        : "Commencer l'essai gratuit de 7 jours";
    }
    return usePainCta
      ? "I want to stop losing sales now"
      : "Start 7-day free trial";
  }, [language, usePainCta]);

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
            result:
              '"Antes era difícil rastrear movimentação. Hoje entrada, saída e transferência ficam no mesmo histórico."',
          },
          {
            name: "St. Nicholas School",
            logo: "/images/logos/st-nicholas-school.webp",
            width: 240,
            height: 55,
            maxWidth: "max-w-[240px]",
            result:
              '"A equipe passou a conferir estoque por localização sem perder tempo procurando item."',
          },
        ],
        en: [
          {
            name: "VHS",
            logo: "/images/logos/vhs.jpg",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result:
              '"Inbound, outbound, and transfer are now tracked in one single movement history."',
          },
          {
            name: "St. Nicholas School",
            logo: "/images/logos/st-nicholas-school.webp",
            width: 240,
            height: 55,
            maxWidth: "max-w-[240px]",
            result:
              '"The team now runs stock checks by location without wasting time searching items."',
          },
        ],
        fr: [
          {
            name: "VHS",
            logo: "/images/logos/vhs.jpg",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result:
              '"Entree, sortie et transfert sont maintenant suivis dans un historique unique."',
          },
          {
            name: "St. Nicholas School",
            logo: "/images/logos/st-nicholas-school.webp",
            width: 240,
            height: 55,
            maxWidth: "max-w-[240px]",
            result:
              '"L\'equipe controle le stock par emplacement sans perdre du temps a chercher les articles."',
          },
        ],
      })[language],
    [language]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSectorIndex((prev) => (prev + 1) % rotatingSectors.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [rotatingSectors.length]);

  useEffect(() => {
    setSectorIndex(0);
  }, [language]);

  const rotatingSectorLabel = useMemo(() => {
    const sector = rotatingSectors[sectorIndex] ?? "";
    return sector.charAt(0).toUpperCase() + sector.slice(1);
  }, [rotatingSectors, sectorIndex]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fcfcfd_0%,#f8f4ff_48%,#f6f1ea_100%)] text-slate-900">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[120] -translate-y-16 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
      >
        {language === "pt"
          ? "Pular para o conteúdo"
          : language === "en"
            ? "Skip to content"
            : "Aller au contenu"}
      </a>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(circle at center, black 0%, rgba(0,0,0,0.78) 45%, transparent 78%)",
          }}
        />
        <div className="absolute left-[-12%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute left-[8%] top-[14%] h-64 w-64 rounded-full bg-cyan-100/30 blur-3xl" />
        <div className="absolute right-[10%] top-[28%] h-72 w-72 rounded-full bg-violet-100/35 blur-3xl" />
      </div>
      <Navbar />
      <main id="main-content" className="relative">
        <div className="relative mx-auto min-h-screen w-full max-w-[1180px] px-4 pb-8 pt-16 md:px-8 md:pt-16">
          <div className="pointer-events-none absolute inset-x-0 top-20 hidden h-[620px] 2xl:block">
            <div className="pointer-events-auto absolute -left-20 top-10 h-full w-24">
              {windowApps.slice(0, 2).map((app, index) => (
                <DraggableFolder
                  key={app.key}
                  label={app.label}
                  folderColor={app.folderColor}
                  icon={app.icon}
                  storageKey={`hero-${app.key}`}
                  initialPosition={{ x: 0, y: 18 + index * 136 }}
                  isSelected={selectedFolder === app.key}
                  onClick={() => setSelectedFolder(app.key)}
                  onDoubleClick={() => {
                    setSelectedFolder(app.key);
                    openWindow(app.key);
                  }}
                />
              ))}
            </div>
            <div className="pointer-events-auto absolute -right-20 top-10 h-full w-24">
              {windowApps.slice(2, 4).map((app, index) => (
                <DraggableFolder
                  key={app.key}
                  label={app.label}
                  folderColor={app.folderColor}
                  icon={app.icon}
                  storageKey={`hero-${app.key}`}
                  initialPosition={{ x: 0, y: 18 + index * 136 }}
                  isSelected={selectedFolder === app.key}
                  onClick={() => setSelectedFolder(app.key)}
                  onDoubleClick={() => {
                    setSelectedFolder(app.key);
                    openWindow(app.key);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="relative z-0 flex flex-1 flex-col gap-8">
            <div
              ref={mainBoxRef}
              className="relative z-0 flex min-h-[calc(100vh-7.5rem)] flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(252,252,253,0.96)_0%,rgba(247,243,255,0.88)_100%)] shadow-[0_30px_80px_-42px_rgba(30,27,75,0.22)] backdrop-blur-sm transition-transform"
              style={{
                transform: `translate(${mainBoxPosition.x}px, ${mainBoxPosition.y}px)`,
                userSelect: "none",
                WebkitUserSelect: "none",
              }}
              onMouseDown={handleMainBoxMouseDown}
              onDragStart={(e) => e.preventDefault()}
            >
              <div className="main-box-header relative flex-shrink-0 items-center justify-between border-b border-slate-200/80 bg-[linear-gradient(180deg,rgba(249,250,251,0.96)_0%,rgba(241,245,249,0.86)_100%)] px-4 py-2.5 sm:px-5">
                <div className="flex items-center gap-[6px]" aria-hidden="true">
                  <span className="h-[12px] w-[12px] rounded-full bg-[#e86a63] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                  <span className="h-[12px] w-[12px] rounded-full bg-[#e9b54c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                  <span className="h-[12px] w-[12px] rounded-full bg-[#4ab96a] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                </div>

                {/* Center Title */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <Link
                    href="/"
                    className="flex h-4 w-4 items-center justify-center rounded bg-purple-600"
                    aria-label="Go to homepage"
                  >
                    <Box className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                  </Link>
                  <span className="text-[12px] font-semibold tracking-[0.08em] text-slate-700">
                    Purple Stock
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white/90 px-2 py-0.5 text-[10px] font-medium tracking-[0.06em] text-slate-500">
                    estoque
                  </span>
                </div>

                <div className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[10px] font-medium tracking-[0.06em] text-slate-500">
                  {language === "pt"
                    ? "operação"
                    : language === "fr"
                      ? "operation"
                      : "operations"}
                </div>
              </div>

              <div className="flex-1 space-y-8 overflow-visible px-4 py-4 sm:px-5 sm:py-6">
                {/* Top Section - Title and Description */}
                <div className="mb-10 space-y-5 text-center">
                  <div className="mx-auto inline-flex max-w-fit items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold tracking-[0.04em] text-violet-800">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-violet-600" />
                    {language === "pt"
                      ? "Controle falho de estoque vira custo operacional"
                      : language === "en"
                        ? "Weak stock control turns into operational cost"
                        : "Un controle de stock fragile devient un cout operationnel"}
                  </div>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                    {language === "pt" ? (
                      <>
                        {
                          "Quando o saldo vira discussão, sua operação perde venda, tempo e autoridade"
                        }
                      </>
                    ) : language === "en" ? (
                      <>
                        {
                          "When stock becomes an argument, operations lose sales, time, and credibility"
                        }
                      </>
                    ) : (
                      <>
                        {
                          "Quand le stock devient une discussion, l'operation perd ventes, temps et credibilite"
                        }
                      </>
                    )}
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
                    {language === "pt"
                      ? "Purple Stock coloca entrada, saída, transferência, ajuste e inventário no mesmo fluxo rastreável. Seu time volta a responder no celular, com QR Code, histórico claro e confiança para agir rápido sem improviso."
                      : language === "en"
                        ? "Purple Stock keeps inbound, outbound, transfer, adjustment, and inventory count in one traceable flow. Your team answers on mobile with QR code, clear history, and enough confidence to act fast."
                        : "Purple Stock regroupe entree, sortie, transfert, ajustement et inventaire dans un seul flux tracable. Votre equipe repond sur mobile avec QR code, historique clair et assez de confiance pour agir vite."}
                  </p>
                  <p className="mx-auto max-w-xl text-base leading-7 text-slate-700 [font-family:var(--font-editorial)]">
                    {playbookContent.uvpText}
                  </p>
                  {/* CTA Buttons */}
                  <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-lg bg-violet-700 px-8 py-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-violet-800"
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
                      className="border-slate-300 bg-white px-8 py-6 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
                    >
                      <Link
                        href={demoVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackCtaClick({
                            cta_name: "desktop_video_secondary",
                            cta_target: "video",
                            page_section: "hero_cta",
                            cta_variant: "secondary",
                          })
                        }
                      >
                        {language === "pt"
                          ? "Ver demonstração"
                          : language === "en"
                            ? "Watch demo"
                            : "Voir la demonstration"}
                      </Link>
                    </Button>
                  </div>
                  <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600">
                    {language === "pt"
                      ? "A partir de R$29,90/mês. Teste por 7 dias com cancelamento livre e uso no celular com QR Code desde o primeiro fluxo."
                      : language === "en"
                        ? "Starting at R$29.90/month. Run a 7-day trial with flexible cancellation and mobile QR code use from day one."
                        : "A partir de R$29,90/mois. Testez pendant 7 jours avec annulation flexible et usage mobile avec QR code des le premier flux."}
                  </p>
                </div>

                {/* Main Content Area - App Screenshot */}
                <div className="relative py-6">
                  <div className="relative mx-auto max-w-6xl">
                    <div className="pointer-events-none absolute inset-x-12 top-10 h-32 rounded-full bg-violet-200/30 blur-3xl" />
                    <div className="relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,250,252,0.9)_100%)] shadow-[0_24px_70px_-38px_rgba(15,23,42,0.24)]">
                      <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3">
                        <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.05em] text-slate-500">
                          <span className="inline-flex h-2 w-2 rounded-full bg-violet-500" />
                          {language === "pt"
                            ? "workspace operacional"
                            : language === "en"
                              ? "operations workspace"
                              : "espace operationnel"}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500">
                          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700">
                            {language === "pt"
                              ? "rastreável"
                              : language === "en"
                                ? "traceable"
                                : "tracable"}
                          </span>
                          <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
                            QR code
                          </span>
                        </div>
                      </div>
                      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_240px]">
                        <div className="relative h-auto w-full border-b border-slate-200/80 lg:border-b-0 lg:border-r">
                          <Image
                            src="/images/app-items-list-1200.webp"
                            alt={
                              language === "pt"
                                ? "Interface do Purple Stock - Lista de Itens"
                                : language === "en"
                                  ? "Purple Stock Interface - Items List"
                                  : "Interface Purple Stock - Liste des Articles"
                            }
                            width={1200}
                            height={674}
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
                            className="h-auto w-full object-contain"
                            priority
                          />
                          {shouldLoadVideoModal ? (
                            <HeroVideoModal
                              language={language}
                              onOpen={openVideoModal}
                              open={isVideoModalOpen}
                              onOpenChange={setIsVideoModalOpen}
                            />
                          ) : null}
                        </div>
                        <aside className="flex flex-col justify-between gap-6 bg-[linear-gradient(180deg,rgba(248,250,252,0.92)_0%,rgba(255,255,255,0.9)_100%)] px-4 py-4">
                          <div className="space-y-4">
                            <p className="text-[11px] font-medium tracking-[0.06em] text-slate-500">
                              {language === "pt"
                                ? "fluxo ativo"
                                : language === "en"
                                  ? "active flow"
                                  : "flux actif"}
                            </p>
                            <div className="space-y-3 text-sm text-slate-700">
                              <p className="border-b border-slate-200 pb-3">
                                {language === "pt"
                                  ? "Entrada, saída, ajuste e contagem no mesmo padrão de uso."
                                  : language === "en"
                                    ? "Inbound, outbound, adjustment, and count in one usage pattern."
                                    : "Entree, sortie, ajustement et comptage dans le meme schema."}
                              </p>
                              <p className="border-b border-slate-200 pb-3">
                                {language === "pt"
                                  ? "Histórico por item e por local, sem memória paralela do time."
                                  : language === "en"
                                    ? "Item and location history, without team memory gaps."
                                    : "Historique par article et emplacement, sans memoire parallele."}
                              </p>
                              <p>
                                {language === "pt"
                                  ? "Operação responde rápido porque o contexto já está na tela."
                                  : language === "en"
                                    ? "Operations move faster because context is already on screen."
                                    : "L'equipe agit plus vite parce que le contexte est deja a l'ecran."}
                              </p>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3">
                            <p className="text-[11px] font-medium tracking-[0.06em] text-slate-500">
                              {language === "pt"
                                ? "tempo para rotina"
                                : language === "en"
                                  ? "time to routine"
                                  : "temps jusqu'a la routine"}
                            </p>
                            <p className="mt-2 text-2xl font-bold text-slate-900">
                              7 dias
                            </p>
                            <p className="mt-1 text-sm text-slate-600">
                              {language === "pt"
                                ? "para validar no celular com o fluxo real"
                                : language === "en"
                                  ? "to validate on mobile with the real workflow"
                                  : "pour valider sur mobile avec le flux reel"}
                            </p>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-12 border-t border-b border-slate-200 py-8">
                  <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        {language === "pt"
                          ? "O que muda quando o estoque volta para a mão da operação"
                          : language === "en"
                            ? "What changes when stock control returns to the operations team"
                            : "Ce qui change quand le stock revient dans les mains de l'equipe"}
                      </h2>
                      <p className="mt-3 max-w-2xl text-slate-600">
                        {language === "pt"
                          ? "Saldo visível, movimentação padronizada e histórico auditável no mesmo fluxo, sem depender de planilhas paralelas ou memória da equipe."
                          : language === "en"
                            ? "Visible balance, standardized stock movements, and auditable history in the same flow without depending on spreadsheets or memory."
                            : "Solde visible, mouvements standardises et historique auditable dans le meme flux, sans dependre de tableurs ou de la memoire de l'equipe."}
                      </p>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="border-b border-slate-200 pb-3">
                        {language === "pt"
                          ? "Consulte saldo e localização de cada item em tempo real."
                          : language === "en"
                            ? "See item balance and location in real time."
                            : "Consultez le solde et l'emplacement de chaque article en temps reel."}
                      </li>
                      <li className="border-b border-slate-200 pb-3">
                        {language === "pt"
                          ? "Registre entrada, saída, transferência, ajuste e contagem no mesmo padrão."
                          : language === "en"
                            ? "Record inbound, outbound, transfer, adjustment, and counts in the same operating pattern."
                            : "Enregistrez entree, sortie, transfert, ajustement et comptage dans le meme schema."}
                      </li>
                      <li>
                        {language === "pt"
                          ? "Acompanhe perdas, reposição e desempenho por time sem consolidação manual."
                          : language === "en"
                            ? "Track losses, replenishment, and team performance without manual consolidation."
                            : "Suivez pertes, reassort et performance de l'equipe sans consolidation manuelle."}
                      </li>
                    </ul>
                  </div>
                </div>

                <section className="mb-12 border-t border-b border-slate-200 py-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                      {playbookContent.howItWorksTitle}
                    </h2>
                    <p className="mt-2 text-slate-600">
                      {playbookContent.howItWorksSubtitle}
                    </p>
                  </div>
                  <ol className="space-y-4">
                    {playbookContent.steps.map((step) => (
                      <li
                        key={step.title}
                        className="grid gap-2 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[260px_minmax(0,1fr)] md:gap-6"
                      >
                        <h3 className="font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                          {step.body}
                        </p>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="mb-12 border-t border-b border-slate-200 py-8">
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {playbookContent.proofTitle}
                  </h2>
                  <ul className="mt-5 space-y-4">
                    {playbookContent.proofItems.map((item) => (
                      <li
                        key={item.metric}
                        className="grid gap-2 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[260px_minmax(0,1fr)] md:gap-6"
                      >
                        <p className="text-base font-bold text-slate-900">
                          {item.metric}
                        </p>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                          {item.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mb-12 border-t border-b border-slate-200 py-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-violet-700">
                        {language === "pt"
                          ? "Próximo passo"
                          : language === "en"
                            ? "Next step"
                            : "Prochaine etape"}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                        {language === "pt"
                          ? "Se o problema hoje é descontrole no estoque, o teste precisa começar na rotina"
                          : language === "en"
                            ? "If the problem is stock chaos today, the trial needs to start inside the real routine"
                            : "Si le probleme est le chaos du stock, l'essai doit commencer dans la routine reelle"}
                      </h2>
                      <p className="mt-3 max-w-2xl text-slate-600">
                        {language === "pt"
                          ? "Veja a demonstração, valide com sua equipe e entenda em poucos dias se o Purple Stock devolve visibilidade e resposta para a operação."
                          : language === "en"
                            ? "Watch the demo, validate it with your team, and confirm in a few days whether Purple Stock restores visibility and response speed."
                            : "Voyez la demonstration, validez avec votre equipe et confirmez en quelques jours si Purple Stock redonne visibilite et vitesse d'action."}
                      </p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                    >
                      <Link href="/documentacao">
                        {language === "pt"
                          ? "Abrir documentação"
                          : language === "en"
                            ? "Open documentation"
                            : "Ouvrir la documentation"}
                      </Link>
                    </Button>
                  </div>
                </section>

                <section className="mb-12 border-t border-b border-slate-200 py-8">
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {playbookContent.compareTitle}
                  </h2>
                  <p className="mt-2 max-w-2xl text-slate-600">
                    {playbookContent.compareSubtitle}
                  </p>
                  <div className="mt-5 overflow-hidden border border-slate-200">
                    <table className="min-w-full bg-white text-left text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-slate-600">
                            {language === "pt"
                              ? "Criterio"
                              : language === "en"
                                ? "Criteria"
                                : "Critere"}
                          </th>
                          <th className="px-4 py-3 font-semibold text-purple-700">
                            Purple Stock
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-600">
                            {language === "pt"
                              ? "ERP tradicional"
                              : language === "en"
                                ? "Traditional ERP"
                                : "ERP traditionnel"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {playbookContent.compareRows.map((row) => (
                          <tr
                            key={row.label}
                            className="border-t border-slate-100"
                          >
                            <td className="px-4 py-3 font-medium text-slate-900">
                              {row.label}
                            </td>
                            <td className="px-4 py-3 text-slate-700">
                              {row.purple}
                            </td>
                            <td className="px-4 py-3 text-slate-600">
                              {row.erp}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mb-12 border-t border-b border-slate-200 py-8">
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {playbookContent.objectionsTitle}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {playbookContent.objections.map((item) => (
                      <div
                        key={item.q}
                        className="grid gap-2 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[260px_minmax(0,1fr)] md:gap-6"
                      >
                        <p className="font-semibold text-slate-900">{item.q}</p>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-lg bg-violet-700 px-8 py-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-violet-800"
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
                      <Sparkles
                        className="w-5 h-5 mr-2"
                        strokeWidth={2.5}
                        style={{
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      />
                      {language === "pt"
                        ? "Começar teste grátis de 7 dias"
                        : language === "en"
                          ? "Start 7-day free trial"
                          : "Commencer l'essai gratuit de 7 jours"}
                      <ArrowRight
                        className="w-5 h-5 ml-2"
                        strokeWidth={2.5}
                        style={{
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-lg border-slate-300 bg-white px-8 py-6 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
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
                      <MessageCircle
                        className="w-5 h-5 mr-2"
                        strokeWidth={2.5}
                        style={{
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      />
                      {language === "pt"
                        ? "Falar com especialista"
                        : language === "en"
                          ? "Talk to a specialist"
                          : "Parler a un specialiste"}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {openWindows.map((key, index) => {
            const config = windowsConfig[key];
            const Icon = config.icon;
            const layout = WINDOW_LAYOUT[key];
            const offset = windowOffsets[key];
            const colorMap = {
              blue: "from-blue-500 to-blue-600",
              purple: "from-violet-500 to-violet-600",
              green: "from-emerald-500 to-emerald-600",
              yellow: "from-amber-500 to-amber-600",
              red: "from-red-500 to-red-600",
              orange: "from-orange-500 to-orange-600",
            };
            const iconGradient = colorMap[config.folderColor || "blue"];
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
                  onMouseDown={(event) =>
                    handleWindowHeaderMouseDown(key, event)
                  }
                >
                  <div className="flex items-center gap-3">
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-[6px] group">
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          closeWindow(key);
                        }}
                        className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ff6058] to-[#e4473c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:scale-110"
                        aria-label="Close window"
                      >
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d0000] font-bold">
                          ×
                        </span>
                      </button>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          closeWindow(key);
                        }}
                        className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ffbd2e] to-[#e5a319] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:scale-110"
                        aria-label="Minimize window"
                      >
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d3800] font-bold">
                          −
                        </span>
                      </button>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          if (typeof window !== "undefined") {
                            window.open(
                              config.action.href,
                              config.action.href.startsWith("http")
                                ? "_blank"
                                : "_self"
                            );
                          }
                        }}
                        className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#28c840] to-[#1aab2c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:scale-110"
                        aria-label="Open action"
                        title="Open action"
                      >
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[6px] text-[#003d00]">
                          ⤢
                        </span>
                      </button>
                    </div>

                    {/* App Icon & Title */}
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-md bg-gradient-to-br flex items-center justify-center shadow-sm",
                          iconGradient
                        )}
                      >
                        {key === "inventory" && (
                          <Package
                            className="w-3 h-3 text-white"
                            strokeWidth={2.5}
                          />
                        )}
                        {key === "analytics" && (
                          <BarChart3
                            className="w-3 h-3 text-white"
                            strokeWidth={2.5}
                          />
                        )}
                        {key === "qr" && (
                          <ScanLine
                            className="w-3 h-3 text-white"
                            strokeWidth={2.5}
                          />
                        )}
                        {key === "support" && (
                          <MessageCircle
                            className="w-3 h-3 text-white"
                            strokeWidth={2.5}
                          />
                        )}
                      </div>
                      <span className="text-[13px] font-semibold text-slate-700">
                        {config.title}
                      </span>
                    </div>
                  </div>

                  {/* Live Badge */}
                  <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-medium text-emerald-600 uppercase tracking-wide">
                      {language === "pt"
                        ? "Ao vivo"
                        : language === "fr"
                          ? "En direct"
                          : "Live"}
                    </span>
                  </div>
                </div>

                {/* Window Content */}
                <div className="space-y-4 px-5 py-5">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {config.subtitle}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {config.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2
                            className="h-3 w-3 text-emerald-600"
                            strokeWidth={3}
                          />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 p-4 border border-slate-100">
                    {config.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl font-bold text-slate-800">
                          {stat.value}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                          {stat.label}
                        </p>
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
            );
          })}
        </div>
        <Footer />
      </main>
    </div>
  );
}
