import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 pt-4 lg:grid-cols-[auto_1fr] lg:gap-0 lg:pt-0">
      <div className="flex max-w-lg flex-col justify-center gap-8 lg:gap-16">
        <h1 className="text-josiane-wine-400 font-neuton text-4xl lg:text-6xl">
          <span className="font-bold">Soluções jurídicas estratégicas</span>{' '}
          <span className="text-josiane-gold-400 font-light">
            para proteger seus direitos
          </span>
        </h1>
        <div className="space-y-6">
          <p className="text-sm font-light text-gray-500">
            Atuação jurídica especializada para proteger seus direitos! Direito
            Trabalhista, Civil, de Família, do Consumidor e muito mais. Conte
            com uma assessoria experiente e comprometida com a sua causa.
          </p>
          <Button variant="josiane" size="xl" className="max-w-fit">
            Entre em contato
          </Button>
        </div>
      </div>
      <aside className="justify-self-center">
        <Image
          src="/images/josiane.png"
          alt="Logo Josiane Mendonça"
          width={600}
          height={100}
          quality={100}
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
      </aside>
    </div>
  )
}
