<template>
  <ArticlesContent :page="page" />
</template>

<script setup lang="ts">
const { path } = useRoute()
const cleanPath = path.replace(/\/+$/, "")

const { data: page, error } = await useAsyncData(
  `content-index`,
  queryContent("/politica-de-privacidad").findOne
)
</script>
