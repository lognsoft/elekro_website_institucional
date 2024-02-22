<template>
  <div>
    <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
        <Link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"/>
        <Link rel="icon" type="image/svg+xml" href="/images/elekro-icon.svg"/>
    </Head>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
    body{
        @apply bg-white;
    }
    body{
        font-family: "Rubik", sans-serif;
    }
</style>

<script setup lang="ts">

useSeoMeta({
    titleTemplate : (titleChunck) => {
        return titleChunck ? `Elekro - ${titleChunck}`: "Elekro";
    },
})
useHead({
    htmlAttrs:{
        lang: 'pt-BR',
    },
    script:[
        { src:"//code.jivosite.com/widget/Q2hasbDhZi", async:'' }
    ]
})
</script>