'use client'
import Image from 'next/image'
import { InformationContainer } from './InformationContainer'
import { SocialNetworkContainer } from './socialNetworkContainer'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Modal } from '@/app/components/SideBar/modal'

export function SideBar() {
  return (
    <aside className="lg:w-80 w-full h-full bg-zinc-800  flex flex-col gap-12 items-center justify-around text-center rounded-md  px-4 py-6">
      <div className="flex flex-col items-center gap-2">
        <Image
          className="w-[160px] rounded-full "
          src={'/Profile.png'}
          alt="Juliano Santos"
          width={400}
          height={400}
          quality={100}
        />
        <span className="text-zinc-50 font-semibold text-2xl">
          Juliano Santos
        </span>
        <h2 className="font-medium text-sm text-purple-700">
          Desenvolvedor FullStack
        </h2>
      </div>

      <div className="flex flex-col gap-5  items-center justify-center text-start p-2 mt-2">
        <SocialNetworkContainer />
        <InformationContainer />
        <div className="flex items-start w-full  gap-2">
          <Button className="px-2" variant={'default'}>
            <Link href="#">Ver Currículo</Link>
          </Button>
          <Modal />
        </div>
      </div>
    </aside>
  )
}
