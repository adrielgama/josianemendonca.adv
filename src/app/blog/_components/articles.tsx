'use client'
import Link from 'next/link'

import { useArticlesQuery } from '@/hooks/useArticlesQuery'
import { Article } from '@/stores/useArticleStore'

export default function Articles() {
  const { data, isLoading, error } = useArticlesQuery()

  if (isLoading) {
    return <div className="py-8 text-center">Carregando artigos...</div>
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        Erro ao carregar artigos. Error: {error.message}
      </div>
    )
  }

  if (!data || data.length === 0) {
    return <div className="py-8 text-center">Nenhum artigo encontrado.</div>
  }

  return (
    <div>
      <header className="py-12 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Meus artigos</h1>
        <p className="mt-2 text-sm text-gray-600">
          Artigos sobre Direito Trabalhista e atualizações jurídicas
        </p>
      </header>
      <section className="mx-auto max-w-4xl">
        {(data ?? []).length > 0 ? (
          <ul className="space-y-6">
            {data?.map((article: Article) => (
              <li key={article.id} className="border-b pb-4">
                <Link
                  href={`/blog/${article.id}`}
                  className="text-xl font-semibold hover:underline"
                >
                  {article.title}
                </Link>
                <p className="mt-2 text-gray-600">
                  {article.description || 'Sem descrição'}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">
            Nenhum artigo disponível no momento.
          </p>
        )}
      </section>
    </div>
  )
}
