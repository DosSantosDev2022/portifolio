import { hero } from '@/types/dataTypes'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

interface AboutProps {
  hero: hero
}

export function AboutContainer({ hero }: AboutProps) {
  return (
    <div className="w-full space-y-2 rounded-md bg-zinc-800 px-5 py-4 lg:h-[340px] ">
      <h1 className="text-4xl font-bold text-zinc-50">{hero.title}</h1>
      <p className="text-md font-light text-zinc-100">{hero.description}</p>
      <p className="text-md font-light text-zinc-100">{hero.description}</p>
      <div className="mt-2 flex items-center gap-2">
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
