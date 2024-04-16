<template>
    <main class="text-[#333]">
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
        <Banner class="bg-center bg-cover bg-no-repeat bg-[url('/images/autorizado/AdobeStock.jpeg')]" title="Seja um autorizado" text="Entrega eficiente, tecnologia de ponta"/>
        <section class="pt-11">
            <div class="container mx-auto md:px-3 max-w-[1350px]">
                <h2 class="mb-[40px] text-center text-2xl md:text-4xl">Ao tornar-se um autorizado Elekro, disponibilizamos</h2>
                <div class="grid grid-cols-1 gap-2 md:gap-0">
                    <template v-for="info,index in infos" :key="index">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="bg-black text-white aspect-[1/1] p-4 flex items-center">
                                <div class="w-full">
                                    <h2 class="text-3xl lg:text-4xl mb-3 font-bold">{{ info.title }}</h2>
                                    <div v-html="info.text"></div>
                                </div>
                            </div>
                            <figure :class="{'md:order-first':(index + 1) % 2 == 0}">
                                <template v-if="info.img !== ''">
                                    <img class="h-full w-full object-cover aspect-[1/1]" :src="info.img" alt="lorem ipsum"/>
                                </template>
                                <template v-else>
                                    <img class="h-full w-full object-cover aspect-[1/1]" src="/images/elekro-banner.jpg" alt="lorem ipsum"/>
                                </template>
                            </figure>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <Formulario/>
    </main>
</template>

<script setup lang="ts">

//tipos
import { infos } from '~/core/constants';

</script>

<style scoped>

.box{
    @apply py-5 px-4
}
.box .icon{
    @apply inline-flex w-[40px] h-[40px] items-center justify-center
}
.box .icon > svg{
    @apply w-[40px] h-[40px]
}
.box .title{
    @apply text-2xl md:text-4xl
}
.box .text{
    @apply text-sm
}
</style>~/core/types