import { useQuery } from '@tanstack/react-query'

import { Article } from '@/stores/useArticleStore'

const API_URL = process.env.NEXT_PUBLIC_BLAG_URL
const USER_ID = process.env.NEXT_PUBLIC_BLAG_USER_ID

type ArticleResponse = {
  articles: Article[]
}

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${API_URL}/users/${USER_ID}/articles`)
  if (!response.ok) throw new Error('Erro ao buscar artigos')

  const data: ArticleResponse = await response.json()
  return data.articles
}

export const useArticlesQuery = () => {
  return useQuery<Article[], Error>({
    queryKey: ['articles'],
    queryFn: fetchArticles,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  })
}
