// ${baseURL}/users/${userId}/articles

import axios from 'axios'

import { IArticle, IArticleItems } from './types'

export const fetchArticles = async (): Promise<IArticleItems[]> => {
  const baseURL = import.meta.env.VITE_BLAG_URL as string
  const userId = import.meta.env.VITE_BLAG_USER_ID as string
  const { data } = await axios.get<IArticle>(
    `${baseURL}/users/${userId}/articles`
  )
  return data.articles
}
