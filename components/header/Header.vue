<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import EmailBtn from '../shared/EmailBtn.vue'
import SocialLinks from '../shared/SocialLinks.vue'
import AnimationToggle from './AnimationToggle.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import LanguageSelector from './LanguageSelector.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()

const isMobile = useMediaQuery('(max-width: 918px)')
const isMenuOpen = ref(false)

const headerRef = ref<HTMLElement | null>(null)
const headerTitle = computed(() => t('landmarks.header'))

function handleClickOutside(event: MouseEvent) {
  if (isMenuOpen.value && headerRef.value && !headerRef.value.contains(event.target as Node)) {
    isMenuOpen.value = false
  }
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header ref="headerRef" class="header" :class="{ 'header--open': isMenuOpen, 'header--closed': !isMenuOpen }" role="banner" :aria-label="headerTitle">
    <v-btn v-if="isMobile" icon class="header__toggle-button" data-testid="mobile-menu-toggle-btn" @click="toggleMenu">
      <v-icon>{{ isMenuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      <span class="sr-only">{{ isMenuOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
    </v-btn>
    <div class="header__container">
      <div class="header__social-links">
        <SocialLinks />
        <EmailBtn v-if="!isMobile" />
      </div>
      <div v-if="isMenuOpen || !isMobile" class="header__navigation">
        <HeaderNavigation />
      </div>
      <div v-if="isMenuOpen || !isMobile" class="header__controls">
        <div class="header__language-selector">
          <LanguageSelector />
        </div>
        <div class="header__buttons">
          <AnimationToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header{
  background-color: var(--background-color);
  position: sticky;
  top: 0;
  z-index: 100;
}
.header__container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.header__controls{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}
.header__language-selector{
  width: 100%;
}

.header__buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;
  width: 100%;
}

.header__social-links {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
@media (max-width: 918px) {
  .header{
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header--open .header__container {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  .header--closed .header__container {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: right;
  }

  .header--open .header__social-links {
    width: 100%;
    display: flex;
    justify-content: center;
    order: 1;
    margin-bottom: 1rem;
}

.header--closed .header__social-links {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    order: 1;
    margin-bottom: 1rem;
}

  .header__navigation {
    width: 100%;
    display: block;
    order: 2;
    margin-bottom: 1rem;
    padding: 0;
  }

  .header__controls {
    width: 100%;
    order: 3;
    align-items: center;
  }

  .header__language-selector{
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .header__toggle-button {
    display: block;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 2px solid var(--primary-color);
    width: 48px;
    height: 48px;
    background-color: var(--background-color);
    color: var(--primary-color);
    transition: background-color var(--animation-duration), color var(--animation-duration), transform var(--animation-duration);
  }
  .header__toggle-button:hover, .header__toggle-button:focus {
    background-color: var(--primary-color);
    color: var(--background-color);
    transform: scale(1.3);
  }
}
</style>
