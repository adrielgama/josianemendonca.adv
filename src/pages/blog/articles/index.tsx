/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import { Slide } from 'react-awesome-reveal'

import { IArticleItems } from '@/api/types'
import { CardSkeleton } from '@/components/Skeleton/CardSkeleton'
import { CardBlog } from '@/pages/home/blog/card'

interface ArticleProps {
  articles?: IArticleItems[]
  isLoading?: boolean
}

export const Articles: React.FC<ArticleProps> = ({ articles, isLoading }) => {
  const [visibleArticles, setVisibleArticles] = useState<IArticleItems[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (articles) {
      setVisibleArticles(articles.slice(0, 6))
    }
  }, [articles])

  const loadMoreArticles = () => {
    if (articles && visibleArticles.length < articles.length) {
      setLoading(true)
      setTimeout(() => {
        setVisibleArticles(articles.slice(0, visibleArticles.length + 6))
        setLoading(false)
      }, 1000)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return
      loadMoreArticles()
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibleArticles, articles])

  return (
    <div>
      <div className="container grid grid-cols-1 place-items-center lg:grid-cols-2 xl:grid-cols-3">
        {visibleArticles.map(
          ({ id, title, description, body, updatedAt, author, imageUrl }) => (
            <div key={id} className="mb-4">
              <Slide cascade triggerOnce direction="up">
                {isLoading ? (
                  <CardSkeleton />
                ) : (
                  <CardBlog
                    title={title}
                    description={description}
                    body={body}
                    author={author?.name}
                    updatedAt={updatedAt}
                    imageUrl={imageUrl}
                    id={id}
                  />
                )}
              </Slide>
            </div>
          )
        )}
      </div>
      {loading && <CardSkeleton />}
    </div>
  )
}
