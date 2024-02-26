import { SideBar } from '@/types/dataTypes'
import Link from 'next/link'
import { CMSIcon } from './iconCms'

interface SocialNetworkContainerProps {
  data: SideBar
}

export function SocialNetworkContainer({ data }: SocialNetworkContainerProps) {
  const link = data.sideBar.socials
  return (
    <div className="flex gap-2">
      {link?.map((item) => (
        <Link key={item.id} href={item.name}>
          <CMSIcon icon={item.iconSvg} />
        </Link>
      ))}
    </div>
  )
}
