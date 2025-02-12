import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorageStore } from './useLocalStorageStore'

export const useThemeStore = defineStore('theme', () => {
  const localStorageStore = useLocalStorageStore()
  const isDarkTheme = ref(false)

  function updateTheme() {
    document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light')
    localStorageStore.updateUserPreferences({ theme: isDarkTheme.value ? 'dark' : 'light' })
  }

  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value
    updateTheme()
  }

  function initializeTheme() {
    const storedTheme = localStorageStore.userPreferences.theme
    isDarkTheme.value = storedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light')
  }

  return {
    isDarkTheme,
    toggleTheme,
    initializeTheme,
  }
})
