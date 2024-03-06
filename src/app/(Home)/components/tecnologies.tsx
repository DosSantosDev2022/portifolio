import { Technology } from '@/types/dataTypes'
import { CMSIcon } from '@/app/components/iconCms'
import { MyTooltip } from '@/app/components/Tooltip'

interface TecnologiesProps {
  technologies: Technology[]
}

export function Tecnologies({ technologies }: TecnologiesProps) {
  console.log(technologies)
  return (
    <div className="w-full rounded-md bg-zinc-800 px-5 py-4 lg:h-36 ">
      <h2 className="text-4xl font-bold text-zinc-50">Tecnologias</h2>
      <div className="mt-5 flex w-full flex-wrap gap-3">
        {technologies.map((tech) => (
          <i key={tech.name} className="text-4xl text-zinc-50">
            <MyTooltip
              icon={<CMSIcon icon={tech.iconSvg} />}
              nome={tech.name}
            />
          </i>
        ))}
      </div>
    </div>
  )
}
