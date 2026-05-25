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
      <article className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
          <Link
            href={`/blog/${post.slug}`}
            className="relative block min-h-64 overflow-hidden md:min-h-full"
          >
            <Image
              src={cover}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <div className="flex flex-col justify-center p-6 md:p-10">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                Em destaque
              </span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-purple-700 transition-colors"
              >
                {post.title}
              </Link>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              {post.excerpt}
            </p>

            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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

            <div className="mt-6">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors"
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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
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

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2.5 text-xs text-gray-500">
          <span>{formatDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-gray-900 md:text-xl">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-purple-700 transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${slugifyTag(tag)}`}
                className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[11px] font-medium text-purple-700 transition-colors hover:bg-purple-100"
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
