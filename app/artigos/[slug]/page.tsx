import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getArticleBySlug, getAllArticles } from "@/utils/markdown"
import { Calendar, User, Tag, Clock, Share2, BookOpen, ArrowLeft, ExternalLink, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShareButton } from "./share-button"
import { ReadingProgress } from "./reading-progress"
import { MobileTOC } from "./mobile-toc"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://purplestock.com.br"
  const canonicalUrl = `${siteUrl}/artigos/${slug}`

  return {
    title: `${article.title} | Purple Stock`,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  const allArticles = await getAllArticles()
  
  // Get related articles (same tags, excluding current article)
  const relatedArticles = allArticles
    .filter(a => a.slug !== slug && a.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3)

  // Extract headings for table of contents
  const headings = article.content.match(/<h[2-3][^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-3]>/g) || []
  const toc = headings.map((heading) => {
    const text = heading.replace(/<[^>]*>/g, '')
    const level = heading.match(/<h([2-3])/)?.[1] || '2'
    const id = heading.match(/id="([^"]*)"/)?.[1] || ''
    return { text, level: parseInt(level), id }
  }).filter(item => item.id) // Only include items with valid IDs

  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = article.content.replace(/<[^>]*>/g, '').split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <ReadingProgress />
      
      {/* Article Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link href="/artigos" className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos artigos
            </Link>
          </div>
          
          <div className="max-w-4xl">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{readingTime} min de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Sumário
                </h3>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm transition-colors duration-200 hover:text-purple-600 ${
                        item.level === 3 ? 'ml-4 text-gray-600' : 'text-gray-700 font-medium'
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            {/* Mobile TOC Button */}
            <div className="lg:hidden mb-6">
              <MobileTOC toc={toc} />
            </div>

            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 lg:p-12">
              {/* Share Section */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Compartilhar:</span>
                  <ShareButton />
                </div>
                <div className="text-sm text-gray-500">
                  {wordCount.toLocaleString()} palavras
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg prose-purple max-w-none article-content article-spacing
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h1:text-4xl prose-h1:mb-10 prose-h1:mt-16 prose-h1:leading-tight
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-purple-700 prose-h2:leading-tight
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-purple-600 prose-h3:leading-tight
                  prose-h4:text-xl prose-h4:mt-10 prose-h4:mb-4 prose-h4:text-gray-800 prose-h4:leading-tight
                  prose-p:text-gray-700 prose-p:leading-8 prose-p:my-8 prose-p:text-lg
                  prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:border-b prose-a:border-purple-200 hover:prose-a:border-purple-400
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-ul:list-disc prose-ul:pl-8 prose-ul:my-10 prose-ul:space-y-3
                  prose-ol:list-decimal prose-ol:pl-8 prose-ol:my-10 prose-ol:space-y-3
                  prose-li:text-gray-700 prose-li:my-3 prose-li:leading-8 prose-li:text-lg
                  prose-blockquote:border-l-4 prose-blockquote:border-purple-300 prose-blockquote:pl-8 prose-blockquote:py-4 prose-blockquote:my-12 prose-blockquote:italic prose-blockquote:bg-purple-50 prose-blockquote:rounded-r-lg prose-blockquote:text-lg prose-blockquote:leading-8
                  prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-3 prose-code:py-1.5 prose-code:rounded-md prose-code:text-base prose-code:font-mono prose-code:border prose-code:border-purple-200
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-8 prose-pre:rounded-xl prose-pre:my-12 prose-pre:shadow-xl prose-pre:border prose-pre:border-gray-700 prose-pre:overflow-x-auto
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:my-12 prose-img:border prose-img:border-gray-200 prose-img:mx-auto
                  prose-hr:border-gray-300 prose-hr:my-16 prose-hr:border-2
                  prose-table:my-12 prose-table:w-full prose-table:border prose-table:border-gray-200 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
                  prose-th:bg-gray-50 prose-th:p-6 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-th:border-b prose-th:border-gray-200
                  prose-td:p-6 prose-td:border-b prose-td:border-gray-100 prose-td:text-gray-700 prose-td:align-top
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-em:text-gray-700 prose-em:italic
                  prose-ul:marker:text-purple-500 prose-ul:marker:text-lg
                  prose-ol:marker:text-purple-500 prose-ol:marker:text-lg prose-ol:marker:font-semibold
                  prose-li:marker:text-purple-500
                  prose-hr:my-16 prose-hr:border-gray-300 prose-hr:border-2
                  prose-figure:my-12
                  prose-figcaption:text-center prose-figcaption:text-gray-500 prose-figcaption:mt-4 prose-figcaption:text-sm
                  prose-dl:my-12
                  prose-dt:font-semibold prose-dt:text-gray-900 prose-dt:mb-2
                  prose-dd:text-gray-700 prose-dd:mb-6 prose-dd:pl-4 prose-dd:border-l prose-dd:border-gray-200
                  prose-address:my-8 prose-address:text-gray-600 prose-address:italic
                  prose-article:my-12
                  prose-section:my-12
                  prose-aside:my-12 prose-aside:bg-gray-50 prose-aside:p-6 prose-aside:rounded-lg prose-aside:border prose-aside:border-gray-200
                  prose-main:my-12
                  prose-header:my-12
                  prose-footer:my-12
                  prose-nav:my-12
                  prose-form:my-12
                  prose-fieldset:my-8
                  prose-legend:font-semibold prose-legend:text-gray-900 prose-legend:mb-4
                  prose-input:border-gray-300 prose-input:rounded-md prose-input:px-4 prose-input:py-2
                  prose-textarea:border-gray-300 prose-textarea:rounded-md prose-textarea:px-4 prose-textarea:py-2
                  prose-select:border-gray-300 prose-select:rounded-md prose-select:px-4 prose-select:py-2
                  prose-button:bg-purple-600 prose-button:text-white prose-button:px-6 prose-button:py-2 prose-button:rounded-md prose-button:font-medium prose-button:hover:bg-purple-700
                  prose-label:font-medium prose-label:text-gray-700 prose-label:mb-2
                  prose-fieldset:border-gray-200 prose-fieldset:rounded-lg prose-fieldset:p-6
                  prose-legend:px-2 prose-legend:py-1 prose-legend:bg-white prose-legend:rounded prose-legend:border prose-legend:border-gray-200
                  prose-input:focus:ring-2 prose-input:focus:ring-purple-500 prose-input:focus:border-purple-500
                  prose-textarea:focus:ring-2 prose-textarea:focus:ring-purple-500 prose-textarea:focus:border-purple-500
                  prose-select:focus:ring-2 prose-select:focus:ring-purple-500 prose-select:focus:border-purple-500
                  prose-button:focus:ring-2 prose-button:focus:ring-purple-500 prose-button:focus:ring-offset-2
                  prose-button:transition-colors prose-button:duration-200
                  prose-a:transition-colors prose-a:duration-200
                  prose-img:transition-transform prose-img:duration-200 prose-img:hover:scale-105
                  prose-blockquote:transition-colors prose-blockquote:duration-200
                  prose-code:transition-colors prose-code:duration-200
                  prose-pre:transition-all prose-pre:duration-200
                  prose-table:transition-shadow prose-table:duration-200 prose-table:hover:shadow-md
                  prose-th:transition-colors prose-th:duration-200
                  prose-td:transition-colors prose-td:duration-200
                  prose-ul:transition-all prose-ul:duration-200
                  prose-ol:transition-all prose-ol:duration-200
                  prose-li:transition-colors prose-li:duration-200
                  prose-headings:transition-colors prose-headings:duration-200
                  prose-p:transition-colors prose-p:duration-200
                  prose-strong:transition-colors prose-strong:duration-200
                  prose-em:transition-colors prose-em:duration-200
                  prose-hr:transition-colors prose-hr:duration-200
                  prose-figure:transition-all prose-figure:duration-200
                  prose-figcaption:transition-colors prose-figcaption:duration-200
                  prose-dl:transition-all prose-dl:duration-200
                  prose-dt:transition-colors prose-dt:duration-200
                  prose-dd:transition-colors prose-dd:duration-200
                  prose-address:transition-colors prose-address:duration-200
                  prose-article:transition-all prose-article:duration-200
                  prose-section:transition-all prose-section:duration-200
                  prose-aside:transition-all prose-aside:duration-200
                  prose-main:transition-all prose-main:duration-200
                  prose-header:transition-all prose-header:duration-200
                  prose-footer:transition-all prose-footer:duration-200
                  prose-nav:transition-all prose-nav:duration-200
                  prose-form:transition-all prose-form:duration-200
                  prose-fieldset:transition-all prose-fieldset:duration-200
                  prose-legend:transition-colors prose-legend:duration-200
                  prose-input:transition-all prose-input:duration-200
                  prose-textarea:transition-all prose-textarea:duration-200
                  prose-select:transition-all prose-select:duration-200
                  prose-label:transition-colors prose-label:duration-200"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Artigos Relacionados</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.slug}
                      href={`/artigos/${relatedArticle.slug}`}
                      className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300"
                    >
                      <div className="h-32 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {relatedArticle.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {relatedArticle.description}
                        </p>
                        <div className="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700 transition-colors duration-200">
                          Ler artigo
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Articles */}
            <div className="mt-16 text-center">
              <Link href="/artigos">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  Ver todos os artigos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 
