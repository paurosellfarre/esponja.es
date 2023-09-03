<template>
  <div class="bg-[#FFF6D9] rounded-md grid grid-rows-6 max-h-80">
    <a
      class="row-span-4"
      :href="articlelink || amazonlink"
      :target="articlelink ? '_self' : '_blank'"
      :rel="articlelink && 'noopener noreferrer'"
    >
      <img
        :src="refinedSrc"
        :alt="title"
        :class="`rounded-t-md mx-auto object-cover w-full h-full`"
      />
    </a>
    <div class="text-center">
      <p class="text-lg font-semibold mb-2">{{ title }}</p>
      <button
        v-if="amazonlink"
        class="bg-[#febd69] text-white rounded-md px-2 py-1"
      >
        <a
          :href="amazonlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar en Amazon
        </a>
      </button>
    </div>
  </div>
  <slot />
</template>

<script setup lang="ts">
import { withBase } from "ufo"
import { useRuntimeConfig, computed } from "#imports"

const props = defineProps({
  imagesrc: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  articlelink: {
    type: String,
    default: "",
  },
  amazonlink: {
    type: String,
    default: "",
  },
})

const refinedSrc = computed(() => {
  if (props.imagesrc?.startsWith("/") && !props.imagesrc.startsWith("//")) {
    return withBase(props.imagesrc, useRuntimeConfig().app.baseURL)
  }
  return props.imagesrc
})
</script>
