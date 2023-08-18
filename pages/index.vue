<template>
  <main>
    <ArticlesList :data="data" />
  </main>
</template>

<script setup>

const { data } = await useAsyncData("home", () =>
  queryContent("/").only(["headline", "_path", "headline", "excerpt"]).find()
)
</script>
