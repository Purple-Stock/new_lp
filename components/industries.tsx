"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import Link from "next/link"
import Image from "next/image"

type IndustryId = "atacado" | "varejo" | "manufatura" | "logistica" | "moda" | "alimentos-bebidas" | "construcao" | "medico" | "beleza" | "comercio" | "educacao" | "audiovisual"

interface Industry {
  id: IndustryId
  image: string
}

const industries: Industry[] = [
  {
    id: "atacado",
    image: "/images/pexels-photo-4483610.webp",
  },
  {
    id: "varejo",
    image: "/images/pexels-photo-264507.jpeg",
  },
  {
    id: "manufatura",
    image: "/images/pexels-photo-1145434.jpeg",
  },
  {
    id: "logistica",
    image: "/images/pexels-photo-1267338.jpeg",
  },
  {
    id: "moda",
    image: "/images/pexels-photo-994523.webp",
  },
  {
    id: "alimentos-bebidas",
    image: "/images/pexels-photo-1640777.jpeg",
  },
  {
    id: "construcao",
    image: "/images/construction-site-build-construction-work-159358.jpeg",
  },
  {
    id: "medico",
    image: "/images/medical-appointment-doctor-healthcare-40568.webp",
  },
  {
    id: "beleza",
    image: "/images/pexels-photo-3985298.webp",
  },
  {
    id: "comercio",
    image: "/images/commerce-800x600.webp",
  },
  {
    id: "educacao",
    image: "/images/pexels-photo-256541.webp",
  },
  {
    id: "audiovisual",
    image: "/images/audio-visual-2.jpg",
  },
]

export function Industries() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">{t.industries.title}</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          {t.industries.description}
        </p>
        <p className="text-center mb-12">
          {language === "pt" && "Selecione seu setor para saber como a Purple Stock pode ajudá-lo a controlar suas operações."}
          {language === "en" && "Select your industry to learn how Purple Stock can help you control your operations."}
          {language === "fr" && "Sélectionnez votre secteur pour découvrir comment Purple Stock peut vous aider à contrôler vos opérations."}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={`/industrias/${industry.id}`}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200"
            >
              <Image
                src={industry.image || "/placeholder.svg"}
                alt={t.industries.industries[industry.id]}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 className="text-white font-medium">{t.industries.industries[industry.id]}</h3>
              </div>
            </Link>
          ))}
          <Link
            href="#"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 flex items-center justify-center"
          >
            <div className="text-4xl text-gray-400">+</div>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link href="#" className="text-[#9333E9] hover:underline">
            {language === "pt" && "Ver Todos >"}
            {language === "en" && "View All >"}
            {language === "fr" && "Voir Tout >"}
          </Link>
        </div>
      </div>
    </section>
  )
}

