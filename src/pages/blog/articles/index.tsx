import React from 'react'

import { Slide } from 'react-awesome-reveal'

import { IArticleItems } from '@/api/types'
import { CardBlog } from '@/pages/home/blog/card'

interface ArticleProps {
  articles?: IArticleItems[]
}

export const Articles: React.FC<ArticleProps> = ({ articles }) => {
  return (
    <div>
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
    </div>
  )
}
