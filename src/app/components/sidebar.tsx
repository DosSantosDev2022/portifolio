import Image from 'next/image'
import { InformationContainer } from './InformationContainer'
import { SocialNetworkContainer } from './socialNetworkContainer'
import Link from 'next/link'
import { fetchHygraph } from '../api/fetchHygraph'
import { SideBar } from '@/types/dataTypes'
import { Button } from '@/app/components/ui/button'
import { Modal } from '@/app/components/modal'

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
    <aside className="w-80 bg-zinc-800 hidden lg:flex flex-col items-center justify-around text-center rounded-md  px-2 py-2">
      <div className="flex flex-col items-center gap-2">
        <Image
          className="max-w-[50%] rounded-full border-2 border-zinc-100 "
          src={profile.profileImage.url}
          alt="Matheus Battisti"
          width={400}
          height={400}
          quality={100}
        />
        <h2 className="font-bold text-purple-700">Desenvolvedor FullStack</h2>
      </div>

      <div className="flex flex-col gap-5 w-full items-center justify-center text-start p-2 mt-2">
        <SocialNetworkContainer data={data} />
        <InformationContainer data={data} />
        <div className="flex items-start w-full ml-6 gap-2">
          <Button className="px-2" variant={'default'}>
            <Link href="#">Ver Currículo</Link>
          </Button>
          <Modal />
        </div>
      </div>
    </aside>
  )
}
