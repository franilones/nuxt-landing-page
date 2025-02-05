<script setup lang="ts">
import { useAnimationStore } from '~/store/useAnimationStore'

const animationStore = useAnimationStore()
</script>

<template>
  <v-btn
    :aria-label="animationStore.areAnimationsEnabled ? 'Desactivar animaciones' : 'Activar animaciones'"
    icon
    @click="animationStore.toggleAnimations"
  >
    <v-icon>
      {{ animationStore.areAnimationsEnabled ? 'mdi-motion-pause' : 'mdi-motion-play' }}
    </v-icon>
  </v-btn>
</template>
