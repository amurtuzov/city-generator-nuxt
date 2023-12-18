export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = useLocalStorage<Array<string>>('favorites', [])

  watch(
    () => favorites.value,
    () => {
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
    },
  )
  return {
    favorites,
  }
})
