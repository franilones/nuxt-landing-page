import type { LanguageCode } from './language'

export interface UserPreferences {
  language: LanguageCode
  theme: 'light' | 'dark'
  animationsEnabled: boolean
}
