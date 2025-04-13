"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export function Footer() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].footer

  const navigation = {
    purplestock: [
      { name: t.industries, href: "/industrias" },
    ],
    resources: [
      { name: t.blog, href: "https://blog.purplestock.com.br/" },
      { name: t.glossary, href: "/glossario" },
    ],
    social: [
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/purplestockapp/" },
      { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/@PurpleStock_" },
      { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/purple-stock" },
    ],
  }

  return (
    <footer className="bg-gradient-to-r from-purple-50 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <Link href="/" className="block">
              <svg xmlns="http://www.w3.org/2000/svg" width="180" height="36" viewBox="0 0 1200 400">
                {/* Background */}
                <rect width="1200" height="400" fill="#FFFFFF" rx="50" ry="50"/>

                {/* Logo (Hexagon + Lightning bolt) */}
                <g transform="translate(200, 200) scale(1.2)">
                  {/* Purple hexagon */}
                  <path fill="#7D3C98" d="M0,-100 L86,-50 L86,50 L0,100 L-86,50 L-86,-50 Z"/>

                  {/* White lightning bolt */}
                  <path fill="#FFFFFF" d="M30,-50 L-15,10 H15 L-10,55 L40,0 H15 Z"/>
                </g>

                {/* Text "PURPLE STOCK" in purple */}
                <text x="450" y="230" fontFamily="Arial, sans-serif" fontSize="90" fontWeight="bold" fill="#7D3C98">
                  PURPLE STOCK
                </text>
              </svg>
            </Link>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-purple-500 hover:text-purple-700 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 rounded-full px-6"
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            >
              <Globe className="h-5 w-5 mr-2 text-purple-500" />
              {language === "pt" ? "Português" : "English"}
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-bold text-purple-900 tracking-wider uppercase mb-6">{t.purpleStock}</h3>
            <ul className="space-y-4">
              {navigation.purplestock.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
                    {...(item.name === t.blog ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-purple-900 tracking-wider uppercase mb-6">{t.resources}</h3>
            <ul className="space-y-4">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-100">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-base font-medium text-purple-900">Purple Stock</p>
            <p className="text-sm text-purple-600 mt-2 md:mt-0">
              Made with <span className="text-red-500">♥️</span> in São Paulo, Brazil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

