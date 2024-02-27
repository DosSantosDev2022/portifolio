import type { RichTextContent } from '@graphcms/rich-text-types'

export type Technology = {
  iconSvg: string
  name: string
  id: string
}

export type hero = {
  title: string
  subtitle: string
  description: string
  coverImage: {
    url: string
  }
}

export type about = {
  title: string
  content: {
    raw: RichTextContent
  }
}

export type Socials = {
  id: string
  name: string
  iconSvg: string
}

export interface InfoContact {
  id: string
  title: string
  contact: string
  iconSvg: string
}

export type SideBar = {
  sideBar: {
    socials: Socials[]
    infoContacts: InfoContact[]
    profile: {
      profileImage: {
        url: string
      }
    }
  }
}

export type HomePageInfo = {
  hero: hero
  technologies: Technology[]
  about: about
}

export type HomePageData = {
  homePage: HomePageInfo
}

export type ProjectInfoData = {
  slug: string
  title: string
  description: string
  coverImage: {
    url: string
  }
  deployLink: string
  codeLink: string
  technologies: Technology[]
  completeDescription: {
    raw: RichTextContent
  }
  carouseImage: {
    image01: {
      url: string
    }
    image02: {
      url: string
    }
    image03: {
      url: string
    }
  }
  destaque: boolean
}

export type Project = {
  project: ProjectInfoData[]
}
