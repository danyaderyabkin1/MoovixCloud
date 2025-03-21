export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-02-26",
  app: {
    head: {
      title: "Moovix Cloud",
    }
  },
  css : [
    'assets/scss/main.scss',
  ],
  ssr: true,
  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/ui",
    "nuxt-swiper",
  ],
  colorMode: {
    preference: 'light'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["import"]
        }
      }
    }
  },

})