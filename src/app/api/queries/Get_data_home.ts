import { fetchHygraphQuery } from '../FetchHygraph'
import type { RichTextContent } from '@graphcms/rich-text-types'
interface DataHome {
  home: {
    sectionHero: {
      title: string
      smallText: string
      links: {
        id: string
        name: string
        url: string
        icon: string
      }[]
      image: {
        url: string
      }
    }
    featuredProjects: {
      title: string
      smallText: string
      projects: {
        slug:string
        codeLink: string
        deployLink: string
        title: string
        description: string
        technologie: {
          id: string
          name: string
          icon: {
            url: string
          }
        }[]
        coverImage: {
          url: string
        }
      }[]
    }
    sectionAboutMe: {
      title: string
      smallText: string
      longText: {
        raw: RichTextContent
      }
    }
  }
}

export const GET_DATA_HOME = async (): Promise<DataHome> => {
  const query = `
      query MyQuery {
        home(where: {slug: "home"}) {
          sectionHero {
            title
            smallText
            links {
              id
              name
              url
              icon
            }
            image {
              url
            }
          }
          featuredProjects {
            title
            smallText
            projects {
              slug
              codeLink
              deployLink
              title
              description
              technologie {
                id
                name
                icon {
                  url
                }
              }
              coverImage {
                url
              }

            }
          }
          sectionAboutMe {
            title
            smallText
            longText {
              raw
            }
          }
        }
      }  
  `

  return fetchHygraphQuery(query)
}
