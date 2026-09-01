import Link from "next/link";
import { BookOpen } from "lucide-react";

type GlossaryRelatedPost = {
  slug: string;
  label: string;
};

type GlossaryRelatedPostsProps = {
  posts: GlossaryRelatedPost[];
};

export function GlossaryRelatedPosts({ posts }: GlossaryRelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">
        Guias relacionados
      </h2>
      <div className="flex flex-wrap gap-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-violet-800 transition-colors hover:bg-violet-200"
          >
            <BookOpen className="h-4 w-4" />
            {post.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
