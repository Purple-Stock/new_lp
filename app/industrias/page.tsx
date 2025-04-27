"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type IndustryId = "retail" | "manufacturing" | "logistics" | "food" | "pharmaceutical" | "automotive" | "construction" | "technology"

interface Industry {
  id: IndustryId
  image: string
}

const industries: Industry[] = [
  {
    id: "retail",
    image: "/industries/retail.jpg",
  },
  {
    id: "manufacturing",
    image: "/industries/manufacturing.jpg",
  },
  {
    id: "logistics",
    image: "/industries/logistics.jpg",
  },
  {
    id: "food",
    image: "/industries/food.jpg",
  },
  {
    id: "pharmaceutical",
    image: "/industries/pharmaceutical.jpg",
  },
  {
    id: "automotive",
    image: "/industries/automotive.jpg",
  },
  {
    id: "construction",
    image: "/industries/construction.jpg",
  },
  {
    id: "technology",
    image: "/industries/technology.jpg",
  },
]

export default function IndustriasPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t.industries.title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.industries.description}
            </p>
          </div>

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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

