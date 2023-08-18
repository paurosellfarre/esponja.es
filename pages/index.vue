<template>
  <main>
    <ContentDoc :content="data" />

    <test :data="data" />
  </main>
</template>

<script setup>
/* const { data } = await useAsyncData("home", () =>
  queryContent("/").only("headline").find()
) */

const { data } = await useAsyncData("d", () =>
  queryContent("/").only("headline").find()
)
</script>
