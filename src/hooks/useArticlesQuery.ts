import { useQuery } from '@tanstack/react-query'

const API_URL = process.env.NEXT_PUBLIC_BLAG_URL
const USER_ID = process.env.NEXT_PUBLIC_BLAG_USER_ID

export const fetchArticles = async () => {
  const response = await fetch(`${API_URL}/users/${USER_ID}/articles`)
  if (!response.ok) throw new Error('Erro ao buscar artigos')
  return response.json()
}

export const useArticlesQuery = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  })
}
