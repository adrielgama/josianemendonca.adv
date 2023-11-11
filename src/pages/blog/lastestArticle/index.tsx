import React from 'react'

import { IArticleItems } from '@/api/types'

interface LatestArticlesProps {
  latestArticle?: IArticleItems
}
export const LastestArticle: React.FC<LatestArticlesProps> = ({
  latestArticle,
}) => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-white to-slate-200 pt-28">
      <div className="container">
        {latestArticle && (
          <div key={latestArticle.id} className="rounded shadow">
            <img
              src={latestArticle.imageUrl}
              alt={`Imagem do artigo ${latestArticle.title}`}
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
