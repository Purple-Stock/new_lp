"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getAllArticles } from "@/utils/markdown"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { useEffect, useState } from "react"
import type { Article } from "@/utils/markdown"

export default function ArticlesPage() {
  const { language } = useLanguage()
  const t = translations[language].nav
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getAllArticles()
      setArticles(fetchedArticles)
    }
    fetchArticles()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.articles}</h1>
          <p className="text-xl text-gray-600">
            {language === "pt" && "Aprenda sobre gestão de estoque, logística e melhores práticas para seu negócio"}
            {language === "en" && "Learn about inventory management, logistics, and best practices for your business"}
            {language === "fr" && "Apprenez la gestion des stocks, la logistique et les meilleures pratiques pour votre entreprise"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
} 