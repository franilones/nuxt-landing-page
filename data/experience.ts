import type { Experience } from '~/types/experience'

export const experiences: Experience[] = [
  {
    id: 'insuit',
    company: 'InSuit',
    position: 'experience.items.insuit.position',
    logo: '/icons/Insuit.svg',
    date: {
      start: '2022',
      end: '2025',
    },
    description: 'experience.items.insuit.description',
    responsibilities: [
      'experience.items.insuit.responsibilities[0]',
      'experience.items.insuit.responsibilities[1]',
      'experience.items.insuit.responsibilities[2]',
      'experience.items.insuit.responsibilities[3]',
      'experience.items.insuit.responsibilities[4]',
      'experience.items.insuit.responsibilities[5]',
      'experience.items.insuit.responsibilities[6]',
      'experience.items.insuit.responsibilities[7]',
    ],
    logoAlt: 'experience.items.insuit.logoAlt',
  },
  {
    id: 'GRCV',
    company: 'Gerencia Regional del Catastro de Valencia',
    position: 'experience.items.GRCV.position',
    logo: '/icons/catastro.svg',
    date: {
      start: '2015',
      end: '2017',
    },
    description: 'experience.items.GRCV.description',
    responsibilities: [
      'experience.items.GRCV.responsibilities[0]',
      'experience.items.GRCV.responsibilities[1]',
      'experience.items.GRCV.responsibilities[2]',
    ],
    logoAlt: 'experience.items.GRCV.logoAlt',
  },
]
