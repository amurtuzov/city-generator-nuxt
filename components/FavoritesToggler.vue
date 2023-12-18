<script lang="ts" setup>
const mainStore = useMainStore()
const favoritesStore = useFavoritesStore()
const { favorites } = storeToRefs(favoritesStore)
const overlayPanelRef = ref<{ visible: true, toggle: (event: Event) => void }>()
const dialogVisibility = ref(false)

const isSavedIdeasOpen = computed(
  () => dialogVisibility.value || overlayPanelRef.value?.visible,
)

function toggle(event: Event) {
  if (mainStore.isDesktop)
    overlayPanelRef.value?.toggle(event)
  else
    dialogVisibility.value = !dialogVisibility.value
}
</script>

<template>
  <div class="flex justify-content-start flex-shrink-0">
    <PrimeButton
      rounded
      text
      class="bg-yellow-100 focus:shadow-none flex align-items-center gap-2 p-1 pr-3 pl-3"
      @click="toggle"
    >
      <i class="pi pi-star-fill text-yellow-500 text-xl" />
      <div class="text-base text-gray-900">
        <span>Saved&nbsp;</span>
        <span class="hidden lg:inline">ideas</span>
      </div>
      <PrimeBadge
        :value="favorites.length"
        class="bg-white text-yellow-500 text-base w-2rem h-2rem flex justify-content-center align-items-center m-0"
      />
      <i
        class="pi pi-angle-down text-gray-900 text-xl transition-transform transition-duration-100 transition-ease-in-out"
        :class="{ 'rotate-180': isSavedIdeasOpen }"
      />
    </PrimeButton>
    <PrimeOverlayPanel
      ref="overlayPanelRef"
      :style="{ width: '400px', height: '400px' }"
      :pt="{
        content: 'p-2 h-full flex flex-column gap-2 max-h-full',
      }"
    >
      <FavoritesItems />
    </PrimeOverlayPanel>
  </div>
  <PrimeDialog
    v-model:visible="dialogVisibility"
    :style="{ width: '100vw', margin: 0, height: '80vh' }"
    class="bg-white"
    header="Saved ideas"
    position="bottom"
    :modal="true"
    :draggable="false"
    dismissable-mask
    :pt="{
      header: 'p-3',
      content:
        'flex flex-column justify-content-between flex-grow-1 pr-3 pl-3 pb-4 gap-3',
    }"
  >
    <FavoritesItems />
  </PrimeDialog>
</template>
