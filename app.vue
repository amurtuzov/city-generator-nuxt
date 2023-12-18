<script lang="ts" setup>
useHead({
  title: 'Blog post titles',
})
// useJsonld({})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
  html {
    height: 100vh;
  }
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }
  #__nuxt, #__layout {
    min-height: 100vh;
  }
  img {
    pointer-events: none;
  }
</style>
