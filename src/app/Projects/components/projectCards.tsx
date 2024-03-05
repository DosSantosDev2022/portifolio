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
    <div className=" h-[27rem] w-[21rem] min-w-[21rem] max-w-[21rem] space-y-2  overflow-hidden rounded-lg bg-zinc-50 shadow-md">
      <Image
        className=" w-full rounded-sm"
        alt="Imagem descritiva do projeto"
        src={coverImage}
        width={250}
        height={250}
      />
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm font-normal">{description} </p>
          <Link
            className="w-24 rounded-md bg-violet-900 p-2 text-center text-sm font-bold text-zinc-50 transition-all duration-500 hover:bg-violet-700"
            href={`/Project/${slug}`}
          >
            Ver Mais
          </Link>
        </div>
      </div>
    </div>
  )
}
