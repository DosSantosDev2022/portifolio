'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
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
          <DialogTitle className="mb-2 font-bold">Envie um e-mail</DialogTitle>
          <DialogDescription className="text-sm font-medium text-zinc-700">
            Vamos fechar uma parceria ?
          </DialogDescription>
        </div>

        <FormContact />
      </DialogContent>
    </Dialog>
  )
}
