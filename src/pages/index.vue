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
        <section class="grid grid-cols-1 lg:grid-cols-1">
            <div class="col-span-1 bg-[#f5f5f5] text-[#333]">
                <div class="my__container mx-auto "> <!-- mr-none md:mr-0 -->
                    <figure class="col-span-1">
                        <img
                            class="w-full max-w-[500px] mx-auto h-auto object-cover sticky top-[80px]"
                            src="/images/informacoes-2-teste.png"
                            srcset="/images/informacoes-2-teste.png"
                            alt="Maçaneta preta de frente"
                        />
                    </figure>
                    <div class="features_elekro">
                        <h2>Elekro One+</h2>
                        <ul class="grid grid-cols-1 gap-x-4">
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="mdi:shield-lock"/>
                                </span>
                                <span>Fechadura Inteligente de Embuir, para portas com espessura entre 30 e 60mm</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="mdi:letters"/>
                                </span>
                                <span>Padrão ABNT 14913</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="game-icons:door-handle"/>
                                </span>
                                <span>Maçaneta Revercivel</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="solar:waterdrops-bold"/>
                                </span>
                                <span>IP66 - Prova d’água</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="game-icons:metal-bar"/>
                                </span>
                                <span>Aço Inoxidável</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fontisto:mobile-alt"/>
                                </span>
                                <span>Gestã de Abertura via App</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="mingcute:volume-mute-fill"/>
                                </span>
                                <span>Modo Silencioso</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="material-symbols:nest-doorbell-visitor"/>
                                </span>
                                <span>Modo de acesso para visitantes</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="ic:sharp-do-disturb-on"/>
                                </span>
                                <span>Modo não Perturbe</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:star-of-life"/>
                                </span>
                                <!-- <span>Até 100 Cadastros de Senhas Temporárias/Provisórias</span> -->
                                <span>Senhas dinâmicas</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:fingerprint"/>
                                </span>
                                <span>Até 100 Cadastros de Biometria</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:star-of-life"/>
                                </span>
                                <span>Até 100 Cadastros de Senhas Numéricas</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:key"/>
                                </span>
                                <span>Acesso Através de Chave Mestra</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa:tag"/>
                                </span>
                                <span>Acesso Através de Tag</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa6-solid:door-open"/>
                                </span>
                                <span>Interação com Casa Inteligente</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fluent-emoji-high-contrast:battery"/>
                                </span>
                                <span>Alimentação via Pilhas AA</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="mdi:usb-c-port"/>
                                </span>
                                <span>USB C</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="basil:processor-solid"/>
                                </span>
                                <span>Processador de Alto Desempenho</span>
                            </li>
                            
                            
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:award"/>
                                </span>
                                <span>Garantia de 12 Meses</span>
                            </li>
                            <li class="border-[#ddd]">
                                <span class="feature_icon">
                                    <Icon name="fa6-solid:headset"/>
                                </span>
                                <span>Suporte Técnico 24/7</span>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <div class="col-span-1 bg-black text-white">
                <div class="my__container m-auto ml-none md:ml-0">
                    <figure class="col-span-1">
                        <img class="w-full h-auto sticky top-[80px]" src="/images/produto-2-elekro.png" srcset="/images/produto-2-elekro.png" alt=""/>
                    </figure>
                    <div class="features_elekro">
                        <h2>Guardião Digital Elekro</h2>
                        <ul>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fa-solid:wifi"/>
                                </span>
                                <span>Wi-Fi 2.4 GHZ</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="material-symbols:notifications-unread-rounded"/>
                                </span>
                                <span>Notificação em Tempo Real</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="fontisto:mobile-alt"/>
                                </span>
                                <span>Monitoramento com Celular</span>
                            </li>
                            
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="mdi:motion-sensor"/>
                                </span>
                                <span>Detector de Movimento</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="system-uicons:angle"/>
                                </span>
                                <span>Amplo Ângulo de Visão</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="bi:camera-reels-fill"/>
                                </span>
                                <span>Vídeo e Áudio Bidirecional</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="ph:moon-stars-fill"/>
                                </span>
                                <span>Visão Noturna</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="solar:music-note-3-bold-duotone"/>
                                </span>
                                <span>56 Melodias</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="mdi:battery-charging"/>
                                </span>
                                <span>Bateria Recarregável</span>
                            </li>
                            <li class="border-[#333]">
                                <span class="feature_icon">
                                    <Icon name="icon-park-solid:spanner"/>
                                </span>
                                <span>Fácil Instalação</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> -->
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
        img:'bm-slide/bg.jpeg',
        text:'Transformando<br/>Lares'
    },
    {
        img:'bm-slide/bg1.jpeg',
        text:'Conforto<br/>sob Medida'
    },
    {
        img:'bm-slide/bg2.jpeg',
        text:'Elegância<br/>e Arte'
    },
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