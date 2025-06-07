<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <WhatsappLink/>
  </div>
</template>
 <!---->
<style>
    body{
        @apply bg-white;
    }

    body{
        font-family: "Lufga";
        scroll-behavior: smooth;
    }
    section{
        @apply bg-white
    }

    .fluid-image{
        width: 100%;
        height: auto;
    }
    p{
        @apply font-light
    }
</style>



<script setup>
useSeoMeta({
    titleTemplate : (titleChunck) => {
        return titleChunck ? `Elekro - ${titleChunck}`: "Elekro";
    },
})
useHead({
    htmlAttrs:{
        lang: 'pt-BR',
    },
    // script:[
    //     { src:"//code.jivosite.com/widget/Q2hasbDhZi", async:'' }
    // ],
})
</script>