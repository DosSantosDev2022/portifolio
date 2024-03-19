import { Technology } from '@/types/index'

import Image from 'next/image'

interface TecnologiesProps {
  technologies: Technology[]
}

export function Tecnologies({ technologies }: TecnologiesProps) {
  console.log(technologies)
  return (
    <div className="w-full rounded-md bg-zinc-800 px-5 py-4  ">
      <h2 className="text-4xl font-bold text-zinc-50">Tecnologias</h2>
      <div className="mt-5 flex w-full flex-wrap gap-3">
        {technologies.map((tech) => (
          <Image
            className="flex items-center justify-center rounded-full bg-zinc-900 p-[7px] "
            key={tech.id}
            alt={tech.name}
            src={tech.icon?.url || ''}
            width={42}
            height={42}
            quality={100}
          />
        ))}
      </div>
    </div>
  )
}
