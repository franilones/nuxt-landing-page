<script setup lang="ts">
import type { Skill } from '~/types/skill'

const props = defineProps<{
  icon: string
  name: string
}>()
</script>

<template>
  <div class="skill-item">
    <img
      :src="`/icons/technologies/${icon}.svg`"
      :alt="`${name} icon`"
      class="skill-item__icon"
      width="64"
      height="64"
      loading="lazy"
    >
    <span class="skill-item__name">{{ name }}</span>
  </div>
</template>

<style scoped>
.skill-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}
.skill-item__name {
  font-size: 16px;
  text-align: center;
  color: var(--primary-color);
}
</style>
