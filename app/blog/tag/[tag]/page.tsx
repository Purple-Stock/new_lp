import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, Hash, Clock3 } from "lucide-react"
import { getAllTagSlugs, getPostsByTagSlug, slugifyTag } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type PageProps = {
  params: Promise<{ tag: string }>
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export async function generateStaticParams() {
  const tagSlugs = await getAllTagSlugs()
  return tagSlugs.map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params
  const { posts, label } = await getPostsByTagSlug(tag)

  if (!posts.length) {
    return { title: "Tag não encontrada | Purple Stock" }
  }

  return {
    title: `Blog: ${label} | Purple Stock`,
    description: `Artigos sobre ${label} no blog da Purple Stock.`,
  }
}

export default async function BlogTagPage({ params }: PageProps) {
  const { tag } = await params
  const { posts, label } = await getPostsByTagSlug(tag)

  if (!posts.length) {
    notFound()
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)]">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <Navbar />

      <main className="relative pt-24 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-5xl rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-[0_25px_100px_-30px_rgba(59,7,100,0.35),0_10px_40px_-20px_rgba(0,0,0,0.1)] backdrop-blur-2xl md:p-12">
            <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
              <Hash className="h-4 w-4" />
              Tag
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">{label}</h1>
            <p className="mt-4 text-lg text-gray-600">
              {posts.length} artigo(s) relacionados a <span className="font-semibold text-purple-700">{label}</span>.
            </p>
          </header>

          <div className="grid gap-8">
            {posts.map((post) => {
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
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        <Link href={`/blog/${post.slug}`} className="hover:text-purple-700">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-gray-600">{post.excerpt}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {post.tags.map((item) => {
                          const itemSlug = slugifyTag(item)
                          return (
                            <Link
                              key={item}
                              href={`/blog/tag/${itemSlug}`}
                              className={`rounded-full px-3 py-1 text-xs font-medium ${
                                itemSlug === tag ? "bg-purple-700 text-white" : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                              }`}
                            >
                              {item}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
