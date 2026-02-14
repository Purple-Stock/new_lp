import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog")

export type BlogPostMeta = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  readingTime: string
  tags: string[]
  coverImage?: string
}

type BlogFrontmatter = Omit<BlogPostMeta, "slug">

export function slugifyTag(tag: string): string {
  return tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
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
  }
}

function sortByMostRecent(posts: BlogPostMeta[]): BlogPostMeta[] {
  return [...posts].sort((a, b) => {
    const aTime = new Date(a.date).getTime()
    const bTime = new Date(b.date).getTime()
    return bTime - aTime
  })
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const entries = await fs.readdir(BLOG_CONTENT_DIR, { withFileTypes: true })
  const mdxFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.name.replace(/\.mdx$/, "")
      const filePath = path.join(BLOG_CONTENT_DIR, file.name)
      const raw = await fs.readFile(filePath, "utf8")
      const { data } = matter(raw)
      return toBlogMeta(slug, data)
    }),
  )

  return sortByMostRecent(posts)
}

export async function getAllTagSlugs(): Promise<string[]> {
  const posts = await getAllPosts()
  const set = new Set<string>()

  for (const post of posts) {
    for (const tag of post.tags) {
      set.add(slugifyTag(tag))
    }
  }

  return [...set].sort((a, b) => a.localeCompare(b))
}

export async function getPostsByTagSlug(tagSlug: string): Promise<{
  posts: BlogPostMeta[]
  label: string
}> {
  const posts = await getAllPosts()
  const filtered = posts.filter((post) => post.tags.some((tag) => slugifyTag(tag) === tagSlug))
  const firstTag = filtered.flatMap((post) => post.tags).find((tag) => slugifyTag(tag) === tagSlug)

  return {
    posts: filtered,
    label: firstTag ?? tagSlug,
  }
}

export async function getPostBySlug(slug: string): Promise<{
  meta: BlogPostMeta
  content: string
} | null> {
  const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.mdx`)

  try {
    const source = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(source)
    const rendered = await remark().use(html).process(content)
    const frontmatter = data as BlogFrontmatter

    return {
      meta: toBlogMeta(slug, frontmatter),
      content: rendered.toString(),
    }
  } catch {
    return null
  }
}
