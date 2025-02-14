import type { SkillSection } from '~/types/skill'

export const skillSections: SkillSection[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Javascript', icon: 'Javascript' },
      { name: 'Nuxt', icon: 'Nuxt' },
      { name: 'Typescript', icon: 'Typescript' },
      { name: 'Vuetify', icon: 'Vuetify' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: 'Java' },
      { name: 'OpenAPI', icon: 'OpenAPI' },
      { name: 'Spring', icon: 'Spring' },
    ],
  },
  {
    title: 'Otros',
    skills: [
      { name: 'C', icon: 'C' },
      { name: 'Docker', icon: 'Docker' },
      { name: 'Linux', icon: 'Linux' },
      { name: 'Git', icon: 'Git' },
      { name: 'MongoDB', icon: 'MongoDB' },
      { name: 'Sql', icon: 'Sql' },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Cypress', icon: 'Cypress' },
      { name: 'Jest', icon: 'Jest' },
      { name: 'JUnit', icon: 'JUnit' },
      { name: 'Vitest', icon: 'Vitest' },
    ],
  },
]
