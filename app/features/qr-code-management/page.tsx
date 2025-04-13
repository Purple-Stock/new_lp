"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, QrCode, Scan, History, Link as LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export default function QRCodeManagementPage() {
  const { language } = useLanguage()
  const t = translations[language].featurePages.qrCodeManagement

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-purple-100 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
              <p className="text-lg text-gray-700 mb-8">{t.description}</p>
              <Link href="/coming-soon">
                <Button size="lg" className="bg-[#9333E9] hover:bg-[#7928CA]">
                  {t.startTrial}
                </Button>
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="QR Code Management"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.features.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <QrCode className="h-10 w-10 text-[#9333E9] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.features.generation.title}</h3>
              <p className="text-gray-600">{t.features.generation.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Scan className="h-10 w-10 text-[#9333E9] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.features.scanning.title}</h3>
              <p className="text-gray-600">{t.features.scanning.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <History className="h-10 w-10 text-[#9333E9] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.features.tracking.title}</h3>
              <p className="text-gray-600">{t.features.tracking.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <LinkIcon className="h-10 w-10 text-[#9333E9] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.features.integration.title}</h3>
              <p className="text-gray-600">{t.features.integration.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">{t.benefits.title}</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-[#9333E9]" />
                  <div>
                    <h3 className="font-semibold">{t.benefits.efficiency.title}</h3>
                    <p className="text-gray-600">{t.benefits.efficiency.description}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-[#9333E9]" />
                  <div>
                    <h3 className="font-semibold">{t.benefits.accuracy.title}</h3>
                    <p className="text-gray-600">{t.benefits.accuracy.description}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-[#9333E9]" />
                  <div>
                    <h3 className="font-semibold">{t.benefits.accessibility.title}</h3>
                    <p className="text-gray-600">{t.benefits.accessibility.description}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-[#9333E9]" />
                  <div>
                    <h3 className="font-semibold">{t.benefits.management.title}</h3>
                    <p className="text-gray-600">{t.benefits.management.description}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://images.pexels.com/photos/4482899/pexels-photo-4482899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="QR Code Benefits"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#9333E9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100 text-[#9333E9]">
              {t.cta.scheduleDemo}
            </Button>
            <Link href="/coming-soon">
              <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white/10">
                {t.cta.startTrial}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 