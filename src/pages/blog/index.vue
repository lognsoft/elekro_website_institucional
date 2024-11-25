<template>
  <Head>
    <Title>Blog</Title>
    <Meta name="description" content="lorem ipsum" />
    <Meta property="og:description" content="lorem ipsum" />
    <Meta property="og:title" content="Elekro - Blog" />
    <Meta property="og:image" content="/images/elekro-banner.jpg" />
    <Meta property="og:url" content="https://meuSite.com" />
    <Meta name="twitter:title" content="Elekro - Sobre" />
    <Meta name="twitter:description" content="lorem ipsum" />
    <Meta name="twitter:image" content="/images/elekro-banner.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
  </Head>
  <main>
    <section class="mt-20 container lg:max-w-[1200px] mx-auto">
      <ContentList endpoint="posts"/>
    </section>
  </main>
</template>
<script setup lang="ts">
  import ContentList from "~/components/blog/contentList.vue";

</script>