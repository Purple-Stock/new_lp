"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export function TrustedBy() {
  const { language } = useLanguage()

  const companies = [
    {
      name: "Purchase Moda Feminina",
      logo: "/images/logos/purchase-store.png",
      width: 180,
      height: 50,
    },
    {
      name: "Concrem Portas Premium",
      logo: "/images/logos/concrem-portas.webp",
      width: 200,
      height: 60,
    },
    {
      name: "Da Rua",
      logo: "/images/logos/da-rua.png",
      width: 120,
      height: 40,
    },
    {
      name: "St. Nicholas School",
      logo: "/images/logos/st-nicholas-school.png",
      width: 240,
      height: 55,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {language === "pt" 
              ? "Confiado por empresas em crescimento"
              : language === "en"
              ? "Trusted by growing businesses"
              : "Fiable par les entreprises en croissance"
            }
          </h2>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div 
              key={company.name} 
              className="flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={company.logo || "/placeholder-logo.svg"}
                alt={company.name}
                width={company.width}
                height={company.height}
                className="h-full w-auto object-contain max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

