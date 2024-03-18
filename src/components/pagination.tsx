import { Button } from '@/components/ui/button'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'

export function Pagination() {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button size={'icon'} variant={'outline'}>
        <LucideChevronLeft />
      </Button>
      <Button size={'icon'} variant={'outline'}>
        1
      </Button>
      <Button size={'icon'} variant={'outline'}>
        2
      </Button>
      <Button size={'icon'} variant={'outline'}>
        3
      </Button>
      <Button size={'icon'} variant={'outline'}>
        ...
      </Button>
      <Button size={'icon'} variant={'outline'}>
        <LucideChevronRight />
      </Button>
    </div>
  )
}
