'use client'
import { Button } from '@/components/ui/button'
import { useArticlesQuery } from '@/hooks/useArticlesQuery'
import { formatDate } from '@/lib/format'
import { useArticlesStore } from '@/stores/useArticleStore'
import { ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Articles() {
  const { data, isLoading, isError } = useArticlesQuery()
  const { articles, setArticles } = useArticlesStore()

  useEffect(() => {
    if (data?.articles) {
      setArticles(data.articles)
    }
  }, [data, setArticles])

  const featuredPost = articles.find((post) => post)
  const sidebarPosts = articles.filter((post) => post).slice(1, 4)
  const hasMorePosts = articles.filter((post) => post).length > 3

  if (isLoading) {
    return <div className="py-8 text-center">Carregando artigos...</div>
  }

  if (isError) {
    return <div className="py-8 text-center">Erro ao carregar artigos.</div>
  }

  if (!data?.articles || data.articles.length === 0) {
    return <div className="py-8 text-center">Nenhum artigo encontrado.</div>
  }

  return (
    <section
      className="mt-20 scroll-my-26 px-3"
      id="blog"
      aria-labelledby="articles-heading"
    >
      <div className="container mx-auto space-y-4 py-10">
        <h1 className="text-josiane-wine-400/80 font-montserrat pb-12 text-4xl font-semibold uppercase">
          Meus artigos
        </h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {featuredPost && (
            <div className="overflow-hidden rounded-t-md bg-white shadow-sm lg:col-span-7">
              <div className="relative h-[300px]">
                <Image
                  src={featuredPost.imageUrl || '/placeholder.svg'}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-josiane-wine-600 mb-3 text-2xl font-bold sm:text-3xl">
                  {featuredPost.title}
                </h3>
                <p className="mb-4 text-slate-500">
                  {featuredPost.description}
                </p>
                <div className="mb-4 flex items-center text-sm text-slate-400">
                  <span className="mr-2 font-medium">
                    {featuredPost.author?.name}
                  </span>
                  <span className="mx-2">·</span>
                  <Calendar className="mr-1 size-4" />
                  <span>{formatDate(featuredPost.createdAt)}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center font-medium text-zinc-700 hover:underline"
                >
                  Ler artigo completo <ArrowRight className="ml-1 size-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Sidebar Articles - Smaller */}
          <div className="flex flex-col space-y-6 lg:col-span-5">
            {sidebarPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white shadow-sm sm:flex-row"
              >
                <div className="relative h-[140px] w-full sm:w-[180px]">
                  <Image
                    src={post.imageUrl || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 180px"
                  />
                </div>
                <div className="flex-1 space-y-2 p-4">
                  <div>
                    <h3 className="mb-2 font-bold">{post.title}</h3>
                    <p className="mb-2 line-clamp-2 text-sm text-slate-500">
                      {post.description}
                    </p>
                    <div className="flex items-center text-xs text-slate-400">
                      <span className="text-primary mr-2 font-medium">
                        {post.author?.name}
                      </span>
                      <span className="mx-1">·</span>
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-end text-xs text-zinc-400 hover:underline"
                    >
                      Ler artigo completo <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Show More Button */}
            {hasMorePosts && (
              <div className="mt-4 flex justify-end">
                <Button
                  variant="josiane"
                  size="lg"
                  className="rounded-none"
                  asChild
                >
                  <Link href="/blog">
                    Ver mais artigos <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
