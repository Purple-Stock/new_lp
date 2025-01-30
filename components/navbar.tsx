"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export function Navbar() {
  const { language } = useLanguage()
  const t = translations[language].nav

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple_stock_logo-PMYaISOsL4kgzKkTILDzTOp3M5TK7A.jpeg"
                alt="Purple Stock"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
              {t.resources}
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="/precos" className="text-gray-700 hover:text-gray-900">
              {t.pricing}
            </Link>
            <Link href="/industrias" className="text-gray-700 hover:text-gray-900">
              {t.industries}
            </Link>
            <Link href="/codigo-barras" className="text-[#9333E9] hover:text-[#7928CA]">
              {t.freeBarcode}
            </Link>
            <Button className="bg-[#9333E9] hover:bg-[#7928CA]">{t.login}</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

