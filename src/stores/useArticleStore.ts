import { create } from 'zustand'

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

type ArticlesStore = {
  articles: Article[]
  setArticles: (articles: Article[]) => void
}

export const useArticlesStore = create<ArticlesStore>((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}))
