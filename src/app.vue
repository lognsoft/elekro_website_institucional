<template>
  <div>
    <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
        <Link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
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
        font-family: 'Roboto', sans-serif;
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
})
</script>