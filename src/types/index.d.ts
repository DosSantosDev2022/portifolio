import type { RichTextContent } from '@graphcms/rich-text-types'

export interface Technology {
  icon: {
    url: string
  }
  name: string
  id: string
}

export interface Profile {
  profileImage: {
    url: string
  }
}

export interface About {
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

export interface Social {
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

export interface SideBar {
  sideBar: {
    socials: Social[]
    infoContacts: InfoContact[]
    profile: Profile
  }
}

export interface InfoHero {
  hero: {
    title?: string
    subtitle?: string
    description?: string
    coverImage?: {
      url: string
    }
  }
}

export interface ProjectInfoData {
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

export type HighlightedProject = {
  id: string
  title: string
  subtitle: string
  slug: string
  coverImage: {
    url: string
  }
}

export type Project = {
  project: ProjectInfoData[]
  totalCount: number
}

export interface HomePageData {
  technologies: Technology[]
  about: About
  project: HighlightedProject[]
}
