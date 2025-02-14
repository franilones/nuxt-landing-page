export type TechLevel = 'expert' | 'advanced' | 'intermediate' | 'beginner'

export interface Technology {
  name: string
  icon: string
  level: TechLevel
  type: 'mdi' | 'svg'
}

export interface TechCategory {
  title: string
  technologies: Technology[]
}
