'use client'
import { useState } from 'react'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/blog', label: 'Blog' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-josiane-wine-400 fixed top-0 left-0 z-50 flex h-28 w-full items-center shadow-md">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <div className="h-[6.25rem] w-[12.5rem]">
          <Image
            src="/images/logo.png"
            alt="Logo Josiane Mendonça"
            width={200}
            height={100}
            quality={100}
            priority
            className="h-full w-full object-contain"
          />
        </div>

        <Button
          variant="link"
          onClick={toggleMenu}
          size="icon"
          className="md:hidden"
          aria-label="Abrir menu mobile"
        >
          <Menu className="text-josiane-gold-100 !size-8" />
        </Button>

        <nav className="hidden md:block">
          <ul className="text-josiane-gold-400 flex gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={cn(
          'bg-opacity-50 bg-josiane-wine-600/95 fixed inset-0 transition-opacity md:hidden',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={toggleMenu}
      ></div>

      <aside
        aria-hidden={!isMenuOpen}
        className={cn(
          'fixed top-0 right-0 h-full w-64 transform bg-white p-6 shadow-lg transition-transform md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="absolute top-4 right-4"
          aria-label="Close menu mobile"
        >
          <X className="text-josiane-wine-400 !size-6" />
        </Button>

        {/* NAV MOBILE */}
        <nav aria-label="Menu mobile">
          <ul className="mt-12 flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: (e: { preventDefault: () => void }) => void
  className?: string
}

const NavLink = ({ href, children, onClick, className }: NavLinkProps) => (
  <li className={className}>
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-josiane-gold-100 cursor-pointer"
    >
      {children}
    </Link>
  </li>
)
