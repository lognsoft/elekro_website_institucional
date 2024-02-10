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
                    <div class="col-span-3 w-full max-w-[600px] mt-10 text-center" style="color: #231f20">
                        <NuxtLink
                            class="py-3 px-6 duration-300 bg-white hover:bg-black hover:text-white text-black border-2 border-white rounded-full text-xl inline-block"
                            to="/"
                        >Conheça nossos produtos</NuxtLink>
                    </div>
                </div>
            </section>
        </div>

        <section class="h-screen max-h-[692px] bg-[url('/assets/images/macaneta.png')] bg-cover bg-center mb-3"></section>
        
        
        <section class="mb-3">
            <div class="w-full h-full max-w-[2500px] mx-auto md:px-3">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-3 h-full">
                    <figure class="col-span-2 relative">
                        <button @click="selectedFeature = 'senha'" :class="{'active':selectedFeature == 'senha'}" class="info-plus top-[18%] left-[30%]" title="senha">
                            <Icon name="fa6-solid:plus"/>
                        </button>
                        <button @click="selectedFeature = 'tag'" :class="{'active':selectedFeature == 'tag'}" class="info-plus top-[25%] left-[20%]" title="tag">
                            <Icon name="fa6-solid:plus"/>
                        </button>
                        <button @click="selectedFeature = 'biometria'" :class="{'active':selectedFeature == 'biometria'}" class="info-plus top-[49%] left-[25%]" title="biometria">
                            <Icon name="fa6-solid:plus"/>
                        </button>
                        <button @click="selectedFeature = 'conexao de energia'" :class="{'active':selectedFeature == 'conexao de energia'}" class="info-plus bottom-0 left-[30%]" title="conexão de energia">
                            <Icon name="fa6-solid:plus"/>
                        </button>
                        <button @click="selectedFeature = 'fechadura'" :class="{'active':selectedFeature == 'fechadura'}" class="info-plus bottom-0 left-[20%]" title="fechadura">
                            <Icon name="fa6-solid:plus"/>
                        </button>
                        
                        <img class="w-full" src="/assets/images/de-frente-acessa-prateada.jpeg"/>
                    </figure>
                    <div class="bg-black col-span-3 text-white">
                        <div v-show="selectedFeature == 'senha'">
                            senha
                        </div>
                        <div v-show="selectedFeature == 'tag'">
                            tag
                        </div>
                        <div v-show="selectedFeature == 'biometria'">
                            biometria
                        </div>
                        <div v-show="selectedFeature == 'conexao de energia'">
                            conexão de energia
                        </div>
                        <div v-show="selectedFeature == 'fechadura'">
                            fechadura
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        
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
                    
                    <div
                        class="aspect-[1/0.6] bg-[url('/assets/images/fechadura.png')] flex items-end justify-end bg-center bg-cover"
                    >
                        <div class="py-5 px-5 md:mb-[60px] text-white relative">
                            <div class="absolute w-full h-full bg-black top-0 left-0 opacity-70"></div>
                            <h2 class="text-4xl md:text-5xl relative z-10">Conforto e segurança<br/>Para sua família</h2>
                        </div>
                    </div>
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
    .info-plus{
        @apply absolute w-10 h-10 bg-black border-2 border-white text-white opacity-70 rounded-full inline-flex items-center justify-center duration-300
    }
    .info-plus.active{
        @apply absolute w-10 h-10 bg-sky-500 opacity-100
    }
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
        @apply w-full h-screen max-h-[692px] bg-center bg-no-repeat relative mx-auto py-11 bg-[url('/assets/images/f.jpg')] bg-cover flex items-end justify-center mb-3
    }
    .container-text{
        @apply w-full max-w-[1900px] flex justify-center items-center flex-col container mx-auto max-h-96 h-screen text-slate-50 px-5 md:px-3
    }
</style>