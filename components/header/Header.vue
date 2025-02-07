<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import SocialLinks from '../shared/SocialLinks.vue'
import AnimationToggle from './AnimationToggle.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import LanguageSelector from './LanguageSelector.vue'
import ThemeToggle from './ThemeToggle.vue'

const isMobile = ref(false)
const isMenuOpen = ref(false)

function updateIsMobile() {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<template>
  <header class="header" :class="{ 'header--open': isMenuOpen, 'header--closed': !isMenuOpen }" role="banner" aria-label="Cabecera de la página">
      <v-btn icon @click="toggleMenu" class="header__toggle-button" v-if="isMobile">
        <v-icon>{{ isMenuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
        <span class="sr-only">{{ isMenuOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
      </v-btn>
      <div class="header__container">
      <div class="header__social-links">
        <SocialLinks />
      </div>
      <div class="header__navigation" v-if="isMenuOpen || !isMobile">
        <HeaderNavigation />
      </div>
      <div class="header__controls" v-if="isMenuOpen || !isMobile">
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
  border-bottom: 2px solid var(--primary-color);
  border-top: 2px solid var(--primary-color);
  position: relative;
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

@media (max-width: 768px) {
  .header{
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .header--open{
    border: 2px solid var(--primary-color);
  }
  .header--closed{
    background-color: var(--primary-color);
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
    border: 2px solid var(--secondary-color);
    width: 48px;
    height: 48px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
  .header__toggle-button:hover, .header__toggle-button:focus {
    background-color: var(--hover-color);
    color: var(--primary-color);
  }
}
</style>
