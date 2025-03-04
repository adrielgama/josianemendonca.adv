import { Separator } from '@/components/ui/separator'

export default function StatisticsSection() {
  const stats = [
    { value: '+300', title: 'participações em processos' },
    { value: '+1000', title: 'clientes atendidos' },
    { value: '100%', title: 'voltariam a contratar' },
  ]

  return (
    <section
      className="relative bottom-12 px-4"
      aria-labelledby="statistics-heading"
    >
      <div className="container mx-auto bg-zinc-50 px-4 py-6 shadow-lg">
        <h2 className="sr-only">Estatísticas</h2>
        <div className="flex flex-col items-center justify-evenly gap-6 lg:flex-row">
          <Stats value={stats[0].value} title={stats[0].title} />
          <Separator
            orientation="vertical"
            className="hidden lg:block lg:!h-28"
            aria-hidden="true"
          />
          <Stats value={stats[1].value} title={stats[1].title} />
          <Separator
            orientation="vertical"
            className="hidden lg:block lg:!h-28"
            aria-hidden="true"
          />
          <Stats value={stats[2].value} title={stats[2].title} />
        </div>
      </div>
    </section>
  )
}

const Stats = ({ value, title }: { value: string; title: string }) => {
  return (
    <div
      aria-labelledby={`stat-${title.replace(/\s+/g, '-')}`}
      className="font-montserrat text-josiane-wine-600 flex flex-col items-center justify-center text-center"
    >
      <span
        id={`stat-${title.replace(/\s+/g, '-')}`}
        className="text-2xl font-bold lg:text-5xl"
      >
        {value}
      </span>
      <span className="text-josiane-wine-400 text-xs lg:text-base">
        {title}
      </span>
    </div>
  )
}
