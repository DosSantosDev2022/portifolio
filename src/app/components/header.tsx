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
    <header className=" w-full h-[90px] bg-zinc-800 flex items-center justify-around  px-4 py-6 rounded-sm ">
      <h1 className="text-zinc-50 font-bold text-4xl">DosSantosDev</h1>
      <Button className="lg:hidden">
        <Menu />
      </Button>
      <nav className={`lg:flex items-center justify-end hidden gap-3 `}>
        {links.map((link) => (
          <Link
            className={`text-zinc-50 hover:bg-purple-600 duration-500 transition-all p-1 rounded-sm ${router === link.Url ? 'bg-purple-600' : 'hover:bg-purple-600'}`}
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
