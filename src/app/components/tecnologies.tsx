import { HomePageInfo } from "@/types/dataTypes"
import { CMSIcon } from "./iconCms"

interface TecnologiesProps {
  data : HomePageInfo
}


export function Tecnologies({data} : TecnologiesProps) {
  const tech = data.technologies
  return (
    <section className="flex flex-col gap-3 mt-20">
    <h2 className="text-3xl font-bold text-zinc-50">Tecnologias</h2>
    <div className="flex gap-3">
      {tech.map((tech) => (
          <i key={tech.name} className="text-zinc-50 text-4xl">
            <CMSIcon icon={tech.iconSvg} />
          </i>
      ))}
    </div>
  </section>
  )
}