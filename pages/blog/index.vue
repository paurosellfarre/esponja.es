<template>
  <main>
    <h1 class="text-4xl font-bold text-center text-gray-800 mt-4">Blog</h1>
    <ArticlesList
      class="mt-4"
      :data="data"
    />
  </main>
</template>

<script setup>
//This page is not document driven, so we need to disable it orderwise it will throw an error when executing nuxt generate
definePageMeta({
  documentDriven: {
    page: false,
  },
})
const { data } = await useAsyncData("home", () =>
  queryContent("/blog")
    .only(["headline", "_path", "headline", "excerpt"])
    .find()
)
</script>
