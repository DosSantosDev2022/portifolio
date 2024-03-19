import Image from 'next/image'

interface TechnologyProps {
  icon: string
  name: string
}

export function Technology({ icon = '', name }: TechnologyProps) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-zinc-900 p-2 text-zinc-50 shadow-md">
      <Image alt={name} src={icon} width={28} height={28} quality={100} />
      <span>{name}</span>
    </div>
  )
}
