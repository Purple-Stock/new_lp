import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";
import { BlogSidebar } from "@/components/blog-sidebar";
import { BlogLayout } from "@/components/blog-layout";
import { BlogPageHeader } from "@/components/blog-page-header";

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos práticos sobre controle de estoque, rastreabilidade e eficiência operacional.",
  alternates: {
    canonical: "/blog",
  },
};

type PageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const posts = await getAllPosts();
  const currentPage = Number.isNaN(Number(page))
    ? 1
    : Math.max(1, Number(page ?? "1"));
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const normalizedPage = Math.min(currentPage, totalPages);
  const start = (normalizedPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  const hasFeatured = normalizedPage === 1 && paginatedPosts.length > 0;
  const featured = hasFeatured ? paginatedPosts[0] : null;
  const gridPosts = hasFeatured ? paginatedPosts.slice(1) : paginatedPosts;

  return (
    <BlogLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlogPageHeader
          badge={
            <>
              <BookOpen className="h-4 w-4" />
              Blog Purple Stock
            </>
          }
          title="Conteúdo para decisões mais rápidas"
          description="Guias curtos, linguagem direta e foco em resultado para facilitar a leitura do cliente e apoiar melhorias de operação."
        />

        <div className="grid min-w-0 gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="flex min-w-0 flex-col gap-8">
            {featured && <BlogCard post={featured} featured />}

            {gridPosts.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2">
                {gridPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <nav className="mt-4 flex flex-wrap items-center justify-center gap-3">
                {normalizedPage > 1 ? (
                  <Link
                    href={
                      normalizedPage - 1 === 1
                        ? "/blog"
                        : `/blog?page=${normalizedPage - 1}`
                    }
                    className="ps-btn-outline inline-flex items-center gap-2 px-4 py-2 text-sm"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Anterior
                  </Link>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-brand-border-soft bg-brand-surface-soft px-4 py-2 text-sm font-semibold text-slate-400">
                    <ArrowLeft className="h-4 w-4" />
                    Anterior
                  </span>
                )}

                <span className="rounded-lg border border-brand-border-soft bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  Página {normalizedPage} de {totalPages}
                </span>

                {normalizedPage < totalPages ? (
                  <Link
                    href={`/blog?page=${normalizedPage + 1}`}
                    className="ps-btn-outline inline-flex items-center gap-2 px-4 py-2 text-sm"
                  >
                    Próxima
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-brand-border-soft bg-brand-surface-soft px-4 py-2 text-sm font-semibold text-slate-400">
                    Próxima
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </nav>
            )}
          </div>

          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <BlogSidebar />
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
