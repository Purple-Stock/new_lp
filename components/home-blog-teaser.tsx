import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import type { BlogPostMeta } from "@/lib/blog";

type HomeBlogTeaserProps = {
  posts: BlogPostMeta[];
};

export function HomeBlogTeaser({ posts }: HomeBlogTeaserProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Guias de controle de estoque
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Artigos práticos sobre almoxarifado, QR Code e inventário.
          </p>
        </div>
        <Link
          href="/blog"
          className="text-sm font-semibold text-violet-700 hover:underline"
        >
          Ver todos
        </Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
