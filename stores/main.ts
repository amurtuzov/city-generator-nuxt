import { Breakpoints } from '../enum/Breakpoints'

export const useMainStore = defineStore('main', () => {
  const { width: windowWidth } = useWindowSize({ initialWidth: 0 })

  const isMobile = computed(() => windowWidth.value < Breakpoints.TABLET)
  const isTablet = computed(
    () =>
      windowWidth.value >= Breakpoints.TABLET
      && windowWidth.value < Breakpoints.DESKTOP,
  )
  const isDesktop = computed(() => windowWidth.value >= Breakpoints.DESKTOP)

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
  }
})
