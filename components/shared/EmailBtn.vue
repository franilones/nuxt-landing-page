<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useClipboardStore } from '~/store/useClipboardStore'

const { t } = useI18n()
const clipboardStore = useClipboardStore()

const email = 'franolmosdev@gmail.com'
const showSnackbar = ref(false)

const copyEmailLabel = computed(() => t('socials.copyEmail'))
const copiedEmailLabel = computed(() => t('socials.emailCopied'))

async function handleEmailClick(e: Event) {
  e.preventDefault()
  await clipboardStore.copy(email)
  showSnackbar.value = true
}
</script>

<template>
  <div>
    <v-btn
      :aria-label="copyEmailLabel"
      prepend-icon
      class="email-btn"
      @click="handleEmailClick"
    >
      {{ email }}
      <transition
        name="copy-icon"
        mode="out-in"
      >
        <v-icon
          :key="clipboardStore.copied"
          class="ml-2"
        >
          {{ clipboardStore.copied ? 'mdi-check' : 'mdi-content-copy' }}
        </v-icon>
      </transition>
    </v-btn>

    <v-snackbar
      v-model="showSnackbar"
      :timeout="2000"
      location="bottom"
      color="var(--snackbar-color)"
      :text="copiedEmailLabel"
    />
  </div>
</template>

<style scoped>
.email-btn {
  color: var(--primary-color);
  background-color: var(--background-color);
  border: 1px solid var(--primary-color);
}

.email-btn:hover, .email-btn:focus {
  background-color: var(--primary-color);
  color: var(--background-color);
  font-weight: bold;
}

.copy-icon-enter-active,
.copy-icon-leave-active {
  transition: all var(--animation-duration) ease;
}

.copy-icon-enter-from {
  opacity: 0;
  transform: scale(0.8) rotate(-45deg);
}

.copy-icon-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(45deg);
}
</style>
