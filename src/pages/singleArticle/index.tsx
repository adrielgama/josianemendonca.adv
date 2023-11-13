import React from 'react'

import { ToastAction } from '@radix-ui/react-toast'
import { CheckCheck, Eye, Link, Share2 } from 'lucide-react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

import { IArticleItems } from '@/api/types'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import { useToast } from '@/components/ui/use-toast'
import { formatDate } from '@/utils'
import { shareOnLinkedIn, shareOnTwitter, shareOnWhatsApp } from '@/utils/share'

import { CustomHtmlContent } from './htmlItem'
import { ShareButton } from './shareButton'

interface SingleArticleProps {
  article: IArticleItems
}

export const SingleArticleItem: React.FC<SingleArticleProps> = ({
  article,
}) => {
  const { title, description, body, createdAt, author, imageUrl, views } =
    article
  const { toast } = useToast()
  const currentUrl = window.location.href

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast({
          title: 'Copiado com sucesso!',
          action: (
            <ToastAction altText="Close">
              <CheckCheck />
            </ToastAction>
          ),
          duration: 2000,
        })
      })
      .catch((err) => {
        toast({
          variant: 'destructive',
          title: 'Algo deu errado!',
          description: 'Não consegui copiar o link para você.',
          action: <ToastAction altText="Close">Fechar</ToastAction>,
          duration: 3000,
        })
        console.error('Não foi possível copiar o link', err)
      })
  }

  return (
    <div className="flex max-w-3xl flex-col items-center lg:container">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold">
          {title}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="link">
                <Share2 className="text-wine100 hover:text-wine400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-max flex-col justify-start bg-white text-start">
              <ShareButton label="Copiar link" onClick={handleCopyLink}>
                <Link size={16} />
              </ShareButton>
              <ShareButton
                label="Compartilhar no LinkedIn"
                onClick={() => shareOnLinkedIn(title, currentUrl)}
              >
                <FaLinkedinIn size={16} />
              </ShareButton>
              <ShareButton
                label="Compartilhar no Twitter"
                onClick={() => shareOnTwitter(title, currentUrl)}
              >
                <RiTwitterXFill size={16} />
              </ShareButton>
              <ShareButton
                label="Compartilhar no WhatsApp"
                onClick={() => shareOnWhatsApp(currentUrl)}
              >
                <AiOutlineWhatsApp size={16} />
              </ShareButton>
            </PopoverContent>
          </Popover>
        </h1>
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
        <span className="mx-2 text-gray-300">|</span>
        <p className="flex items-center gap-1">
          <Eye size={12} /> {views}
        </p>
      </div>
      <div className="container flex justify-center p-4">
        <CustomHtmlContent htmlContent={body} />
      </div>
    </div>
  )
}
