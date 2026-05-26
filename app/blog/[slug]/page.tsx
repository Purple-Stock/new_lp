import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Clock3, Share2 } from "lucide-react";
import { getAllPosts, getPostBySlug, slugifyTag } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogPostCta } from "@/components/blog-post-cta";
import { BlogReadingProgress } from "@/components/blog-reading-progress";
import { BlogSidebar } from "@/components/blog-sidebar";
import { BlogRelatedPosts } from "@/components/blog-related-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const baseUrl = getSiteUrl();

  if (!post) {
    return { title: "Artigo não encontrado | Purple Stock" };
  }

  const image = post.meta.coverImage ?? "/images/hero-photo-900x600.webp";
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  const articleUrl = `${baseUrl}/blog/${post.meta.slug}`;

  return {
    title: post.meta.title,
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
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = getSiteUrl();
  const articleUrl = `${baseUrl}/blog/${post.meta.slug}`;
  const image = post.meta.coverImage ?? "/images/hero-photo-900x600.webp";
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
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
  };

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          name: "Blog",
          item: `${baseUrl}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.meta.title,
          item: articleUrl,
        },
      ],
    },
    articleSchema,
  ];

  if (post.meta.faq && post.meta.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.meta.faq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)]">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <BlogReadingProgress />
      <Navbar />

      <main className="relative pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            {/* Main article */}
            <article className="flex flex-col">
              <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-2xl backdrop-blur-xl">
                <div className="p-6 md:p-10">
                  <Link
                    href="/blog"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar para o blog
                  </Link>

                  <header className="mb-8 border-b border-gray-100 pb-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                        Artigo
                      </span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <span>{formatDate(post.meta.date)}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5" />
                        {post.meta.readingTime}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <span>{post.meta.author}</span>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                      {post.meta.title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                      {post.meta.excerpt}
                    </p>
                    <BlogPostCta slug={post.meta.slug} />

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
                        priority
                      />
                    </div>
                  </header>

                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(schemas),
                    }}
                  />
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>

              {/* Related Posts */}
              <BlogRelatedPosts slug={slug} />
            </article>

            {/* Sidebar */}
            <div className="hidden lg:block lg:sticky lg:top-28">
              <BlogSidebar excludeSlug={slug} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
