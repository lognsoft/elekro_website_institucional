<template>
  <div>
    <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <Link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <Link rel="icon" type="image/svg+xml" href="/images/elekro-icon.svg"/>
    </Head>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
    body{
        @apply bg-slate-100;
    }
    body{
        font-family: 'Source Sans 3', sans-serif;
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