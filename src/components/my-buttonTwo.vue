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
  @apply cursor-pointer  px-7 rounded-full py-2.5 text-white bg-[#0171E3] font-light text-base md:text-lg hover:brightness-105 text-center
}
</style>