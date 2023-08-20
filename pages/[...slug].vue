<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article class="grid grid-cols-10 gap-8 lg:gap-x-44">
          <section class="col-span-full lg:col-span-6 lg:col-start-2">
            <!-- Headline -->
            <h1>{{ doc.headline }}</h1>

            <!-- Excerpt / Description -->
            <p>{{ doc.description }}</p>
          </section>

          <ArticlesTableOfContents
            :links="doc?.body?.toc?.links"
            class="col-span-full lg:col-span-3 sm:mt-12 lg:mt-20"
          />
          <ContentRenderer
            :value="doc"
            class="col-span-full lg:col-span-6 lg:col-start-2"
          />
        </article>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
const { page } = useContent()

useSeoMeta({
  title: page?.value?.title || "Esponja.es",
  ogTitle: page?.value?.title || "Esponja.es",
  description: page?.value?.description || "Esponja.es",
  ogDescription: page?.value?.description || "Esponja.es",
  ogImage: page?.value?.image || "https://esponja.es/favicon.ico",
  twitterCard: "summary_large_image",
})
</script>
