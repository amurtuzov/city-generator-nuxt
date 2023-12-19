export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = useLocalStorage<Array<string>>('favourites', [])

  watch(
    () => favorites.value,
    () => {
      localStorage.setItem('favourites', JSON.stringify(favorites.value))
    },
  )
  return {
    favorites,
  }
})
