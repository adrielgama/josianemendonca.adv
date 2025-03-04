import { Metadata } from 'next'

import Footer from '@/components/footer'
import { fetchArticles } from '@/lib/api'
import { Article } from '@/stores/useArticleStore'

import Header from '../_components/header'
import SingleArticle from './_components/single-article'

export async function generateStaticParams() {
  const articles = await fetchArticles()
  return articles.map((article: Article) => ({
    slug: article.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const articles = await fetchArticles()
  const article = articles.find((a: { id: string }) => a.id === params.slug)

  if (!article || !article.published) {
    return {
      title: 'Artigo Não Encontrado | Josiane Mendonça',
      description:
        'O artigo solicitado não foi encontrado ou não está publicado.',
    }
  }

  return {
    title: `${article.title} | Josiane Mendonça`,
    description: article.description || article.body.slice(0, 160),
    keywords: [
      'direito trabalhista',
      'advocacia',
      'josiane mendonça',
      article.title.toLowerCase(),
    ],
    openGraph: {
      title: article.title,
      description: article.description || article.body.slice(0, 160),
      url: `https://www.josianemendonca.adv.br/blog/${params.slug}`,
      images: article.imageUrl
        ? [
            {
              url: article.imageUrl,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [
            {
              url: 'https://www.josianemendonca.adv.br/images/open_graph.png',
              width: 1200,
              height: 630,
            },
          ],
      type: 'article',
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      authors: [article.author?.name || 'Josiane Mendonça'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description || article.body.slice(0, 160),
      images:
        article.imageUrl ||
        'https://www.josianemendonca.adv.br/images/open_graph.png',
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const articles = await fetchArticles()
  const article = articles.find((a: { id: string }) => a.id === params.slug)

  if (!article || !article.published) {
    return (
      <main className="flex min-h-screen items-center justify-center p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Artigo não encontrado
        </h1>
      </main>
    )
  }

  return (
    <div className="font-inter flex min-h-screen w-full flex-col">
      <Header />
      <main className="mt-6 flex-1 py-32">
        <SingleArticle article={article} slug={params.slug} />
      </main>
      <footer className="bg-josiane-wine-400 w-full">
        <Footer />
      </footer>
    </div>
  )
}
