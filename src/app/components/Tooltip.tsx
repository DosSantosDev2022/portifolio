import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip'
import { ReactNode } from 'react'

interface MyTooltipProps {
  icon: ReactNode
  nome: string
}

export function MyTooltip({ icon, nome }: MyTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent>{nome}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
