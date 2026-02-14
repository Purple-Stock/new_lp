import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Clock3 } from "lucide-react"
import { getAllPosts, getPostBySlug, slugifyTag } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type PageProps = {
  params: Promise<{ slug: string }>
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://purplestock.com.br"

  if (!post) {
    return { title: "Artigo não encontrado | Purple Stock" }
  }

  const image = post.meta.coverImage ?? "/images/hero-photo-900x600.webp"
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`
  const articleUrl = `${baseUrl}/blog/${post.meta.slug}`

  return {
    title: `${post.meta.title} | Purple Stock`,
    description: post.meta.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: articleUrl,
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [
        {
          url: imageUrl,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://purplestock.com.br"
  const articleUrl = `${baseUrl}/blog/${post.meta.slug}`
  const image = post.meta.coverImage ?? "/images/hero-photo-900x600.webp"
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.excerpt,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    author: {
      "@type": "Organization",
      name: post.meta.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Purple Stock",
    },
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    keywords: post.meta.tags.join(", "),
    image: [imageUrl],
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)]">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <Navbar />

      <main className="relative pt-24 pb-20">
        <article className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-10">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>

            <header className="mb-8 border-b border-gray-100 pb-8">
              <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span>{formatDate(post.meta.date)}</span>
                <span className="h-1 w-1 rounded-full bg-gray-400" />
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" />
                  {post.meta.readingTime}
                </span>
                <span className="h-1 w-1 rounded-full bg-gray-400" />
                <span>{post.meta.author}</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">{post.meta.title}</h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">{post.meta.excerpt}</p>

              {post.meta.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.meta.tags.map((tag) => (
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

              <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100">
                <Image
                  src={image}
                  alt={post.meta.title}
                  width={1200}
                  height={630}
                  className="h-auto w-full object-cover"
                />
              </div>
            </header>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
