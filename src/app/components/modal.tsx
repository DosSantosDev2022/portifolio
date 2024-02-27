'use client'
import { LuX } from 'react-icons/lu'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from './button'
import { FormContact } from './form'

export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-700 ">
          Enviar email
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA-blackA10 data-[state=open]:animate-ease-in fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-jump data-[state=open]:animate-duration-500 fixed top-[7%] left-[35%]  w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="w-full text-end">
            <Dialog.Close asChild>
              <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-700 rounded-full">
                <LuX />
              </Button>
            </Dialog.Close>
          </div>
          <div className="mb-2">
            <Dialog.Title>
              <h2 className="font-bold mb-2">Envie um e-mail</h2>
            </Dialog.Title>
            <Dialog.DialogDescription>
              <p className="text-zinc-700 font-medium text-sm">
                Vamos fechar uma parceria ?
              </p>
            </Dialog.DialogDescription>
          </div>

          <FormContact />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
