"use server"

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'content/artigos')

export interface Article {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  content: string
}

export async function getAllArticles(): Promise<Article[]> {
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      tags: data.tags,
      content,
    }
  })

  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    tags: data.tags,
    content: contentHtml,
  }
} 