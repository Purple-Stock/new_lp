"use client"

import { Zap } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"

export function PreFooterCTA() {
  const { language } = useLanguage()
  const title = language === "pt" ? "Simplifique sua Gestão de Inventário" : "Simplify your Inventory Management"
  const buttonText = language === "pt" ? "Teste gratuito de 30 dias" : "30-day free trial"

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9333E9] to-blue-400" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{title}</h2>
        <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100">
          <Zap className="w-5 h-5 mr-2 text-[#9333E9]" />
          {buttonText}
        </Button>
        <div className="mt-16 max-w-5xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20at%2018.45.39-QOcz1eLjePMrnHiTVGMS6jKAX6S4b0.png"
            alt="Purple Stock Platform Interface"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

