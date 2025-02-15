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
      <div className="container mx-auto bg-zinc-100 px-4 py-6 shadow-lg">
        <h2 className="sr-only">Estatísticas</h2>
        <div className="flex flex-col items-center justify-evenly gap-6 lg:flex-row">
          {stats.map((stat, index) => (
            <div key={stat.title} className="flex items-center gap-6">
              <Stats value={stat.value} title={stat.title} />
              {index < stats.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden lg:block lg:!h-28"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Stats = ({ value, title }: { value: string; title: string }) => {
  return (
    <div
      aria-labelledby={`stat-${title.replace(/\s+/g, '-')}`}
      className="font-montserrat text-josiane-wine-400 flex flex-col items-center justify-center text-center"
    >
      <span
        id={`stat-${title.replace(/\s+/g, '-')}`}
        className="text-2xl font-bold lg:text-5xl"
      >
        {value}
      </span>
      <span className="text-xs lg:text-base">{title}</span>
    </div>
  )
}
