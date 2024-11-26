<template>
  <Head>
    <Title>Blog</Title>
    <Meta name="description" content="lorem ipsum" />
    <Meta property="og:description" content="lorem ipsum" />
    <Meta property="og:title" content="Elekro - Blog" />
    <Meta property="og:image" content="/images/elekro-banner.jpg" />
    <Meta property="og:url" content="https://meuSite.com" />
    <Meta name="twitter:title" content="Elekro - Blog" />
    <Meta name="twitter:description" content="lorem ipsum" />
    <Meta name="twitter:image" content="/images/elekro-banner.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
  </Head>
  <main>
    <section class="pb-20 pt-24">
      <div class="container lg:max-w-[1200px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-8 gap-y-5">
          <template v-if="data && data.posts">
            <div class="lg:col-span-5">

              <BlogCardArticle v-for="post of data.posts" :key="post.id" :post="post" :loading="status"/>
              <div class="flex gap-20" v-if="data.total_pages > 1">
                <BlogPagination :base-url="createBaseUrl" :total_pages="data.total_pages" :current_page="!queryParams.page ? 1 : Number(queryParams.page)"/>
              </div>
            </div>
            <div class="lg:col-span-3">
              <BlogSidebar/>
            </div>
          </template>
          <template v-if="status === 'pending'">
            <LoadingsCardLoading class="lg:col-span-5"/>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
  import type { IPost, IBlog } from "~/core/types";
  import baseUrl from "~/constants/baseUrl";

  const route = useRoute();

  const queryParams = computed(() => ({ ...route.query }));
  const createKey = computed(() => `posts-${JSON.stringify(queryParams.value)}`);
  const createBaseUrl = computed(() => {
    let baseUrl = '/blog';
    let first = true;
    for (const [key, value] of Object.entries(queryParams.value)) {
      if(key === 'page') continue;
      baseUrl = first ? `?${key}=${value}` : `&${key}=${value}`;
      first = false;
    }
    return first ? `${baseUrl}?` : `${baseUrl}&`;
  })

  const { status, data }:IBlog<IPost[]> = useLazyAsyncData(createKey.value, async () => {
    const response = await $fetch<IPost[]>(`${baseUrl}/posts`,{
      params: queryParams.value
    });
    return response
  },{
    watch: [queryParams],
    deep: true,
  })

  watch(queryParams, () => {
    scroll({
      top: 0
    })
  },{deep: true});
</script>
