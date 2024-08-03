<template>
  <NuxtLink :to="props.href" class="link">
      <slot/>
  </NuxtLink>
</template>

<script setup lang="ts">
type MyButtonTwo = {
  href?:string
}

const props:Readonly<MyButtonTwo> = defineProps({
  href:{
      type:String,
      default: "",
  },
})

</script>

<style scoped>
.link{
  @apply cursor-pointer  px-5 rounded-full py-2 text-white bg-[#0071e3] font-normal text-base md:text-lg hover:brightness-105 text-center
}
</style>