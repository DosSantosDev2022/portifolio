import { HomePageInfo } from '@/types/dataTypes'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectsProps {
  hero: HomePageInfo
}

export function Projects({ hero }: ProjectsProps) {
  const highlightsproject = hero.highlightsproject
  return (
    <div className="flex w-full flex-col justify-between gap-6 rounded-md bg-zinc-800 px-5 py-4 ">
      <h2 className="text-4xl font-bold text-zinc-50">{hero.hero.title} </h2>
      <p className="text-md font-light text-zinc-100">
        {hero.hero.description}
      </p>
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        {highlightsproject.map((project) => (
          <Link
            href={`Project/${project.slug}`}
            key={project.title}
            className="flex h-[120px] w-[289px] items-center gap-4 rounded-lg border border-zinc-700 bg-zinc-800 p-5 text-zinc-50 shadow-md duration-500 hover:scale-105 hover:bg-zinc-900"
          >
            <Image
              alt=""
              src={project.coverImage.url}
              width={80}
              height={80}
              quality={100}
              className="h-[80px] w-[80px] rounded-full bg-zinc-700 object-cover "
            />
            <div className="flex flex-col items-start gap-1 text-start">
              <h2 className="text-md font-semibold">{project.title} </h2>
              <p className="text-xs">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="#"
        className="w-[120px] rounded-md bg-zinc-700 p-2 text-zinc-100"
      >
        Ver Projetos
      </Link>
    </div>
  )
}
