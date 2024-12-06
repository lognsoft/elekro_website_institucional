<template>
  <Head>
    <Title v-if="data">{{ data.title }}</Title>
    <Meta v-if="data" name="description" :content="data.excerpt"/>
    <Meta v-if="data" property="og:title" :content="`Elekro - ${data.title}`" />
    <Meta v-if="data && data.thumbnail" property="og:image" :content="data.thumbnail" />
    <Meta v-else property="og:image" content="/images/elekro-banner.jpg" />
    <Meta v-if="data" property="og:url" content="https://meuSite.com" />
    <Meta v-if="data" name="twitter:title" :content="`Elekro - ${data.title}`" />
    <Meta v-if="data" name="twitter:description" :content="data.excerpt" />
    <Meta v-if="data && data.thumbnail" name="twitter:image" :content="data.thumbnail" />
    <Meta v-else name="twitter:image" content="/images/elekro-banner.jpg" />
    <Meta v-if="data" name="twitter:card" content="summary_large_image" />
  </Head>
  <div class="pb-20 pt-24">
    <div class="container lg:max-w-[1200px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-8 gap-y-5">
        <article v-if="data && status !== 'pending'" class="lg:col-span-5">
          <div class="px-4">
            <div class="w-full h-full" v-if="data.thumbnail">
              <NuxtImg :src="data.thumbnail" :alt="data.title" fit="cover" class="w-full h-full"/>
            </div>
            <div class="border p-10">
              <div class="flex flex-col gap-3">
                <NuxtLink :to="`/updates?category${data.categories[0].slug}`" >
                  <text-h4-sub-title>{{ data.categories[0].name }}</text-h4-sub-title>
                </NuxtLink>
                <text-h2-title>{{ data.title }}</text-h2-title>
              </div>
              <div class="border-y py-6 my-6">
                <div class="dynamic-content" v-html="data.content"></div>
              </div>
              <div v-if="data.tags" class="flex gap-3 items-center" >
                <div v-if="data.tags.length >= 1">
                  <Icon name="material-symbols:bookmarks" size="20"/>
                </div>
                <div>
                  <ul class="flex gap-1">
                    <li v-for="(tag,index) in data.tags" :key="tag.slug" class="list-none">
                      <NuxtLink :to="`/updates?tag=${tag.slug}`">
                        {{tag.name}}<span v-if="index !== data.tags.length - 1">, </span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        <LoadingsCardLoading v-if="status === 'pending'" class="lg:col-span-5"/>
        <div class="lg:col-span-3">
          <BlogSidebar/>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
.dynamic-content h2,
.dynamic-content h3,
.dynamic-content h4,
.dynamic-content h5,
.dynamic-content h6,
.dynamic-content figure,
.dynamic-content p:not(:last-child) {
  @apply
  mb-4
}

.dynamic-content h2,
.dynamic-content h3,
.dynamic-content h4,
.dynamic-content h5,
.dynamic-content h6{
  @apply
  font-bold
}

.dynamic-content h2{
  @apply
  text-2xl
}
.dynamic-content h3,
.dynamic-content h4,
.dynamic-content h5,
.dynamic-content h6{
  @apply
  text-xl
}
</style>

<script setup lang="ts">
import type { IArticle, IBlog } from "~/core/types";
const route = useRoute()

const slug = computed(():string => route.params.slug.toString());
const { status, data } = useLazyAsyncData<IArticle, Error>(`post-${slug.value}`, async () => {
  const response = await $fetch<IArticle>(`/api/article`,{
    params:{
      slug: slug.value,
    }
  })
  return response
},{ watch: [slug], deep:true })

</script>
