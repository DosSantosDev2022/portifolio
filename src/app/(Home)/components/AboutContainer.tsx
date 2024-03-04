import { about } from '@/types/dataTypes'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'
import { RichText } from '@/app/components/richText'

interface AboutProps {
  about: about
}

export function AboutContainer({ about }: AboutProps) {
  return (
    <div className="w-full space-y-2 rounded-md bg-zinc-800 px-5 py-4 lg:h-[340px] ">
      <h1 className="text-4xl font-bold text-zinc-50">{about.title}</h1>
      <RichText content={about.content.raw} />
      <div className="mt-2 flex items-center gap-2">
        {about.aboutLinks.map((link) => (
          <Button key={link.id} asChild>
            <Link target="_blank" href={link.link}>
              {link.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
