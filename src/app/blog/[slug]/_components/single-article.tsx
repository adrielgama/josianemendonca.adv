'use client'

import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaLink } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/format'
import { Article } from '@/stores/useArticleStore'

import './style.css'

interface SingleArticleProps {
  article: Article
  slug: string
}

export default function SingleArticle({ article, slug }: SingleArticleProps) {
  const shareUrl = `https://www.josianemendonca.adv.br/blog/${slug}`
  const shareTitle = encodeURIComponent(article.title)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
    toast.success('Link copiado para a área de transferência!')
  }

  return (
    <article className="mx-auto max-w-3xl">
      <nav className="mb-6 flex items-center justify-between">
        <Link
          href="/blog"
          className="text-josiane-gold-400 hover:text-josiane-wine-400 flex items-center gap-1 text-sm transition-colors"
        >
          <ChevronLeft size={14} aria-hidden="true" />
          Voltar
        </Link>
        <div className="flex gap-2">
          <Button
            asChild
            size="icon"
            variant="link"
            className="text-josiane-gold-400 hover:text-josiane-wine-400"
            aria-label="Compartilhar no LinkedIn"
          >
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={14} />
            </a>
          </Button>
          <Button
            asChild
            size="icon"
            variant="link"
            className="text-josiane-gold-400 hover:text-josiane-wine-400"
            aria-label="Compartilhar no Twitter/X"
          >
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={14} />
            </a>
          </Button>
          <Button
            asChild
            size="icon"
            variant="link"
            className="text-josiane-gold-400 hover:text-josiane-wine-400"
            aria-label="Compartilhar no WhatsApp"
          >
            <a
              href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={14} />
            </a>
          </Button>
          <Button
            asChild
            size="icon"
            variant="link"
            className="text-josiane-gold-400 hover:text-josiane-wine-400"
            aria-label="Compartilhar no Instagram"
          >
            <a
              href={`https://www.instagram.com/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={14} />
            </a>
          </Button>
          <Button
            size="icon"
            variant="link"
            className="text-josiane-gold-400 hover:text-josiane-wine-400"
            aria-label="Copiar link do artigo"
            onClick={copyToClipboard}
          >
            <FaLink size={14} />
          </Button>
        </div>
      </nav>
      <header className="mb-8">
        <h1 className="text-3xl font-bold md:text-4xl">{article.title}</h1>
        <div className="text-sm text-gray-600">
          <p>{article.description}</p>
        </div>
      </header>
      {article.imageUrl && (
        <figure className="mb-6 flex w-full items-center justify-center">
          <Image
            src={article.imageUrl}
            alt={`Imagem do artigo: ${article.title}`}
            className="rounded-md object-cover"
            width={450}
            height={300}
          />
        </figure>
      )}
      <div className="mb-6 flex items-center text-sm text-gray-600">
        <p className="font-semibold">
          Por {article.author?.name || 'Josiane Mendonça'}
        </p>
        <p className="">, publicado em {formatDate(article.createdAt)}</p>
      </div>
      <section className="prose prose-lg">
        <div
          className="custom-html-content max-w-3xl"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
      </section>
    </article>
  )
}
