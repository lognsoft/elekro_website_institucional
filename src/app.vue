<template>
  <div>
    <Head>
        <Link rel="icon" type="image/svg+xml" href="/images/elekro-icon.svg"/>
        <Link rel="stylesheet" href="/css/font.css"/>
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
        font-family: "Lufga";
    }

    .fluid-image{
        width: 100%;
        height: auto;
    }
</style>

<script setupt lang="ts">
useHead({
    htmlAttrs:{
        lang: 'pt-BR',
    },
    script:[
        { src:"//code.jivosite.com/widget/Q2hasbDhZi", async:'' }
    ],
    // link:[
    //     { rel:"stylesheet", href:"/css/font.css" }
    // ]
})
</script>