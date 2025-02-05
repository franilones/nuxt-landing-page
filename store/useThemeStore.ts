import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkTheme = ref(false)

  function updateTheme() {
    document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light')
  }

  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value
    updateTheme()
  }

  function initializeTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkTheme.value = prefersDark
    updateTheme()
  }

  return {
    isDarkTheme,
    toggleTheme,
    initializeTheme,
  }
})
