import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Josiane Mendonça | Advogada Trabalhista na Bahia - OAB/BA 65347',
    short_name: 'Josiane Mendonça',
    description:
      'Dra. Josiane Mendonça, advogada trabalhista na Bahia. Atendimento personalizado para direitos do trabalhador. OAB/BA 65347.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#3d051c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    scope: '/',
    categories: ['advocacia', 'direito', 'serviços jurídicos'],
    related_applications: [],
    prefer_related_applications: false,
    lang: 'pt-BR',
  }
}
