import { Button } from '@/app/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  coverImage: string
  slug: string
}

export function ProjectCard({
  title,
  slug,
  description,
  coverImage,
}: ProjectCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between space-y-2 rounded-lg  bg-zinc-50 p-6 shadow-md lg:w-[23rem]">
      <div className="aspect-w-1 aspect-h-1 flex-shrink-0">
        <Image
          className=" w-full rounded-sm"
          alt="Imagem descritiva do projeto"
          src={coverImage}
          width={250}
          height={250}
        />
      </div>

      <div className="flex h-full flex-col justify-between  gap-6">
        <div className="flex  flex-col gap-2">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm font-normal">{description} </p>
        </div>

        <Button aria-label="link" variant={'default'} asChild>
          <Link href={`/Project/${slug}`}>Ver Mais</Link>
        </Button>
      </div>
    </div>
  )
}
