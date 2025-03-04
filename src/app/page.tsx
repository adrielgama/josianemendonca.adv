import Link from 'next/link'
import Articles from './_components/articles'
import Contact from './_components/contact'
import Header from './_components/header'
import HeroSection from './_components/hero-section'
import Purpose from './_components/purpose'
import StatisticsSection from './_components/statistics-section'
import TestimonialsSection from './_components/testimonials'

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="font-inter h-full w-full">
      <Header />
      <main className="pt-28">
        <HeroSection />
        <Purpose />
        <StatisticsSection />
        <Articles />
        <TestimonialsSection />
        <Contact />
      </main>
      <footer className="bg-josiane-wine-400 mt-16">
        <div className="container mx-auto grid grid-cols-1 place-items-center py-6 text-center text-sm text-white">
          <p className="font-light">
            © {currentYear}. Todos os direitos reservados. Josiane Mendonça -
            OAB/BA 65347
          </p>
          <Link
            href="http://adrielgama.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-josiane-gold-400 transition-all hover:text-gray-200"
          >
            Development by adrielgama.dev
          </Link>
        </div>
      </footer>
    </div>
  )
}
