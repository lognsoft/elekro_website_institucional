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
  @apply cursor-pointer  px-7 py-2.5 text-white bg-black font-light text-base hover:brightness-105
  text-center
}
</style>
