import React from 'react'

import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { fetchSingleArticles } from '@/api/api'
import { IArticleItems } from '@/api/types'
import { Toaster } from '@/components/ui/toaster'
import { Navbar } from '@/pages/blog/navbar'
import { SingleArticleItem } from '@/pages/singleArticle'

export const SingleArticle = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: article } = useQuery<IArticleItems>(
    ['article', id],
    () => {
      if (id) {
        return fetchSingleArticles(id)
      } else {
        navigate('/blog')
        throw new Error('Article ID is undefined')
      }
    },
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  )
  return (
    <main className="h-full bg-gradient-to-br from-white to-slate-200">
      <Navbar />
      <div className="container flex flex-col pt-32 lg:flex-row lg:pt-40">
        {article && <SingleArticleItem article={article} />}
      </div>
      <Toaster />
    </main>
  )
}
