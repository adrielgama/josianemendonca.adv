import { fetchArticles } from '@/lib/api'
import { Article } from '@/stores/useArticleStore'

import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.josianemendonca.adv.br'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date()

  const staticPages = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const articles: Article[] = await fetchArticles()

    blogPosts = articles
      .filter((article) => article.published)
      .map((article) => ({
        url: `${BASE_URL}/blog/${article.id}`,
        lastModified: new Date(article.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
  } catch (error) {
    console.error('Erro ao buscar artigos para o sitemap:', error)
  }

  return [...staticPages, ...blogPosts]
}
