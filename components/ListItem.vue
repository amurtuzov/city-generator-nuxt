<script lang="ts" setup>
defineProps({
  item: {
    type: String,
    required: true,
  },
  favorites: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const copyButtonLabel = ref<string>('')
const favoritesStore = useFavoritesStore()
async function copyToClipBoard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    copyButtonLabel.value = 'Copied'
    setTimeout(() => {
      copyButtonLabel.value = ''
    }, 1000)
  }
  catch (err) {
    console.error('Failed to copy: ', err)
  }
}
function checkIfIncludesInFavorites(text: string) {
  return favoritesStore.favorites.includes(text)
}
function toggleFavorites(text: string) {
  if (checkIfIncludesInFavorites(text)) {
    favoritesStore.$patch({
      favorites: favoritesStore.favorites.filter(item => item !== text),
    })
  }
  else {
    favoritesStore.$patch({
      favorites: [...favoritesStore.favorites, text],
    })
  }
}
function removeFromFavorites(text: string) {
  favoritesStore.$patch({
    favorites: favoritesStore.favorites.filter(item => item !== text),
  })
}
</script>

<template>
  <div
    class="p-2 bg-primary-100 border-round text-gray-900 flex flex-row justify-content-between align-items-center"
  >
    <span>{{ item }}</span>
    <div
      class="flex flex-row gap-3 flex-grow-1 justify-content-end"
      style="max-width: 200px"
    >
      <PrimeButton
        aria-label="Copy to clipboard"
        icon="pi pi-copy"
        title="Copy to clipboard"
        text
        raised
        class="bg-white transition-all border-1 border-transparent hover:border-cyan-800 p-1 min-w-max w-2rem h-2rem focus:shadow-none"
        icon-class="text-xl text-gray-900"
        :label="copyButtonLabel"
        @click="copyToClipBoard(item)"
      />
      <PrimeButton
        v-if="favorites"
        aria-label="Remove from favorites"
        icon="pi pi-times"
        title="Remove from favorites"
        text
        raised
        class="bg-white transition-all border-1 border-transparent hover:border-cyan-800 p-1 min-w-max w-2rem h-2rem focus:shadow-none flex-shrink-0"
        icon-class="text-xl text-gray-900"
        @click="removeFromFavorites(item)"
      />
      <PrimeButton
        v-else
        aria-label="Add to favorites"
        :icon="`pi ${
          checkIfIncludesInFavorites(item) ? 'pi-star-fill' : 'pi-star'
        }`"
        title="Add to favorites"
        text
        raised
        class="bg-white transition-all border-1 border-transparent hover:border-cyan-800 p-1 w-2rem h-2rem focus:shadow-none flex-shrink-0"
        :icon-class="`text-xl ${
          checkIfIncludesInFavorites(item) ? 'text-yellow-500' : 'text-gray-900'
        }`"
        @click="toggleFavorites(item)"
      />
    </div>
  </div>
</template>
