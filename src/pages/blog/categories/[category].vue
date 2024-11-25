<template>
  <section class="mt-20 container lg:max-w-[1200px] mx-auto">
    <content-list endpoint="posts" queryP="category"  :param="route.params.category"/>
  </section>
</template>

<script setup lang="ts">

  import ContentList from "~/components/blog/contentList.vue";
  const route = useRoute()
</script>
