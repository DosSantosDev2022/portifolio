import Link from 'next/link'

export function Projects() {
  return (
    <section className="mt-5 flex flex-col gap-3">
      <p className="text-md font-light text-zinc-100">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at
        rem fugit provident dolorum exercitationem, ducimus quisquam ratione
        cumque reiciendis accusamus totam, veniam iusto numquam distinctio.
        Dignissimos labore aspernatur pariatur?
      </p>
      <Link
        href="#"
        className="w-[120px] rounded-md bg-zinc-700 p-2 text-zinc-100"
      >
        Ver Projetos
      </Link>
    </section>
  )
}
