import React from 'react'

import { IArticleItems } from '@/api/types'

interface LatestArticlesProps {
  latestArticle?: IArticleItems
}
export const LastestArticle: React.FC<LatestArticlesProps> = ({
  latestArticle,
}) => {
  return (
    <div className="relative h-full pb-16">
      <div className="container">
        {latestArticle && (
          <div
            key={latestArticle.id}
            className="cursor-pointer rounded shadow transition-all hover:opacity-90 hover:shadow-md lg:max-w-2xl"
          >
            <img
              src={latestArticle.imageUrl}
              alt={`Imagem do artigo ${latestArticle.title}`}
              className="rounded-t"
            />
            <div className="space-y-3 p-4">
              <span className="text-xs text-gray-400">
                {latestArticle.author?.name}
              </span>
              <h1 className="text-xl font-bold text-wine600">
                {latestArticle.title}
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
