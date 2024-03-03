'use client'
import Image from 'next/image'
import { InformationContainer } from './InformationContainer'
import { SocialNetworkContainer } from './socialNetworkContainer'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Modal } from '@/app/components/SideBar/modal'

export function SideBar() {
  return (
    <aside className="flex h-full w-full flex-col  items-center justify-around gap-12 rounded-md bg-zinc-800 px-4 py-6  text-center lg:w-80">
      <div className="flex flex-col items-center gap-2">
        <Image
          className="w-[160px] rounded-full "
          src={'/Profile.png'}
          alt="Juliano Santos"
          width={400}
          height={400}
          quality={100}
        />
        <span className="text-2xl font-semibold text-zinc-50">
          Juliano Santos
        </span>
        <h2 className="text-sm font-medium text-purple-700">
          Desenvolvedor FullStack
        </h2>
      </div>

      <div className="mt-2 flex flex-col  items-center justify-center gap-5 p-2 text-start">
        <SocialNetworkContainer />
        <InformationContainer />
        <div className="flex w-full items-start  gap-2">
          <Button className="px-2" variant={'default'}>
            <Link href="#">Ver Currículo</Link>
          </Button>
          <Modal />
        </div>
      </div>
    </aside>
  )
}
