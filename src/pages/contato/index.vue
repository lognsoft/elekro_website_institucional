<template>
    <main>
        <Head>
            <Title>Contato</Title>
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
        <Banner>
            Contatos
        </Banner>
        <Formulario title="Entre em contato conosco"/>
        <section class="py-11 bg-slate-500 text-white">
            <div class="container mx-auto px-5 md:px-3 py-11">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center md:text-start">
                    <div class="col-span-1" v-for="info,index of infos" :key="index">
                        <h3 class="text-5xl font-extrabold mb-11" data-aos="fade-up" data-aos-duration="1000">{{  info.title  }}</h3>
                        <p class="text-base sm:text-xl font-bold" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">{{ info.text }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">

//tipos
import type { Info } from '~/types'

const infos = ref<Info[]>([
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
])

</script>