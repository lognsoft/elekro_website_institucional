<template>
  <aside class="w-full px-4">
    <div class="">
      <BlogSearch/>
      <div>
        <div class="border-b pb-3 mb-6 mt-12">
          <TextH4SubTitle>Posts Recentes</TextH4SubTitle>
        </div>
        <template v-if="status === 'pending'">
          <LoadingsSidebarLoading content-type="posts" />
        </template>
        <div v-if="AsideData && AsideData.posts && status !== 'pending'">
          <ul class="list-none">
            <li v-for="(post) in AsideData.posts.posts"
                class="border-b pb-3 mb-3 last:border-none last:pb-0 last:mb-0">
              <NuxtLink :to="`/updates/${post.slug}`">
                {{ post.title}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="border-b pb-3 mb-6 mt-12">
          <TextH4SubTitle>Categorias</TextH4SubTitle>
        </div>
        <template v-if="status === 'pending'">
          <LoadingsSidebarLoading content-type="categories" />
        </template>
        <div v-if="AsideData && AsideData.categories && status !== 'pending'">
          <ul class="list-none">
            <li v-for="(categorie) in AsideData.categories" class="pb-3 mb-3" >
              <NuxtLink :to="`/updates?category=${categorie.slug}`">
                - {{ categorie.name}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="border-b pb-3 mb-6 mt-12">
          <TextH4SubTitle>tags</TextH4SubTitle>
        </div>
        <template v-if="status === 'pending'">
          <LoadingsSidebarLoading content-type="tags"/>
        </template>
        <div v-if="AsideData && AsideData.tags && status !== 'pending'">
          <ul class="flex gap-2 flex-wrap">
            <li v-for="(tag) in AsideData.tags" class="inline-block">
              <NuxtLink :to="`/updates?tag=${tag.slug}`" class="py-2 px-4 border block">
                {{ tag.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>

</template>
<script setup lang="ts">
  import baseUrl from "~/constants/baseUrl";
  import type { IBlog, IGeneric } from "~/core/types";

  interface IAsideRequest{
    posts:IBlog,
    tags:IGeneric[],
    categories:IGeneric[]
  }

  const { status, data:AsideData } = await useLazyAsyncData<IAsideRequest, Error>(
    'sidebar',
    () => $fetch<IAsideRequest>('/api/aside')
  );

</script>
