<template>
  <div>
    <form @submit.prevent="handlerSearch" class="flex gap-2">
      <input type="text"
             placeholder="TYPE TO SEARCH"
             v-model="searchValue"
             class="w-full h-[40px] px-3 outline-none border" >
      <button type="submit" class="min-w-[40px] h-[40px] flex items-center justify-center bg-gray-300">
        <Icon name="material-symbols:search" size="20" />
      </button>
    </form>

  </div>
</template>


<script setup lang="ts">
  const router = useRouter()
  const route = useRoute();
  const searchValue = ref<string>("")
  const baseUrl = computed(() => {
    let url = '/blog', first = true;
    for(const [key, value] of Object.entries(route.query)) {
      if(key === 'search' || key === 'page') continue;
      url = first ? `?${key}=${value}` : `&${key}=${value}`;
      first = false;
    }
    return first ? `${url}?` : `${url}&`
  })
  function handlerSearch(){
    if(searchValue.value.trim() !== ''){
      router.push(`${baseUrl.value}search=${searchValue.value.trim()}`)
    }
  }
</script>
