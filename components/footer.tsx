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
      { name: t.purpleStock, href: "#" },
      { name: t.industries, href: "#" },
      { name: t.status, href: "#" },
      { name: t.blog, href: "https://blog.purplestock.com.br/" },
      { name: t.glossary, href: "/glossario" },
    ],
    resources: [
      { name: t.blog, href: "#" },
      { name: t.glossary, href: "/glossario" },
    ],
    social: [
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/purplestockapp/" },
      { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/@PurpleStock_" },
      { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/purple-stock" },
    ],
  }

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 350 70">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#8E44AD", stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: "#5B2C6F", stopOpacity: 1 }}></stop>
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path fill="url(#grad1)" d="M35 10l23 14v28L35 66 12 52V24z"></path>
                  <path fill="#FFF" d="M33 22l-9 16h12l-5 14 14-18H33z"></path>
                  <text fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#5B2C6F" x="85" y="45">Purple Stock</text>
                </g>
              </svg>
            </Link>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-purple-600">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-8 w-8" />
                </Link>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="mt-6 border-2 rounded-full px-6"
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            >
              <Globe className="h-5 w-5 mr-2" />
              {language === "pt" ? "Português" : "English"}
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">{t.purpleStock}</h3>
            <ul className="space-y-4">
              {navigation.purplestock.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                    {...(item.name === t.blog ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">{t.resources}</h3>
            <ul className="space-y-4">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-400">Purple Stock</p>
          <p className="text-sm text-gray-400 mt-2">Made with ♥️ in São Paulo, Brazil</p>
        </div>
      </div>
    </footer>
  )
}

