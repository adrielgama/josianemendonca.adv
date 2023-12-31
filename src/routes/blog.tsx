import { useQuery } from 'react-query'

import { fetchArticles } from '@/api/api'
import { IArticleItems } from '@/api/types'
import { Separator } from '@/components/ui/separator'
import { Articles } from '@/pages/blog/articles'
import { LastestArticle } from '@/pages/blog/lastestArticle'
import { Navbar } from '@/pages/blog/navbar'
import { TopArticles } from '@/pages/blog/topArticles'
import { Footer } from '@/shared/footer'

export const BlogPage = () => {
  const {
    data: articles,
    isLoading,
    // error,
  } = useQuery<IArticleItems[]>('articles', fetchArticles, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  const sortedByCreatedAt = articles?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  const latestArticle = sortedByCreatedAt?.[0]
  const sortedByViews = sortedByCreatedAt?.sort(
    (a, b) => (b.views || 0) - (a.views || 0)
  )

  return (
    <main className="h-full bg-gradient-to-br from-white to-slate-200">
      <Navbar />
      <div className="container flex flex-col pt-32 lg:flex-row lg:pt-40">
        <LastestArticle latestArticle={latestArticle} />
        <TopArticles topArticles={sortedByViews} />
      </div>
      <div className="flex flex-col items-center">
        <Separator className="mb-10 max-w-sm bg-gold/20" />
      </div>
      <Articles articles={articles} isLoading={isLoading} />
      <Footer />
    </main>
  )
}
