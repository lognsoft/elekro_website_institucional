<template>
  <section class="mt-20 container lg:max-w-[1200px] mx-auto">
    <content-list endpoint="posts" queryP="tag"  :param="teste"/>
  </section>
</template>

<script setup lang="ts">
  const route = useRoute()
  const teste = ref(route.params.tag)

  import ContentList from "~/components/blog/contentList.vue";
</script>
