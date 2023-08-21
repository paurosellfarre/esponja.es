<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <div class="mt-10 lg:ml-54 lg:mr-54 ml-10 mr-10 mb-20">
      <slot />
    </div>
    <NavFooter />
  </div>
</template>

<script lang="ts" setup>
useSchemaOrg([
  definePerson({
    name: "Pau Rosell",
    image: "/favicon.ico",
    sameAs: ["https://github.com/paurosellfarre"],
  }),
  defineWebSite({
    name: "Esponja.es",
    description:
      "Esponja.es es una web de información sobre todo lo relacionado con las esponjas y estropajos.",
    inLanguage: ["es-ES"],
  }),
  defineWebPage(),
])
</script>
