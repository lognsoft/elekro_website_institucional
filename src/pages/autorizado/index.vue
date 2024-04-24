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
        <Banner src="/images/autorizado/AdobeStock.jpeg" title="Seja um autorizado" text="Entrega eficiente, tecnologia de ponta"/>
        <section class="pt-11">
            <div class="container mx-auto md:px-3 max-w-[1350px]">
                <div class="text-center mb-[40px] px-3 ">
                    <h2 class="mb-3 text-center text-2xl md:text-4xl">Abra as portas para o futuro com a Elekro</h2>
                    <p class="text-[#626262] text-base md:text-xl mb-4">
                        Com o avanço da IAoT, o setor imobiliário está explorando novas oportunidades.
                        A Elekro One+ se integra a uma variedade de dispositivos domésticos inteligentes,
                        incluindo sistemas de segurança, câmeras de vigilância e dispositivos de iluminação.
                        Essa integração possibilita a automação de tarefas e a criação de cenários personalizados,
                        contribuindo para a construção de ambientes seguros, convenientes e livres de estresse para residentes e funcionários.
                    </p>
                    <button class="nav-form" aria-label="ir para formulário" @click="scrollEl()">Seja um parceiro elekro</button>
                    <h2 class="mt-11 text-center text-2xl md:text-4xl">Explore os benefícios Exclusivos e diferenciais da Elekro</h2>
                </div>

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
        <Formulario ref="formulario"/>
    </main>
</template>

<script setup lang="ts">
//tipos
import { infos } from '~/core/constants';
let formulario:HTMLElement | null = null;

function scrollEl(){
    formulario = document.querySelector("#formSection")
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
    @apply duration-200 underline text-[#1a6bd9]
}
</style>