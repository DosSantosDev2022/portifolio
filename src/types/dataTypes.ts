import type { RichTextContent } from '@graphcms/rich-text-types'

export type Technology = {
  iconSvg: string
  name: string
  id: string
}

export type Profile = {
  profile: {
    profileImage: {
      url: string
    }
  }
}

export type about = {
  title: string
  content: {
    raw: RichTextContent
  }
  aboutLinks: {
    id: string
    name: string
    link: string
  }[]
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

export type hero = {
  heros: {
    title?: string
    subtitle?: string
    description?: string
    coverImage?: {
      url: string
    }
  }[]
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

export type HighlightsProjects = {
  id: string
  title: string
  subtitle: string
  slug: string
  coverImage: {
    url: string
  }
}[]

export type Project = {
  project: ProjectInfoData[]
}

export type HomePageData = {
  technologies: Technology[]
  about: about
  project: HighlightsProjects
}
