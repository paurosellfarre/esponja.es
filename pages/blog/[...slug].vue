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
definePageMeta({
  documentDriven: {
    page: false,
  },
})
const { path } = useRoute()
const cleanPath = path.replace(/\/+$/, "")
const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
  // Remove a trailing slash in case the browser adds it, it might break the routing
  // fetch document where the document path matches with the cuurent route
  let page = queryContent("/blog").where({ _path: cleanPath }).findOne()

  return {
    page: await page,
  }
})

useSeoMeta({
  title: data?.value?.page?.value?.title,
  ogTitle: data?.value?.page?.value?.title,
  description: data?.value?.page?.value?.description,
  ogDescription: data?.value?.page?.value?.description,
  ogImage: data?.value?.page?.value?.socialImage?.src,
  ogImageAlt: data?.value?.page?.value?.socialImage?.alt,
  ogImageHeight: data?.value?.page?.value?.socialImage?.height,
  ogImageWidth: data?.value?.page?.value?.socialImage?.width,
  ogImageType: data?.value?.page?.value?.socialImage?.mime,
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineArticle({
    "@type": "BlogPosting",
    headline: data?.value?.page?.value?.headline || "Esponja.es",
    description: data?.value?.page?.value?.description || "Esponja.es",
    image: data?.value?.page?.value?.image,
    datePublished: data?.value?.page?.value?.datePublished,
    dateModified:
      data?.value?.page?.value?.dateModified ||
      data?.value?.page?.value?.datePublished,
    // attaching an author when the identity is an organization
    author: {
      name: "Redactor de Esponja.es",
      url: "https://github.com/paurosellfarre",
    },
  }),
])
</script>
