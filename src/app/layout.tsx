import { Inter, Montserrat, Neuton } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

import type { Metadata } from 'next'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
})

const neuton = Neuton({
  subsets: ['latin'],
  weight: ['200', '300', '400', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Josiane Mendonça | Advogada Trabalhista na Bahia - OAB/BA 65347',
  description:
    'Dra. Josiane Mendonça, advogada trabalhista na Bahia. Atendimento personalizado para direitos do trabalhador. OAB/BA 65347.',
  keywords: [
    'advogada trabalhista salvador',
    'advogada trabalhista bahia',
    'direito trabalhista bahia',
    'josiane mendonça advogada',
    'oab ba 65347',
    'reclamação trabalhista salvador',
    'horas extras',
    'acidente de trabalho',
    'verbas rescisórias',
    'fgts não pago',
    'assédio no trabalho',
  ],
  authors: [{ name: 'Adriel Gama', url: 'https://adrielgama.dev' }],
  applicationName: 'Josiane Mendonça | Advogada',
  robots: { index: true, follow: true },
  verification: {
    google: 'DaApLYh-BBjMtD9oaG12sBIXn_5eYc0LHnuLIOoFfMc',
  },
  alternates: {
    canonical: 'https://www.josianemendonca.adv.br',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Josiane Mendonça | Advogada',
    description:
      'Conheça a Dra. Josiane Mendonça. Atendimento personalizado e compromisso com a excelência. OAB/BA 65347.',
    url: 'https://www.josianemendonca.adv.br',
    siteName: 'Josiane Mendonça | Advogada',
    images: [
      {
        url: 'https://www.josianemendonca.adv.br/images/open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Josiane Mendonça - Advocacia | OAB/BA:65347',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josiane Mendonça | Advogada',
    description:
      'Conheça a Dra. Josiane Mendonça. Atendimento personalizado e compromisso com a excelência. OAB/BA 65347.',
    images: ['https://www.josianemendonca.adv.br/images/open_graph.png'],
    site: '@josianemendoncaadv',
    creator: '@josianemendoncaadv',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.className} ${neuton.className} ${inter.className} antialiased`}
        data-theme="light"
      >
        <ReactQueryProvider>
          {children}
          <Toaster richColors />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
