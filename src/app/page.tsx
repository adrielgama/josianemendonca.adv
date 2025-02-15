import Header from './_components/header'
import HeroSection from './_components/hero-section'
import Purpose from './_components/purpose'
import StatisticsSection from './_components/statistics-section'

export default function Home() {
  return (
    <div className="font-inter h-full w-full">
      <Header />
      <main className="pt-28">
        <HeroSection />
        <Purpose />
        <StatisticsSection />
      </main>
    </div>
  )
}
