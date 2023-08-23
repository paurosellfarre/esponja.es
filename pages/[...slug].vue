<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article class="relative grid grid-cols-10 grid-rows-10 gap-x-8">
          <section class="col-span-full lg:col-span-6 lg:col-start-2">
            <!-- Headline -->
            <h1>{{ doc.headline }}</h1>

            <!-- Description -->
            <p>{{ doc.description }}</p>
          </section>

          <ArticlesTableOfContents
            :links="doc?.body?.toc?.links"
            class="col-span-full lg:col-span-3 row-span-2 sm:mt-12 lg:mt-20 lg:sticky lg:top-5"
          />
          <ContentRenderer
            :value="doc"
            class="col-span-full lg:col-span-6 lg:col-start-2 row-span-4 lg:row-start-2"
          />
        </article>
      </template>
      <!-- Error in case not found -->
      <template #not-found>
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">404</h1>
          <p class="text-xl">
            No hemos encontrado la página, buscaremos en el fondo del mar...
          </p>
          <NuxtLink
            to="/"
            class="px-4 py-2 rounded-md"
          >
            Volver a la página principal
          </NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
const { data: page, error } = await useAsyncData(
  `content-index`,
  queryContent("/").findOne
)

useSeoMeta({
  title: page?.value?.title,
  ogTitle: page?.value?.title,
  description: page?.value?.description,
  ogDescription: page?.value?.description,
  ogImage: page?.value?.socialImage?.src,
  ogImageAlt: page?.value?.socialImage?.alt,
  ogImageHeight: page?.value?.socialImage?.height,
  ogImageWidth: page?.value?.socialImage?.width,
  ogImageType: page?.value?.socialImage?.mime,
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineArticle({
    "@type": "BlogPosting",
    headline: page?.value?.headline || "Esponja.es",
    description: page?.value?.description || "Esponja.es",
    image: page?.value?.socialImage?.src,
    datePublished: page?.value?.datePublished,
    dateModified: page?.value?.dateModified || page?.value?.datePublished,
    // attaching an author when the identity is an organization
    author: {
      name: "Redactor de Esponja.es",
      url: "https://github.com/paurosellfarre",
    },
  }),
])
</script>
