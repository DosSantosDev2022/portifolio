import { HomePageData } from "@/types/dataTypes";
import { fetchHygraph } from "./api/fetchHygraph";
import { AboutContainer } from "./components/AboutContainer";
import { Projects } from "./components/ProjectsContainer";
import { Tecnologies } from "./components/tecnologies";
import { Hero } from "./components/hero";

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
  const {homePage} = await GET_ALL_DATA()
  
  return (
    <div className="flex flex-col gap-3">
      <Hero title={homePage.hero.title}
        subtitle={homePage.hero.subtitle}
        paragraph={homePage.hero.description}
        urlImage={homePage.hero.coverImage.url}
        />
      <AboutContainer data={homePage} />
      <Tecnologies data={homePage} />
      <Projects />
   </div>
  );
}
