import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAnimationStore = defineStore('animation', () => {
  const areAnimationsEnabled = ref(true)

  function toggleAnimations() {
    areAnimationsEnabled.value = !areAnimationsEnabled.value
    updateAnimationState()
  }

  function updateAnimationState() {
    document.documentElement.setAttribute('data-reduced-motion', areAnimationsEnabled.value ? 'false' : 'true')
  }
  // TODO: Check if this is needed
  function initializeAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    areAnimationsEnabled.value = !prefersReducedMotion
    updateAnimationState()
  }

  return {
    areAnimationsEnabled,
    toggleAnimations,
    initializeAnimations,
  }
})
