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
        
        
        <section class="mb-3 bg-[url('/assets/images/bestpricebackground.jpg')] bg-no-repeat bg-cover bg-center">
            <div class="w-full h-full max-w-[2500px] mx-auto md:px-3">
                <div class="grid grid-cols-1 md:grid-cols-6 gap-3 h-full">
                    <figure class="col-start-3 col-span-2 relative">
                        <div
                            class="info-plus bg-my-gray top-[18%] left-[43%]"
                            title="senha"
                        >
                            <div class="info-plus__line">
                                <div class="w-[60px] md:w-[100px] bg-my-gray h-1 rounded"></div>
                                SENHA
                            </div>
                        </div>
                        <div
                            class="info-plus bg-my-gray top-[25%] left-[35%]"
                            title="tag"
                        >
                            <div class="info-plus__line">
                                <div class="w-[60px] md:w-[100px] h-1 bg-my-gray rounded"></div>
                                TAG
                            </div>
                        </div>
                        <div
                            class="info-plus bg-my-gray top-[48%] left-[39%]"
                            title="biometria"
                        >
                            <div class="info-plus__line-left">
                                BIOMETRIA
                                <div class="w-[60px] md:w-[100px] bg-my-gray h-1 rounded"></div>
                            </div>
                        </div>
                        <div
                            class="info-plus bg-my-gray bottom-[12%] left-[46%]"
                            title="conexão de energia"
                        >
                            <div class="info-plus__line">
                                <div class="w-[60px] md:w-[100px] bg-my-gray h-1 rounded"></div>
                                CONEXÂO DE ENERGIA
                            </div>
                        </div>
                        <div
                            class="info-plus bg-my-gray bottom-[12%] left-[36%]"
                            title="fechadura"
                        >
                            <!-- <Icon name="fa6-solid:plus"/> -->
                            <div class="info-plus__line-left">
                                FECHADURA
                                <div class="w-[60px] md:w-[100px] bg-white bg-my-gray h-1 rounded"></div>
                            </div>
                        </div>
                        
                        <img class="w-full" src="/assets/images/informacoes.png"/>
                    </figure>
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
    .info-plus{
        @apply absolute w-5 h-5 text-sky-500 rounded-full inline-flex items-center justify-center duration-300 
    }
    .bg-my-gray{
        background-color: #565352;
    }
    .info-plus__line{
        @apply absolute inline-flex items-center gap-1 left-[100%] text-black font-bold
    }
    .info-plus__line-left{
        @apply absolute inline-flex items-center gap-1 right-[100%] text-black font-bold
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