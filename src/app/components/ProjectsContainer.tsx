import Link from "next/link";

export function Projects() {
  return (
    <section className="flex flex-col gap-3 mt-20">
      <h2 className="text-3xl font-bold text-zinc-50" >Projetos</h2>
      <p className="text-md font-light text-zinc-100">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at
        rem fugit provident dolorum exercitationem, ducimus quisquam ratione
        cumque reiciendis accusamus totam, veniam iusto numquam distinctio.
        Dignissimos labore aspernatur pariatur?
      </p>
      <Link href="#" className="bg-zinc-700 p-2 rounded-md w-[120px] text-zinc-100">
        Ver Projetos
      </Link>
    </section>
  )
}