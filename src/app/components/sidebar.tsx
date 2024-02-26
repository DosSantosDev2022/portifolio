import Image from 'next/image'
import { InformationContainer } from './InformationContainer'
import { SocialNetworkContainer } from './socialNetworkContainer'
import Link from 'next/link'
import { fetchHygraph } from '../api/fetchHygraph'
import { SideBar } from '@/types/dataTypes'

const GET_ALL_DATA_SIDEBAR = async (): Promise<SideBar> => {
  const query = `
   query MyQuery {
    sideBar(where: {slug: "sidebar"}) {
      socials {
        id
        name
        iconSvg
      }
      profile {
        profileImage {
          url
        }
      }
      infoContacts {
        id
        title
        contact
        iconSvg
      }
    }
  }
   `
  return fetchHygraph(query)
}

export async function SideBar() {
  const data = await GET_ALL_DATA_SIDEBAR()
  const profile = data.sideBar.profile
  return (
    <aside className="w-80 bg-zinc-800  flex flex-col items-center text-center rounded-md  px-2 py-2">
      <Image
        className="max-w-[50%] rounded-full "
        src={profile.profileImage.url}
        alt="Matheus Battisti"
        width={400}
        height={400}
        quality={100}
      />
      <div className="flex flex-col gap-5 w-full items-start justify-center text-center p-2 mt-2">
        <h2 className="font-bold text-purple-700">Desenvolvedor FullStack</h2>
        <SocialNetworkContainer data={data} />
        <InformationContainer data={data} />
        <Link
          href="#"
          className="text-zinc-50 bg-zinc-900 p-2 rounded-md hover:bg-zinc-950 duration-500 transition-all"
        >
          Ver Currículo
        </Link>
      </div>
    </aside>
  )
}
