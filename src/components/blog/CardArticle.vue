<script setup lang="ts">
import type { IPost } from "~/core/types";

interface ICardArticleProps{
  post: IPost;
  loading: string;
}

defineProps<ICardArticleProps>();

</script>

<template>
  <article class="mb-8">
      <div class="px-4">
        <div v-if="post.thumbnail" class="w-full h-full">
          <NuxtImg :src="post.thumbnail" :alt="post.title" fit="cover" class="w-full h-full"/>
        </div>
        <div class="border p-10">
          <div class="flex flex-col gap-3">

              <text-h4-sub-title v-if="post.categories.length > 0">
                <NuxtLink :to="`/blog?category=${post.categories[0].slug}`" @click.stop>
                  {{ post.categories[0].name }}
                </NuxtLink>
              </text-h4-sub-title>

            <text-h2-title>
              <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
            </text-h2-title>
          </div>
          <div class="border-y py-6 my-6">
            <p v-html="post.excerpt"></p>
          </div>
          <div v-if="post.tags.length >= 1" class="flex gap-3 items-center" >
            <div>
              <Icon name="material-symbols:bookmarks" size="20" />
            </div>
            <div >
              <ul class="flex gap-1 list-none">
                <li v-for="(tag,index) in post.tags" :key="tag.slug">
                  <NuxtLink :to="`/blog?tag[]=${tag.slug}`" @click.stop>
                    {{tag.name}}<span v-if="index !== post.tags.length - 1">, </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--    </NuxtLink>-->
  </article>
</template>

<style scoped>

</style>
