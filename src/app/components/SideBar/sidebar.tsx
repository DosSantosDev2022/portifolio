import Image from 'next/image'
import { InformationContainer } from './InformationContainer'
import { SocialNetworkContainer } from './socialNetworkContainer'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Modal } from '@/app/components/modal'



export async function SideBar() {

  return (
    <aside className="w-80 bg-zinc-800 hidden lg:flex flex-col items-center justify-around text-center rounded-md  px-2 py-2">
      <div className="flex flex-col items-center gap-2">
        <Image
          className="max-w-[50%] rounded-full border-2 border-zinc-100 "
          src={'/Profile.png'}
          alt="Juliano Santos"
          width={400}
          height={400}
          quality={100}
        />
        <h2 className="font-bold text-purple-700 mt-4">Desenvolvedor FullStack</h2>
      </div>

      <div className="flex flex-col gap-5 w-full items-center justify-center text-start p-2 mt-2">
        <SocialNetworkContainer />
        <InformationContainer />
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
