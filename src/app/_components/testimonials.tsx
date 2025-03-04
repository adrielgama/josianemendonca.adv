'use client'

import { Quote } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

type Testimonial = {
  id: number
  quote: string
  name: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'A advogada demonstrou habilidades excepcionais ao resolver meu caso com eficiência e precisão, garantindo resultados favoráveis.',
    name: 'João da Luz',
    avatar: '/testimonials/joao.webp',
  },
  {
    id: 2,
    quote:
      'Ela trabalhou com muita força no meu caso e me surpreendeu, porque conseguiu um final bom pra gente.',
    name: 'Pedro Santos',
    avatar: '/testimonials/pedro.webp',
  },
  {
    id: 3,
    quote:
      'Gratidão a advogada pela sua atuação brilhante, conduzindo meu caso com maestria e alcançando resultados extraordinários.',
    name: 'Vancélia Silva',
    avatar: '/testimonials/vancelia.webp',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="scroll-my-26 bg-gray-50 py-16" id="testimonials">
      <div className="container mx-auto px-3">
        <header className="mb-12">
          <h2 className="text-josiane-wine-400 mb-4 text-3xl font-bold md:text-4xl">
            Depoimentos
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-100/50 bg-white p-6">
      <Quote className="text-josiane-wine-100 mb-4 size-8" aria-hidden="true" />
      <blockquote className="mb-6 flex-grow text-gray-800">
        {testimonial.quote}
      </blockquote>
      <footer className="flex items-center">
        <div className="mr-4">
          <Avatar>
            <AvatarImage
              src={testimonial.avatar}
              alt={`Avatar of ${testimonial.name}`}
            />
          </Avatar>
        </div>
        <div>
          <cite className="font-semibold text-gray-900 not-italic">
            {testimonial.name}
          </cite>
        </div>
      </footer>
    </article>
  )
}
