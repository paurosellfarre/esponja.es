// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    "nuxt-schema-org",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  css: ["/assets/css/main.css"],
  ssr: true,
  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: "https://www.esponja.es",
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://www.esponja.es",
    },
  },
  schemaOrg: {
    host: "https://www.esponja.es",
  },
  googleFonts: {
    display: "swap",
    families: {
      Prompt: true,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/blog",
        "/blog/las-15-mejores-tipos-de-esponja",
        "/sitemap.xml",
        "/robots.txt",
      ],
    },
  },
  generate: {
    routes: [
      "/",
      "/blog",
      "/blog/las-15-mejores-tipos-de-esponja",
      "/sitemap.xml",
      "/robots.txt",
    ], // one of routes getting 404
  },
})
