'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { LucideX, Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  const links = [
    {
      nome: 'Home',
      Url: '/',
    },
    {
      nome: 'Projetos',
      Url:`/Projects?page=1&limit=2`,
    },
    {
      nome: 'Contato',
      Url: '/Contact',
    },
  ]

  const router = usePathname()

  return (
    <header className="fixed top-0 z-50 flex w-full flex-col items-center justify-around gap-12 rounded-sm bg-zinc-800 px-4 py-6 shadow-lg  lg:h-[90px] lg:flex-row lg:gap-0 ">
      <div className="flex w-full items-center justify-around lg:w-0">
        <h1 className="text-4xl font-bold text-zinc-50">DosSantosDev</h1>
        <Button aria-label="Menu" onClick={handleMenu} className="lg:hidden">
          {menuIsOpen ? <LucideX /> : <Menu />}
        </Button>
      </div>

      <nav
        className={` ${menuIsOpen ? 'flex' : ' hidden'} animate-menu-mobile-down items-center justify-end gap-3 lg:flex lg:animate-none `}
      >
        {links.map((link) => (
          <Link
            className={`rounded-sm p-1 text-zinc-50 transition-all duration-500 hover:bg-purple-600 ${router === link.Url ? 'bg-purple-600' : 'hover:bg-purple-600'}`}
            key={link.nome}
            href={link.Url}
          >
            {link.nome}
          </Link>
        ))}
      </nav>
    </header>
  )
}
