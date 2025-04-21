"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="60" viewBox="0 0 1200 400">
                {/* Logo (Hexagon + Lightning bolt) */}
                <g transform="translate(200, 200) scale(1.2)">
                  {/* Purple hexagon */}
                  <path fill="#7D3C98" d="M0,-100 L86,-50 L86,50 L0,100 L-86,50 L-86,-50 Z"/>

                  {/* White lightning bolt */}
                  <path fill="#FFFFFF" d="M30,-50 L-15,10 H15 L-10,55 L40,0 H15 Z"/>
                </g>

                {/* Text "PURPLE STOCK" in purple */}
                <text x="450" y="230" fontFamily="Arial, sans-serif" fontSize="120" fontWeight="bold" fill="#7D3C98">
                  PURPLE STOCK
                </text>
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative" ref={featuresRef}>
              <button
                className="text-gray-700 hover:text-gray-900 flex items-center gap-1"
                onClick={() => setFeaturesOpen(!featuresOpen)}
              >
                {t.features.title}
                <ChevronDown className="h-4 w-4" />
              </button>

              {featuresOpen && (
                <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link
                      href="/features/inventory-control"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.inventoryControl}
                    </Link>
                    <Link
                      href="/features/barcoding"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.barcoding}
                    </Link>
                    <Link
                      href="/features/purchase-sales"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.purchaseSales}
                    </Link>
                    <Link
                      href="/features/analytics-reporting"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.analyticsReporting}
                    </Link>
                    <Link
                      href="/features/warehouse-control"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.warehouseControl}
                    </Link>
                    <Link
                      href="/features/qr-code-management"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.qrCodeManagement}
                    </Link>
                    <Link
                      href="/features/clothing-manufacturing"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.clothingManufacturing}
                    </Link>
                    <Link
                      href="/features/equipment-management"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.equipmentManagement}
                    </Link>
                    <Link
                      href="/features/factory-management"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.factoryManagement}
                    </Link>
                    <Link
                      href="/features/inventory-app"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      {t.features.inventoryApp}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/precos" className="text-gray-700 hover:text-gray-900">
              {t.pricing}
            </Link>
            <Link href="/industrias" className="text-gray-700 hover:text-gray-900">
              {t.industries}
            </Link>
            <a
              href="https://blog.purplestock.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              {t.blog}
            </a>
            <Link href="https://app.purplestock.com.br/" className="text-[#9333E9] hover:text-[#7928CA]">
              {t.freeBarcode}
            </Link>
            <Link href="https://app.purplestock.com.br/">
              <Button className="bg-[#9333E9] hover:bg-[#7928CA]">{t.login}</Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 rounded-full px-6"
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            >
              <Globe className="h-5 w-5 mr-2 text-purple-500" />
              {language === "pt" ? "Português" : "English"}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative" ref={featuresRef}>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  <div className="flex items-center justify-between">
                    {t.features.title}
                    <ChevronDown className={`h-4 w-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {featuresOpen && (
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/features/inventory-control"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.inventoryControl}
                    </Link>
                    <Link
                      href="/features/barcoding"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.barcoding}
                    </Link>
                    <Link
                      href="/features/purchase-sales"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.purchaseSales}
                    </Link>
                    <Link
                      href="/features/analytics-reporting"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.analyticsReporting}
                    </Link>
                    <Link
                      href="/features/warehouse-control"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.warehouseControl}
                    </Link>
                    <Link
                      href="/features/qr-code-management"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.qrCodeManagement}
                    </Link>
                    <Link
                      href="/features/clothing-manufacturing"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.clothingManufacturing}
                    </Link>
                    <Link
                      href="/features/equipment-management"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.equipmentManagement}
                    </Link>
                    <Link
                      href="/features/factory-management"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.factoryManagement}
                    </Link>
                    <Link
                      href="/features/inventory-app"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features.inventoryApp}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/precos"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.pricing}
              </Link>
              <Link
                href="/industrias"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.industries}
              </Link>
              <a
                href="https://blog.purplestock.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.blog}
              </a>
              <Link
                href="https://app.purplestock.com.br/"
                className="block px-3 py-2 text-base font-medium text-[#9333E9] hover:text-[#7928CA] hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.freeBarcode}
              </Link>
              <Link
                href="https://app.purplestock.com.br/"
                className="block px-3 py-2 text-base font-medium text-white bg-[#9333E9] hover:bg-[#7928CA] rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.login}
              </Link>
              <Button 
                variant="outline" 
                className="w-full border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 rounded-full px-6"
                onClick={() => {
                  setLanguage(language === "pt" ? "en" : "pt")
                  setMobileMenuOpen(false)
                }}
              >
                <Globe className="h-5 w-5 mr-2 text-purple-500" />
                {language === "pt" ? "Português" : "English"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

