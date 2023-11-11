import React from 'react'

import { Slide } from 'react-awesome-reveal'
import { useQuery } from 'react-query'

import { Button } from '@/components/ui/button'

import { CardBlog } from './card'
import { fetchArticles } from '../../../api/api'
import { IArticleItems } from '../../../api/types'

export const Blog: React.FC = () => {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery<IArticleItems[]>('articles', fetchArticles, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Ocorreu um erro ao buscar os artigos.</div>
  }

  return (
    <div id="blog" className="bg-gray-50 py-24 text-center md:pt-32 lg:pt-36">
      <Slide cascade triggerOnce direction="right">
        <h1 className="mb-12 text-4xl font-bold text-wine400">BLOG</h1>
      </Slide>
      <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 xl:grid-cols-3">
        {articles
          ?.slice(0, 6)
          .map(
            ({ id, title, description, body, updatedAt, author, imageUrl }) => (
              <div key={id} className="mb-4">
                <Slide cascade triggerOnce direction="up">
                  <CardBlog
                    title={title}
                    description={description}
                    body={body}
                    author={author?.name}
                    updatedAt={updatedAt}
                    imageUrl={imageUrl}
                    id={id}
                  />
                </Slide>
              </div>
            )
          )}
      </div>
      <a href="/blog">
        <Button
          variant="outline"
          className="mt-8 hover:bg-wine400 hover:text-white"
        >
          Ver todos os artigos
        </Button>
      </a>
    </div>
  )
}
