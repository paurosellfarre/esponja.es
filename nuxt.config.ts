// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-simple-sitemap", "@nuxtjs/tailwindcss"],
  content: {
    documentDriven: true,
  },
})
