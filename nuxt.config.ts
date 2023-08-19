// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "nuxt-simple-sitemap",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  css: ["/assets/css/main.css"],
  content: {
    documentDriven: true,
  },
  googleFonts: {
    display: "swap",
    families: {
      Prompt: true,
    },
  },
})
