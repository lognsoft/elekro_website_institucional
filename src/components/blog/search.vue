<template>
  <div>
    <form @submit.prevent="teste" class="flex gap-2">
      <input type="text"
             placeholder="TYPE TO SEARCH"
             v-model="searchQ"
             class="w-full h-12 px-3 outline-none border" >
      <button type="submit" class="px-3 bg-gray-300">
        <Icon name="material-symbols:search" size="20" />
      </button>
    </form>

  </div>
</template>


<script setup lang="ts">
  import {useRouter} from "#vue-router";
  const router = useRouter()
  const searchQ = ref<string>("")
  function teste(){
    if(searchQ.value.trim()){
      router.push("/blog/search-results/" + searchQ.value.trim())
    }
  }
</script>