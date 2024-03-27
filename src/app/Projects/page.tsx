import { fetchHygraph } from '@/app/api/fetchHygraph'
import { Hero } from '@/components/hero'
import { Project, InfoHero } from '@/types/index'
import { ProjectCard } from '@/components/Pages/Projects/projectCards'
import { Pagination } from '@/components/pagination'

interface ProjectsPageProps {
  searchParams?: {
    page:number
    first: number
    total:number
  }
}

export const GET_ALL_CARD_PROJECTS = async (page: number, pageSize:number): Promise<Project> => {
  const query = `
    query MyQuery($first : Int, $skip: Int) {
      project(first:$first, skip:$skip) {
        title
        slug
        description
        coverImage {
          url
        }
        destaque
      }

      projectConnection {
        aggregate {
          count
        }
      }
    }
  `

  const skip = (page - 1) * pageSize
  const variables = { first: pageSize, skip }
  const { project, projectConnection } = await fetchHygraph(query, variables)
  const totalCount = projectConnection.aggregate.count
  return { project, totalCount }
  
}

export const GET_ALL_HERO_DATA = async (): Promise<InfoHero> => {
  const query = `
    query MyQuery {
      hero (where: {id: "cltdjtz790nor08lzadnt8bra"}) {
        title
        coverImage {
          url
        }
        description
      }
    }
  `
  return fetchHygraph(query)
}

export default async function ProjectsPage({searchParams} :ProjectsPageProps ) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 2

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const { project,totalCount } = await GET_ALL_CARD_PROJECTS(page,first)
  const { hero } = await GET_ALL_HERO_DATA()

  return (
    <div className="flex  flex-col items-center  gap-20  ">
      <Hero
        title={hero?.title}
        urlImage={hero.coverImage?.url}
        paragraph={hero.description}
      />

      <div className=" grid  grid-cols-1 items-center justify-center gap-10 px-8 py-7 md:grid-cols-2 lg:grid-cols-3 lg:px-16 ">
        {project.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            slug={project.slug}
            description={project.description}
            coverImage={project.coverImage.url}
          />
        ))}
      </div>

      <Pagination limit={first}  total={totalCount} page={page}/>
    </div>
  )
}
