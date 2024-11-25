<template>
  <aside class="w-[350px] max-xl:max-w-[700px] max-xl:w-full max-lg:mx-auto px-4">
    <div class="">
      <Search/>
      <div>
        <div class="border-b pb-3 mb-6 mt-12">
          <TextH4SubTitle>Recent Posts</TextH4SubTitle>
        </div>
        <div>
          <ul class="list-none">
            <li v-for="(post) in postsData.posts"
                class="border-b pb-3 mb-3 last:border-none last:pb-0 last:mb-0">
              <NuxtLink :to="`/blog/post/${post.slug}`">
                {{ post.title}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="border-b pb-3 mb-6 mt-12">
          <TextH4SubTitle>Categories</TextH4SubTitle>
        </div>
        <div>
          <ul class="list-none">
            <li v-for="(categorie) in categoriesData" class="pb-3 mb-3" >
              <NuxtLink :to="`/blog/categories/${categorie.slug}`">
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
            <li v-for="(tag) in tagsData" class="inline-block">
              <NuxtLink :to="`/blog/tags/${tag.slug}`" class="py-2 px-4 border block">
                {{ tag.name}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>

</template>
<script setup lang="ts">
  import useFetchAPI from "~/composables/useFetchAPI";
  import Search from "~/components/blog/search.vue";



  const {data: postsData} = useFetchAPI("posts")

  const {data: tagsData} = useFetchAPI("tags")

  const {data: categoriesData} = useFetchAPI("categories")


</script>