<template>
  <aside class="w-full px-4">
    <div class="">
      <BlogSearch/>
      <div>
        <div class="border-b pb-3 mb-6 mt-12">
          <TextH4SubTitle>Posts Recentes</TextH4SubTitle>
        </div>
        <div>
          <ul class="list-none">
            <li v-for="(post) in AsideData.posts.posts"
                class="border-b pb-3 mb-3 last:border-none last:pb-0 last:mb-0">
              <NuxtLink :to="`/blog/${post.slug}`">
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
        <div>
          <ul class="list-none">
            <li v-for="(categorie) in AsideData.categories" class="pb-3 mb-3" >
              <NuxtLink :to="`/blog?category=${categorie.slug}`">
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
        <div>
          <ul class="flex gap-2 flex-wrap">
            <li v-for="(tag) in AsideData.tags" class="inline-block">
              <NuxtLink :to="`/blog?tag=${tag.slug}`" class="py-2 px-4 border block">
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
  import type { IPost, IGeneric } from "~/core/types";

  interface IAsideRequest{
    status:{
      value: "idle" | "pending" | "success" | "error"
    };
    data:{
      value:{
        posts:IPost[],
        tags:IGeneric[],
        categories:IGeneric[],
      }
    };
  }

  const { status, data:AsideData }:IAsideRequest = await useLazyAsyncData('sidebar', async () => {
    const [posts, tags, categories] = await Promise.all([
        $fetch(`${baseUrl}/posts?limit=5`),
        $fetch(`${baseUrl}/tags`),
        $fetch(`${baseUrl}/categories`),
    ])

    return { posts, tags, categories }
  })

</script>
