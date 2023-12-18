export default defineNuxtConfig({
  experimental: {
    inlineSSRStyles: false,
  },
  nitro: {
    preset: 'github-pages',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  imports: {
    autoImport: true,
  },
  app: {
    baseURL: '/city-generator-nuxt/',
    head: {
      meta: [
        { charset: 'utf-8' },
        { id: '1', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'content-language', 'content': 'en' },
        { 'http-equiv': 'content-type', 'content': 'text/html; charset=UTF-8' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/city-generator-nuxt/favicon.ico' },
      ],
    },
  },
  css: ['primevue/resources/themes/lara-light-teal/theme.css', 'primeicons/primeicons.css', 'primeflex/primeflex.css'],
  plugins: [],
  modules: [
    'nuxt-jsonld',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-primevue',
  ],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      prefix: 'Prime',
      include: ['Button', 'Badge', 'InputText', 'Textarea', 'DropDown', 'ScrollPanel', 'OverlayPanel', 'Dialog', 'ConfirmDialog'], /* Used as <PrimeButton /> and <PrimeDataTable /> */
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "~/assets/styles/main";` },
      },
    },
  },
})
