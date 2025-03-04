import Footer from '@/components/footer'

import Articles from './_components/articles'
import Header from './_components/header'

export default function Blog() {
  return (
    <div className="font-inter flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 px-3 pt-28">
        <Articles />
      </main>
      <footer className="bg-josiane-wine-400 mt-16 w-full">
        <Footer />
      </footer>
    </div>
  )
}
