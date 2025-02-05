<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const navigationItems = [
  { label: 'header.home', path: '/' },
  { label: 'header.projects', path: '/proyectos' },
  { label: 'header.blog', path: '/blog' },
  { label: 'header.contact', path: '/contacto' },
]

onMounted(() => {
  const menuItems = document.querySelectorAll('.header-nav__link')
  menuItems.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          menuItems[(index + 1) % menuItems.length].focus()
          break
        case 'ArrowLeft':
          menuItems[(index - 1 + menuItems.length) % menuItems.length].focus()
          break
        case 'Home':
          menuItems[0].focus()
          break
        case 'End':
          menuItems[menuItems.length - 1].focus()
          break
      }
    })
  })
})
</script>

<template>
  <nav class="header-nav" role="navigation" aria-label="Cabecera de la página">
    <ul class="header-nav__list" role="menubar">
      <li
        v-for="item in navigationItems"
        :key="item.path"
        class="header-nav__item"
        role="none"
      >
        <a
          :href="item.path"
          :aria-label="t(item.label)"
          role="menuitem"
          class="header-nav__link"
        >
          {{ t(item.label) }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.header-nav__list {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.header-nav__link {
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.header-nav__item {
  display: inline;
}
</style>
