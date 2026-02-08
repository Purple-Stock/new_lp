"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Globe, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { useState, useRef, useEffect } from "react"

export function Navbar() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].nav
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Purple Stock
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {language === "pt" ? "Gestão Inteligente" : language === "en" ? "Smart Management" : "Gestion Intelligente"}
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative" ref={featuresRef}>
              <button
                className="text-gray-700 hover:text-purple-600 flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium"
                onClick={() => setFeaturesOpen(!featuresOpen)}
              >
                {t.features.title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>

              {featuresOpen && (
                <div className="absolute left-0 mt-2 w-72 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="text-sm font-semibold text-gray-900">{t.features.title}</div>
                      <div className="text-xs text-gray-500">{language === "pt" ? "Descubra todas as funcionalidades" : language === "en" ? "Discover all features" : "Découvrez toutes les fonctionnalités"}</div>
                    </div>
                    <Link
                      href="/features/inventory-control"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.inventoryControl}
                    </Link>
                    <Link
                      href="/features/barcoding"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.barcoding}
                    </Link>
                    <Link
                      href="/features/purchase-sales"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.purchaseSales}
                    </Link>
                    <Link
                      href="/features/analytics-reporting"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.analyticsReporting}
                    </Link>
                    <Link
                      href="/features/warehouse-control"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.warehouseControl}
                    </Link>
                    <Link
                      href="/features/qr-code-management"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.qrCodeManagement}
                    </Link>
                    <Link
                      href="/features/clothing-manufacturing"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.clothingManufacturing}
                    </Link>
                    <Link
                      href="/features/equipment-management"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.equipmentManagement}
                    </Link>
                    <Link
                      href="/features/factory-management"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.factoryManagement}
                    </Link>
                    <Link
                      href="/features/inventory-app"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.inventoryApp}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/industrias" className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium">
              {t.industries}
            </Link>
            <Link href="/artigos" className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium">
              {t.articles}
            </Link>
            <a
              href="https://blog.purplestock.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium"
            >
              {t.blog}
            </a>
            <Link href="/codigo-de-barras-gratis" className="text-purple-600 hover:text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-200 font-medium">
              {t.freeBarcode}
            </Link>
            {/* <Link href="/coming-soon"> */}
            <Link href="https://app.purplestock.com.br/">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                {t.login}
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 rounded-full px-6 hover:shadow-md"
              onClick={() => {
                if (language === "pt") setLanguage("en");
                else if (language === "en") setLanguage("fr");
                else setLanguage("pt");
              }}
            >
              <Globe className="h-5 w-5 mr-2 text-purple-500" />
              {language === "pt" ? "Português" : language === "en" ? "English" : "Français"}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative" ref={featuresRef}>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  <div className="flex items-center justify-between">
                    {t.features.title}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {featuresOpen && (
                  <div className="pl-4 space-y-1 mt-2 border-l-2 border-purple-100">
                    <Link
                      href="/features/inventory-control"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.inventoryControl}
                    </Link>
                    <Link
                      href="/features/barcoding"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.barcoding}
                    </Link>
                    <Link
                      href="/features/purchase-sales"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.purchaseSales}
                    </Link>
                    <Link
                      href="/features/analytics-reporting"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.analyticsReporting}
                    </Link>
                    <Link
                      href="/features/warehouse-control"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.warehouseControl}
                    </Link>
                    <Link
                      href="/features/qr-code-management"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.qrCodeManagement}
                    </Link>
                    <Link
                      href="/features/clothing-manufacturing"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.clothingManufacturing}
                    </Link>
                    <Link
                      href="/features/equipment-management"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.equipmentManagement}
                    </Link>
                    <Link
                      href="/features/factory-management"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.factoryManagement}
                    </Link>
                    <Link
                      href="/features/inventory-app"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.inventoryApp}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/industrias"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.industries}
              </Link>
              <Link
                href="/artigos"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.articles}
              </Link>
              <a
                href="https://blog.purplestock.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.blog}
              </a>
              <Link
                href="/codigo-de-barras-gratis"
                className="block px-3 py-2 text-base font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.freeBarcode}
              </Link>
              {/* <Link
                href="/coming-soon"
                className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg text-center shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.login}
              </Link> */}
              <Link
                href="https://app.purplestock.com.br/"
                className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg text-center shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.login}
              </Link>
              <Button 
                variant="outline" 
                className="w-full border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 rounded-full px-6"
                onClick={() => {
                  if (language === "pt") setLanguage("en");
                  else if (language === "en") setLanguage("fr");
                  else setLanguage("pt");
                  setMobileMenuOpen(false)
                }}
              >
                <Globe className="h-5 w-5 mr-2 text-purple-500" />
                {language === "pt" ? "Português" : language === "en" ? "English" : "Français"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
