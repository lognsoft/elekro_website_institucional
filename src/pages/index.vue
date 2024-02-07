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
        <MySlide/>
        <!-- destaque -->
        <section id="emphasis">
            <div class="container mx-auto py-11 px-5 md:px-3">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="mb-4 lg:mb-0 flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
                        <img
                            src="/assets/images/4.jpeg" 
                            alt="imagem"
                            srcset="/assets/images/4.jpeg"
                            width="600"
                            height="500"
                            class="bg-gray-200 fluid-image"
                        />
                    </div>
                    <div class="flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-anchor-placement="center-bottom">
                        <div class="">
                            <h2 class="text-5xl md:text-7xl font-extrabold mb-7">Lorem Ipsum</h2>
                            <MyLinkTwo class="text-slate-500 hover:text-amber-600 text-2xl" href="/">Lorem Ipsum</MyLinkTwo>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end destaque -->
        <!-- features -->
        <section id="features">
            <div class="container mx-auto py-11 px-5 md:px-3">
                <TitleSection data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div class="bg-gray-200" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full h-full aspect-[1/1] md:aspect-[5/3] object-cover object-center"
                            src="/assets/images/de-lado-preta.jpeg"
                            alt="imagem"
                            srcset="/assets/images/de-lado-preta.jpeg"
                            width="600"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div class="p-8 bg-slate-500 aspect-[1/1] md:aspect-[5/3] flex items-center">
                        <div class="w-full text-center text-white">
                            <h3 class="text-5xl font-extrabold mb-9" data-aos="fade-up" data-aos-duration="1000">Animação</h3>
                            <MyLinkTwo class="justify-center text-2xl" href="/" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">lorem ipsum</MyLinkTwo>
                        </div>
                    </div>
                    <div class="bg-gray-200" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full h-full object-cover aspect-[1/1] md:aspect-[5/3] object-center"
                            src="/assets/images/detalhe-biometria-preto.jpeg"
                            alt="imagem"
                            srcset="/assets/images/detalhe-biometria-preto.jpeg"
                            width="600"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div class="bg-gray-200 aspect-square" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full h-full object-cover aspect-[1/1] md:aspect-[5/3] object-center"
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
            <div class="container mx-auto py-11 px-5 md:px-3">
                <TitleSection data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <div class="bg-slate-300 lg:order-last lg:col-span-2" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full aspect-[2/1] object-cover"
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
            <div class="container mx-auto py-11 px-5 md:px-3">
                <div class="grid grid-cols-1 lg:grid-cols-3 grid">
                    <div class="bg-slate-300 lg:order-last lg:col-span-2" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full aspect-[2/1] object-cover object-bottom"
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