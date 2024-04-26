<template>
    <Head>
        <Link rel="stylesheet" href="/css/font.css"/>
    </Head>
    <div>
        <GeneralHeaderDefault/>
        <main class="bg-black text-white">
            <section class="py-11 h-screen">
                <div class="container mx-auto py-11 px-2 h-full flex justify-center items-center flex-col gap-3">
                    <h1 class="font-extrabold text-6xl sm:text-8xl md:text-[100px] lg:text-[200px] xl:text-[300px]">404</h1>
                    <p class="font-bold text-sm sm:text-base md:text-2xl lg:text-4xl">Ops!! A página não foi encontrada</p>
                    <MyLink href="/" :reverse="true">Voltar a página inicial</MyLink>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "404 - Página não encontrada",
    description: 'Página não encontrada',
    ogTitle: '404 - Página não encontrada',
    ogDescription: 'Página não encontrada',
    ogImage: '[og:image]',
    ogUrl: 'https://meusite.com',
    twitterTitle: '404 - Página não encontrada',
    twitterDescription: 'Página não encontrada',
    twitterImage: '[twitter:image]',
    twitterCard: 'summary',
    robots: "noindex,nofollow"
})
</script>

<style scoped>
    body{
        @apply bg-white;
    }
    body{
        font-family: "Rubik", sans-serif;
    }
</style>