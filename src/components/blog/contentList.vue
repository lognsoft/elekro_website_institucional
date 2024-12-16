<template>
<!--  <div v-if="data" class="lg:flex flex-wrap justify-evenly max-xl:mx-auto">-->
<!--    <div v-if="data.posts" class="max-w-[700px] max-lg:mx-auto">-->
<!--      <div v-for="([slug]) in data.posts" :key="[slug].slug" class="mb-8">-->
<!--        <NuxtLink :to="'/insights/[slug]/' + [slug].slug">-->
<!--          <div class="px-4">-->
<!--            <div class="w-full h-full">-->
<!--              <NuxtImg v-if="[slug].thumbnail" :src="[slug].thumbnail" :alt="[slug].title" fit="cover" class="w-full h-full"/>-->
<!--              <NuxtImg v-else src="/images/elekro-logo.jpeg" fit="cover" class="w-full h-full"/>-->
<!--            </div>-->
<!--            <div class="border p-10">-->
<!--              <div class="flex flex-col gap-3">-->
<!--                <NuxtLink :to="`/insights/categories/${[slug].categories[0].slug}`" @click.stop>-->
<!--                  <text-h4-sub-title>{{ [slug].categories[0].name }}</text-h4-sub-title>-->
<!--                </NuxtLink>-->
<!--                <text-h2-title>{{ [slug].title }}</text-h2-title>-->
<!--              </div>-->
<!--              <div class="border-y py-6 my-6">-->
<!--                <p>{{decodeHTML([slug].excerpt)}}</p>-->
<!--              </div>-->
<!--              <div v-if="[slug].tags.length >= 1" class="flex gap-3 items-center" >-->
<!--                <div>-->
<!--                  <Icon name="material-symbols:bookmarks" size="20" />-->
<!--                </div>-->
<!--                <div >-->
<!--                  <ul class="flex gap-1 list-none">-->
<!--                    <li v-for="(tag,index) in [slug].tags" :key="tag.slug">-->
<!--                      <NuxtLink :to="`/insights/tags/${tag.slug}`" @click.stop>-->
<!--                        {{tag.name}}<span v-if="index !== [slug].tags.length - 1">, </span>-->
<!--                      </NuxtLink>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </NuxtLink>-->
<!--      </div>-->
<!--      <div class="flex gap-20">-->
<!--&lt;!&ndash;        <UPagination v-model="currentPage" :page-count="5" :total="4" />&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-else class="w-[700px] max-xl:max-w-[700px] max-xl:w-full max-lg:mx-auto px-4">-->
<!--      <text-h3-title>Nenhum resultado encontrado para "{{ props.param }}"</text-h3-title>-->
<!--    </div>-->
<!--    <Sidebar/>-->
<!--  </div>-->
</template>
<script setup lang="ts">
  import useFetchAPI from "~/composables/useFetchAPI";
  import Sidebar from "~/components/blog/sidebar.vue";
  import { decodeHTML } from "entities";

  interface IProps {
    endpoint:string;
    queryp?:string;
    param?:string;
  }
  const props = defineProps<IProps>(["endpoint","queryP","param"])

  const { data } = useFetchAPI(props.endpoint,props.queryP,props.param)
</script>
