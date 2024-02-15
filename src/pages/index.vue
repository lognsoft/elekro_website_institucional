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
    <main>
        <div>
            <section id="bg-image">
                <div class="bg-image">
                    <div class="col-span-3 w-full relative container md:bottom-11 lg:bottom-0 mx-auto mt-10 text-center md:text-end lg:text-start lg:text-black px-3">
                        <h1 class="first_section_title">Elekro</h1>
                        <h2 class="text-3xl mx-auto mr-0 lg:ml-0 font-light mb-3 hidden md:block max-w-[400px]">Modernize seu lar com Elekro One Plus</h2>
                        <NuxtLink
                            class="py-3 px-6 duration-300 border-[1px] border-black bg-white hover:border-white hover:bg-black hover:text-white md:bg-black md:border-white md:text-white md:hover:bg-white md:hover:border-black md:hover:text-black lg:border-black lg:text-black lg:bg-white lg:hover:border-white lg:hover:bg-black lg:hover:text-white  rounded-full text-xl inline-block"
                            to="/"
                        >Saiba Mais</NuxtLink>
                    </div>
                </div>
            </section>
        </div>
        <Funcionalidades/>
        <!-- <section class="h-screen bg-[url('/assets/MetadeesticadoRustico.png')] md:bg-[url('/assets/esticadoRustico.png')] bg-left md:bg-right bg-cover mb-3"></section> -->
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
                    <!-- <figure class="aspect-[1/0.6]">
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
                    </figure> -->
                </div>
            </div>
        </section>
        <!-- bg-[url('/assets/images/macaneta.png')] -->
        <!-- <section class="h-screen flex items-center bg-[url('/assets/esticadoPrata.png')] bg-cover bg-center mb-3 py-11">
            <div class="w-full h-full max-w-[2500px] mx-auto px-3 text-white">
                
            </div>
        </section> -->
        <section class="flex items-center h-screen bg-[url('/assets/MetadeesticadoRustico.png')] md:bg-[url('/assets/esticadoRustico.png')] bg-left md:bg-right bg-cover mb-3 relative">
            <div class="container mx-auto px-3 ">
                <div class="max-w-[600px] relative py-5 px-3">
                    <!-- <div class="absolute w-full h-full bg-white opacity-10 top-0 left-0 z-0 rounded blur"></div> -->
                    <h1 class="last_section_title">Conforto, design e segurança</h1>
                    <NuxtLink
                        class="relative z-10 py-3 px-6 duration-300 bg-white hover:bg-black hover:border-white hover:text-white border-black border-[1px] rounded-full text-xl inline-block"
                        to="/"
                    >Saiba Mais</NuxtLink>
                </div>
            </div>
        </section>
        
    
        
        
        
        
        <!-- destaque -->
        <!-- <section class="h-screen max-h-[692px] bg-[url('/assets/images/bestpricebackground.jpg')] bg-cover bg-center py-11">
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
        </section> -->
    </main>
</template>

<script setup lang="ts">
const selectedFeature:Ref<string> = ref('senha');
</script>

<style scoped>

    .first_section_title{
        @apply text-7xl font-semibold hidden md:block
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
        @apply w-full h-screen  bg-left lg:bg-center bg-no-repeat relative mx-auto py-11 bg-[url('/assets/esticadoSmall.png')] lg:bg-[url('/assets/esticado.png')] bg-cover flex items-end md:items-center justify-start mb-3
    }
    .container-text{
        @apply w-full max-w-[1900px] flex justify-center items-center flex-col container mx-auto max-h-96 h-screen text-slate-50 px-5 md:px-3
    }

    .last_section_title{
        @apply text-6xl md:text-7xl font-bold mb-4 z-10 relative text-white
    }

    .last_section_title{
        -webkit-text-stroke: 1px black;
    }
</style>