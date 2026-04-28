import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BookOpen, ChevronRight, MessageCircle, ArrowRight } from "lucide-react"
import { glossaryTerms, type GlossaryTerm } from "@/data/glossary"
import { getSiteUrl } from "@/lib/site"
import { buildWhatsAppUrl } from "@/lib/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type PageProps = {
  params: Promise<{ slug: string }>
}

const categoryLabels: Record<GlossaryTerm["category"], string> = {
  inventory: "Inventário",
  logistics: "Logística",
  finance: "Finanças",
  management: "Gestão",
  technology: "Tecnologia",
}

const featureLabels: Record<string, string> = {
  "analytics-reporting": "Analytics e Relatórios",
  "barcoding": "Código de Barras",
  "clothing-manufacturing": "Confecção e Vestuário",
  "equipment-management": "Gestão de Equipamentos",
  "factory-management": "Gestão de Fábrica",
  "inventory-app": "App de Inventário",
  "inventory-control": "Controle de Estoque",
  "purchase-sales": "Compras e Vendas",
  "qr-code-management": "Gestão QR Code",
  "warehouse-control": "Controle de Armazém",
}

const industryLabels: Record<string, string> = {
  "atacado": "Atacado",
  "varejo": "Varejo",
  "manufatura": "Manufatura",
  "logistica": "Logística",
  "automotivo": "Automotivo",
  "food": "Alimentos & Bebidas",
  "restaurantes": "Restaurantes",
  "electrical": "Elétrico",
  "construction": "Construção",
  "pharmaceutical": "Farmacêutico",
  "beauty": "Beleza",
  "commerce": "Comércio",
  "education": "Educação",
  "technology": "Tecnologia",
  "audiovisual": "Audiovisual",
  "events": "Eventos",
  "fashion": "Moda",
}

const categoryColors: Record<GlossaryTerm["category"], string> = {
  inventory: "bg-blue-100 text-blue-700",
  logistics: "bg-green-100 text-green-700",
  finance: "bg-purple-100 text-purple-700",
  management: "bg-orange-100 text-orange-700",
  technology: "bg-red-100 text-red-700",
}

function findBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug)
}

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const term = findBySlug(slug)
  const baseUrl = getSiteUrl()

  if (!term) {
    return { title: "Termo não encontrado | Glossário Purple Stock" }
  }

  const termUrl = `${baseUrl}/glossario/${term.slug}`

  return {
    title: `${term.term} — Glossário de Estoque | Purple Stock`,
    description: term.shortDefinition || undefined,
    alternates: {
      canonical: termUrl,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: termUrl,
      title: `${term.term} — Glossário de Estoque | Purple Stock`,
      description: term.shortDefinition || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${term.term} — Glossário de Estoque | Purple Stock`,
      description: term.shortDefinition || undefined,
    },
  }
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params
  const term = findBySlug(slug)

  if (!term) {
    notFound()
  }

  const relatedTermsData = term.relatedTerms
    .map((s) => findBySlug(s))
    .filter(Boolean) as GlossaryTerm[]

  const baseUrl = getSiteUrl()
  const termUrl = `${baseUrl}/glossario/${term.slug}`

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glossário",
        item: `${baseUrl}/glossario`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: term.term,
        item: termUrl,
      },
    ],
  }

  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.shortDefinition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossário de Estoque",
      url: `${baseUrl}/glossario`,
    },
    url: termUrl,
  }

  const hasContent = !!term.definition
  const hasExample = !!term.example
  const hasFormula = !!term.formula
  const hasFaq = term.faq.some((f) => f.question || f.answer)
  const hasRelatedTerms = relatedTermsData.length > 0
  const hasRelatedFeatures = (term.relatedFeatures?.length ?? 0) > 0
  const hasRelatedIndustries = (term.relatedIndustries?.length ?? 0) > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
      />
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/glossario" className="hover:text-purple-600 transition-colors">
            Glossário
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{term.term}</span>
        </nav>

        {/* Back link */}
        <Link
          href="/glossario"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao glossário
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className={`${categoryColors[term.category]} border-0`}>
              {categoryLabels[term.category]}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{term.term}</h1>
          {term.shortDefinition && (
            <p className="text-lg text-gray-600 leading-relaxed">{term.shortDefinition}</p>
          )}
        </div>

        {/* Definição completa */}
        {hasContent && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              O que é {term.term}?
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {term.definition}
            </div>
          </section>
        )}

        {/* Exemplo prático */}
        {hasExample && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exemplo prático</h2>
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Caso real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 leading-relaxed whitespace-pre-line">
                  {term.example}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Fórmula */}
        {hasFormula && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fórmula</h2>
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="py-6">
                <div className="font-mono text-lg bg-white rounded-lg px-6 py-4 border border-purple-100 mb-4 text-center text-purple-800">
                  {term.formula}
                </div>
                {term.formulaExplanation && (
                  <p className="text-gray-700 text-sm whitespace-pre-line">
                    {term.formulaExplanation}
                  </p>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Termos relacionados */}
        {hasRelatedTerms && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termos relacionados</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedTermsData.map((related) => (
                <Link
                  key={related.slug}
                  href={`/glossario/${related.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow border-purple-100 hover:border-purple-200 h-full">
                    <CardContent className="py-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{related.term}</p>
                          {related.shortDefinition && (
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                              {related.shortDefinition}
                            </p>
                          )}
                        </div>
                        <Badge
                          className={`${categoryColors[related.category]} border-0 shrink-0`}
                        >
                          {categoryLabels[related.category]}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Features relacionadas */}
        {hasRelatedFeatures && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Funcionalidades relacionadas
            </h2>
            <div className="flex flex-wrap gap-3">
              {term.relatedFeatures!.map((feature) => (
                <Link
                  key={feature}
                  href={`/features/${feature}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  {featureLabels[feature] ?? feature}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Indústrias relacionadas */}
        {hasRelatedIndustries && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indústrias relacionadas</h2>
            <div className="flex flex-wrap gap-3">
              {term.relatedIndustries!.map((industry) => (
                <Link
                  key={industry}
                  href={`/industrias/${industry}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                >
                  {industryLabels[industry] ?? industry}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {hasFaq && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {term.faq
                .filter((f) => f.question)
                .map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-purple-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="py-8 text-center">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quer aplicar esse conhecimento na prática?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                O Purple Stock ajuda sua equipe a dominar o estoque com controle total, relatórios
                inteligentes e alertas automáticos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="https://app.purplestock.com.br/">
                  <Button className="bg-purple-700 text-white hover:bg-purple-800">
                    Testar Purple Stock grátis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={buildWhatsAppUrl("Olá! Vim do glossário e quero entender como implantar o Purple Stock.")}>
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar com especialista
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  )
}
