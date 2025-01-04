<template>
  <NuxtLink :to="props.href" :class="{
   'link': !transparent,
   'link transparent': transparent
  }">
      <slot/>
  </NuxtLink>
</template>

<script setup lang="ts">
type MyButtonTwo = {
  href?:string,
  transparent?:boolean
}

const props:Readonly<MyButtonTwo> = defineProps({
  href:{
      type:String,
      default: "",
  },
  transparent:{
    type:Boolean,
    default: false
  }
})

</script>

<style scoped>
.link{
  @apply
  cursor-pointer
  px-7
  py-2.5
  text-white
  bg-black
  border
  border-black
  font-light
  rounded-lg
  text-base
  hover:brightness-105
  text-center
}

.link.transparent{
  @apply
  bg-transparent
  text-black
}
</style>
