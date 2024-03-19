<template>
    <main>
        <Head>
            <Title>Institucional</Title>
            <Meta name="description" content="lorem ipsum"/>
            <Meta property="og:description" content="lorem ipsum"/>
            <Meta property="og:title" content="Elekro - Sobre"/>
            <Meta property="og:image" content="/images/elekro-banner.jpg"/>
            <Meta property="og:url" content="https://meuSite.com"/>
            <Meta name="twitter:title" content="Elekro - Sobre"/>
            <Meta name="twitter:description" content="lorem ipsum"/>
            <Meta name="twitter:image" content="/images/elekro-banner.jpg"/>
            <Meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <section class="relative w-full overflow-hidden">
            <video id="video" class="absolute top-0 left-0 w-none h-none min-w-full min-h-screen object-cover" src="/video/blockchain.mp4" loop muted autoplay controls>
                <!-- <source class="min-h-screen" /> -->
            </video>
            <div class="relative z-10 container mx-auto px-5 h-screen flex items-center text-white">
                <h1 class="w-full text-center lg:text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px]">Institucional</h1>
            </div>
        </section>
        <section class="py-9 bg-black min-h-96 flex items-center">
            <div class="mx-auto w-full max-w-[1900px] px-5 md:px-3 grid grid-cols-4">
                <div class="col-span-4 lg:col-span-1 pr-2">
                    <TitleSection class="text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                </div>
                <div class="col-span-4 lg:col-span-3">
                    <p class="text-xl text-white mb-6" data-aos="fade-up" data-aos-duration="1000">
                        <span class="quote" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"><MyIcon icon="bi:quote"/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                    </p>

                    <p class="text-slate-200 text-sm" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">-nameExample</p>
                </div>
            </div>
        </section>
        <section class="py-9 bg-slate-400 min-h-96 flex items-center">
            <div class="mx-auto w-full max-w-[1900px] px-5 md:px-3 grid grid-cols-6">
                <div class="col-span-6 lg:col-span-2 pr-2">
                    <TitleSection class="text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                </div>
                <div class="col-span-6 lg:col-span-4">
                    <p class="text-xl text-white" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                    </p>
                </div>
            </div>
        </section>
        
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg-image{
    @apply py-9 h-screen bg-[url("/assets/images/bg-edificios.jpg")] bg-bottom bg-no-repeat bg-cover bg-fixed
}

.quote{
    @apply text-amber-600 text-3xl relative
}

.quote{
    top: -5px;
}
.bg-image{
    max-height: 26rem !important;
}

#video::-webkit-media-controls {
    display: none;
}

@media screen and (min-width: 640px){
    .bg-image{
        max-height: 30rem !important;
    }
}
@media screen and (min-width: 768px){
    .bg-image{
        max-height: 30rem !important;
    }
}
@media screen and (min-width: 1024px){
    .bg-image{
        max-height: 35rem !important;
    }
}
@media screen and (min-width: 1280px){
    .bg-image{
        max-height: 40rem !important;
    }
}
@media screen and (min-width: 1536px){
    .bg-image{
        max-height: 45rem !important; 
    }
}
</style>