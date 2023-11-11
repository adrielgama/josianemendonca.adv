import React from 'react'

import { ChevronRight } from 'lucide-react'

import AvatarImg from '@/assets/avatar.webp'
import NoImage from '@/assets/no_image.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatDate, stripHTML, truncateString } from '@/utils'

interface ICardProps {
  title: string
  description?: string
  body: string
  updatedAt: string
  imageUrl?: string
  author?: string
  id: string
}

export const CardBlog: React.FC<ICardProps> = ({
  title,
  description,
  body,
  author,
  updatedAt,
  imageUrl,
  id,
}) => {
  const cleanBody = stripHTML(body)
  const truncatedBody = truncateString(cleanBody, 100)

  return (
    <div className="flex h-auto flex-col rounded-sm border bg-white shadow sm:max-w-[350px] md:h-[460px]">
      <div className="flex-grow">
        <div className="flex h-32 items-center justify-center object-cover">
          <img
            src={imageUrl ?? NoImage}
            alt="monaliza"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-2 p-2 text-start">
          <div className="mb-4 flex w-full items-center justify-between gap-4 text-xs text-gold">
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={AvatarImg} />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <p className="text-gray-500">{author}</p>
            </div>
            <p>{formatDate(updatedAt)}</p>
          </div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="py-4 text-sm">{truncatedBody}</p>
        </div>
      </div>
      <div className="mt-auto">
        <Separator className="bg-gold/30 px-4" />
        <a href={`/blog/${id}`} target="_blank" rel="noopener noreferrer">
          <Button variant="link">
            Leia mais <ChevronRight size={20} />
          </Button>
        </a>
      </div>
    </div>
  )
}
