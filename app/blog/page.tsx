import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { BookOpen, ArrowRight, Clock3 } from "lucide-react"
import { getAllPosts, slugifyTag } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const POSTS_PER_PAGE = 10

export const metadata: Metadata = {
  title: "Blog | Purple Stock",
  description: "Artigos práticos sobre controle de estoque, rastreabilidade e eficiência operacional.",
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

type PageProps = {
  searchParams: Promise<{ page?: string }>
}

export default async function BlogPage({ searchParams }: PageProps) {
  const { page } = await searchParams
  const posts = await getAllPosts()
  const currentPage = Number.isNaN(Number(page)) ? 1 : Math.max(1, Number(page ?? "1"))
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  const normalizedPage = Math.min(currentPage, totalPages)
  const start = (normalizedPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)]">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <Navbar />

      <main className="relative pt-24 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-5xl rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-[0_25px_100px_-30px_rgba(59,7,100,0.35),0_10px_40px_-20px_rgba(0,0,0,0.1)] backdrop-blur-2xl md:p-12">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
              <BookOpen className="h-4 w-4" />
              Blog Purple Stock
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                Conteúdo para decisões mais rápidas
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Guias curtos, linguagem direta e foco em resultado para facilitar a leitura do cliente e apoiar melhorias de operação.
            </p>
          </header>

          <div className="grid gap-8">
            {paginatedPosts.map((post) => {
              const cover = post.coverImage ?? "/images/hero-photo-900x600.webp"
              return (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="grid gap-0 md:grid-cols-[320px_1fr]">
                    <Link href={`/blog/${post.slug}`} className="relative block min-h-56 overflow-hidden">
                      <Image src={cover} alt={post.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    </Link>

                    <div className="p-6 md:p-8">
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <span>{formatDate(post.date)}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-400" />
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-3.5 w-3.5" />
                          {post.readingTime}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-gray-400" />
                        <span>{post.author}</span>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        <Link href={`/blog/${post.slug}`} className="hover:text-purple-700">
                          {post.title}
                        </Link>
                      </h2>

                      <p className="mt-3 text-base leading-relaxed text-gray-600">{post.excerpt}</p>

                      {post.tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Link
                              key={tag}
                              href={`/blog/tag/${slugifyTag(tag)}`}
                              className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 transition-colors hover:bg-purple-100"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      )}

                      <div className="mt-6">
                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800">
                          Ler artigo completo
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {totalPages > 1 && (
            <nav className="mt-12 flex items-center justify-center gap-3">
              {normalizedPage > 1 ? (
                <Link
                  href={normalizedPage - 1 === 1 ? "/blog" : `/blog?page=${normalizedPage - 1}`}
                  className="rounded-xl border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm hover:bg-purple-50"
                >
                  Anterior
                </Link>
              ) : (
                <span className="rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400">Anterior</span>
              )}

              <span className="rounded-xl border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700">
                Página {normalizedPage} de {totalPages}
              </span>

              {normalizedPage < totalPages ? (
                <Link
                  href={`/blog?page=${normalizedPage + 1}`}
                  className="rounded-xl border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm hover:bg-purple-50"
                >
                  Próxima
                </Link>
              ) : (
                <span className="rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400">Próxima</span>
              )}
            </nav>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
