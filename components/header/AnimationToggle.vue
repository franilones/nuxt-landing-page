<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAnimationStore } from '~/store/useAnimationStore'

const { t } = useI18n()

const animationStore = useAnimationStore()

const deactivateAnimationsLabel = computed(() => t('deactivateAnimations'))
const activateAnimationsLabel = computed(() => t('activateAnimations'))
</script>

<template>
  <v-btn
    :aria-label="animationStore.areAnimationsEnabled ? deactivateAnimationsLabel : activateAnimationsLabel"
    prepend-icon
    class="animation-toggle"
    data-testid="animation-toggle-btn"
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
  background-color: var(--background-color);
  transition: background-color var(--animation-duration), color var(--animation-duration), transform var(--animation-duration);
}

.animation-toggle:hover, .animation-toggle:focus {
  background-color: var(--primary-color);
  color: var(--background-color);
  border-color: var(--background-color);
  transform: scale(1.2);
}

.v-icon{
  font-size: 24px;
}
</style>
