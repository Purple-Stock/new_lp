"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Globe,
  MessageCircle,
  RefreshCw,
  ArrowRight,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import { trackCtaClick, trackSeoLandingView } from "@/lib/analytics";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getCalendlyUrl } from "@/lib/contact";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export function DesktopLanding() {
  const { language, setLanguage } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [usePainCta, setUsePainCta] = useState(false);

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
    () =>
      ({
        pt: {
          uvpBadge:
            "Para empresas que já cansaram de perder venda por falta de produto, erro de contagem ou estoque sumido no almoxarifado.",
          uvpText:
            "Purple Stock organiza entrada, saída, transferência, ajuste e inventário em um único fluxo rastreável, para qualquer pessoa do time saber o que tem, onde está e quem mexeu, sem virar um projeto gigante de sistema.",
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
                "Quem movimentou, quando movimentou e em qual local a operação aconteceu.",
            },
            {
              metric: "Histórico único de movimentações",
              detail:
                "Entrada, saída, transferência, ajuste e contagem no mesmo fluxo operacional.",
            },
            {
              metric: "Conferência por localização",
              detail:
                "Consulta de saldo e inventário por local sem consolidar planilhas manualmente.",
            },
          ],
          compareTitle: "Purple Stock vs ERP tradicional",
          compareSubtitle:
            "Quando o foco é operação de estoque rápida, o modelo de implantação faz diferença.",
          compareRows: [
            {
              label: "Implantação",
              purple: "Setup leve e progressivo",
              erp: "Projeto mais extenso em média",
            },
            {
              label: "Curva de uso para operação",
              purple: "Fluxo direto para almoxarifado",
              erp: "Treinamento mais extenso em média",
            },
            {
              label: "Operação no celular + QR",
              purple: "Nativo no fluxo diário",
              erp: "Geralmente depende de módulo extra",
            },
            {
              label: "Foco inicial",
              purple: "Controle de estoque e rastreabilidade",
              erp: "Suite ampla com escopo maior",
            },
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

  const [sectorIndex, setSectorIndex] = useState(0);

  useEffect(() => {
    if (rotatingSectors.length === 0) return;
    const id = window.setInterval(() => {
      setSectorIndex((index) => (index + 1) % rotatingSectors.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [rotatingSectors]);

  useEffect(() => {
    setSectorIndex(0);
  }, [language]);

  const rotatingSectorLabel = useMemo(() => {
    const sector = rotatingSectors[sectorIndex] ?? "";
    return sector.charAt(0).toUpperCase() + sector.slice(1);
  }, [rotatingSectors, sectorIndex]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mode = new URLSearchParams(window.location.search).get("cta");
    setUsePainCta(mode === "pain");
  }, []);

  const primaryHeroCta = useMemo(() => {
    if (language === "pt") {
      return usePainCta
        ? "Quero parar de perder vendas agora"
        : "Começar teste grátis de 7 dias";
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
          {
            name: "Da Rua",
            logo: "/images/logos/da-rua.png",
            width: 120,
            height: 40,
            maxWidth: "max-w-[120px]",
            result:
              '"Parou de existir planilha paralela para controle diário de estoque."',
          },
          {
            name: "DPS Brasil",
            logo: "/images/logos/dps-brasil-preto.png",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result:
              '"Hoje o time enxerga saldo e movimentações no mesmo painel operacional."',
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
          {
            name: "Da Rua",
            logo: "/images/logos/da-rua.png",
            width: 120,
            height: 40,
            maxWidth: "max-w-[120px]",
            result:
              '"Daily stock control no longer depends on parallel spreadsheets."',
          },
          {
            name: "DPS Brasil",
            logo: "/images/logos/dps-brasil-preto.png",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result:
              '"Operations now see stock balance and movement history in one place."',
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
          {
            name: "Da Rua",
            logo: "/images/logos/da-rua.png",
            width: 120,
            height: 40,
            maxWidth: "max-w-[120px]",
            result:
              '"Le controle quotidien ne depend plus de tableurs paralleles."',
          },
          {
            name: "DPS Brasil",
            logo: "/images/logos/dps-brasil-preto.png",
            width: 180,
            height: 60,
            maxWidth: "max-w-[180px]",
            result:
              '"Les soldes et mouvements sont visibles dans le meme panneau operationnel."',
          },
        ],
      })[language],
    [language]
  );

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
            <div className="main-box-header ps-panel-chrome relative flex flex-shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-[6px] group">
                  <button
                    type="button"
                    className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ff5f57] to-[#e0443e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#ff6b63] hover:to-[#e34a42] group-hover:scale-105"
                    onClick={reloadPage}
                    aria-label="Reload page"
                    title="Reload page"
                  >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d0000] font-bold">
                      ↻
                    </span>
                  </button>
                  <button
                    type="button"
                    className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ffbd2e] to-[#e5a319] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#ffc940] hover:to-[#e5ae25] group-hover:scale-105"
                    onClick={scrollLandingToTop}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                  >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d3800] font-bold">
                      −
                    </span>
                  </button>
                  <button
                    type="button"
                    className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#28c840] to-[#1aab2c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#34d44c] hover:to-[#26b738] group-hover:scale-105"
                    onClick={openApp}
                    aria-label="Open Purple Stock app"
                    title="Open Purple Stock app"
                  >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[6px] text-[#003d00]">
                      ⤢
                    </span>
                  </button>
                </div>
              </div>

              {/* Center Title */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                <Link
                  href="/"
                  className="flex h-4 w-4 items-center justify-center rounded bg-brand-ui-primary shadow-sm"
                  aria-label="Go to homepage"
                  title="Go to homepage"
                >
                  <Box className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </Link>
                <span className="text-[12px] font-semibold text-slate-600 tracking-wide">
                  Purple Stock OS
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  v2.0
                </span>
              </div>

              {/* Right Side - Status */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_4px_rgba(16,185,129,0.5)]" />
                  <span className="text-[10px] text-emerald-600 font-medium">
                    {language === "pt"
                      ? "Online"
                      : language === "fr"
                        ? "En ligne"
                        : "Online"}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium hidden md:block">
                  {language === "pt"
                    ? "Workspace de Operação"
                    : language === "fr"
                      ? "Espace des Operations"
                      : "Operations Workspace"}
                </span>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-brand-border-soft/80 bg-brand-surface-soft/60 px-4 py-2 sm:px-5 flex-shrink-0">
              <div className="flex items-center gap-1">
                <button
                  className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
                  onClick={goBack}
                  aria-label="Back"
                  title="Back"
                >
                  <ArrowRight
                    className="w-3.5 h-3.5 rotate-180"
                    strokeWidth={2.5}
                  />
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

              <div className="flex-1" />

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
                <h1 className="ps-display text-balance text-2xl sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                  {language === "pt" ? (
                    <>{"Pare de perder venda porque o estoque não bate"}</>
                  ) : language === "en" ? (
                    <>
                      {"Stop losing sales because stock records do not match"}
                    </>
                  ) : (
                    <>
                      {
                        "Arretez de perdre des ventes parce que le stock ne correspond pas"
                      }
                    </>
                  )}
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
                      : em poucos dias, seu time sai da planilha para controle
                      no celular, com QR Code e histórico de entradas, saídas e
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
                      : in a few days, move from spreadsheets to mobile stock
                      control with QR code and full movement history.
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
                      : en quelques jours, passez du tableur au controle mobile
                      avec QR code et historique des mouvements.
                    </>
                  )}
                </p>

                {/* CTA Buttons */}
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
                    {language === "pt"
                      ? "Compatível com iOS"
                      : language === "en"
                        ? "Compatible with iOS"
                        : "Compatible iOS"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700">
                    <Smartphone className="h-3.5 w-3.5" />
                    {language === "pt"
                      ? "Compatível com Android"
                      : language === "en"
                        ? "Compatible with Android"
                        : "Compatible Android"}
                  </span>
                </div>
              </div>

              {/* Main Content Area - App Screenshot */}
              <div className="relative py-12">
                <div className="relative mx-auto max-w-6xl">
                  <Dialog
                    open={isVideoModalOpen}
                    onOpenChange={setIsVideoModalOpen}
                  >
                    <div className="relative overflow-visible rounded-2xl border border-brand-border-soft bg-brand-canvas p-2 shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05),0_20px_40px_-24px_rgba(10,10,10,0.12)]">
                      <div className="relative w-full h-auto">
                        <Image
                          src="/images/app-items-list.png"
                          alt={
                            language === "pt"
                              ? "Interface do Purple Stock - Lista de Itens"
                              : language === "en"
                                ? "Purple Stock Interface - Items List"
                                : "Interface Purple Stock - Liste des Articles"
                          }
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain rounded-2xl"
                          priority
                        />
                        {/* Elegant Play Button */}
                        <DialogTrigger asChild>
                          <button className="absolute inset-0 flex items-center justify-center group cursor-pointer rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-ui-primary/40 focus:ring-offset-2">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-border-soft bg-white/95 text-brand-ui-primary shadow-[0_4px_12px_rgba(10,10,10,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_12px_rgba(139,92,246,0.25)]">
                              <div className="ml-1 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-brand-ui-primary border-t-transparent"></div>
                            </div>
                          </button>
                        </DialogTrigger>
                      </div>
                    </div>

                    <DialogContent className="max-w-4xl w-full p-0 bg-black">
                      <DialogTitle className="sr-only">
                        {language === "pt"
                          ? "Demonstração do Purple Stock"
                          : language === "en"
                            ? "Purple Stock Demo"
                            : "Démo Purple Stock"}
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
                    <div key={logoCase.name} className="ps-card group p-4">
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
                        <span className="ps-badge-violet px-2 py-1">
                          {language === "pt"
                            ? "Caso rápido"
                            : language === "en"
                              ? "Quick case"
                              : "Cas rapide"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {logoCase.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <section className="ps-card mb-12 p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {playbookContent.howItWorksTitle}
                  </h2>
                  <p className="mt-2 text-slate-600">
                    {playbookContent.howItWorksSubtitle}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {playbookContent.steps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-lg border border-brand-border-soft bg-brand-surface-soft p-4"
                    >
                      <h3 className="font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="ps-card mb-12 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {playbookContent.compareTitle}
                </h2>
                <p className="mt-2 text-slate-600">
                  {playbookContent.compareSubtitle}
                </p>
                <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
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
                <p className="mt-5 text-sm text-slate-600">
                  {language === "pt"
                    ? "Leia também: "
                    : language === "en"
                      ? "Also read: "
                      : "Lire aussi : "}
                  <Link
                    className="ps-link-editorial font-semibold"
                    href="/recursos/controle-de-almoxarifado"
                  >
                    {language === "pt"
                      ? "controle de almoxarifado"
                      : language === "en"
                        ? "warehouse control"
                        : "controle d'entrepot"}
                  </Link>
                  {language === "pt" ? ", " : ", "}
                  <Link
                    className="ps-link-editorial font-semibold"
                    href="/documentacao"
                  >
                    {language === "pt"
                      ? "documentação"
                      : language === "en"
                        ? "documentation"
                        : "documentation"}
                  </Link>
                  {language === "pt"
                    ? " e "
                    : language === "en"
                      ? " and "
                      : " et "}
                  <Link
                    className="ps-link-editorial font-semibold"
                    href="/precos"
                  >
                    {language === "pt"
                      ? "preços"
                      : language === "en"
                        ? "pricing"
                        : "tarifs"}
                  </Link>
                  .
                </p>
              </section>

              <section className="ps-section-surface mb-12 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {playbookContent.objectionsTitle}
                </h2>
                <div className="mt-5 space-y-4">
                  {playbookContent.objections.map((item) => (
                    <div key={item.q} className="ps-card p-4">
                      <p className="font-semibold text-slate-900">{item.q}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
      </div>
      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  );
}
