<script setup lang="ts">
  defineProps({contentType: String})
</script>

<template>
  <div>
    <div class="mt-4">
      <div>
        <div v-if="contentType === 'posts'" v-for="(_, index) in 5" class="border-b pb-3 mb-3 last:border-none last:pb-0 last:mb-0"
             :key="index">
          <Skeleton class="w-12 h-5 rounded-md"/>
        </div>


        <div v-if="contentType === 'categories'" v-for="(_, index) in 3" :key="index" class="mb-3 pb-3">
          <Skeleton class="w-14 h-5 rounded-md"/>
        </div>
        <div v-if="contentType === 'tags'"  class="flex gap-2">
          <Skeleton v-for="(_, index) in 3" :key="index" class="w-20 h-10 border" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
