import { SideBar } from '@/types/dataTypes'
import Link from 'next/link'
import { CMSIcon } from './iconCms'

interface SocialNetworkContainerProps {
  data: SideBar
}

export function SocialNetworkContainer({ data }: SocialNetworkContainerProps) {
  const link = data.sideBar.socials
  return (
    <div className="flex gap-4">
      {link?.map((item) => (
        <Link
          key={item.id}
          href={item.name}
          className="hover:scale-105 duration-500 transition-all"
        >
          <CMSIcon icon={item.iconSvg} />
        </Link>
      ))}
    </div>
  )
}
