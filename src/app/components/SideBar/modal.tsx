'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog'
import { Button } from '@/app/components/ui/button'
import { FormContact } from './form'

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Enviar email</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="w-full text-end">
          <DialogClose />
        </DialogHeader>
        <div className="mb-2">
          <DialogTitle className="font-bold mb-2">Envie um e-mail</DialogTitle>
          <DialogDescription className="text-zinc-700 font-medium text-sm">
            Vamos fechar uma parceria ?
          </DialogDescription>
        </div>

        <FormContact />
      </DialogContent>
    </Dialog>
  )
}
