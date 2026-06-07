import Link from "next/link";
import Image from "next/image";
import { Clock3, ArrowUpRight } from "lucide-react";
import { slugifyTag } from "@/lib/blog";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPostMeta;
  featured?: boolean;
}) {
  const cover = post.coverImage ?? "/images/hero-photo-900x600.webp";

  if (featured) {
    return (
      <article className="ps-card group min-w-0 overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
        <div className="grid min-w-0 gap-0 lg:grid-cols-[1.1fr_1fr]">
          <Link
            href={`/blog/${post.slug}`}
            className="relative block min-h-48 overflow-hidden sm:min-h-56 lg:min-h-full"
          >
            <Image
              src={cover}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          <div className="flex min-w-0 flex-col justify-center p-4 sm:p-6 lg:p-10">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="ps-badge-violet px-2.5 py-0.5 normal-case tracking-normal">
                Em destaque
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h2 className="ps-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              <Link
                href={`/blog/${post.slug}`}
                className="transition-colors hover:text-brand-ui-primary"
              >
                {post.title}
              </Link>
            </h2>

            <p className="ps-lead mt-4 text-base md:text-lg">{post.excerpt}</p>

            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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

            <div className="mt-6">
              <Link
                href={`/blog/${post.slug}`}
                className="ps-link-editorial inline-flex items-center gap-2 text-sm font-semibold"
              >
                Ler artigo completo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="ps-card group flex min-w-0 flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
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

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2.5 text-xs text-slate-500">
          <span>{formatDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-slate-900 md:text-xl">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-brand-ui-primary"
          >
            {post.title}
          </Link>
        </h3>

        <p className="ps-lead mt-2 line-clamp-3 text-sm">{post.excerpt}</p>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${slugifyTag(tag)}`}
                className="ps-badge-violet px-2.5 py-0.5 text-[11px] normal-case tracking-normal transition-colors hover:bg-brand-ui-primary/15"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
