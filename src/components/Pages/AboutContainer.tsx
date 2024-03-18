import { about } from '@/types/dataTypes'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { RichText } from '@/components/richText'

interface AboutProps {
  about: about
}

export function AboutContainer({ about }: AboutProps) {
  return (
    <div className="flex w-full flex-col justify-between gap-1 rounded-md bg-zinc-800 px-5 py-4 lg:h-[340px] ">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-zinc-50">{about.title}</h1>
        <RichText content={about.content.raw} />
      </div>
      <div className="flex items-center gap-2">
        {about.aboutLinks.map((link) => (
          <Button
            className="uppercase transition-all duration-500 hover:scale-105"
            variant={'default'}
            key={link.id}
            asChild
          >
            <Link target="_blank" href={link.link}>
              {link.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
