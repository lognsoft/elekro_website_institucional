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
        <section class="pt-[90px] bg-black">
            <div class="image-bg">
                <div class="container h-full mx-auto flex justify-center items-start relative z-20">
                    <div class="col-span-3 w-full max-w-[500px] mt-10 text-center text-white">
                        <h1 class="font-extrabold text-5xl md:text-6xl mb-2">Lorem ipsum</h1>
                        <h5 class="font-bold text-2xl md:text-4xl mb-2">Lorem Ipsum</h5>
                        <nav class="flex gap-2 justify-center" aria-label="navegação para compra de produto">
                            <MyLinkTwo class="text-base md:text-2xl" href="/">Ver Produto</MyLinkTwo>
                            <MyLinkTwo class="text-base md:text-2xl" href="/">Comprar</MyLinkTwo>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <!-- destaque -->
        <section id="emphasis">
            <div class="w-full max-w-[1900px] mx-auto py-11 px-5 md:px-3">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-black text-white overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
                    <div class="mb-4 lg:mb-0 flex justify-center items-center">
                        <img
                            src="/assets/images/4.jpeg" 
                            alt="imagem"
                            srcset="/assets/images/4.jpeg"
                            width="600"
                            height="500"
                            class="bg-gray-200 fluid-image"
                        />
                    </div>
                    <div class="flex items-center">
                        <div class="px-3 pb-4 lg:px-0 lg:pb-0">
                            <h2 class="text-5xl md:text-7xl font-extrabold mb-7">Lorem Ipsum</h2>
                            <MyLinkTwo class="hover:text-amber-600 text-2xl" href="/produto/1">Lorem Ipsum</MyLinkTwo>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end destaque -->
        <!-- features -->
        <section id="features">
            <div class="w-full max-w-[1900px] mx-auto py-11 px-5 md:px-3">
                <TitleSection data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full h-full aspect-[1/1] md:aspect-[5/3] object-cover object-center rounded-tl-lg"
                            src="/assets/images/de-lado-preta.jpeg"
                            alt="imagem"
                            srcset="/assets/images/de-lado-preta.jpeg"
                            width="600"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div class="p-8 bg-black aspect-[1/1] md:aspect-[5/3] flex items-center rounded-tr-lg">
                        <div class="w-full text-center text-white" data-aos="fade-up" data-aos-duration="1000">
                            <h3 class="text-5xl font-extrabold mb-9" >Lorem Ipsum</h3>
                            <MyLinkTwo class="justify-center text-2xl" href="/produto/1">lorem ipsum</MyLinkTwo>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full h-full object-cover aspect-[1/1] md:aspect-[5/3] object-center rounded-bl-lg"
                            src="/assets/images/detalhe-biometria-preto.jpeg"
                            alt="imagem"
                            srcset="/assets/images/detalhe-biometria-preto.jpeg"
                            width="600"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full h-full object-cover aspect-[1/1] md:aspect-[5/3] object-center rounded-br-lg"
                            src="/assets/images/porta-de-carregamento-preta.jpeg"
                            alt="imagem"
                            srcset="/assets/images/porta-de-carregamento-preta.jpeg"
                            width="600"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
        <!-- end features -->
        <!-- advantages -->
        <section id="advantages">
            <div class="w-full max-w-[1900px] mx-auto py-11 px-5 md:px-3">
                <TitleSection data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <div class="lg:order-last lg:col-span-2 shadow-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full aspect-[2/1] object-cover rounded-lg shadow-lg"
                            src="/assets/images/de-lado-prateada.jpeg"
                            srcset="/assets/images/de-lado-prateada.jpeg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div class="flex items-center pt-8 lg:px-11 lg:order-first">
                        <div>
                            <h3 class="text-5xl font-extrabold mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">lorem ipsum</h3>
                            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ipsam magnam rem assumenda id expedita sed consectetur sit iure dignissimos eius nulla in perferendis voluptatibus illum voluptates, esse, ipsum soluta.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end advantages -->
        <!-- bg-image -->
        <section id="bg-image">
            <div class="bg-image">
                <div class="container-text">
                    <h3 class="text-5xl font-extrabold mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">lorem ipsum</h3>
                    <p class="max-w-xl" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius libero minima officia id rem illo tempora quibusdam, officiis temporibus ducimus, voluptate commodi ea odio ipsam autem! Illum, totam unde.</p>
                </div>
            </div>
        </section>
        <!-- end-image -->
        <!-- advantages -->
        <section id="overview">
            <div class="w-full max-w-[1900px] mx-auto py-11 px-5 md:px-3">
                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <div class="lg:order-last lg:col-span-2" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full aspect-[2/1] object-cover object-bottom rounded-lg shadow-lg"
                            src="/assets/images/porta-de-carregamento-prateada.jpeg"
                            srcset="/assets/images/porta-de-carregamento-prateada.jpeg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div class="flex items-center pt-8 lg:px-11 lg:order-first">
                        <div>
                            <h3 class="text-5xl font-extrabold mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">lorem ipsum</h3>
                            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
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

    .image-bg{
        @apply h-screen max-h-[692px] bg-[url('/assets/images/4.jpeg')] bg-center bg-cover relative pb-10
    }
    .image-bg::before{
        content: '';
    }

    .image-bg::before{
        @apply bg-black w-full h-full absolute top-0 left-0 opacity-40 z-10
    }
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
        @apply flex justify-center flex-col container mx-auto max-h-96 h-screen text-slate-50 px-5 md:px-3
    }
</style>