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
        aboutLinks {
          id
          name
          link
        }
      }
      highlightsproject {
        id
        slug
        title
        subtitle
        description
        coverImage {
          url
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
        <AboutContainer about={homePage.about} />

        <Tecnologies data={homePage} />

        <Projects hero={homePage} />
      </div>
    </div>
  )
}
