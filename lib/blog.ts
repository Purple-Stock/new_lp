import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
  faq?: { question: string; answer: string }[];
};

type BlogFrontmatter = Omit<BlogPostMeta, "slug">;

export function slugifyTag(tag: string): string {
  return tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toBlogMeta(slug: string, data: Record<string, unknown>): BlogPostMeta {
  return {
    slug,
    title: String(data.title ?? ""),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? ""),
    readingTime: String(data.readingTime ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    faq: data.faq as BlogPostMeta["faq"],
  };
}

function sortByMostRecent(posts: BlogPostMeta[]): BlogPostMeta[] {
  return [...posts].sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    return bTime - aTime;
  });
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const entries = await fs.readdir(BLOG_CONTENT_DIR, { withFileTypes: true });
  const mdxFiles = entries.filter(
    (entry) => entry.isFile() && entry.name.endsWith(".mdx")
  );

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.name.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_CONTENT_DIR, file.name);
      const raw = await fs.readFile(filePath, "utf8");
      const { data } = matter(raw);
      return toBlogMeta(slug, data);
    })
  );

  return sortByMostRecent(posts);
}

export async function getAllTagSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  const set = new Set<string>();

  for (const post of posts) {
    for (const tag of post.tags) {
      set.add(slugifyTag(tag));
    }
  }

  return [...set].sort((a, b) => a.localeCompare(b));
}

export async function getPostsByTagSlug(tagSlug: string): Promise<{
  posts: BlogPostMeta[];
  label: string;
}> {
  const posts = await getAllPosts();
  const filtered = posts.filter((post) =>
    post.tags.some((tag) => slugifyTag(tag) === tagSlug)
  );
  const firstTag = filtered
    .flatMap((post) => post.tags)
    .find((tag) => slugifyTag(tag) === tagSlug);

  return {
    posts: filtered,
    label: firstTag ?? tagSlug,
  };
}

export async function getRelatedPosts(
  slug: string,
  limit = 3
): Promise<BlogPostMeta[]> {
  const all = await getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);

  const scored = all
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const shared = p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, score: shared };
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        new Date(b.post.date).getTime() - new Date(a.post.date).getTime()
    );

  return scored.slice(0, limit).map((s) => s.post);
}

export async function getPopularTags(
  limit = 12
): Promise<{ label: string; slug: string; count: number }[]> {
  const posts = await getAllPosts();
  const map = new Map<string, { label: string; count: number }>();

  for (const post of posts) {
    for (const tag of post.tags) {
      const slug = slugifyTag(tag);
      const existing = map.get(slug);
      if (existing) {
        existing.count++;
      } else {
        map.set(slug, { label: tag, count: 1 });
      }
    }
  }

  return [...map.entries()]
    .map(([slug, { label, count }]) => ({ slug, label, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<{
  meta: BlogPostMeta;
  content: string;
} | null> {
  const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(source);
    const rendered = marked.parse(content);
    const frontmatter = data as BlogFrontmatter;

    return {
      meta: toBlogMeta(slug, frontmatter),
      content: typeof rendered === "string" ? rendered : await rendered,
    };
  } catch {
    return null;
  }
}
