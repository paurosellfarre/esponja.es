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
const { data } = await useAsyncData("blog", () =>
  queryContent("/blog")
    .only(["headline", "_path", "socialImage", "description", "datePublished"])
    .find()
)
</script>
