"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export function TrustedBy() {
  const { language } = useLanguage()
  const t = translations[language].trustedBy

  const companies = [
    {
      name: "Purchase Moda Feminina",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purchase-store-NQGRoDh4DB7dqjID69qG15TOHLcR3M.png",
      width: 180,
      height: 50,
    },
    {
      name: "Concrem Portas Premium",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concrem-portas-gqljvaTnLb78lC9A5T72Z2Fg6xJJ9l.webp",
      width: 200,
      height: 60,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              <span className="text-[#9333E9]">{t.title}</span>
            </h2>
            <p className="text-xl text-gray-600">{t.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 items-center">
            {companies.map((company) => (
              <div key={company.name} className="bg-white rounded-lg p-4 flex items-center justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className="w-auto h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

