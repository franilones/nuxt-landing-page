import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorageStore } from './useLocalStorageStore'

export const useAnimationStore = defineStore('animation', () => {
  const localStorageStore = useLocalStorageStore()
  const areAnimationsEnabled = ref<boolean>(true)

  function toggleAnimations() {
    areAnimationsEnabled.value = !areAnimationsEnabled.value
    updateAnimationState()
  }

  function updateAnimationState() {
    document.documentElement.setAttribute('data-reduced-motion', areAnimationsEnabled.value ? 'false' : 'true')
    localStorageStore.updateUserPreferences({ animationsEnabled: areAnimationsEnabled.value })
  }

  function initializeAnimations() {
    const storedAnimations = localStorageStore.userPreferences.animationsEnabled
    areAnimationsEnabled.value = storedAnimations
    document.documentElement.setAttribute('data-reduced-motion', areAnimationsEnabled.value ? 'false' : 'true')
  }

  return {
    areAnimationsEnabled,
    toggleAnimations,
    initializeAnimations,
  }
})
