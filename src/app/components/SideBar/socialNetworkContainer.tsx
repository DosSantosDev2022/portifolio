import { SideBar } from '@/types/dataTypes'
import Link from 'next/link'
import { GitHubIcon } from './icons/GitHub'
import { LinkedinIcon } from './icons/Linkedin'
import { InstagramIcon } from './icons/Instagram'
import { WhatsAppIcon } from './icons/WhatsApp'

const link = [
  {
    id: '1',
    url: 'https://github.com/DosSantosDev2022',
    iconSvg: <GitHubIcon/>
  },
  {
    id: '2',
    url: 'https://www.linkedin.com/in/dossantosdev/',
    iconSvg: <LinkedinIcon/>
  },
  {
    id: '3',
    url: 'https://www.instagram.com/julianosantosdev/',
    iconSvg:<InstagramIcon/>
  },
  {
    id: '4',
    url: 'whatsapp',
    iconSvg:<WhatsAppIcon/>
  },
]

export function SocialNetworkContainer() {
  
  return (
    <div className="flex gap-4 items-start ml-6 w-full">
      {link?.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          className="hover:scale-105 duration-500 transition-all"
        >
          <i>{item.iconSvg}</i>
        </Link>
      ))}
    </div>
  )
}
