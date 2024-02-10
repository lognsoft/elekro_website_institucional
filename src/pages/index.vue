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
        <!-- <MySlide/> -->
        <section class="pt-[70px] mb-3">
            <div class="image-bg">
                <div class="container h-full mx-auto flex justify-center items-end relative z-20 px-2">
                    <div class="col-span-3 w-full max-w-[600px] mt-10 text-center" style="color: #231f20">
                        <h1 class="cta-chamada font-extrabold uppercase">Tecnologia e segurança</h1>
                        <nav class="flex gap-2 justify-center" aria-label="navegação para compra de produto">
                            <LazyMyLinkTwo class="cta-link" href="/">Ver Produto</LazyMyLinkTwo>
                            <LazyMyLinkTwo class="cta-link" href="/">Comprar</LazyMyLinkTwo>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <!-- destaque -->
        <section class="bg-[url('/assets/images/macaneta.jpg')] h-screen max-h-[692px] bg-center bg-cover py-11 mb-3">
            <div class="container mx-auto h-full">
                <div class="flex items-end justify-center h-full">
                    <div class="text-white text-center max-w-[600px]">
                        <h2 class="text-4xl mb-8 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                        <div>
                            <NuxtLink
                                class="py-3 px-6 bg-white hover:bg-black hover:text-white duration-300 border-2 border-white text-black rounded-full text-xl inline-block"
                                to="/"
                            >lorem ipsum</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end destaque -->
        <!-- features -->
        <section class="h-screen max-h-[692px] bg-[url('/assets/images/bestpricebackground.jpg')] bg-cover bg-center py-11 mb-3">
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
                        class="aspect-[1/0.6] bg-[url('/assets/images/house.png')] flex items-end justify-end bg-center bg-cover"
                    >
                        <div class="py-5 px-5 md:mb-[60px] text-white relative">
                            <div class="absolute w-full h-full bg-black top-0 left-0 opacity-70"></div>
                            <h2 class="text-4xl md:text-5xl relative z-10">Conforto e segurança<br/>Para sua família</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- bg-image -->
        <section id="bg-image">
            <div class="bg-image">
                <div class="container-text">
                    <h3 class="text-5xl font-extrabold mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">lorem ipsum</h3>
                    <p class="text-xl max-w-5xl text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius libero minima officia id rem illo tempora quibusdam, officiis temporibus ducimus, voluptate commodi ea odio ipsam autem! Illum, totam unde.</p>
                </div>
            </div>
        </section>
        <!-- end-image -->
        <!-- advantages -->
        <section id="overview">
            <div class="w-full max-w-[1900px] mx-auto py-11 px-5 md:px-3">
                <div class="grid grid-cols-1 lg:grid-cols-6">
                    <div class="lg:col-span-2 lg:col-start-2 shadow-lg" data-aos="fade-in" data-aos-duration="1000">
                        <img
                            class="max-w-full object-cover rounded-lg shadow-lg"
                            src="/assets/images/conjunto-preto.jpeg"
                            srcset="/assets/images/conjunto-preto.jpeg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div class="lg:col-span-3 pt-8 lg:px-11">
                        <div class="sticky top-[120px] max-w-xl mx-auto">
                            <h3 class="text-center lg:text-start text-7xl font-extrabold mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">lorem ipsum</h3>
                            <p class="text-center lg:text-start text-2xl" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ipsam magnam rem assumenda id expedita sed consectetur sit iure dignissimos eius nulla in perferendis voluptatibus illum voluptates, esse, ipsum soluta.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end advantages -->
    </main>
</template>

<script setup>
</script>

<style scoped>

    .cta-chamada{
        /* -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #231f20; */
        /* color: #e9e9e9; */
    }
    .cta-chamada{
        @apply text-2xl md:text-4xl mb-5 text-white
    }

    .cta-link{
        @apply text-xl md:text-3xl text-white
    }

    /* .cta-link{
        color: #0066cc
    } */

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
        @apply h-screen max-h-[780px] md:max-h-[692px] bg-[url('/assets/images/f.jpg')] bg-center bg-cover relative pb-10
    }
    /* .image-bg::before{
        content: '';
    }

    .image-bg::before{
        @apply bg-black w-full h-full absolute top-0 left-0 opacity-10 z-10
    } */
    .bg-image::before{
        @apply absolute w-full h-full top-0 left-0 opacity-40 bg-black
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
        @apply w-full bg-center bg-no-repeat relative mx-auto py-11 bg-[url('/assets/images/4.jpeg')] bg-cover
    }

    .container-text{
        @apply w-full max-w-[1900px] flex justify-center items-center flex-col container mx-auto max-h-96 h-screen text-slate-50 px-5 md:px-3
    }
</style>