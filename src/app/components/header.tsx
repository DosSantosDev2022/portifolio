'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    <header className="w-full h-[70px] bg-zinc-800 flex items-center p-2 rounded-sm ">
      <nav className="flex items-center justify-end w-full p-6 gap-3">
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
