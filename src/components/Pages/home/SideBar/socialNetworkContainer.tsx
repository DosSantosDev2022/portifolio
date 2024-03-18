import Link from 'next/link'
import { GitHubIcon } from './icons/GitHub'
import { LinkedinIcon } from './icons/Linkedin'
import { InstagramIcon } from './icons/Instagram'
import { WhatsAppIcon } from './icons/WhatsApp'

const link = [
  {
    id: '1',
    url: 'https://github.com/DosSantosDev2022',
    iconSvg: <GitHubIcon />,
  },
  {
    id: '2',
    url: 'https://www.linkedin.com/in/dossantosdev/',
    iconSvg: <LinkedinIcon />,
  },
  {
    id: '3',
    url: 'https://www.instagram.com/julianosantosdev/',
    iconSvg: <InstagramIcon />,
  },
  {
    id: '4',
    url: 'whatsapp',
    iconSvg: <WhatsAppIcon />,
  },
]

export function SocialNetworkContainer() {
  return (
    <div className="flex w-full items-start  gap-4">
      {link?.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          className="transition-all duration-500 hover:scale-105"
        >
          <i>{item.iconSvg}</i>
        </Link>
      ))}
    </div>
  )
}
