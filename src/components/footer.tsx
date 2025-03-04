import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
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
  )
}
