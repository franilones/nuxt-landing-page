<script setup lang="ts">
import type { Education } from '~/types/education'
import { useI18n } from '#imports'
import { useMediaQuery } from '@vueuse/core'
import { useBreakpoints } from '~/composables/useBreakpoints'
import { ref, computed } from 'vue'

const props = defineProps<{
  education: Education
}>()
const { t } = useI18n()
const flipped = ref(false)
const { isMobile } = useBreakpoints();

const ariaLabel = computed(() => 
  t('education.aria.flipCard', {
    date: props.education.date,
    title: t(props.education.title),
    institution: t(props.education.institution)
  })
);

</script>

<template>
  <v-timeline-item
    :dot-color="flipped ? 'var(--primary-color)' : 'var(--secondary-color)'"
    :size="isMobile ? 'small' : 'x-large'"
  >
    <div
      role="button"
      :aria-expanded="flipped"
      tabindex="0"
      :aria-label="ariaLabel"
      class="timeline-item-wrapper"
      :style="{ marginLeft: isMobile ? '10px' : '20px' }"
      @click="flipped = !flipped"
    >
      <v-card
        class="timeline-card"
        :class="{
          flipped,
          'mobile-card': isMobile,
          'tablet-card': isTablet && !isMobile,
        }"
      >
        <div class="card-inner">
          <div class="card-front">
            <div :class="isMobile ? 'text-body-2' : 'text-body-1'">
              {{ education.date }}
            </div>
            <div :class="isMobile ? 'text-h6' : 'text-h5'">
              {{ t(props.education.title) }}
            </div>
          </div>
          <div class="card-back">
            <div :class="isMobile ? 'text-body-1' : 'text-h6'">
              {{ t(props.education.institution) }}
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </v-timeline-item>
</template>

<style scoped>
.timeline-item-wrapper {
  position: relative;
  width: 100%;
  min-height: 120px;
}

.timeline-card {
  background-color: var(--primary-color);
  color: var(--background-color);
  width: 100%;
  min-width: 600px;
  min-height: 100px;
  position: relative;
  cursor: pointer;
  perspective: 1200px;
}
.timeline-card.flipped {
  background-color: var(--secondary-color);
  color: var(--background-color);
}

.card-inner {
  position: relative;
  transition: transform var(--animation-duration-long) ease-in-out;
  transform-style: preserve-3d;
  margin: 10px;
  width: 100%;
  height: 100%;
}

.flipped .card-inner {
  transform: rotateY(180deg) rotateX(360deg);
}

.card-front,
.card-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.card-back {
  transform: rotateY(180deg);
}

@media (max-width: 768px) {
    .timeline-item-wrapper {
      min-height: 100px;
      margin-left: 10px !important;
    }

    .card-inner {
      padding: 0.5rem;
    }

    .flipped .card-inner {
      transform: rotateY(180deg) scale(0.95);
    }
  }

  @media (max-width: 480px) {
    .mobile-card {
      min-width: 240px !important;
    }

    .card-front > div,
    .card-back > div {
      font-size: 0.9rem !important;
    }
  }
</style>
