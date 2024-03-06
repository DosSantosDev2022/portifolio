import { fetchHygraph } from '@/app/api/fetchHygraph'
import { Project } from '@/types/dataTypes'
import { RichText } from '@/app/components/richText'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Technology } from '../components/Technology'

export const GET_DETAILS_PROJECT = async (): Promise<Project> => {
  const query = `
  query Projects{
    project{
      title
      slug
      description
      deployLink
      codeLink
      coverImage {
        url
      }
      technologies(first: 25) {
        id
        name
        iconSvg
      }
      completeDescription {
        raw
      }
      carouseImage {
        image01 {
          url
        }
        image02 {
          url
        }
        image03 {
          url
        }
      }
      destaque
    }
  }
  `

  return fetchHygraph(query)
}

export default async function ProjectPageDetails({
  params,
}: {
  params: { slug: string }
}) {
  const { project } = await GET_DETAILS_PROJECT()

  const projectDetail = project.find((p) => p.slug === params.slug)
  const tech = projectDetail?.technologies

  if (!projectDetail) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-20 px-2 py-28">
        <span className="text-2xl font-medium text-white">
          Projeto não encontrado
        </span>
      </div>
    )
  }

  return (
    <div className="  flex flex-col items-center justify-center gap-10 px-4 lg:gap-20">
      <div className="relative h-[200px] w-full lg:h-screen">
        <div
          className="absolute inset-0 z-[-1]  "
          style={{
            background: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, #27272a 80%, #18181b 100%) , url(${projectDetail.coverImage.url}) no-repeat center/cover `,
          }}
        />
      </div>

      <div className="w-full space-y-16 rounded-md bg-zinc-800 px-4 py-8 lg:w-[768px] lg:px-16 lg:py-16 ">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-4xl font-bold text-zinc-50 lg:text-6xl">
            {projectDetail.title}
          </h2>
          <p className="text-sm font-normal text-zinc-300">
            {projectDetail.description}
          </p>
          <div className="flex flex-col gap-3">
            <span className="text-xl font-normal text-violet-500">
              Tecnologias ulitiladas
            </span>
            <div className="flex flex-wrap items-center justify-start gap-2">
              {tech?.map((i) => (
                <Technology key={i.name} icon={i.iconSvg} name={i.name} />
              ))}
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4 ">
          <h4 className="text-4xl font-bold text-zinc-50">
            Conheça sobre o projeto
          </h4>
          <div className=" space-y-4 ">
            <RichText content={projectDetail.completeDescription.raw} />
          </div>

          {/* <ModalImage
            coverImage={projectDetail.coverImage.url}
            img01={projectDetail.carouseImage.image01.url}
            img02={projectDetail.carouseImage.image02.url}
            img03={projectDetail.carouseImage.image03.url}
          /> */}

          <div className="mt-4 flex w-full flex-col justify-start gap-3 lg:flex-row lg:items-start">
            <Button asChild variant={'default'}>
              <Link href={projectDetail.deployLink}>Deploy do projeto</Link>
            </Button>
            <Button asChild variant={'default'}>
              <Link target="_blank" href={projectDetail.codeLink}>
                Repositório do projeto
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Button
        className="animate-duration-[2000ms] animate-ease-in fixed bottom-4 right-4 animate-bounce"
        variant={'highlights'}
        asChild
      >
        <Link href={'/Projects'}>Voltar</Link>
      </Button>
    </div>
  )
}
