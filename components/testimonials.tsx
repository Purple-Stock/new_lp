"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export function Testimonials() {
  const { language } = useLanguage()
  const testimonials = translations[language].testimonials

  const companyLogos: Record<string, string> = {
    "Purchase Store":
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purchase-store-NQGRoDh4DB7dqjID69qG15TOHLcR3M.png",
    "Concrem Portas":
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concrem-portas-gqljvaTnLb78lC9A5T72Z2Fg6xJJ9l.webp",
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {language === "pt" ? "O que Nossos Clientes Dizem" : "What Our Customers Say"}
          </h2>
          <Link href="#" className="text-[#9333E9] hover:underline">
            {language === "pt" ? "Ver Todos os Depoimentos >" : "View All Testimonials >"}
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="h-16 mb-6">
                <Image
                  src={companyLogos[testimonial.companyName] || "/placeholder.svg"}
                  alt={testimonial.companyName}
                  width={200}
                  height={100}
                  className="h-full w-auto object-contain"
                />
              </div>
              <blockquote className="text-xl font-medium mb-4">"{testimonial.quote}"</blockquote>
              <p className="text-gray-600 mb-2">{testimonial.company}</p>
              <p className="text-sm text-gray-500">{testimonial.companyName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

