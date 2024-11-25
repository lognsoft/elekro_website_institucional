<template>
  <section class="mt-20 container lg:max-w-[1200px] mx-auto ">
    <content-list endpoint="posts" queryP="search"  :param="route.params.search"/>
  </section>
</template>

<script setup lang="ts">

import ContentList from "~/components/blog/contentList.vue";
const route = useRoute()
console.log(route.params.search);
</script>
