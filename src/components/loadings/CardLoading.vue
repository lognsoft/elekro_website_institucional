<script setup lang="ts">

</script>

<template>
  <div class="px-4">
    <Skeleton class="w-full aspect-[2/1]"/>
    <div class="p-[40px] border border-t-0">
      <div class="mb-3">
        <Skeleton class="w-full max-w-[80px] h-8 rounded-md"/>
      </div>
      <div>
        <Skeleton class="w-full max-w-[300px] h-9 rounded-md"/>
      </div>
      <div class="my-[24px] py-[24px] border-y">
        <Skeleton class="mb-1 w-full h-4 rounded-md"/>
        <Skeleton class="mb-1 w-full h-4 rounded-md"/>
        <Skeleton class="mb-1 w-full h-4 rounded-md"/>
        <Skeleton class="w-full max-w-[300px] h-4 rounded-md"/>
      </div>
      <div class="flex gap-3 items-center">
        <div>
          <Icon name="material-symbols:bookmarks" size="20"/>
        </div>
        <ul class="flex items-center flex-wrap w-full gap-1">
          <Skeleton class="w-full max-w-[50px] h-4 rounded-md"/>
          <Skeleton class="w-full max-w-[50px] h-4 rounded-md"/>
          <Skeleton class="w-full max-w-[50px] h-4 rounded-md"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
