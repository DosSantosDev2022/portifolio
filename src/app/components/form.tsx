import { Button } from './button'

export function FormContact() {
  return (
    <form className="space-y-4">
      <div className="flex flex-col items-baseline justify-between gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="seuemail@email.com"
        />
      </div>
      <div className="flex flex-col items-baseline justify-between gap-2">
        <label htmlFor="message">Mensagem</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="message"
          placeholder="Deixe sua mensagem !"
        />
      </div>
      <Button variant="highlight" className="w-full mt-2 ">
        Enviar
      </Button>
    </form>
  )
}
