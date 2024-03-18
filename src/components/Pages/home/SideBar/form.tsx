'use client'

import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { toast } from 'react-toastify'

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

const zodSchemaForm = z.object({
  name: z.string().nonempty('O nome é obrigatório !'),
  email: z
    .string()
    .email('O email é obrigatório')
    .refine((value) => regexEmail.test(value), {
      message: 'Formato de email invalido !',
    }),
  coments: z.string().min(1, 'Por favor deixe uma mensagem !'),
})

type FormType = z.infer<typeof zodSchemaForm>

export function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(zodSchemaForm),
  })

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      toast.success('Mensagem enviada com sucesso ')
    } else {
      toast.error('Erro ao enviar mensagem !')
    }

    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col items-baseline justify-between gap-2">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          placeholder="Qual o seu nome ?"
          {...register('name')}
        />
        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.name?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col items-baseline justify-between gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          placeholder="seuemail@email.com"
          {...register('email')}
        />
        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.email?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col items-baseline justify-between gap-2">
        <label htmlFor="message">Mensagem</label>
        <textarea
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          placeholder="Deixe sua mensagem !"
          {...register('coments')}
        />
        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.coments?.message}
          </span>
        )}
      </div>
      <Button className="mt-2 w-full ">Enviar</Button>
    </form>
  )
}
