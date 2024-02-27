import { fetchHygraph } from '@/app/api/fetchHygraph'
import { Project } from '@/types/dataTypes'
import { RichText } from '@/app/components/richText'
import Link from 'next/link'
import { Button } from '@/app/components/button'
import { Technology } from '../components/Technology'

export const GET_ALL_PROJECTS = async (): Promise<Project> => {
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
  const { project } = await GET_ALL_PROJECTS()

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
    <div className="flex flex-col items-center justify-center gap-20 px-6 py-28 lg:px-16  ">
      <div className="relative h-[200px] w-full lg:h-[450px]">
        <div
          className="absolute inset-0 z-[-1]  "
          style={{
            background: `url(${projectDetail.coverImage.url}) no-repeat center/cover `,
          }}
        />
      </div>

      <div className="w-full space-y-16 py-10  lg:w-[768px]  lg:py-20 ">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-6xl font-bold text-zinc-50">
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

          <div className="mt-4 flex w-full items-start justify-start gap-3">
            <Button asChild variant="highlight">
              <Link href={projectDetail.deployLink}>Deploy do projeto</Link>
            </Button>
            <Button asChild variant="highlight">
              <Link target="_blank" href={projectDetail.codeLink}>
                Repositório do projeto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
