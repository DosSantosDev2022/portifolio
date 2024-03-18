import { fetchHygraph } from '@/app/api/fetchHygraph'
import { Hero } from '@/components/hero'
import { Project, InfoHero } from '@/types/index'
import { ProjectCard } from '@/components/Pages/Projects/projectCards'
import { Pagination } from '@/components/pagination'

export const GET_ALL_CARD_PROJECTS = async (): Promise<Project> => {
  const query = `
    query MyQuery {
      project {
        title
        slug
        description
        coverImage {
          url
        }
        destaque
      }
    }
  `
  return fetchHygraph(query)
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

export default async function ProjectsPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const { project } = await GET_ALL_CARD_PROJECTS()
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

      <Pagination />
    </div>
  )
}
