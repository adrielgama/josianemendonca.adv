import type { MetadataRoute } from 'next'

const API_URL = process.env.NEXT_PUBLIC_BLAG_URL
const USER_ID = process.env.NEXT_PUBLIC_BLAG_USER_ID

async function fetchArticles() {
  const response = await fetch(`${API_URL}/users/${USER_ID}/articles`)
  if (!response.ok) throw new Error('Erro ao buscar artigos')
  return response.json()
}

// Tipagem dos artigos (copiada do seu código)
type Article = {
  id: string
  title: string
  description?: string
  body: string
  published: boolean
  createdAt: string
  updatedAt: string
  authorId?: string
  imageUrl?: string
  views?: number
  author?: {
    id: string
    name: string
    email: string
  }
}

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
