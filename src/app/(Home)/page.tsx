import { HomePageData } from '@/types/index'
import { fetchHygraph } from '@/app/api/fetchHygraph'
import { Tecnologies } from '@/components/Pages/home/tecnologies'
import { SideBar } from '@/components/Pages/home/SideBar/sidebar'
import { HighlightsProjects } from '@/components/Pages/home/HighlightsProjects'
import { AboutContainer } from '@/components/Pages/AboutContainer'

const GET_DATA_HOMEPAGE = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    about(where: {id: "clt1ksbej2zmi07lu9rr8rrgz"}) {
      id
      title
      content {
        raw
      }
      aboutLinks {
        id
        name
        link
      }
    }
    technologies {
      id
      name
      iconSvg
    }
    project(where: {destaque: true}) {
      title
      slug
      subtitle
      coverImage {
        url
      }
    }
  }
  `
  return fetchHygraph(query)
}

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const { technologies, about, project } = await GET_DATA_HOMEPAGE()

  return (
    <div className="flex flex-col gap-6 px-8 py-7 lg:flex-row  lg:px-16 ">
      <SideBar />
      <div className=" flex w-full flex-col gap-8 rounded-md">
        <AboutContainer about={about} />

        <Tecnologies technologies={technologies} />

        <HighlightsProjects project={project} />
      </div>
    </div>
  )
}
