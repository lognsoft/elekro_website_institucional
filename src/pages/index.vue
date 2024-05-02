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
        <!-- <div class="w-full h-screen overflow-hidden">
            <GeneralSlide :images="slide"/>
        </div> -->
        <GeneralBanner src="/images/bm-slide/bg1.jpg" title="Proteção e Elegância" :hidden="true"/>
        <section class="grid grid-cols-1 lg:grid-cols-2 bg-white relative z-20">
            <div class="col-span-1">
                <div class="my__container mx-auto lg:mr-0 sticky top-[40px]">
                    <div class="relative">
                        <figure class="col-span-1">
                            <img
                                class="w-auto h-full max-h-[690px] lg:max-h-[732px] mx-auto object-cover"
                                src="/images/fechadura.png"
                                srcset="/images/fechadura.png"
                                alt="Maçaneta preta de frente"
                            />
                        </figure>
                        <MyLinkTwo :icon="false" class="right-[20%] md:right-[32%] lg:right-[34%] bottom-[20%] my-link" :absolute="true" href="/elekro-one-plus">Saiba mais</MyLinkTwo>
                    </div>
                </div>
            </div>
            <div class="text-black col-span-1">
                <div class="my__container mx-auto lg:ml-0">
                    <div class="features_elekro">
                        <TextH2Title class="text-center">Elekro One+</TextH2Title>
                        <TextH4SubTitle class="text-center">Série FM-F31</TextH4SubTitle>
                        <ul class="flex flex-col">
                            <template v-for="feature,index in features" :key="index">
                                <li class="border-[#ddd]">
                                    <span v-if="!feature.svg" class="feature_icon">
                                        <Icon :name="feature.icon"/>
                                    </span>
                                    <div v-else class="feature_icon" v-html="feature.icon"></div>
                                    <p class="text-base">{{ feature.text }}</p>
                                </li>
                            </template>
                            
                        </ul>
                        <div class="text-center my-7 pr-6">
                            <MyLinkTwo :icon="false" class="my-link inline-block lg:hidden" href="/elekro-one-plus">Saiba mais</MyLinkTwo>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </main>
</template>

<script setup lang="ts">
import { features, slide } from "~/core/constants";
</script>

<style scoped>

    /* segunda seção */
    .my__container{
        @apply container px-3 lg:py-10 grid grid-cols-1 
    }

    .features_elekro{
        @apply w-full mx-auto lg:ml-0 max-w-[800px] lg:max-w-[704px]
    }

    /* .features_elekro > h2{
        @apply text-center text-[28px] font-bold
    } */

    .features_elekro > ul{
        @apply font-[16px]
    }

    .features_elekro > ul > li {
        @apply flex items-center gap-3 py-5 border-b-[1px] text-xl lg:text-base
    }

    .features_elekro > ul > li > .feature_icon{
        @apply flex items-center justify-center
    }
    .features_elekro > ul > li > .feature_icon > svg{
        @apply w-[30px] h-[30px]
    }
    /* fim da segunda seção */


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
    .bg-image{
        @apply w-full h-screen  bg-left lg:bg-center bg-no-repeat relative mx-auto py-11 bg-[url('/assets/esticadoSmall.png')] lg:bg-[url('/assets/esticado.png')] bg-cover flex items-end md:items-center justify-start mb-3
    }

    .my-link{
        @apply text-[#1a6bd9] underline;
    }

    /* .my-link{
        @apply text-white bg-black py-3 px-4  text-sm lg:text-lg rounded-xl
    } */
    /* .my-link{#1a6bd9
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    } */
</style>