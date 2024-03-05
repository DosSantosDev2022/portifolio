import { fetchHygraph } from '@/app/api/fetchHygraph'
import { Hero } from '@/app/components/hero'
import { Project } from '@/types/dataTypes'
import { ProjectCard } from './components/projectCards'
import { Pagination } from './components/pagination'

export const GET_ALL_CARD_PROJECTS = async (): Promise<Project> => {
  const query = `
    query Projects {
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

export default async function ProjectsPage() {
  const { project } = await GET_ALL_CARD_PROJECTS()
  return (
    <div className="flex  flex-col items-center  gap-20 px-4 py-7  lg:px-8 ">
      <Hero
        title="Meus Projetos"
        subtitle="Conheça os meus melhores projetos"
      />

      <div className="grid grid-cols-1 items-center justify-center gap-10 py-7 md:grid-cols-2 lg:grid-cols-3 lg:px-16 ">
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
