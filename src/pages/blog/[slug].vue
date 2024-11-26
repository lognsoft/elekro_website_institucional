<template>
<!--  <section v-if="data" class="mt-20">-->
<!--    <div class="container lg:max-w-[1200px] mx-auto flex flex-wrap justify-evenly">-->
<!--      <div class="max-w-[700px] max-lg:mx-auto">-->
<!--        <div class="px-4">-->
<!--          <div class="w-full h-full">-->
<!--            <NuxtImg v-if="data.thumbnail" :src="data.thumbnail" :alt="data.title" fit="cover" class="w-full h-full"/>-->
<!--            <NuxtImg v-else src="/images/elekro-logo.jpeg" fit="cover" class="w-full h-full"/>-->
<!--          </div>-->
<!--          <div class="border p-10">-->
<!--            <div class="flex flex-col gap-3">-->
<!--              <NuxtLink :to="`/blog/categories/${data.categories[0].slug}`" >-->
<!--                <text-h4-sub-title>{{ data.categories[0].name }}</text-h4-sub-title>-->
<!--              </NuxtLink>-->
<!--              <text-h2-title>{{ data.title }}</text-h2-title>-->
<!--            </div>-->
<!--            <div class="border-y py-6 my-6">-->
<!--              <div v-html="data.content"></div>-->
<!--            </div>-->
<!--            <div v-if="data.tags" class="flex gap-3 items-center" >-->
<!--              <div v-if="data.tags.length >= 1">-->
<!--                <Icon name="material-symbols:bookmarks" size="20"/>-->
<!--              </div>-->
<!--              <div>-->
<!--                <ul class="flex gap-1">-->
<!--                  <li v-for="(tag,index) in data.tags" :key="tag.slug" class="list-none">-->
<!--                    <NuxtLink :to="`/blog/tags/${tag.slug}`">-->
<!--                      {{tag.name}}<span v-if="index !== data.tags.length - 1">, </span>-->
<!--                    </NuxtLink>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <BlogSidebar/>-->
<!--    </div>-->
<!--  </section>-->

</template>

<script setup lang="ts">

const props = defineProps<{ slug: string }>();
console.log(props.slug);

// const route = useRoute()

// const { status, data } = useLazyAsyncData(`post-${}`)

// const { data } = useFetchAPI("[slug]-single","slug", `${route.params.slug}`)

</script>
