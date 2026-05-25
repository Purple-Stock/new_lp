import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Hash, TrendingUp } from "lucide-react";
import { getAllPosts, getPopularTags, slugifyTag } from "@/lib/blog";
import { Button } from "@/components/ui/button";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
  }).format(new Date(date));
}

export async function BlogSidebar({ excludeSlug }: { excludeSlug?: string }) {
  const [recentPosts, popularTags] = await Promise.all([
    getAllPosts(),
    getPopularTags(10),
  ]);

  const filtered = excludeSlug
    ? recentPosts.filter((p) => p.slug !== excludeSlug)
    : recentPosts;

  const latest = filtered.slice(0, 4);

  return (
    <aside className="flex flex-col gap-8">
      {/* CTA Card */}
      <div className="rounded-2xl border border-purple-200/60 bg-gradient-to-br from-purple-700 to-violet-800 p-6 text-white shadow-lg">
        <h3 className="text-lg font-bold">Quer testar na prática?</h3>
        <p className="mt-2 text-sm leading-relaxed text-purple-100">
          Cadastre-se gratuitamente e comece a controlar seu estoque com QR Code
          em minutos.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Link href="https://app.purplestock.com.br/" target="_blank">
            <Button className="w-full bg-white text-purple-700 hover:bg-purple-50">
              Criar conta grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg backdrop-blur-md">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-900">
          <TrendingUp className="h-4 w-4 text-purple-600" />
          Recentes
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {latest.map((post) => {
            const cover = post.coverImage ?? "/images/hero-photo-900x600.webp";
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-3 rounded-xl p-2 transition-colors hover:bg-purple-50/60"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="line-clamp-2 text-sm font-semibold leading-snug text-gray-900 group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </p>
                  <span className="mt-1 text-[11px] text-gray-500">
                    {formatDate(post.date)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg backdrop-blur-md">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-900">
            <Hash className="h-4 w-4 text-purple-600" />
            Tags populares
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/tag/${tag.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 transition-colors hover:bg-purple-100"
              >
                {tag.label}
                <span className="rounded-full bg-purple-200/60 px-1.5 py-0.5 text-[10px] font-semibold text-purple-800">
                  {tag.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
