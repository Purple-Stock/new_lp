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
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple_stock_logo-PMYaISOsL4kgzKkTILDzTOp3M5TK7A.jpeg"
              alt="Purple Stock"
              width={40}
              height={40}
              className="h-10 w-10 mb-4"
            />
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <Button variant="outline" className="mt-4" onClick={() => setLanguage(language === "pt" ? "en" : "pt")}>
              <Globe className="h-4 w-4 mr-2" />
              {language === "pt" ? "English" : "Português"}
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
          <p className="text-base text-gray-400">Purple Stock, Inc.</p>
          <p className="text-sm text-gray-400 mt-2">made with ♥️ in São Paulo Brazil</p>
        </div>
      </div>
    </footer>
  )
}

