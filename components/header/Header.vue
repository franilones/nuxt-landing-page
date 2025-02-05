<script setup lang="ts">
import SocialLinks from '../shared/SocialLinks.vue'
import AnimationToggle from './AnimationToggle.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import LanguageSelector from './LanguageSelector.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="header" role="banner">
    <div class="header__container">
      <div class="header__social-links">
        <SocialLinks />
      </div>
      <div class="header__navigation">
        <HeaderNavigation />
      </div>
      <div class="header__controls">
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
.header__container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: var(--background-color);
  border-bottom: 2px solid var(--primary-color);
}

.header__navigation {
  display: inline-flex;
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
</style>
