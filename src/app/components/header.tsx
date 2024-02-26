import Link from 'next/link'

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
  return (
    <header className="w-full h-[70px] bg-zinc-800 flex items-center p-2 ">
      <nav className="flex gap-3">
        {links.map((link) => (
          <Link className="text-zinc-50" key={link.nome} href={link.Url}>
            {link.nome}
          </Link>
        ))}
      </nav>
    </header>
  )
}
