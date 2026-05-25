import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BookOpen, ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { getAllPosts, slugifyTag } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { BlogSidebar } from "@/components/blog-sidebar";

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos práticos sobre controle de estoque, rastreabilidade e eficiência operacional.",
  alternates: {
    canonical: "/blog",
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

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
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)]">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <Navbar />

      <main className="relative pt-24 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
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
              Guias curtos, linguagem direta e foco em resultado para facilitar
              a leitura do cliente e apoiar melhorias de operação.
            </p>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            {/* Main content */}
            <div className="flex flex-col gap-8">
              {/* Featured post */}
              {featured && <BlogCard post={featured} featured />}

              {/* Grid of remaining posts */}
              {gridPosts.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2">
                  {gridPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="mt-4 flex items-center justify-center gap-3">
                  {normalizedPage > 1 ? (
                    <Link
                      href={
                        normalizedPage - 1 === 1
                          ? "/blog"
                          : `/blog?page=${normalizedPage - 1}`
                      }
                      className="inline-flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm hover:bg-purple-50 transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Anterior
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400">
                      <ArrowLeft className="h-4 w-4" />
                      Anterior
                    </span>
                  )}

                  <span className="rounded-xl border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700">
                    Página {normalizedPage} de {totalPages}
                  </span>

                  {normalizedPage < totalPages ? (
                    <Link
                      href={`/blog?page=${normalizedPage + 1}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm hover:bg-purple-50 transition-colors"
                    >
                      Próxima
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400">
                      Próxima
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </nav>
              )}
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block lg:sticky lg:top-28">
              <BlogSidebar />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
