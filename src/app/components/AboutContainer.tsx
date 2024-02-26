import { HomePageInfo } from '@/types/dataTypes'
import { RichText } from '@/app/components/richText'

interface AboutProps {
  data: HomePageInfo
}

export function AboutContainer({ data }: AboutProps) {
  return (
    <section className="space-y-2">
      <h2 className="font-bold text-2xl text-zinc-50">{data?.about.title} </h2>
      <p className="text-md font-light text-zinc-100">
        <RichText content={data.about.content.raw} fontSize="lg" />
      </p>
    </section>
  )
}
