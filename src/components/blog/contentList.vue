<template>
  <div v-if="data" class="lg:flex flex-wrap justify-evenly max-xl:mx-auto">
    <div v-if="data.posts" class="max-w-[700px] max-lg:mx-auto">
      <div v-for="(post) in data.posts" :key="post.slug" class="mb-8">
        <NuxtLink :to="'/blog/post/' + post.slug">
          <div class="px-4">
            <div class="w-full h-full">
              <NuxtImg v-if="post.thumbnail" :src="post.thumbnail" :alt="post.title" fit="cover" class="w-full h-full"/>
              <NuxtImg v-else src="/images/elekro-logo.jpeg" fit="cover" class="w-full h-full"/>
            </div>
            <div class="border p-10">
              <div class="flex flex-col gap-3">
                <NuxtLink :to="`/blog/categories/${post.categories[0].slug}`" @click.stop>
                  <text-h4-sub-title>{{ post.categories[0].name }}</text-h4-sub-title>
                </NuxtLink>
                <text-h2-title>{{ post.title }}</text-h2-title>
              </div>
              <div class="border-y py-6 my-6">
                <p>{{decodeHTML(post.excerpt)}}</p>
              </div>
              <div v-if="post.tags.length >= 1" class="flex gap-3 items-center" >
                <div>
                  <Icon name="material-symbols:bookmarks" size="20" />
                </div>
                <div >
                  <ul class="flex gap-1 list-none">
                    <li v-for="(tag,index) in post.tags" :key="tag.slug">
                      <NuxtLink :to="`/blog/tags/${tag.slug}`" @click.stop>
                        {{tag.name}}<span v-if="index !== post.tags.length - 1">, </span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="flex gap-20">
<!--        <UPagination v-model="currentPage" :page-count="5" :total="4" />-->
      </div>
    </div>
    <div v-else class="w-[700px] max-xl:max-w-[700px] max-xl:w-full max-lg:mx-auto px-4">
      <text-h3-title>Nenhum resultado encontrado para "{{ props.param }}"</text-h3-title>
    </div>
    <Sidebar/>
  </div>
</template>
<script setup lang="ts">
  import useFetchAPI from "~/composables/useFetchAPI";
  import Sidebar from "~/components/blog/sidebar.vue";
  import { decodeHTML } from "entities";

  const props = defineProps(["endpoint","queryP","param"])

  const { data } = useFetchAPI(props.endpoint,props.queryP,props.param)
</script>