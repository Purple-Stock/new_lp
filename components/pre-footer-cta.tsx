"use client"

import { Zap, ArrowRight, CheckCircle, Star, Users, Clock, Play } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PreFooterCTA() {
  const { language } = useLanguage()
  const title = language === "pt" ? "Simplifique sua Gestão de Inventário" : language === "en" ? "Simplify your Inventory Management" : "Simplifiez votre Gestion d'Inventaire"
  const subtitle = language === "pt" ? "Transforme seu negócio com o sistema mais inteligente de controle de estoque" : language === "en" ? "Transform your business with the smartest inventory control system" : "Transformez votre entreprise avec le système de contrôle des stocks le plus intelligent"
  const buttonText = language === "pt" ? "Teste gratuito de 7 dias" : language === "en" ? "7-day free trial" : "Essai gratuit de 7 jours"

  const benefits = [
    {
      icon: CheckCircle,
      text: language === "pt" ? "Configuração em 5 minutos" : language === "en" ? "Setup in 5 minutes" : "Configuration en 5 minutes",
      color: "text-emerald-600"
    },
    {
      icon: Users,
      text: language === "pt" ? "Suporte 24/7 incluído" : language === "en" ? "24/7 support included" : "Support 24/7 inclus",
      color: "text-indigo-600"
    },
    {
      icon: Clock,
      text: language === "pt" ? "Resultados imediatos" : language === "en" ? "Immediate results" : "Résultats immédiats",
      color: "text-amber-600"
    }
  ]

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.16),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.2),transparent_52%),radial-gradient(circle_at_50%_100%,rgba(147,112,219,0.12),transparent_42%),linear-gradient(180deg,#f8f6ff,#f3ede7)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-[0_25px_100px_-30px_rgba(59,7,100,0.3),0_10px_40px_-20px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-10 lg:p-12">
          <div className="mb-12">
            <div className="mb-7 inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
            <Star className="mr-2 h-4 w-4" />
            {language === "pt" ? "Oferta Limitada" : language === "en" ? "Limited Offer" : "Offre Limitée"}
          </div>
          
            <h2 className="mb-5 text-4xl font-bold leading-tight text-slate-900 lg:text-6xl">
            {title}
          </h2>
          
            <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-slate-600 lg:text-2xl">
            {subtitle}
          </p>
          
            <div className="mb-12 flex flex-wrap justify-center gap-3 sm:gap-4">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 rounded-full border border-purple-200/80 bg-white/90 px-4 py-2 shadow-sm">
                <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
              </div>
            ))}
            </div>
          </div>

          <div className="mb-14">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="https://app.purplestock.com.br/">
                <Button size="lg" className="transform rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-10 py-6 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-purple-700 hover:to-purple-800 hover:shadow-xl">
                  <Zap className="mr-3 h-6 w-6" />
                {buttonText}
                  <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            
            <Link href="https://app.purplestock.com.br/">
                <Button size="lg" className="rounded-xl border-2 border-purple-600 bg-white px-10 py-6 text-xl font-semibold text-purple-700 transition-all duration-300 hover:bg-purple-50">
                  <Play className="mr-3 h-6 w-6" />
                {language === "pt" ? "Ver Demonstração" : language === "en" ? "Watch Demo" : "Voir la Démo"}
              </Button>
            </Link>
          </div>
          
            <p className="mt-4 text-sm text-slate-500">
            {language === "pt" 
              ? "Sem cartão de crédito • Cancelamento a qualquer momento • Suporte completo incluído"
              : language === "en"
              ? "No credit card • Cancel anytime • Full support included"
              : "Pas de carte de crédit • Annulation à tout moment • Support complet inclus"
            }
          </p>
        </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-200/40 to-indigo-200/30 blur-2xl" />
            <div className="relative rounded-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_60px_-35px_rgba(76,29,149,0.4)] backdrop-blur-xl sm:p-8">
              <Image
                src="/images/app-items-list.png"
                alt="Purple Stock Platform Interface"
                width={1200}
                height={600}
                className="h-auto w-full rounded-2xl border border-slate-200/70 shadow-lg"
                priority
              />
              
              <div className="absolute right-8 top-8 rounded-xl border border-purple-200/70 bg-white/95 p-4 shadow-md">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-xs text-gray-600">{language === "pt" ? "Uptime" : language === "en" ? "Uptime" : "Disponibilité"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-purple-200/70 pt-8">
            <p className="mb-6 text-sm text-slate-500">
            {language === "pt" ? "Já confiado por empresas líderes:" : language === "en" ? "Already trusted by leading companies:" : "Déjà approuvé par des entreprises leaders:"}
          </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                <div className="text-xs text-slate-500">{language === "pt" ? "Avaliação" : language === "en" ? "Rating" : "Évaluation"}</div>
              </div>
              <div className="h-8 w-px bg-purple-200"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-xs text-slate-500">{language === "pt" ? "Suporte" : language === "en" ? "Support" : "Support"}</div>
              </div>
              <div className="h-8 w-px bg-purple-200"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900">5min</div>
                <div className="text-xs text-slate-500">{language === "pt" ? "Setup" : language === "en" ? "Setup" : "Configuration"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
