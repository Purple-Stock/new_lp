"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getAllArticles } from "@/utils/markdown"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { useEffect, useState } from "react"
import type { Article } from "@/utils/markdown"
import { Search, Calendar, User, Tag, ArrowRight, BookOpen, Star, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ArticlesPage() {
  const { language } = useLanguage()
  const t = translations[language].nav
  const [articles, setArticles] = useState<Article[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string>("")

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getAllArticles()
      setArticles(fetchedArticles)
    }
    fetchArticles()
  }, [])

  // Get unique tags from all articles
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)))

  // Filter articles based on search term and selected tag
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesTag = selectedTag === "" || article.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  // Get featured article (most recent)
  const featuredArticle = articles[0]
  const regularArticles = filteredArticles.filter(article => article.slug !== featuredArticle?.slug)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">
                {language === "pt" && "Conhecimento em Gestão"}
                {language === "en" && "Management Knowledge"}
                {language === "fr" && "Connaissances en Gestion"}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.articles}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {language === "pt" && "Aprenda sobre gestão de estoque, logística e melhores práticas para seu negócio"}
              {language === "en" && "Learn about inventory management, logistics, and best practices for your business"}
              {language === "fr" && "Apprenez la gestion des stocks, la logistique et les meilleures pratiques pour votre entreprise"}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={
                  language === "pt" ? "Buscar artigos..." :
                  language === "en" ? "Search articles..." :
                  "Rechercher des articles..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <Button
              onClick={() => setSelectedTag("")}
              variant={selectedTag === "" ? "default" : "outline"}
              className="h-12 px-6 bg-purple-600 hover:bg-purple-700 border-purple-600"
            >
              {language === "pt" ? "Todos" : language === "en" ? "All" : "Tous"}
            </Button>
          </div>
          
          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                className={`${
                  selectedTag === tag 
                    ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-600" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Tag className="w-4 h-4 mr-2" />
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && !searchTerm && !selectedTag && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">
                {language === "pt" ? "Artigo em Destaque" : language === "en" ? "Featured Article" : "Article en Vedette"}
              </h2>
            </div>
            <Link
              href={`/artigos/${featuredArticle.slug}`}
              className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-purple-400" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {featuredArticle.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-purple-50 text-purple-600 border-purple-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredArticle.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-200">
                    <span className="text-lg">
                      {language === "pt" ? "Ler artigo completo" : language === "en" ? "Read full article" : "Lire l'article complet"}
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            {language === "pt" ? "Mostrando" : language === "en" ? "Showing" : "Affichage de"} {regularArticles.length} {language === "pt" ? "artigos" : language === "en" ? "articles" : "articles"}
            {selectedTag && (
              <span className="text-purple-600 font-medium">
                {" "}{language === "pt" ? "em" : language === "en" ? "in" : "dans"} "{selectedTag}"
              </span>
            )}
          </p>
        </div>

        {/* Articles Grid */}
        {regularArticles.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {language === "pt" ? "Nenhum artigo encontrado" : language === "en" ? "No articles found" : "Aucun article trouvé"}
            </h3>
            <p className="text-gray-600">
              {language === "pt" ? "Tente ajustar sua busca ou filtros" : language === "en" ? "Try adjusting your search or filters" : "Essayez d'ajuster votre recherche ou filtres"}
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/artigos/${article.slug}`}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Article Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-purple-400" />
                </div>
                
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-full border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{article.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-200">
                    <span className="text-sm">
                      {language === "pt" ? "Ler artigo" : language === "en" ? "Read article" : "Lire l'article"}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
} 