import React from 'react'

import { Eye } from 'lucide-react'

import { IArticleItems } from '@/api/types'
import { Separator } from '@/components/ui/separator'
import { formatDate } from '@/utils'

import { CustomHtmlContent } from './htmlItem'

interface SingleArticleProps {
  article: IArticleItems
}

export const SingleArticleItem: React.FC<SingleArticleProps> = ({
  article,
}) => {
  const { title, description, body, createdAt, author, imageUrl, views } =
    article

  return (
    <div className="container flex max-w-4xl flex-col items-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h1 className="text-sm text-gray-500">{description}</h1>
      </div>
      <div className="flex w-full flex-1 justify-center rounded-md bg-gradient-to-r from-slate-50 to-slate-100 p-4 ">
        <img
          src={imageUrl}
          alt={`Image of ${title}`}
          className="mb-4 max-w-[300px] object-cover"
        />
      </div>
      <div className="flex flex-row text-xs text-gray-400">
        <p>
          Por: {author?.name} em {formatDate(createdAt)}
        </p>
        <Separator
          orientation="vertical"
          className="mx-2 h-full w-[1px] bg-gray-300"
        />
        <p className="flex items-center gap-1">
          <Eye size={12} /> {views}
        </p>
      </div>
      <div className="container p-4">
        <CustomHtmlContent htmlContent={body} />
      </div>
    </div>
  )
}
