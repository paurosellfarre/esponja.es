<template>
  <section>
    <ul class="grid grid-cols-10 gap-8 text-typography_primary">
      <li
        v-for="article in data"
        :key="article.headline"
        class="col-span-full md:col-span-5 relative rounded-md border-2 border-typography_primary hover:border-brand_primary group"
      >
        <NuxtLink
          :to="article._path + '/'"
          class="p-4 block relative"
        >
          <div class="wrapper">
            <header>
              <h2
                class="text-h3 leading-h3 font-semibold mb-2 group-hover:text-brand_primary"
              >
                {{ article.headline }}
              </h2>
              <p>{{ article.description }}</p>
            </header>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <p
      v-if="data.length == 0"
      class="w-full text-h3 leading-h3 font-bold dark:text-white"
    >
      {{ message }}
    </p>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
  message: {
    type: String,
    default:
      "No hay artículos de esponjas para mostrar, buscaremos en el fondo del mar...",
  },
})
</script>
