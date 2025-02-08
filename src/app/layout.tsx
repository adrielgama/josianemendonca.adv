import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
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
        className={`${montserrat.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
