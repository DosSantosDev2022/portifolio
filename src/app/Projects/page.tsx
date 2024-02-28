import { fetchHygraph } from '@/app/api/fetchHygraph'
import { Hero } from '@/app/components/hero'
import { Project } from '@/types/dataTypes'
import { ProjectCard } from './components/projectCards'

export const GET_ALL_PROJECTS = async (): Promise<Project> => {
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
  const { project } = await GET_ALL_PROJECTS()
  return (
    <div className="flex flex-col gap-3">
      <Hero
        title="Meus Projetos"
        subtitle="Conheça os meus melhores projetos"
      />

      <div className="flex flex-wrap items-center justify-start gap-8 p-2 ">
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
    </div>
  )
}
