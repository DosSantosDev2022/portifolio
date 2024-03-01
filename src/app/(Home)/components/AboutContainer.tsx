import { hero } from '@/types/dataTypes'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

interface AboutProps {
  hero: hero
}

export function AboutContainer({ hero }: AboutProps) {
  return (
    <div className="bg-zinc-800 w-full lg:h-[340px] px-5 py-4 rounded-md space-y-2 ">
      <h1 className="text-zinc-50 font-bold text-4xl">Sobre mim</h1>
      <p className="text-md text-zinc-100 font-light">{hero.description}</p>
      <p className="text-md text-zinc-100 font-light">{hero.description}</p>
      <div className="flex gap-2 items-center mt-2">
        <Button asChild>
          <Link target="_blank" href={''}>
            GitHub
          </Link>
        </Button>
        <Button>
          <Link target="_blank" href={''}>
            Linkedin
          </Link>
        </Button>
      </div>
    </div>
  )
}
