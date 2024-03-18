<template>
    <main class="mt-[87px]">
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
        
        <Formulario :title="true"/>
        <!-- <section class="py-11 bg-gray-100 text-black">
            <div class="container mx-auto px-5 md:px-3">
                <TitleSection>Comece a trabalhar conosco</TitleSection>
                <ul class="mb-4">
                    <li class="text-lg mb-2">
                        <div class="font-bold inline-flex gap-1 items-center">
                            <span class="text-xl"><Icon name="dashicons:email-alt"/></span>
                            E-mail:
                        </div> exemplo@email.com
                    </li>
                    <li class="text-lg mb-2">
                        <div class="font-bold inline-flex gap-1 items-center">
                            <span class="text-xl"><Icon name="ic:round-phone"/></span>
                            Telefone:
                        </div> (xx) xxxxx-xxxx
                    </li>
                    <li class="text-lg mb-2">
                        <div class="font-bold inline-flex gap-1 items-center">
                            <span class="text-xl"><Icon name="ic:twotone-whatsapp"/></span>
                            Whatsapp:
                        </div> (xx) xxxxx-xxxx
                    </li>
                </ul>
            </div>
        </section> -->
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