'use client'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-josiane-wine-400 fixed top-0 left-0 z-50 w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src="/images/logo.png"
          alt="Logo Josiane Mendonça"
          width={200}
          height={100}
          quality={100}
          priority
        />

        <Button
          variant="link"
          onClick={toggleMenu}
          size="icon"
          className="md:hidden"
        >
          <Menu size={40} />
        </Button>

        <nav className="hidden md:block">
          <ul className="text-josiane-gold-400 flex gap-6">
            <li className="hover:text-josiane-gold-100 cursor-pointer">
              <Link href="#">Início</Link>
            </li>
            <li className="hover:text-josiane-gold-100 cursor-pointer">
              <Link href="#purpose">Propósito</Link>
            </li>
            <li className="hover:text-josiane-gold-100 cursor-pointer">
              <Link href="#blog">Blog</Link>
            </li>
            <li className="hover:text-josiane-gold-100 cursor-pointer">
              <Link href="#testimonials">Depoimentos</Link>
            </li>
            <li className="hover:text-josiane-gold-100 cursor-pointer">
              <Link href="#contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`bg-opacity-50 bg-josiane-wine-600/95 fixed inset-0 transition-opacity ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'} md:hidden`}
        onClick={toggleMenu}
      ></div>

      <aside
        className={`fixed top-0 right-0 h-full w-64 transform bg-white p-6 shadow-lg transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <X size={30} className="text-black" />
        </button>

        <nav>
          <ul className="mt-12 flex flex-col gap-6 text-lg">
            <li className="hover:text-gray-700">
              <Link href="#" onClick={toggleMenu}>
                Início
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="#purpose" onClick={toggleMenu}>
                Propósito
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="#blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="#testimonials" onClick={toggleMenu}>
                Depoimentos
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="#contact" onClick={toggleMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </header>
  )
}

export default Header
