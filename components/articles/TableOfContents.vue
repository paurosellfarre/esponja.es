<template>
  <nav class="bg-[#FFF6D9] p-4 shadow-md mx-auto lg:ml-0 my-auto">
    <span class="bg-yellow-200">Índice del articulo de Esponjas</span>
    <ul
      v-if="links"
      class="block"
    >
      <!-- render each link with depth class -->
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`toc-link_${link.depth} first:mt-0 mt-2 md:mt-1 ${
          link.depth > 2 ? 'hidden md:block' : ''
        }`"
      >
        <a
          :href="`#${link.id}`"
          class="hover:underline hover:text-brand_primary"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
})

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link]
      if (link.children) {
        // recursively flatten children links
        let flattened = flattenLinks(link.children)
        _link = [link, ...flattened]
      }
      return _link
    })
    .flat(1)
  console.log(_links)
  return _links
}
</script>

<style scoped>
.toc-link_3 {
  @apply pl-4;
}
.toc-link_3::before {
  @apply pr-2;
  content: "-";
}
</style>
