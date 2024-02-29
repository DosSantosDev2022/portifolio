import { HomePageInfo } from '@/types/dataTypes'
import { CMSIcon } from '@/app/components/iconCms'
import { MyTooltip } from '@/app/components/Tooltip'

interface TecnologiesProps {
  data: HomePageInfo
}

export function Tecnologies({ data }: TecnologiesProps) {
  const tech = data.technologies
  return (
    <div className="w-full flex flex-wrap gap-3 mt-5">
      {tech.map((tech) => (
        <i key={tech.name} className="text-zinc-50 text-4xl">
          <MyTooltip icon={<CMSIcon icon={tech.iconSvg} />} nome={tech.name} />
        </i>
      ))}
    </div>
  )
}
