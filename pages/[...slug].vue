<template>
  <main>
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: "My Amazing Site",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
})
</script>
