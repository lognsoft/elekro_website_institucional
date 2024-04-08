<template>
    <Head>
        <Link rel="stylesheet" href="/css/font.css"/>
    </Head>
    <Body class="bg-[#f6f9fc]"/>
    <HeaderDefault/>
        <slot/>
    <FooterDefault/>
</template>

<script setup lang="ts">
useHead({
    htmlAttrs:{
        lang: 'pt-BR',
    },
    script:[
        {type: "text/javascript", src:'//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'}
    ]
})
</script>

