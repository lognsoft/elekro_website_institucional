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
            <div class="col-span-1 bg-[#f5f5f5] text-[#333]">
                <div class="my__container m-auto mr-0">
                    <figure class="col-span-1">
                        <img class="w-full h-auto" src="/images/informacoes-2.png" srcset="/images/informacoes-2.png" alt=""/>
                    </figure>
                    <div class="features_elekro">
                        <h2>Lorem Ipsum</h2>
                        <ul>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa6-solid:door-open"/>
                                </span>
                                <span>Ideal para porta de madeira</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:fingerprint"/>
                                </span>
                                <span>Biometria</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:star-of-life"/>
                                </span>
                                <span>Senha Numérica</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa:tag"/>
                                </span>
                                <span>Cartão Tag</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:key"/>
                                </span>
                                <span>Chave Mecânica</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:award"/>
                                </span>
                                <span>Garantia</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa6-solid:headset"/>
                                </span>
                                <span>Suporte Técnico</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-span-1 bg-black text-white">
                <div class="my__container m-auto ml-0">
                    <figure class="col-span-1">
                        <img class="w-full h-auto" src="/images/produto-2-elekro.png" srcset="/images/produto-2-elekro.png" alt=""/>
                    </figure>
                    <div class="features_elekro">
                        <h2>Lorem Ipsum</h2>
                        <ul>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa6-solid:door-open"/>
                                </span>
                                <span>Ideal para porta de madeira</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fontisto:mobile-alt"/>
                                </span>
                                <span>Controle por Aplicativo</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:wifi"/>
                                </span>
                                <span>Conectividade Wi-Fi</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:fingerprint"/>
                                </span>
                                <span>Biometria</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:star-of-life"/>
                                </span>
                                <span>Senha Numérica</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa:tag"/>
                                </span>
                                <span>Cartão Tag</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:key"/>
                                </span>
                                <span>Chave Mecânica</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:award"/>
                                </span>
                                <span>Garantia</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa6-solid:headset"/>
                                </span>
                                <span>Suporte Técnico</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
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
    </main>
</template>

<script setup lang="ts">
const selectedFeature:Ref<string> = ref('senha');

type ObjSlide = {
    img:string,
    text:string,
}

const images:Array<ObjSlide> = [
    {
        img:'bm-slide/bg.jpg',
        text:'Transformando<br/>Lares'
    },
    {
        img:'bm-slide/bg1.jpg',
        text:'Conforto<br/>sob Medida'
    },
    {
        img:'bm-slide/bg2.jpg',
        text:'Elegância<br/>e Arte'
    },
    // {
    //     img:'bm-slide/bg3.jpg',
    //     text:'lorem'
    // }
];
</script>

<style scoped>

    /* segunda seção */
    .my__container{
        @apply container px-3 py-10 grid grid-cols-1 lg:grid-cols-2
    }

    .features_elekro{
        @apply col-span-1 px-2
    }

    .features_elekro > h2{
        @apply text-center text-[28px] font-bold
    }

    .features_elekro > ul{
        @apply font-[16px]
    }

    .features_elekro > ul > li {
        @apply flex items-center gap-3 py-5 border-b-[1px] font-light
    }

    .features_elekro > ul > li > .feature_icon{
        @apply text-3xl flex items-center justify-center
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
</style>