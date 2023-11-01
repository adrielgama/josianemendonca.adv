import { Contact } from './section/contact/index.jsx'
import { Home } from './section/home/index.jsx'
import { Navbar } from './section/navbar/index.js'
import { Purpose } from './section/purpose/index.jsx'
import { Testimonials } from './section/testimonials/index.jsx'

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Purpose />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App
