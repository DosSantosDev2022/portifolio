'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

export function Header() {
  const links = [
    {
      nome: 'Home',
      Url: '/',
    },
    {
      nome: 'Projetos',
      Url: '/Projects',
    },
    {
      nome: 'Contato',
      Url: '/Contact',
    },
  ]
  const router = usePathname()

  return (
    <header className=" flex h-[90px] w-full items-center justify-around rounded-sm  bg-zinc-800 px-4 py-6 ">
      <h1 className="text-4xl font-bold text-zinc-50">DosSantosDev</h1>
      <Button className="lg:hidden">
        <Menu />
      </Button>
      <nav className={`hidden items-center justify-end gap-3 lg:flex `}>
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
