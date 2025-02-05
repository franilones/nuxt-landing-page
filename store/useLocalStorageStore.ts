import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

interface UserPreferences {
  animationsEnabled: boolean
  theme: string
  language: string
}

export const useLocalStorageStore = defineStore('userPreferences', () => {
  const defaultPreferences: UserPreferences = {
    animationsEnabled: true,
    theme: 'dark',
    language: '',
  }
  const userPreferences = useLocalStorage('userPreferences', defaultPreferences)

  function updateUserPreferences(newPreferences: Partial<UserPreferences>) {
    userPreferences.value = { ...userPreferences.value, ...newPreferences }
  }

  return {
    userPreferences,
    updateUserPreferences,
  }
})
