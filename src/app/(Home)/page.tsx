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
    <div className="flex flex-col lg:flex-row lg:px-16 px-8 py-7  gap-6 ">
      <SideBar />
      <div className=" w-full rounded-md flex flex-col gap-8">
        <AboutContainer hero={homePage.hero} />
        <div className="bg-zinc-800 w-full lg:h-36 px-5 py-4 rounded-md ">
          <h2 className="text-zinc-50 font-bold text-4xl">Tecnologias</h2>
          <Tecnologies data={homePage} />
        </div>
        <div className="bg-zinc-800 w-full lg:h-[340px] px-5 py-4 rounded-md ">
          <h2 className="text-zinc-50 font-bold text-4xl">
            Projetos em destaque
          </h2>
          <Projects />
        </div>
      </div>
    </div>
  )
}
