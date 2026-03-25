"use client"

import Link from "next/link"
import { Instagram, Youtube, Linkedin, Sparkles, Mail, Phone, MapPin, ArrowRight, MessageCircle, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  const navigation = {
    purplestock: [
      { name: t.industries, href: "/industrias" },
    ],
    resources: [
      { name: t.blog, href: "/blog" },
      { name: t.glossary, href: "/glossario" },
    ],
    social: [
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/purplestockapp/" },
      { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/@PurpleStock_" },
      { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/purple-stock" },
    ],
  }

  const contactInfo = [
    {
      icon: Mail,
      text: language === "pt" ? "matheus.puppe@purplestock.com.br" : language === "en" ? "contact@purplestock.com.br" : "contact@purplestock.com.br",
      href: "mailto:matheus.puppe@purplestock.com.br"
    },
    {
      icon: Phone,
      text: language === "pt" ? "+55 (11) 99559-7242" : language === "en" ? "+55 (11) 99559-7242" : "+55 (11) 99559-7242",
      href: "tel:+5511995597242",
    },
    {
      icon: MapPin,
      text: language === "pt" ? "São Paulo, Brasil" : language === "en" ? "São Paulo, Brazil" : "São Paulo, Brésil",
      href: null
    }
  ]

  return (
    <footer className="relative overflow-hidden border-t border-purple-200/60 bg-[radial-gradient(circle_at_20%_0%,rgba(129,117,224,0.18),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(189,147,249,0.14),transparent_45%),linear-gradient(180deg,#f8f6ff,#f4f0ff)] text-slate-800">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff14%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="rounded-2xl border border-white/70 bg-white/70 p-7 shadow-[0_24px_60px_-35px_rgba(76,29,149,0.35)] backdrop-blur-xl">
            <div className="space-y-6">
            <Link href="/" className="block group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 animate-pulse" />
                </div>
                <div>
                  <div className="bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-xl font-bold text-transparent">
                    Purple Stock
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {language === "pt" ? "Gestão Inteligente" : language === "en" ? "Smart Management" : "Gestion Intelligente"}
                  </div>
                </div>
              </div>
            </Link>

            <p className="max-w-xs leading-relaxed text-slate-600">
              {language === "pt" 
                ? "Transforme sua gestão de inventário com a solução mais inteligente e eficiente do mercado."
                : language === "en"
                ? "Transform your inventory management with the smartest and most efficient solution on the market."
                : "Transformez votre gestion d'inventaire avec la solution la plus intelligente et efficace du marché."
              }
            </p>
            
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-200/80 bg-white/90 text-slate-600 transition-all duration-200 hover:scale-110 hover:border-purple-300 hover:text-purple-700"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/60 p-7 shadow-[0_20px_50px_-35px_rgba(76,29,149,0.35)] backdrop-blur-xl">
            <h3 className="mb-6 flex items-center text-base font-semibold text-slate-900">
              <div className="mr-3 h-2 w-2 rounded-full bg-purple-500" />
              {t.purpleStock}
            </h3>
            <ul className="space-y-3">
              {navigation.purplestock.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-slate-600 transition-colors duration-200 hover:text-purple-700"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 text-purple-400 transition-transform duration-200 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/60 p-7 shadow-[0_20px_50px_-35px_rgba(76,29,149,0.35)] backdrop-blur-xl">
            <h3 className="mb-6 flex items-center text-base font-semibold text-slate-900">
              <div className="mr-3 h-2 w-2 rounded-full bg-indigo-500" />
              {t.resources}
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center text-slate-600 transition-colors duration-200 hover:text-indigo-700"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 text-indigo-400 transition-transform duration-200 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/65 p-7 shadow-[0_20px_50px_-35px_rgba(76,29,149,0.35)] backdrop-blur-xl">
            <h3 className="mb-6 flex items-center text-base font-semibold text-slate-900">
              <div className="mr-3 h-2 w-2 rounded-full bg-emerald-500" />
              {language === "pt" ? "Contato" : language === "en" ? "Contact" : "Contact"}
            </h3>

            <address className="space-y-3 not-italic">
              {contactInfo.map((item, index) => (
                item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center space-x-3 text-slate-600 transition-colors duration-200 hover:text-slate-900"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-200/80 bg-white/85 transition-colors duration-200 group-hover:bg-purple-50">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </Link>
                ) : (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-slate-600"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-200/80 bg-white/85">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
                )
              ))}
            </address>
          </div>
        </div>

        <div className="mb-14 mt-10 rounded-2xl border border-purple-200/70 bg-white/75 p-8 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {language === "pt" ? "Quer validar na sua operação?" : language === "en" ? "Want to validate in your operation?" : "Voulez-vous valider dans votre operation ?"}
            </h3>
            <p className="mb-6 text-slate-600">
              {language === "pt" 
                ? "Veja a demonstração ou fale com um especialista para entender se o Purple Stock encaixa no seu fluxo de estoque."
                : language === "en"
                ? "Watch the demo or talk to a specialist to confirm if Purple Stock fits your inventory workflow."
                : "Voyez la demo ou parlez avec un specialiste pour verifier si Purple Stock s'adapte a votre flux de stock."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="transform rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700">
                <Link href="https://www.youtube.com/watch?v=fD4amz78t8c" target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  {language === "pt" ? "Ver demonstração" : language === "en" ? "Watch demo" : "Voir la demonstration"}
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-lg border-purple-300 bg-white/90 px-8 py-3 text-purple-700 hover:bg-purple-50">
                <Link href="https://api.whatsapp.com/send/?phone=5511995597242&text=Ol%C3%A1%21+Quero+entender+se+o+Purple+Stock+serve+para+minha+opera%C3%A7%C3%A3o.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {language === "pt" ? "Falar no WhatsApp" : language === "en" ? "Talk on WhatsApp" : "Parler sur WhatsApp"}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-200/70 pt-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center space-x-2 text-slate-500">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <p className="text-sm font-medium">Purple Stock</p>
            </div>
            <p className="mt-4 flex items-center text-sm text-slate-500 md:mt-0">
              {language === "pt" ? "Feito com" : language === "en" ? "Made with" : "Fait avec"} 
              <span className="mx-2 text-rose-500">♥</span>
              {language === "pt" ? "em São Paulo, Brasil" : language === "en" ? "in São Paulo, Brazil" : "à São Paulo, Brésil"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
