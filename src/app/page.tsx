import Footer from '@/components/footer'

import Articles from './_components/articles'
import Contact from './_components/contact'
import Header from './_components/header'
import HeroSection from './_components/hero-section'
import Purpose from './_components/purpose'
import StatisticsSection from './_components/statistics-section'
import TestimonialsSection from './_components/testimonials'

export default function Home() {
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
        <Footer />
      </footer>
    </div>
  )
}
