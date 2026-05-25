import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3 } from "lucide-react";
import { getRelatedPosts, slugifyTag } from "@/lib/blog";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export async function BlogRelatedPosts({ slug }: { slug: string }) {
  const posts = await getRelatedPosts(slug, 3);

  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-gray-100 pt-12">
      <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-900">
        <span className="inline-block h-6 w-1 rounded-full bg-purple-600" />
        Leia também
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const cover = post.coverImage ?? "/images/hero-photo-900x600.webp";
          return (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={cover}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                  <span>{formatDate(post.date)}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-base font-bold leading-snug text-gray-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-purple-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 hover:text-purple-800 transition-colors"
                  >
                    Ler artigo
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
