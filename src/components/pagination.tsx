'use client'
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'
import {usePagination} from '@/hooks/usePagination'

interface PaginationProps {
  page: number
  limit : number
  total: number
}

export function Pagination({page,limit,total}: PaginationProps) {

  const {pages} = usePagination({
    page,limit,total
  })
  return (
     <div>
      <PaginationRoot>
        <PaginationContent>
        {pages.map((pageNumber) => (
            <PaginationItem key={page}>
              <PaginationLink
                className={`border rounded-sm hover:bg-slate-800 hover:text-slate-50 ${pageNumber === page ? 'bg-slate-800 text-slate-50' : ''} `}
                href={`/Projects?page=${pageNumber}&limit=${limit}`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
     </PaginationRoot>
     </div>
  )
}
