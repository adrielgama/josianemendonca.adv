import { useState } from 'react'

import Logo from '@/assets/logo.svg'
import { LinksMock } from '@/mock/links'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed left-0 top-0 z-50 w-full shadow-lg drop-shadow-lg">
      <div className="items-center justify-between bg-wine600 px-7 py-1 md:flex md:px-10">
        <div className="flex cursor-pointer items-center">
          <a href="#">
            <img
              src={Logo}
              className="h-20 md:h-28"
              alt="Josiane Mendonça Logo"
            />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-6 md:hidden"
        >
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gold md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-8 w-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-wine600 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {LinksMock.map((link) => (
            <li key={link.name} className="my-7 text-sm md:my-0 md:ml-8">
              <a
                href={link.link}
                className="font-medium text-gold duration-300 hover:text-white md:font-normal"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="pb-2 md:hidden">
            <p className="pt-6 text-center text-xs text-wine100/90">
              Todos os direitos reservados © Josiane de Sena Mendonça OAB/BA :
              65347
            </p>

            <p className="pt-1 text-center text-[10px] text-wine100/90">
              Desenvolvido por
              <a
                href="https://adrielgama.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold"
              >
                {' '}
                adrielgama.dev
              </a>
            </p>
          </div>
        </ul>
      </div>
    </div>
  )
}
