import { Blog } from '@/pages/home/blog'
import { Contact } from '@/pages/home/contact'
import { Home } from '@/pages/home/home'
import { Navbar } from '@/pages/home/navbar'
import { Purpose } from '@/pages/home/purpose'
import { Testimonials } from '@/pages/home/testimonials'

export const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Purpose />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  )
}
