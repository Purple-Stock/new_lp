import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getArticleBySlug, getAllArticles } from "@/utils/markdown"

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-16">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="font-medium">{article.author}</span>
              <span>•</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-purple max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-gray-600 prose-p:leading-8 prose-p:my-8
              prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:list-disc prose-ul:pl-6 prose-ul:my-8
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-8
              prose-li:text-gray-600 prose-li:my-3 prose-li:leading-8
              prose-blockquote:border-l-4 prose-blockquote:border-purple-200 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-8 prose-blockquote:italic
              prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:my-8
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
              prose-hr:border-gray-200 prose-hr:my-12
              prose-table:my-8 prose-table:w-full
              prose-th:bg-gray-50 prose-th:p-4 prose-th:text-left
              prose-td:p-4 prose-td:border-t prose-td:border-gray-200"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
      <Footer />
    </div>
  )
} 