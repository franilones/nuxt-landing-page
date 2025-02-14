<script setup lang="ts">
import type { Skill } from '~/types/skill'
import { useI18n } from '#imports'
import SkillItem from './SkillItem.vue'

const props = defineProps<{
  title: string
  skills: Skill[]
}>()

const { t } = useI18n()
</script>

<template>
  <div class="skills__section">
    <h2 class="skills__section__title text-h6 mb-4">
      {{ t(title) }}
    </h2>
    <div class="skills__section__content">
      <SkillItem
        v-for="skill in props.skills"
        :key="skill.name"
        :name="skill.name"
        :icon="skill.icon"
      />
    </div>
  </div>
</template>

<style scoped>
.skills__section {
  background-color: var(--v-theme-surface);
  padding: 1rem;
  border-radius: 8px;
}

.skills__section__title {
  color: var(--primary-color);
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.skills__section__content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;
  align-items: start;
}

@media (max-width: 480px) {
  .skills__section__content {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  }
}
</style>
