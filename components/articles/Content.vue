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

            <img
              :src="doc.socialImage.src"
              :alt="doc.socialImage.alt"
              :width="doc.socialImage.width"
              :height="doc.socialImage.height"
              class="rounded-md mx-auto lg:pb-4 lg:max-w-lg"
            />
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
const props = defineProps({
  page: {
    type: Object,
    required: true,
  },
})

const { path } = useRoute()
const cleanPath = path.replace(/\/+$/, "")

useSeoMeta({
  title: props.page?.title,
  ogTitle: props.page?.title,
  description: props.page?.description,
  ogDescription: props.page?.description,
  ogImage: props.page?.socialImage?.src,
  ogImageAlt: props.page?.socialImage?.alt,
  ogImageHeight: props.page?.socialImage?.height,
  ogImageWidth: props.page?.socialImage?.width,
  ogImageType: props.page?.socialImage?.mime,
  ogUrl: `https://esponja.es${cleanPath}`,
  twitterTitle: props.page?.title,
  twitterDescription: props.page?.description,
  twitterImage: props.page?.socialImage?.src,
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineArticle({
    "@type": "BlogPosting",
    headline: props.page?.headline || "Esponja.es",
    description: props.page?.description || "Esponja.es",
    image: props.page?.socialImage?.src,
    datePublished: props.page?.datePublished,
    dateModified: props.page?.dateModified || props.page?.datePublished,
    // attaching an author when the identity is an organization
    author: {
      name: "Redactor de Esponja.es",
      url: "https://github.com/paurosellfarre",
    },
  }),
])
</script>
