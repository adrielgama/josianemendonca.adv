import { useQuery } from 'react-query'

import { fetchArticles } from '@/api/api'
import { IArticleItems } from '@/api/types'
import { LastestArticle } from '@/pages/blog/lastestArticle'
import { Navbar } from '@/pages/blog/navbar'
import { TopArticles } from '@/pages/blog/topArticles'

export const BlogPage = () => {
  const {
    data: articles,
    // isLoading,
    // error,
  } = useQuery<IArticleItems[]>('articles', fetchArticles, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  const sortedArticles = articles?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  const latestArticle = sortedArticles?.[0]

  return (
    <main>
      <Navbar />
      <LastestArticle latestArticle={latestArticle} />
      <TopArticles />
    </main>
  )
}
