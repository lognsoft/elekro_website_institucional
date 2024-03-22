<template>
    <main>
        <Head>
            <Title>Seja Um Autorizado</Title>
            <Meta name="description" content="lorem ipsum"/>
            <Meta property="og:description" content="lorem ipsum"/>
            <Meta property="og:title" content="Elekro - Contato"/>
            <Meta property="og:image" content="/images/elekro-banner.jpg"/>
            <Meta property="og:url" content="https://meuSite.com"/>
            <Meta name="twitter:title" content="Elekro - Contato"/>
            <Meta name="twitter:description" content="lorem ipsum"/>
            <Meta name="twitter:image" content="/images/elekro-banner.jpg"/>
            <Meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <section class="apresentacao">
            <div class="relative z-10 container mx-auto px-5 text-white gap-[-30px]">
                <h1 class="w-full text-center lg:text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px]">Seja um autorizado</h1>
                <p class="w-full text-lg lg:text-2xl text-center lg:text-start">Entrega eficiente, tecnologia de ponta</p>
            </div>
        </section>
        <Formulario/>
    </main>
</template>

<script setup lang="ts">

//tipos
import type { Info } from '~/types'

const infos:Info[] = [
    {
        title: 'Lorem Ipsum 1',
        text: 'Lorem ipsum dolor 1'
    },
    {
        title: 'Lorem Ipsum 2',
        text: 'Lorem ipsum dolor 2'
    },
    {
        title: 'Lorem Ipsum 3',
        text: 'Lorem ipsum dolor 3'
    },
]

</script>

<style scoped>
.apresentacao{
    @apply relative w-full overflow-hidden bg-[url('/images/trabalhadores.jpg')] bg-no-repeat bg-cover bg-center flex items-center h-screen
}

.apresentacao:after{content:''}
.apresentacao:after{
    @apply absolute w-full h-full bg-black/40 top-0 left-0
}
</style>