"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { translations } from "@/utils/translations"
import { useLanguage } from "@/contexts/LanguageContext"

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
}

interface PricingTranslation {
  title: string
  subtitle: string
  plans: Plan[]
}

export default function PricingPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations].pricing

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-4">{t.title}</h1>
        <p className="text-xl text-gray-600 text-center mb-12">{t.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {t.plans.map((plan: Plan) => (
            <div key={plan.name} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                {plan.price !== "Preço Personalizado" && plan.price !== "Custom Price" && plan.price !== "Prix Personnalisé" && <span className="text-lg font-normal text-gray-500">/{language === 'pt' ? 'mês' : language === 'en' ? 'month' : 'mois'}</span>}
              </p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-[#9333E9] mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.buttonLink}>
                <Button className="w-full bg-[#9333E9] hover:bg-[#7928CA]">{plan.buttonText}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

