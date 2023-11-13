import React from 'react'

import { Sparkles } from 'lucide-react'

import { IArticleItems } from '@/api/types'
import { Separator } from '@/components/ui/separator'
import { formatDate } from '@/utils'

interface TopArticlesProps {
  topArticles?: IArticleItems[]
}
export const TopArticles: React.FC<TopArticlesProps> = ({ topArticles }) => {
  return (
    <div className="relative space-y-8 py-4">
      <div className="container flex gap-2">
        <Sparkles className="text-wine100" />
        <h1 className="text-xl font-bold text-wine600">Principais artigos</h1>
      </div>
      <div className="container flex flex-col gap-4">
        {topArticles?.slice(0, 4).map(({ id, title, updatedAt }) => (
          <a href={`blog/${id}`} key={id}>
            <div className="mb-4 cursor-pointer rounded px-8 py-2 transition-all hover:bg-slate-200">
              <h1>{title}</h1>
              <span className="text-xs text-gray-400">
                {formatDate(updatedAt)}
              </span>
              <Separator className="max-w-[100px] bg-gold/10 px-10" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
