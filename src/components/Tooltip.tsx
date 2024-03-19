import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ReactNode } from 'react'

interface MyTooltipProps {
  icon: ReactNode
  nome: string
}

export function MyTooltip({ icon, nome }: MyTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="">{icon}</TooltipTrigger>
        <TooltipContent>{nome}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
