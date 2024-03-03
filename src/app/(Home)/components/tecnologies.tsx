import { HomePageInfo } from '@/types/dataTypes'
import { CMSIcon } from '@/app/components/iconCms'
import { MyTooltip } from '@/app/components/Tooltip'

interface TecnologiesProps {
  data: HomePageInfo
}

export function Tecnologies({ data }: TecnologiesProps) {
  const tech = data.technologies
  return (
    <div className="mt-5 flex w-full flex-wrap gap-3">
      {tech.map((tech) => (
        <i key={tech.name} className="text-4xl text-zinc-50">
          <MyTooltip icon={<CMSIcon icon={tech.iconSvg} />} nome={tech.name} />
        </i>
      ))}
    </div>
  )
}
