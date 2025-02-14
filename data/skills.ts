import type { SkillSection } from '~/types/skill'

export const skillSections: SkillSection[] = [
  {
    title: 'skills.sections.frontend',
    skills: [
      { name: 'Vue', icon: 'vue' },
      { name: 'Javascript', icon: 'javascript' },
      { name: 'Nuxt', icon: 'nuxt' },
      { name: 'Typescript', icon: 'typescript' },
    ],
  },
  {
    title: 'skills.sections.backend',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'OpenAPI', icon: 'openapi' },
      { name: 'Spring', icon: 'spring' },
    ],
  },
  {
    title: 'skills.sections.others',
    skills: [
      { name: 'C', icon: 'c' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Git', icon: 'git' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Sql', icon: 'sql' },
    ],
  },
  {
    title: 'skills.sections.testing',
    skills: [
      { name: 'Cypress', icon: 'cypress' },
      { name: 'Jest', icon: 'jest' },
      { name: 'JUnit', icon: 'junit' },
      { name: 'Vitest', icon: 'vitest' },
    ],
  },
]
