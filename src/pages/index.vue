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
        <Slide :images="images"/>
        <section class="grid grid-cols-1 lg:grid-cols-2">
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
            <div class="text-black bg-white col-span-1">
                <div class="my__container mx-auto lg:ml-0">
                    <div class="features_elekro">
                        <h2>Elekro One+</h2>
                        <h3 class="text-xl text-center text-[#626262] font-normal">Série FM-F31</h3>
                        <ul class="flex flex-col">
                            <template v-for="feature,index in features" :key="index">
                                <li class="border-[#ddd]">
                                    <span v-if="!feature.svg" class="feature_icon">
                                        <Icon :name="feature.icon"/>
                                    </span>
                                    <div v-else class="feature_icon" v-html="feature.icon"></div>
                                    <span class="text-base">{{ feature.text }}</span>
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
import type { Feature, ObjSlide } from '~/types';

const features:Array<Feature> = [
    {
        icon:'mdi:shield-lock',
        text:'Fechadura inteligente de embutir, para portas com espessura entre 30 e 60mm',
        svg:false
    },
    {
        icon:'ri:contract-fill',
        text:'Padrão ABNT',
        svg:false
    },
    {
        icon:'<svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192.756 192.756"><path d="M64.363 133.648c-17.218 0-31.24-14.021-31.24-31.191 0-17.218 14.022-31.239 31.24-31.239 17.17 0 31.192 14.021 31.192 31.239 0 17.17-14.022 31.191-31.192 31.191z" fill-rule="evenodd" clip-rule="evenodd"/><path d="M154.696 133.744c18.22-42.543 14.213-85.086-12.258-102.256-25.135-16.311-62.766-5.056-93.386 24.896 20.031-15.405 42.686-19.555 56.519-8.394 17.646 14.164 13.83 48.123-8.586 75.833-2.91 3.576-6.057 6.914-9.253 10.064l66.964-.143z" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
        text:'Selo anatel',
        svg:true
    },
    {
        icon:'game-icons:door-handle',
        text:'Maçaneta reversível',
        svg:false
    },
    {
        icon:'fa6-solid:cloud-showers-water',
        text:'IP65 - Boa proteção contra água e poeira',
        svg:false,
    },
    {
        icon:'game-icons:metal-bar',
        text:'Alumínio - Tratamento anticorrosivo',
        svg:false
    },
    {
        icon:'fluent:phone-tablet-20-filled',
        text:'Gestão de abertura via aplicativo',
        svg:false
    },
    {
        icon:'mingcute:volume-mute-fill',
        text:'Modo silencioso',
        svg:false
    },
    {
        icon:'material-symbols:nest-doorbell-visitor',
        text:'Modo de acesso para visitantes',
        svg:false,
    },
    {
        icon:'ic:sharp-do-disturb-on',
        text:'Modo não perturbe',
        svg:false,
    },
    {
        icon:'material-symbols:notifications-unread-rounded',
        text:'Notificação em tempo real',
        svg:false,
    },
    {
        icon:'teenyicons:password-solid',
        text:'Senhas dinâmicas',
        svg:false,
    },
    {
        icon:'fa-solid:fingerprint',
        text:'Até 100 cadastros de biometria',
        svg:false
    },
    {
        icon:'teenyicons:password-solid',
        text:'Até 100 cadastros de senhas numéricas',
        svg:false
    },
    {
        icon:'fa-solid:key',
        text:'Acesso através de chave mestra',
        svg:false
    },
    {
        icon:'mdi:card',
        text:'Acesso através de tag',
        svg:false
    },
    {
        icon:'fa6-solid:door-open',
        text:'Interação com casa anteligente',
        svg:false
    },
    {
        icon:'game-icons:battery-100',
        text:'Alimentação via pilhas AA',
        svg:false
    },
    {
        icon:'bi:usb-c-fill',
        text:'USB C',
        svg:false
    },
    {
        icon:'basil:processor-solid',
        text:'Processador de alto desempenho',
        svg:false
    },
    // {
    //     icon:'fa-solid:award',
    //     text:'Garantia de 12 Meses',
    //     svg:false
    // },
    // {
    //     icon:'fa6-solid:headset',
    //     text:'Suporte Técnico 24/7',
    //     svg:false
    // }
]


const images:Array<ObjSlide> = [
    {
        img:'bm-slide/bg1.jpg',
        text: 'Proteção<br/>e Elegância'
    },
    {
        img:'bm-slide/bg2.png',
        text:'Conexão<br/>sob Medida'
    },
];
</script>

<style scoped>

    /* segunda seção */
    .my__container{
        @apply container px-3 lg:py-10 grid grid-cols-1 
    }

    .features_elekro{
        @apply w-full mx-auto lg:ml-0 max-w-[800px] lg:max-w-[704px]
    }

    .features_elekro > h2{
        @apply text-center text-[28px] font-bold
    }

    .features_elekro > ul{
        @apply font-[16px]
    }

    .features_elekro > ul > li {
        @apply flex items-center gap-3 py-5 border-b-[1px] font-light text-xl lg:text-base
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