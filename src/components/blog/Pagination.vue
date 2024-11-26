<script setup lang="ts">

  interface IPagination{
    baseUrl: string;
    total_pages: number;
    current_page: number;
  }

  defineProps<IPagination>()
</script>

<template>
  <ul class="pagination">
    <li v-if="(current_page - 3) > 0">
      <NuxtLink class="nav-item" :to="baseUrl + `page=${current_page - 3}`"><<</NuxtLink>
    </li>
    <li v-if="(current_page - 2) > 0">
      <NuxtLink class="nav-item" :to="baseUrl + `page=${current_page - 2}`">{{ current_page - 2 }}</NuxtLink>
    </li>
    <li v-if="(current_page - 1) > 0">
      <NuxtLink class="nav-item" :to="baseUrl + `page=${current_page - 1}`">{{ current_page - 1 }}</NuxtLink>
    </li>

    <li>
      <span class="current">{{ current_page }}</span>
    </li>

    <li v-if="(current_page + 1) <= total_pages">
      <NuxtLink class="nav-item" :to="baseUrl + `page=${current_page + 1}`">{{ current_page + 1 }}</NuxtLink>
    </li>
    <li v-if="(current_page + 2) <= total_pages">
      <NuxtLink class="nav-item" :to="baseUrl + `page=${current_page + 2}`">{{ current_page + 2 }}</NuxtLink>
    </li>
    <li v-if="(current_page + 3) <= total_pages && current_page <= total_pages - 2">
      <NuxtLink class="nav-item" :to="baseUrl + `page=${current_page - 3}`">>></NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
  .pagination {
    @apply
    px-4
    flex
    flex-wrap
    gap-1
    items-center
  }

  .pagination .current{
    @apply
    bg-[#333]
    text-white;
  }

  .pagination .nav-item{
    @apply
    hover:bg-[#333]
    hover:text-white
    duration-150
  }

  .pagination .current,
  .pagination .nav-item{
    @apply
    w-[30px]
    h-[30px]
    flex
    items-center
    justify-center
    rounded-sm
    border-[1px]
    border-[#333]
  }
</style>
