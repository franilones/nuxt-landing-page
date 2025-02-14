<script setup lang="ts">
import type { Skill } from '~/types/skill'
import { useI18n } from '#imports'
import { computed } from 'vue'

const props = defineProps<{
  icon: string
  name: string
}>()

const { locale } = useI18n()

const altText = computed(() => {
  return locale.value === 'es'
    ? `Icono de ${props.name}`
    : `${props.name} icon`
})
</script>

<template>
  <div class="skill-item">
    <img
      :src="`/icons/technologies/${icon}.svg`"
      :alt="altText"
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
}
</style>
