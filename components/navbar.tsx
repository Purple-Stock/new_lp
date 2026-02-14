"use client"

import Link from "next/link"
import { ChevronDown, Globe, Box, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { trackCtaClick } from "@/lib/analytics"

export function Navbar() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].nav
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState<string | null>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString(language === "pt" ? "pt-BR" : language === "fr" ? "fr-FR" : "en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [language])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[25px] bg-gradient-to-b from-[#3d3d3d] to-[#2a2a2a] shadow-[0_1px_0_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)]">
      <div className="flex items-center justify-between h-full px-3 text-[13px] font-medium text-white/90">
        <div className="flex items-center gap-0">
          <Link href="/" className="flex items-center justify-center w-8 h-full hover:bg-white/10 transition-colors">
            <Box className="w-[14px] h-[14px] text-white" strokeWidth={2.5} />
          </Link>

          <span className="px-3 py-0.5 font-semibold text-white hover:bg-white/10 rounded-[3px] cursor-default transition-colors">
            Purple Stock
          </span>

          <div className="hidden md:flex items-center">
            <div className="relative" ref={featuresRef}>
              <button
                className={cn("px-3 py-0.5 rounded-[3px] transition-colors", featuresOpen ? "bg-[#0058d0] text-white" : "hover:bg-white/10")}
                onClick={() => setFeaturesOpen(!featuresOpen)}
              >
                {t.resources}
              </button>

              {featuresOpen && (
                <div className="absolute left-0 mt-[3px] w-64 rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.4)] bg-[#2d2d2d]/95 backdrop-blur-xl border border-white/10 animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden py-1">
                  {[
                    { href: "/features/inventory-control", label: t.features.inventoryControl, shortcut: "⌘I" },
                    { href: "/features/barcoding", label: t.features.barcoding, shortcut: "⌘B" },
                    { href: "/features/purchase-sales", label: t.features.purchaseSales, shortcut: "⌘P" },
                    { href: "/features/analytics-reporting", label: t.features.analyticsReporting, shortcut: "⌘R" },
                    { href: "/features/warehouse-control", label: t.features.warehouseControl, shortcut: "⌘W" },
                    { href: "/features/qr-code-management", label: t.features.qrCodeManagement, shortcut: "⌘Q" },
                  ].map((item) => (
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
                    { href: "/features/clothing-manufacturing", label: t.features.clothingManufacturing },
                    { href: "/features/equipment-management", label: t.features.equipmentManagement },
                    { href: "/features/factory-management", label: t.features.factoryManagement },
                    { href: "/features/inventory-app", label: t.features.inventoryApp },
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

            <Link href="/industrias" className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors">
              {t.industries}
            </Link>
            <Link href="/blog" className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors">
              {t.blog}
            </Link>
            <Link href="/codigo-de-barras-gratis" className="px-3 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors text-purple-300">
              {t.freeBarcode}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] hover:bg-white/10 transition-colors cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-white/70">Online</span>
          </div>

          <div className="w-px h-3 bg-white/20 mx-1 hidden sm:block" />

          <button
            className="flex items-center gap-1 px-2 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
            onClick={() => {
              if (language === "pt") setLanguage("en")
              else if (language === "en") setLanguage("fr")
              else setLanguage("pt")
            }}
          >
            <Globe className="w-3.5 h-3.5 text-white/70" strokeWidth={2} />
            <span className="text-[11px] uppercase">{language}</span>
            <ChevronDown className="w-3 h-3 text-white/50" />
          </button>

          {currentTime && (
            <div className="hidden sm:flex items-center px-2 py-0.5 rounded-[3px] hover:bg-white/10 transition-colors cursor-default">
              <span className="text-[11px] text-white/90 font-medium tabular-nums">{currentTime}</span>
            </div>
          )}

          <div className="w-px h-3 bg-white/20 mx-1" />

          <Link
            href="https://app.purplestock.com.br/"
            className="flex items-center gap-1 px-2 py-0.5 hover:bg-white/10 rounded-[3px] transition-colors"
            onClick={() =>
              trackCtaClick({
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
  )
}
