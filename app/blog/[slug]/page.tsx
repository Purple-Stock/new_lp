import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Clock3 } from "lucide-react";
import { getAllPosts, getPostBySlug, slugifyTag } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { BlogPostCta } from "@/components/blog-post-cta";
import { BlogSidebar } from "@/components/blog-sidebar";
import { BlogRelatedPosts } from "@/components/blog-related-posts";
import { BlogLayout } from "@/components/blog-layout";

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
    <BlogLayout showReadingProgress>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <article className="flex flex-col">
            <div className="ps-panel overflow-hidden">
              <div className="ps-panel-chrome flex items-center gap-2 px-4 py-2 sm:px-5">
                <span className="text-[11px] font-medium text-slate-500">
                  Purple Stock · Editorial
                </span>
              </div>

              <div className="p-6 md:p-10">
                <Link
                  href="/blog"
                  className="ps-link-editorial mb-8 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para o blog
                </Link>

                <header className="mb-8 border-b border-brand-border-soft pb-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span className="ps-badge-violet px-2.5 py-0.5 normal-case tracking-normal">
                      Artigo
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{formatDate(post.meta.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="inline-flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5" />
                      {post.meta.readingTime}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{post.meta.author}</span>
                  </div>

                  <h1 className="ps-display text-3xl md:text-4xl lg:text-5xl">
                    {post.meta.title}
                  </h1>
                  <p className="ps-lead mt-4 max-w-3xl text-lg">
                    {post.meta.excerpt}
                  </p>
                  <BlogPostCta slug={post.meta.slug} />

                  {post.meta.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.meta.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${slugifyTag(tag)}`}
                          className="ps-badge-violet px-3 py-1 normal-case tracking-normal transition-colors hover:bg-brand-ui-primary/15"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 overflow-hidden rounded-xl border border-brand-border-soft">
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

            <BlogRelatedPosts slug={slug} />
          </article>

          <div className="hidden lg:block lg:sticky lg:top-28">
            <BlogSidebar excludeSlug={slug} />
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
