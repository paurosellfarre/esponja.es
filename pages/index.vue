<template>
  <ArticlesContent :page="page" />
</template>

<script setup lang="ts">
const { data: page, error } = await useAsyncData(
  `content-index`,
  queryContent("/").findOne
)
</script>
