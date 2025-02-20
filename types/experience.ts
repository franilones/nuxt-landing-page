export interface ExperienceDate {
  start: string
  end: string | 'Actualidad'
}

export interface Experience {
  id: string
  company: string
  position: string
  logo: string
  date: ExperienceDate
  description: string
  responsibilities: string[]
}
