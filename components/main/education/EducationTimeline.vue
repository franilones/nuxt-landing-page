<script setup lang="ts">
import { useI18n } from "#imports";
import { educations } from "~/data/education";
import EducationItem from "./EducationItem.vue";
import { useBreakpoints } from "~/composables/useBreakpoints";

const { t } = useI18n();
const { isMobile } = useBreakpoints();
const timelineSide = computed(() => isMobile.value ? "start" : "end");
</script>

<template>
  <v-card class="education-card" rounded="xl">
    <v-card-title 
      class="education-card__title"
      role="heading"
      aria-level="2"
    >
      {{ t("education.mainTitle") }}
    </v-card-title>
    
    <v-card-text class="education-card__content">
      <v-timeline 
        :side="timelineSide"
        density="comfortable"
        aria-label="Lista de formación académica"
      >
        <EducationItem
          v-for="education in educations"
          :key="education.id"
          :education="education"
        />
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.education-card {
  width: 90%;
  max-width: 1000px;
  margin: 2rem auto;
  background-color: var(--background-color, #ffffff);
  border: 3px solid var(--secondary-color, #2c3e50);
  padding: 1.5rem;
}

.education-card__title {
  color: var(--secondary-color, #2c3e50);
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.education-card__content {
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (max-width: 768px) {
  .education-card {
    margin: 1rem;
    padding: 1rem;
  }

  .education-card__title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .education-card__title {
    font-size: 1.25rem;
  }
  
  .education-card__content {
    padding: 0;
  }
}
</style>