<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article class="relative grid grid-cols-10 gap-x-8">
          <section class="col-span-full lg:col-span-6 lg:col-start-2">
            <!-- Headline -->
            <h1>{{ doc.headline }}</h1>

            <!-- Description -->
            <p>{{ doc.description }}</p>
          </section>

          <ArticlesTableOfContents
            :links="doc?.body?.toc?.links"
            class="col-span-full lg:col-span-3 sm:mt-12 lg:mt-20 lg:sticky lg:top-5"
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
    image: page?.value?.image,
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
