type IAuthor = {
  id: string
  name: string
  email: string
}

export type IArticleItems = {
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
  author?: IAuthor
}

export interface IArticle {
  articles: IArticleItems[]
}
