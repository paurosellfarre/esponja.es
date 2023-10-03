<template>
  <ArticlesContent :page="page" />
</template>

<script setup lang="ts">
const { path } = useRoute()
const cleanPath = path.replace(/\/+$/, "")

const { data: page, error } = await useAsyncData(
  `content-${cleanPath}`,
  queryContent("/cookies").where({ _path: cleanPath }).findOne
)
</script>
