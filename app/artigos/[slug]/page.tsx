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

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
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
                className="prose prose-lg prose-purple max-w-none article-content
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-purple-700
                  prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-purple-600
                  prose-p:text-gray-700 prose-p:leading-8 prose-p:my-6
                  prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6
                  prose-li:text-gray-700 prose-li:my-2 prose-li:leading-7
                  prose-blockquote:border-l-4 prose-blockquote:border-purple-200 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:bg-purple-50 prose-blockquote:rounded-r-lg
                  prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-medium
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:my-8 prose-pre:shadow-lg
                  prose-img:rounded-lg prose-img:shadow-md prose-img:my-8 prose-img:border prose-img:border-gray-200
                  prose-hr:border-gray-200 prose-hr:my-12
                  prose-table:my-8 prose-table:w-full prose-table:border prose-table:border-gray-200
                  prose-th:bg-gray-50 prose-th:p-4 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
                  prose-td:p-4 prose-td:border-t prose-td:border-gray-200 prose-td:text-gray-700
                  prose-strong:text-gray-900
                  prose-em:text-gray-700
                  prose-ul:marker:text-purple-500
                  prose-ol:marker:text-purple-500
                  prose-li:marker:text-purple-500"
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