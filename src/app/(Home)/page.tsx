import { HomePageData } from '@/types/dataTypes'
import { fetchHygraph } from '@/app/api/fetchHygraph'
import { Tecnologies } from './components/tecnologies'
import { SideBar } from '../components/SideBar/sidebar'
import { Projects } from './components/ProjectsContainer'
import { AboutContainer } from './components/AboutContainer'

const GET_ALL_DATA = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    homePage(where: {slug: "home"}) {
      hero {
        title
        subtitle
        description
        coverImage {
          url
        }
      }
      technologies {
        iconSvg
        id
        name
      }
      about {
        title
        content {
          raw
        }
      }
    }
  }
  `
  return fetchHygraph(query)
}

export default async function Home() {
  const { homePage } = await GET_ALL_DATA()

  return (
    <div className="flex flex-col gap-6 px-8 py-7 lg:flex-row  lg:px-16 ">
      <SideBar />
      <div className=" flex w-full flex-col gap-8 rounded-md">
        <AboutContainer hero={homePage.hero} />
        <div className="w-full rounded-md bg-zinc-800 px-5 py-4 lg:h-36 ">
          <h2 className="text-4xl font-bold text-zinc-50">Tecnologias</h2>
          <Tecnologies data={homePage} />
        </div>
        <div className="w-full rounded-md bg-zinc-800 px-5 py-4 lg:h-[340px] ">
          <h2 className="text-4xl font-bold text-zinc-50">
            Projetos em destaque
          </h2>
          <Projects />
        </div>
      </div>
    </div>
  )
}
