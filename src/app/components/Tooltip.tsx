'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

interface MyTooltipProps {
  icon: ReactNode
  nome: string
}

export function MyTooltip({ icon, nome }: MyTooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>{icon}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className="bg-zinc-50 px-[15px] py-[10px] leading-none  "
          >
            {nome}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
