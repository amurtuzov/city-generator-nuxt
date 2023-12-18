<script lang="ts" setup>
import type { PropType } from 'vue'
import type { NuxtError } from 'nuxt/app'

defineProps({
  error: Object as PropType<NuxtError>,
})
</script>

<template>
  <NuxtLayout name="404">
    <div v-if="error" class="error flex justify-content-center align-items-center flex-column min-h-screen gap-5">
      <span class="text-6xl">{{ error.statusCode }}</span>
      <span class="text-2xl">{{ error.statusMessage }}</span>
      <NuxtLink class="error__link text-gray-900" to="/">
        Home Page
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
  .error {
    &__link {
      text-decoration: none;
      transition: all 0.1s linear;
      &:hover {
        text-decoration: underline;
        transform: scale(105%);
      }
    }
  }
</style>
