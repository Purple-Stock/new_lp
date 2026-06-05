import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Hash, TrendingUp } from "lucide-react";
import { getAllPosts, getPopularTags } from "@/lib/blog";
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
      <div className="ps-panel border-2 border-brand-ui-primary/20 p-6">
        <h3 className="ps-display text-lg">Quer testar na prática?</h3>
        <p className="ps-lead mt-2 text-sm">
          Cadastre-se gratuitamente e comece a controlar seu estoque com QR Code
          em minutos.
        </p>
        <div className="mt-4">
          <Link href="https://app.purplestock.com.br/" target="_blank">
            <Button className="ps-btn-primary w-full">
              Criar conta grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="ps-card p-6">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-900">
          <TrendingUp className="h-4 w-4 text-brand-ui-primary" />
          Recentes
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {latest.map((post) => {
            const cover = post.coverImage ?? "/images/hero-photo-900x600.webp";
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-3 rounded-lg p-2 transition-colors hover:bg-brand-surface-soft"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-brand-border-soft">
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-ui-primary">
                    {post.title}
                  </p>
                  <span className="mt-1 text-[11px] text-slate-500">
                    {formatDate(post.date)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {popularTags.length > 0 && (
        <div className="ps-card p-6">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-900">
            <Hash className="h-4 w-4 text-brand-ui-primary" />
            Tags populares
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/tag/${tag.slug}`}
                className="ps-badge-violet inline-flex items-center gap-1.5 px-3 py-1 normal-case tracking-normal transition-colors hover:bg-brand-ui-primary/15"
              >
                {tag.label}
                <span className="rounded-full bg-brand-ui-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-brand-violet-deep">
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
