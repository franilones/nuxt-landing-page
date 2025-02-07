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
  <nav class="header-nav" role="navigation" aria-label="Menú principal de navegación">
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
  transition: background-color var(--animation-duration), color var(--animation-duration), transform var(--animation-duration);
}

.header-nav__item {
  display: inline;
}

.header-nav__link:hover, .header-nav__link:focus{
  background-color: var(--primary-color);
  color: var(--background-color);
  transform: scale(1.2);
  font-weight: bold;
}

@media (max-width: 768px){
  .header-nav {
    padding: 0;
  }
  .header-nav__list {
    display: flex;
    flex-direction: column;
    align-items: stretch  ;
    justify-content: center;
    background-color: var(--primary-color);

    width: 100%;
  }
  .header-nav__link{
    display: block;
    width: 100%;
    border-radius: 0;
    color: var(--secondary-color);
    transition: var(--animation-duration);
    text-align: center;
  }
  .header-nav__link:hover, .header-nav__link:focus{
    background-color: var(--hover-color);
    color: var(--background-color);
    transform: scale(1.2);
  }
}
</style>
