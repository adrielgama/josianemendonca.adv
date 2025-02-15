import type { Metadata } from 'next'
import { Inter, Montserrat, Neuton } from 'next/font/google'
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
  title: 'Josiane Mendonça | Advogada',
  description: 'Josiane Mendonça - Advocacia | OAB/BA:65347',
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
        {children}
      </body>
    </html>
  )
}
