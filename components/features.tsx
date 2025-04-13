"use client"

import { Check } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

interface FeatureProps {
  title: string
  subtitle: string
  description: string[]
  image: string
  bgColor: string
  textColor: string
}

function Feature({ title, subtitle, description, image, bgColor, textColor }: FeatureProps) {
  return (
    <div className={`py-24 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className={`text-lg font-medium mb-4 ${textColor}`}>{subtitle}</h3>
            <h2 className="text-4xl font-bold mb-8">{title}</h2>
            <div className="space-y-4">
              {description.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-[#9333E9]" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Features() {
  const { language } = useLanguage()
  const t = translations[language].features

  const features = [
    {
      ...t.orderManagement,
      image:
        "/images/pexels-photo-4483610.webp",
      bgColor: "bg-pink-50",
      textColor: "text-pink-500",
    },
    {
      ...t.barcode,
      image:
        "/images/pexels-photo-4481259.webp",
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
    },
    {
      ...t.security,
      image:
        "/images/security-protection-anti-virus-software-60504.webp",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-500",
    },
    {
      ...t.realTime,
      image:
        "/images/pexels-photo-8201187.webp",
      bgColor: "bg-violet-50",
      textColor: "text-violet-500",
    },
    {
      ...t.inventoryLink,
      image:
        "/images/pexels-photo-7654989.webp",
      bgColor: "bg-green-50",
      textColor: "text-green-500",
    },
  ]

  return (
    <div>
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  )
}

