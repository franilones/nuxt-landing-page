export interface Skill {
  name: string
  icon: string
}

export interface SkillSection {
  title: string
  skills: Skill[]
}
