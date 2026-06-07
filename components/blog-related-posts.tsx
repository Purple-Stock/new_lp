import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3 } from "lucide-react";
import { getRelatedPosts } from "@/lib/blog";

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
    <section className="mt-8 min-w-0 sm:mt-12">
      <div className="ps-section-surface min-w-0 p-4 sm:p-6 md:p-8">
        <h2 className="ps-display flex items-center gap-2 text-xl sm:text-2xl">
          <span className="inline-block h-6 w-1 rounded-full bg-brand-ui-primary" />
          Leia também
        </h2>

        <div className="mt-6 grid min-w-0 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {posts.map((post) => {
            const cover = post.coverImage ?? "/images/hero-photo-900x600.webp";
            return (
              <article
                key={post.slug}
                className="ps-card group flex min-w-0 flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span>{formatDate(post.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="inline-flex items-center gap-1">
                      <Clock3 className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug text-slate-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-brand-ui-primary"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="ps-lead mt-2 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="ps-link-editorial inline-flex items-center gap-1 text-xs font-semibold"
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
      </div>
    </section>
  );
}
