import React from 'react'

import { ToastAction } from '@radix-ui/react-toast'
import { CheckCheck, Eye, Link, Share2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
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

export const SingleArticleItem: React.FC<{ article: IArticleItems }> = ({
  article: { title, description, body, createdAt, author, imageUrl, views },
}) => {
  const { toast } = useToast()
  const currentUrl = window.location.href

  const [currentArticle, setCurrentArticle] = React.useState({
    title: '',
    description: '',
    imageUrl: '',
  })

  React.useEffect(() => {
    setCurrentArticle({
      title,
      description: description ?? `Artigo publicado por ${author?.name}`,
      imageUrl: imageUrl ?? '',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, imageUrl])

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

  const shareOptions = [
    { label: 'Copiar link', icon: <Link size={16} />, handler: handleCopyLink },
    {
      label: 'Compartilhar no LinkedIn',
      icon: <FaLinkedinIn size={16} />,
      handler: () => shareOnLinkedIn(title, currentUrl),
    },
    {
      label: 'Compartilhar no Twitter',
      icon: <RiTwitterXFill size={16} />,
      handler: () => shareOnTwitter(title, currentUrl),
    },
    {
      label: 'Compartilhar no WhatsApp',
      icon: <AiOutlineWhatsApp size={16} />,
      handler: () => shareOnWhatsApp(currentUrl),
    },
  ]

  return (
    <div className="flex max-w-3xl flex-col items-center lg:container">
      <Helmet>
        <title>{currentArticle.title}</title>
        <meta name="description" content={currentArticle.description} />
        <meta property="og:title" content={currentArticle.title} />
        <meta property="og:description" content={currentArticle.description} />
        <meta property="og:image" content={currentArticle.imageUrl} />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
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
              {shareOptions.map(({ label, icon, handler }, index) => (
                <ShareButton key={index} label={label} onClick={handler}>
                  {icon}
                </ShareButton>
              ))}
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
