<template>
    <Head>
        <Meta name="description" content="lorem ipsum"/>
        <Meta property="og:description" content="lorem ipsum"/>
        <Meta property="og:title" content=""/>
        <Meta property="og:image" content="/images/elekro-banner.jpg"/>
        <Meta property="og:url" content="https://meuSite.com"/>
        <Meta name="twitter:title" content="Elekro"/>
        <Meta name="twitter:description" content="lorem ipsum"/>
        <Meta name="twitter:image" content="/images/elekro-banner.jpg"/>
        <Meta name="twitter:card" content="summary_large_image"/>
        
    </Head>
    <main class="pt-[70px]">
        <div>
            <section id="bg-image">
                <div class="bg-image">
                    <div class="col-span-3 w-full container mx-auto mt-10 text-center lg:text-start lg:text-white px-3">
                        <h1 class="text-7xl font-semibold hidden lg:block">Elekro</h1>
                        <h2 class="text-3xl font-light mb-3 hidden lg:block">Modernize seu lar com a Elekro</h2>
                        <NuxtLink
                            class="py-3 px-6 duration-300 bg-white hover:bg-black hover:text-white text-black border-2 border-white rounded-full text-xl inline-block"
                            to="/"
                        >Saiba Mais</NuxtLink>
                    </div>
                </div>
            </section>
        </div>

        <section class="min-h-[600px] flex items-center bg-[url('/assets/images/macaneta.png')] bg-cover bg-center mb-3 py-11">
            <div class="w-full h-full max-w-[2500px] mx-auto px-3 text-white">
                <h2 class="text-4xl font-semibold mb-4 text-start md:text-center">Elekro: Tecnologia, Inovação e Excelência.</h2>
                <p class="mb-7 text-start md:text-center">Descubra a combinação perfeita de segurança e conveniência com a Elekro, a fechadura eletrônica que redefine o acesso ao seu lar.</p>
                <ul class="list-decimal font-bold text-lg md:text-xl md:mx-auto mb-7 w-full max-w-[550px]">
                    <li class="mb-2 ml-4">
                        Modernidade ao Alcance: <span class="font-light">"Elevando seu lar ao futuro."</span>
                    </li>
                    <li class="mb-2 ml-4">
                        Tecnologia intuitiva: <span class="font-light">"Controle simplificado."</span>
                    </li>
                    <li class="mb-2 ml-4">
                        Praticidade Sem Igual: <span class="font-light">"Acesso fácil, vida tranquila."</span>
                    </li>
                </ul>
                <div class="xtext-start md:text-center">
                    <NuxtLink
                        class="py-3 px-6 duration-300 bg-white hover:bg-black hover:text-white text-black border-2 border-white rounded-full text-xl inline-block"
                        to="/"
                    >Saiba Mais</NuxtLink>
                </div>
            </div>
        </section>
        
        
        <Funcionalidades/>
        
        
        
        <section class="mb-3">
            <div class="w-full max-w-[2500px] mx-auto md:px-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <figure class="aspect-[1/0.6]">
                        <img
                            aria-label="macaneta dupla preta"
                            src="/assets/images/macanetaCompletaPrata.png"
                            srcset="/assets/images/macanetaCompletaPrata.png"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </figure>
                    
                    <figure class="aspect-[1/0.6]">
                        <img
                            src="/assets/images/macanetaDuplaPreta.png"
                            srcset="/assets/images/macanetaDuplaPreta.png"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </figure>
                    <figure class="aspect-[1/0.6]">
                        <img
                            src="/assets/images/cartao.png"
                            srcset="/assets/images/cartao.png"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </figure>
                    
                    <figure class="aspect-[1/0.6]">
                        <img
                            src="/assets/images/fechadura.png"
                            srcset="/assets/images/fechadura.png"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </div>
        </section>
        <!-- destaque -->
        <section class="h-screen max-h-[692px] bg-[url('/assets/images/bestpricebackground.jpg')] bg-cover bg-center py-11">
            <div class="container mx-auto h-full">
                <div class="h-full flex flex-col items-center justify-center gap-5">
                    <figure>
                        <img
                            class="max-w-full h-auto"
                            src="/assets/images/bestpricelogo.png"
                            srcset="/assets/images/bestpricelogo.png"
                            alt=""
                            loading="lazy"
                        />
                    </figure>
                    <div>
                        <NuxtLink
                                class="py-3 px-6 duration-300 bg-black hover:bg-white hover:text-black text-white border-2 border-black rounded-full text-xl inline-block"
                                to="/"
                            >Conheça nossos produtos</NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const selectedFeature:Ref<string> = ref('senha');
</script>

<style scoped>
    .cta-chamada{
        @apply text-2xl md:text-4xl mb-5 text-white
    }

    .cta-link{
        @apply text-xl md:text-3xl text-white
    }

    .grid-image{
        @apply p-8 bg-[url('/assets/images/home.jpg')] bg-center aspect-[1/1] md:aspect-[5/3] flex items-center rounded-tr-lg relative
    }

    .grid-image::before{
        content: '';
    }
    .grid-image::before{
        @apply  absolute w-full h-full top-0 left-0 bg-black opacity-30 z-10
    }

    .image-bg{
        @apply h-screen max-h-[780px] md:max-h-[692px] bg-[url('/assets/images/house2.png')] bg-center bg-cover relative pb-10
    }
    .bg-image::before{
        @apply absolute w-full top-0 left-0 opacity-40 bg-black
    }
    .bg-image:before{
        content: '';
        z-index: 1;
    }
    .container-text{
        position: relative;
        z-index: 2;
    }
    .bg-image{
        @apply w-full h-screen max-h-[550px] lg:max-h-[692px] bg-right lg:bg-center bg-no-repeat relative mx-auto py-11 bg-[url('/assets/esticado.png')] bg-cover flex items-end lg:items-center justify-start mb-3
    }
    .container-text{
        @apply w-full max-w-[1900px] flex justify-center items-center flex-col container mx-auto max-h-96 h-screen text-slate-50 px-5 md:px-3
    }
</style>