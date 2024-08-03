<template>
    <main class="text-black">
        <Head>
            <Title>Seja um autorizado</Title>
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
        <GeneralBanner src="/images/autorizado/AdobeStock.jpeg" title="Seja um autorizado" text="Entrega eficiente, tecnologia de ponta"/>
        <section>
            <div class="mx-auto w-full">
                <!-- <div class="text-center mb-[40px] px-3 max-w-[1350px] mx-auto">
                    <TextH2Title class="mb-3">Abra as portas para o futuro e explore os benefícios exclusivos e diferenciais da Elekro</TextH2Title>
                    <p class="mb-4 text-black">
                        Posicionamos o consumidor no centro todas as nossas decisões e buscamos parceiros que compartilhem dessa missão conosco
                    </p>
                    <button class="nav-form" aria-label="ir para formulário" @click="scrollEl()">Seja um autorizado elekro</button>
                </div> -->

                <div class="grid grid-cols-1 gap-2 md:gap-0">
                    <template v-for="info,index in infos" :key="index">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="bg-black text-white aspect-[1/1] lg:aspect-[2/1.2] p-4 flex items-center">
                                <div class="w-full container max-w-[900px]" :class="{'md:ml-0 md:mr-auto':(index + 1) % 2 == 0,'md:mr-0 md:ml-auto':(index + 1) % 2 > 0}">
                                    <TextH2Title class="mb-3">{{ info.title }}</TextH2Title>
                                    <div>
                                        <template v-if="typeof info.text == 'string'">
                                            <p>{{ info.text }}</p>
                                        </template>
                                        <template v-else>
                                            <p v-for="text,index in info.text" :key="index">
                                                {{ text }}
                                            </p>
                                        </template>
                                        <template v-if="info.title === 'Explore os benefícios exclusivos e diferenciais da Elekro'">
                                            <MyButtonTwo class="nav-form" aria-label="ir para formulário" @click="scrollEl()">Seja um autorizado</MyButtonTwo>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <figure ref="figure" :class="{'md:order-first':(index + 1) % 2 == 0}">
                                <img class="h-full w-full object-cover aspect-[1/1] lg:aspect-[2/1.2]" :src="info.img" :alt="info.title"/>
                            </figure>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <FormDefault/>
    </main>
</template>

<script setup lang="ts">
//tipos
import { infos } from '~/core/constants';
let formulario:HTMLElement | null = null;
const figure:Ref<HTMLElement | null> = ref(null);

function scrollEl(){
    if(formulario === null) formulario = document.querySelector("#formSection");
    if(formulario !== null){
        window.scroll({
            top: formulario.offsetTop - 80,
            behavior: "smooth"
        })
    }
}
onUnmounted(() => formulario = null);
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

.nav-form{
    @apply duration-200 mt-5 inline-block font-light text-base
}
</style>