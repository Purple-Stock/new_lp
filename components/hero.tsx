"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">{t.title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">{t.description}</p>
            <Link href="/coming-soon">
              <Button size="lg" className="bg-[#9333E9] hover:bg-[#7928CA]">
                <Sparkles className="w-5 h-5 mr-2" />
                {t.cta}
              </Button>
            </Link>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/images/hero-photo.jpeg"
              alt="Warehouse worker using Purple Stock on a tablet"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

