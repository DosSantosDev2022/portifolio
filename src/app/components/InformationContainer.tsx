import { SideBar } from '@/types/dataTypes'
import { CMSIcon } from './iconCms'

interface InformationContainerProps {
  data: SideBar
}

export function InformationContainer({ data }: InformationContainerProps) {
  const dataItem = data.sideBar.infoContacts

  return (
    <section className="flex flex-col items-center justify-center   text-left  gap-5 ">
      <div className="flex flex-col justify-start gap-4 rounded-sm w-full">
        {dataItem.map((item) => (
          <div
            key={item.id}
            className="flex justify-start gap-4 rounded-sm w-full"
          >
            <CMSIcon icon={item.iconSvg} className="text-purple-600 mt-1" />
            <div className="flex flex-col gap-1 text-zinc-50">
              <h3 className="font-bold">{item.title} </h3>
              <p className="text-sm font-light">{item.contact} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
