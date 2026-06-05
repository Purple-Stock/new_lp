import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Hash } from "lucide-react";
import { getAllTagSlugs, getPostsByTagSlug } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { BlogCard } from "@/components/blog-card";
import { BlogSidebar } from "@/components/blog-sidebar";
import { BlogLayout } from "@/components/blog-layout";
import { BlogPageHeader } from "@/components/blog-page-header";

type PageProps = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  const tagSlugs = await getAllTagSlugs();
  return tagSlugs.map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const { posts, label } = await getPostsByTagSlug(tag);
  const baseUrl = getSiteUrl();

  if (!posts.length) {
    return { title: "Tag não encontrada | Purple Stock" };
  }

  return {
    title: `Blog: ${label}`,
    description: `Artigos sobre ${label} no blog da Purple Stock.`,
    alternates: {
      canonical: `${baseUrl}/blog/tag/${tag}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function BlogTagPage({ params }: PageProps) {
  const { tag } = await params;
  const { posts, label } = await getPostsByTagSlug(tag);

  if (!posts.length) {
    notFound();
  }

  return (
    <BlogLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlogPageHeader
          before={
            <Link
              href="/blog"
              className="ps-link-editorial inline-flex items-center gap-2 text-sm font-semibold"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>
          }
          badge={
            <>
              <Hash className="h-4 w-4" />
              Tag
            </>
          }
          title={label}
          description={
            <>
              {posts.length} artigo(s) relacionados a{" "}
              <span className="font-semibold text-brand-ui-primary">
                {label}
              </span>
              .
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="hidden lg:block lg:sticky lg:top-28">
            <BlogSidebar />
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
