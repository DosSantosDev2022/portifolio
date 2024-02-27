'use client'

import { Button } from './button'
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Qual o seu nome ?"
          {...register('name')}
        />
        {errors && (
          <span className="text-red-500 font-normal text-md">
            {errors.name?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col items-baseline justify-between gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="seuemail@email.com"
          {...register('email')}
        />
        {errors && (
          <span className="text-red-500 font-normal text-md">
            {errors.email?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col items-baseline justify-between gap-2">
        <label htmlFor="message">Mensagem</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Deixe sua mensagem !"
          {...register('coments')}
        />
        {errors && (
          <span className="text-red-500 font-normal text-md">
            {errors.coments?.message}
          </span>
        )}
      </div>
      <Button variant="highlight" className="w-full mt-2 ">
        Enviar
      </Button>
    </form>
  )
}
