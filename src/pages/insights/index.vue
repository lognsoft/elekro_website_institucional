<template>
  <Head>
    <Title>Insights</Title>
    <Meta name="description" content="lorem ipsum" />
    <Meta property="og:description" content="lorem ipsum" />
    <Meta property="og:title" content="Elekro - Insights" />
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
          <template v-if="data && data.posts && status !== 'pending'">
            <div class="lg:col-span-5">

              <BlogCardArticle v-for="post of data.posts" :key="post.id" :post="post" :loading="status"/>
              <div class="flex gap-20" v-if="data.total_pages > 1">
                <BlogPagination :base-url="createBaseUrl" :total_pages="data.total_pages" :current_page="!queryParams.page ? 1 : Number(queryParams.page)"/>
              </div>
            </div>
          </template>
          <template v-if="status === 'pending'">
            <LoadingsCardLoading class="lg:col-span-5"/>
          </template>

          <template v-if="(!data || !data.posts) && (status === 'success' || status === 'error')">
            <div class="lg:col-span-5">
              <div class="content-center w-full h-full flex flex-col items-center text-center justify-between">
                <TextH3Title> Ops! Não encontramos nada para "{{ queryParams.search }}"</TextH3Title>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="md:w-[300px] w-52"><path
                    d="m7 17.7l1.4 1.425q.15.15.35.15t.35-.15t.15-.363t-.15-.362L7.7 17l1.425-1.425q.15-.15.15-.35t-.15-.35t-.35-.15t-.35.15L7 16.3l-1.425-1.425q-.15-.15-.35-.15t-.35.15t-.15.35t.15.35L6.3 17l-1.425 1.425q-.15.15-.15.35t.15.35t.35.15t.35-.15zM7 22q-2.075 0-3.537-1.463T2 17t1.463-3.537T7 12t3.538 1.463T12 17t-1.463 3.538T7 22m7.2-7.4q-.3-.325-.638-.663T12.9 13.3q.95-.6 1.525-1.6T15 9.5q0-1.875-1.312-3.187T10.5 5T7.313 6.313T6 9.5q0 .15.013.288t.037.287q-.45.05-.987.2t-.963.35q-.05-.275-.075-.55T4 9.5q0-2.725 1.888-4.612T10.5 3t4.613 1.888T17 9.5q0 1.075-.337 2.038t-.938 1.762l5.575 5.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"
                    fill="currentColor"/></svg>
                <text-h4-sub-title class="text-gray-500 mt-2">
                  Tente ajustar sua busca ou explore nossos conteúdos.
                </text-h4-sub-title>
                <NuxtLink to="/src/pages/insights" class="px-3 py-5 border-2 rounded-lg mt-3 flex items-center gap-2 max-w-48">
                  <Icon name="material-symbols:arrow-left-alt-rounded" size="24" /> Voltar para Início
                </NuxtLink>

              </div>
            </div>
          </template>
          <div class="lg:col-span-3">
            <BlogSidebar/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
useHeadSafe({
    link:[
        { rel: "canonical", href: "https://elekro.com.br/insights" }
    ]
})
  import type { IBlog } from "~/core/types";

  const route = useRoute();

  const queryParams = computed(() => ({ ...route.query }));
  const createKey = computed(() => `posts-${JSON.stringify(queryParams.value)}`);
  const createBaseUrl = computed(() => {
    let baseUrl = '/insights';
    let first = true;
    for (const [key, value] of Object.entries(queryParams.value)) {
      if(key === 'page') continue;
      baseUrl = first ? `?${key}=${value}` : `&${key}=${value}`;
      first = false;
    }
    return first ? `${baseUrl}?` : `${baseUrl}&`;
  })

  const { status, data } = useLazyAsyncData<IBlog, Error>(createKey.value, async () => {
    const response = await $fetch<IBlog>(`/api/posts`,{
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
