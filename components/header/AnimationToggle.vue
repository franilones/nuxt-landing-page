<script setup lang="ts">
import { useAnimationStore } from '~/store/useAnimationStore'

const animationStore = useAnimationStore()
</script>

<template>
  <v-btn
    :aria-label="animationStore.areAnimationsEnabled ? 'Desactivar animaciones' : 'Activar animaciones'"
    prepend-icon
    class="animation-toggle"
    @click="animationStore.toggleAnimations"
  >
    <v-icon>
      {{ animationStore.areAnimationsEnabled ? 'mdi-motion-pause' : 'mdi-motion-play' }}
    </v-icon>
  </v-btn>
</template>

<style scoped>
.animation-toggle {
  border: 3px solid var(--primary-color);
  border-radius: 10px;
  color: var(--primary-color);
  transition: background-color var(--animation-duration), color var(--animation-duration), transform var(--animation-duration);
}

.animation-toggle:hover, .animation-toggle:focus {
  background-color: var(--primary-color);
  color: var(--hover-color);
  transform: scale(1.2);
}

.v-icon{
  font-size: 24px;
}
</style>
