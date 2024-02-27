import { CMSIcon } from '@/app/components/iconCms'

interface TechnologyProps {
  icon: string
  name: string
}

export function Technology({ icon = '', name }: TechnologyProps) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-zinc-900 p-2 text-zinc-50 shadow-md">
      <CMSIcon className="text-xl text-zinc-700" icon={icon} />
      <span>{name}</span>
    </div>
  )
}
