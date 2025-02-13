import { useClipboard } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useClipboardStore = defineStore('clipboard', () => {
  const { text, copy, copied, isSupported } = useClipboard()

  return {
    text,
    copy,
    copied,
    isSupported,
  }
})
