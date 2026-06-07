"use client";

import Link from "next/link";
import { ChevronDown, Globe, Box, ArrowRight, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { trackSeoCtaClick } from "@/lib/analytics";

const PRIMARY_FEATURE_LINKS = [
  {
    href: "/features/inventory-control",
    key: "inventoryControl" as const,
    shortcut: "⌘I",
  },
  {
    href: "/features/barcoding",
    key: "barcoding" as const,
    shortcut: "⌘B",
  },
  {
    href: "/features/purchase-sales",
    key: "purchaseSales" as const,
    shortcut: "⌘P",
  },
  {
    href: "/features/analytics-reporting",
    key: "analyticsReporting" as const,
    shortcut: "⌘R",
  },
  {
    href: "/features/warehouse-control",
    key: "warehouseControl" as const,
    shortcut: "⌘W",
  },
  {
    href: "/features/qr-code-management",
    key: "qrCodeManagement" as const,
    shortcut: "⌘Q",
  },
] as const;

const SECONDARY_FEATURE_LINKS = [
  {
    href: "/features/clothing-manufacturing",
    key: "clothingManufacturing" as const,
  },
  {
    href: "/features/equipment-management",
    key: "equipmentManagement" as const,
  },
  {
    href: "/features/factory-management",
    key: "factoryManagement" as const,
  },
  {
    href: "/features/inventory-app",
    key: "inventoryApp" as const,
  },
] as const;

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const documentationLabel =
    language === "pt"
      ? "Documentação"
      : language === "en"
        ? "Documentation"
        : "Documentation";
  const navLabel =
    language === "pt"
      ? "Navegação principal"
      : language === "fr"
        ? "Navigation principale"
        : "Primary navigation";
  const mobileMenuLabel =
    language === "pt"
      ? "Abrir menu de navegação"
      : language === "fr"
        ? "Ouvrir le menu de navigation"
        : "Open navigation menu";
  const primaryFeatureLinks = useMemo(
    () =>
      PRIMARY_FEATURE_LINKS.map((item) => ({
        ...item,
        label: t.features[item.key],
      })),
    [t.features]
  );
  const secondaryFeatureLinks = useMemo(
    () =>
      SECONDARY_FEATURE_LINKS.map((item) => ({
        ...item,
        label: t.features[item.key],
      })),
    [t.features]
  );

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString(
          language === "pt" ? "pt-BR" : language === "fr" ? "fr-FR" : "en-US",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        setFeaturesOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
        setMobileFeaturesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileFeaturesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[120] h-[25px] bg-gradient-to-b from-brand-chrome-steel to-brand-chrome-graphite shadow-[0_1px_0_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)]">
      <div className="flex items-center justify-between h-full px-3 text-[13px] font-medium text-white/90">
        <div className="flex items-center gap-0">
          <Link
            href="/"
            aria-label={
              language === "pt"
                ? "Ir para a página inicial"
                : language === "fr"
                  ? "Aller à l'accueil"
                  : "Go to homepage"
            }
            className="flex items-center justify-center w-8 h-full hover:bg-white/10 transition-colors"
          >
            <Box className="w-[14px] h-[14px] text-white" strokeWidth={2.5} />
          </Link>

          <span className="px-3 py-0.5 font-semibold text-white hover:bg-white/10 rounded-[3px] cursor-default transition-colors">
            Purple Stock
          </span>

          <div className="relative md:hidden" ref={mobileMenuRef}>
            <button
              type="button"
              className={cn(
                "flex items-center justify-center w-8 h-full transition-colors",
                mobileMenuOpen ? "bg-[#0058d0] text-white" : "hover:bg-white/10"
              )}
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-haspopup="menu"
              aria-label={mobileMenuLabel}
            >
              <Menu className="w-[14px] h-[14px]" strokeWidth={2.5} />
            </button>

            {mobileMenuOpen && (
              <div className="absolute left-0 top-full mt-[3px] w-[min(100vw-1.5rem,18rem)] max-h-[calc(100vh-2rem)] overflow-y-auto rounded-md border border-white/10 bg-brand-chrome-graphite/95 py-1 shadow-[0_10px_40px_rgba(10,10,10,0.32)] backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150">
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2 text-[13px] text-white/90 transition-colors mx-1 rounded-[3px]",
                    mobileFeaturesOpen
                      ? "bg-[#0058d0] text-white"
                      : "hover:bg-[#0058d0] hover:text-white"
                  )}
                  onClick={() => setMobileFeaturesOpen((open) => !open)}
                  aria-expanded={mobileFeaturesOpen}
                >
                  <span>{t.resources}</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 text-white/50 transition-transform",
                      mobileFeaturesOpen && "rotate-180"
                    )}
                  />
                </button>

                {mobileFeaturesOpen && (
                  <div className="pb-1">
                    {primaryFeatureLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-1.5 text-[13px] text-white/80 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                        onClick={closeMobileMenu}
                      >
                        <span>{item.label}</span>
                        <span className="text-[11px] text-white/40">
                          {item.shortcut}
                        </span>
                      </Link>
                    ))}
                    <div className="h-px bg-white/10 my-1 mx-3" />
                    {secondaryFeatureLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-1.5 text-[13px] text-white/80 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="h-px bg-white/10 my-1 mx-3" />

                <Link
                  href="/industrias"
                  className="flex items-center px-3 py-2 text-[13px] text-white/90 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                  onClick={closeMobileMenu}
                >
                  {t.industries}
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center px-3 py-2 text-[13px] text-white/90 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                  onClick={closeMobileMenu}
                >
                  {t.blog}
                </Link>
                <Link
                  href="/documentacao"
                  className="flex items-center px-3 py-2 text-[13px] text-white/90 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                  onClick={closeMobileMenu}
                >
                  {documentationLabel}
                </Link>
                <Link
                  href="/codigo-de-barras-gratis"
                  className="flex items-center px-3 py-2 text-[13px] text-violet-300 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                  onClick={closeMobileMenu}
                >
                  {t.freeBarcode}
                </Link>
              </div>
            )}
          </div>

          <nav aria-label={navLabel} className="hidden md:flex items-center">
            <div className="relative" ref={featuresRef}>
              <button
                type="button"
                className={cn(
                  "px-3 py-0.5 rounded-[3px] transition-colors",
                  featuresOpen ? "bg-[#0058d0] text-white" : "hover:bg-white/10"
                )}
                onClick={() => setFeaturesOpen(!featuresOpen)}
                aria-expanded={featuresOpen}
                aria-haspopup="menu"
              >
                {t.resources}
              </button>

              {featuresOpen && (
                <div className="absolute left-0 mt-[3px] w-64 rounded-md border border-white/10 bg-brand-chrome-graphite/95 py-1 shadow-[0_10px_40px_rgba(10,10,10,0.32)] backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden">
                  {primaryFeatureLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-1 text-[13px] text-white/90 hover:bg-[#0058d0] hover:text-white transition-colors mx-1 rounded-[3px]"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="text-[11px] text-white/40">
                        {item.shortcut}
                      </span>
                    </Link>
                  ))}
                  <div className="h-px bg-white/10 my-1 mx-3" />
                  {secondaryFeatureLinks.map((item) => (
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

            <Link
              href="/industrias"
              className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
            >
              {t.industries}
            </Link>
            <Link
              href="/blog"
              className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
            >
              {t.blog}
            </Link>
            <Link
              href="/documentacao"
              className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
            >
              {documentationLabel}
            </Link>
            <Link
              href="/codigo-de-barras-gratis"
              className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors text-violet-300"
            >
              {t.freeBarcode}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] hover:bg-white/10 transition-colors cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-white/70">Online</span>
          </div>

          <div className="w-px h-3 bg-white/20 mx-1 hidden sm:block" />

          <button
            type="button"
            className="flex items-center gap-1 px-2 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
            onClick={() => {
              if (language === "pt") setLanguage("en");
              else if (language === "en") setLanguage("fr");
              else setLanguage("pt");
            }}
          >
            <Globe className="w-3.5 h-3.5 text-white/70" strokeWidth={2} />
            <span className="text-[11px] uppercase">{language}</span>
            <ChevronDown className="w-3 h-3 text-white/50" />
          </button>

          {currentTime && (
            <div className="hidden sm:flex items-center px-2 py-0.5 rounded-[3px] hover:bg-white/10 transition-colors cursor-default">
              <span className="text-[11px] text-white/90 font-medium tabular-nums">
                {currentTime}
              </span>
            </div>
          )}

          <div className="w-px h-3 bg-white/20 mx-1" />

          <Link
            href="https://app.purplestock.com.br/"
            className="flex items-center gap-1 px-2 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
            onClick={() =>
              trackSeoCtaClick({
                cta_name: "navbar_login",
                cta_target: "app",
                page_section: "navbar",
              })
            }
          >
            <span className="text-[11px]">{t.login}</span>
            <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
