<template>
   <Head>
        <Meta name="description" content="Tecnologia que protege, inovação que conecta"/>
        <Meta property="og:description" content="Tecnologia que protege, inovação que conecta"/>
        <Meta property="og:title" content="elekro"/>
        <Meta property="og:image" content="/images/elekro-logo.jpeg"/>
        <Meta property="og:url" content="https://elekro.com.br/"/>
        <Meta name="twitter:title" content="Elekro"/>
        <Meta name="twitter:description" content="Tecnologia que protege, inovação que conecta"/>
        <Meta name="twitter:image" content="/images/elekro-logo.jpeg"/>
        <meta name="keywords" content="Fechadura digital Intelbras, Fechadura eletrônica Pado, Fechadura biométrica residencial, Fechadura com senha e biometria, Fechadura digital com controle remoto, Segurança com fechadura eletrônica, Fechadura eletrônica inteligente, Fechadura com aplicativo mobile, Fechadura digital de alta segurança, Fechadura digital para empresas, Fechadura com leitor de impressão digital, Fechadura com código e biometria, Controle de acesso por fechadura digital, Fechadura com comando por voz (Alexa), Fechadura digital com trava automática, Fechadura sem chave com biometria, Fechadura digital com baixo consumo de energia, Fechadura eletrônica para portas pivotantes, Fechadura eletrônica de sobrepor, Fechadura biométrica para apartamento, Fechadura digital com senha e tag, Fechadura eletrônica Pado com senha, Fechadura digital residencial de alta tecnologia, Fechadura com reconhecimento de digital, Elekro hortolândia">
        <Meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <main>
        <!-- <div class="w-full h-screen overflow-hidden">
            <GeneralSlide :images="slide"/>
        </div> -->
        <MyCarousel :isHome="true" :images="['bg-home-2.png']" title="Tecnologia<br>Sofisticação"
                    buttonText="DESCUBRA" link="/colecao-signature"/>
        <!-- <MyCarousel :images="['fechadura.png', 'FOTO_FECHADURA_ELEKRO.jpg']"/> -->
        <section class="grid grid-cols-1 lg:grid-cols-2  relative z-20 !pt-0">
            <div class="col-span-1 relative">
                <div class="my__container mx-auto lg:mr-0 sticky top-[7%]">
                    <div class="relative text-center mb-2 mt-[20px] lg:mb-0 lg:mt-0">
                        <figure class="inline-block lg:hidden w-full max-w-[450px] lg:max-w-full absolute top-0 -translate-x-1/2 -translate-y-[80%] left-[50%] lg:static lg:translate-x-0 lg:translate-y-0">
                            <img
                                class="max-w-[100%] lg:-mt-12 lg:-mb-10 mx-auto object-contain"
                                src="/images/FechaduraDuplaHome.png"
                                srcset="/images/FechaduraDuplaHome.png"
                                alt="Maçaneta preta de frente"
                            />
                        </figure>
                        <figure class="mx-auto hidden lg:inline-block w-full max-w-[450px] lg:max-w-[800px] absolute top-0 -translate-x-1/2 -translate-y-[80%] left-[50%] lg:static lg:translate-x-0 lg:translate-y-[45px]">
                            <img
                                class="max-w-[100%] lg:-mt-12 lg:-mb-10 mx-auto object-contain"
                                src="/images/signature/Fotos0001.png"
                                srcset="/images/signature/Fotos0001.png"
                                alt="Maçaneta preta de frente"
                            />
                        </figure>
                        <TextH2Title class="text-center lg:hidden mt-[3rem] font-normal" bold="normal">Fechadura Digital Wi-Fi</TextH2Title>
                        <TextH4SubTitle class="text-center mb-0 lg:hidden !text-xl">Coleção Signature, Milão</TextH4SubTitle>

                      <div class="flex gap-5 justify-center mt-0 lg:mt-24">
                          <MyButtonTwo href="/colecao-signature" class="hidden lg:inline-block w-full max-w-[144px]">Saiba mais</MyButtonTwo>
                          <MyButtonTwo
                            href="https://www.elekrobrasil.com.br/produtos/fechadura-digital-wi-fi-elekro/"
                            target="_blank" class="hidden lg:inline-block w-full max-w-[144px]">Comprar</MyButtonTwo>
                      </div>
                        <!-- md:translate-x-[0%] absolute md:static translate-x-[-100%] left-[80%] bottom-[20%] -->
                    </div>
                </div>
            </div>
            <div class="text-black col-span-1">
                <div class="my__container mx-auto lg:ml-0">
                    <div class="features_elekro">
                        <TextH2Title class="text-center hidden lg:block font-normal" bold="normal">Fechadura Digital Wi-Fi</TextH2Title>
                        <TextH4SubTitle class="text-center hidden lg:block !text-xl" style="margin-bottom: 0;">Coleção Signature, Milão</TextH4SubTitle>
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
                        <TextH4SubTitle class="text-center block lg:hidden !text-xl pt-[28px]">Tecnologia inteligente para sua casa ou escritório na palma da mão</TextH4SubTitle>
                        <div class="text-center my-7 gap-4 flex justify-center">
                            <!-- <MyLinkTwo :icon="false" class="my-link lg:hidden inline-block" href="/elekro-one-plus">Saiba mais</MyLinkTwo> -->
                            <MyButtonTwo href="/colecao-signature" class="lg:hidden inline-block">Saiba mais</MyButtonTwo>
                            <MyButtonTwo
                                :transparent="true"
                                href="https://www.elekrobrasil.com.br/produtos/fechadura-digital-wi-fi-elekro/"
                                target="_blank" class="lg:hidden inline-block">Comprar</MyButtonTwo>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { features, slide } from "~/core/constants";

// navigateTo("/dev");
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
