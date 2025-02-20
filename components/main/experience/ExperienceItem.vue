<script setup lang="ts">
import type { Experience } from '~/types/experience'
import { useI18n } from '#imports'

const props = defineProps<{
  experience: Experience
}>()

const { t } = useI18n()

const formattedDate = computed(() => {
  const { start, end } = props.experience.date
  return `${start} - ${t(end)}`
})

const altText = computed(() => {
  return locale.value === 'es'
    ? `Logo de ${props.experience.company}`
    : `${props.experience.company} logo`
})
</script>

<template>
  <article class="experience-item">
    <div class="experience-item__logo-container">
      <img
        :src="experience.logo"
        :alt="t(experience.logoAlt)"
        class="experience-item__logo"
        width="120"
        height="120"
        loading="lazy"
      >
    </div>
    <div class="experience-item__content">
      <header class="experience-item__header">
        <h3 class="experience-item__company">
          {{ experience.company }}
        </h3>
        <span class="experience-item__date">{{ formattedDate }}</span>
      </header>
      <h4 class="experience-item__position">
        {{ t(experience.position) }}
      </h4>
      <p class="experience-item__description">
        {{ t(experience.description) }}
      </p>
      <ul class="experience-item__responsibilities">
        <li
          v-for="(responsibility, index) in experience.responsibilities"
          :key="index"
          class="experience-item__responsibility"
        >
          {{ t(responsibility) }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.experience-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 2rem;
  padding: 0.5rem;
  background-color: var(--v-theme-surface);
  border-radius: 8px;
}

.experience-item__logo-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.experience-item__logo {
  width: 140px;
  height: 140px;
  object-fit: contain;
}

.experience-item__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.experience-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.experience-item__company {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
}

.experience-item__date {
  font-size: 0.875rem;
  color: var(--secondary-color);
}

.experience-item__position {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--primary-color);
}

.experience-item__description {
  color: var(--primary-color);
  line-height: 1.5;
}

.experience-item__responsibilities {
  list-style-type: disc;
  padding-left: 1.25rem;
  color: var(--primary-color);
}

.experience-item__responsibility {
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .experience-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .experience-item__logo-container {
    justify-content: flex-start;
  }

  .experience-item__logo {
    width: 80px;
    height: 80px;
  }

  .experience-item__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
