// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  css: ["/assets/css/main.css"],
  content: {
    documentDriven: true,
  },
  site: {
    url: "https://www.esponja.es",
  },
  routeRules: {
    "/**": { isr: true },
  },
  googleFonts: {
    display: "swap",
    families: {
      Prompt: true,
    },
  },
})
