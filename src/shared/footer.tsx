import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="mt-8 hidden h-max w-full bg-wine400 md:block ">
      <div className="container flex  flex-col p-4 text-center text-sm text-white lg:max-w-3xl">
        <p>
          © {currentYear}. Todos os direitos reservados. Josiane Mendonça -
          OAB/BA 65347
        </p>
        <a
          href="http://adrielgama.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold transition-all hover:text-gray-light"
        >
          Development by adrielgama.dev
        </a>
      </div>
    </div>
  )
}
