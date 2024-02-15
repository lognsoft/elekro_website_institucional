<template>
    <main>
        <Banner class="bg-cover bg-center bg-no-repeat bg-[url('/assets/images/4.jpeg')] h-full max-h-[400px] md:max-h-[600px]">
            Elekro
        </Banner>
        <!-- <section class="pt-11">
            <div id="after-clip" class="relative text-white">
                <div class="container min-h-96 relative mx-auto py-11 px-5 md:px-3 z-10 flex items-center">
                    <div class="w-full text-center">
                        <h3 class="text-center text-gray-400 font-bold mb-6">Lorem Ipsum</h3>
                        <TitleSection class="text-center mb-11">Lorem Ipsum</TitleSection>
                        <p class="text-center max-w-md mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque maxime dolores corrupti maiores nemo necessitatibus!</p>
                        <MyButton :reverse="true">Comprar agora</MyButton>
                    </div>
                </div>
            </div>
        </section> -->
        <section class="py-11">
            <div class="container max-w-6xl mx-auto px-5 md:px-3 py-11">
                <div class="mb-7">
                    <MyCarousel :images="images"/>
                </div>
                <div>
                    <TitleSection data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                    <p class="text-base sm:text-xl mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius pariatur vitae reprehenderit quibusdam molestiae deleniti eum magni veniam distinctio, necessitatibus velit ea. Quis fugiat nostrum error quam magnam excepturi.</p>
                    <MyButton class="my-0 mx-0" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</MyButton>
                </div>
            </div>
        </section>
        <section class="py-11">
            <div class="w-full max-w-[1900px] mx-auto px-5 md:px-3">
                <h3 class="text-center text-gray-400 font-bold mb-6" data-aos="fade-up" data-aos-duration="500">Lorem Ipsum</h3>
                <TitleSection class="text-center mb-11" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                <div class="grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 text-center lg:text-start">
                    <div v-for="content,index of array" :key="index">
                        <h3 class="font-extrabold text-4xl mb-9" data-aos="fade-up" data-aos-duration="1000">
                            <span class="inline-flex items-end"><Icon :name="content.icon"/></span>
                            {{ content.title }}
                        </h3>
                        <p class="font-bold tracking-widest text-gray-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{{ content.text }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-black text-white">
            <div class="w-full max-w-[1900px] mx-auto py-11 px-5 md:px-3">
                <TitleSection data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <div class="lg:order-last lg:col-span-2" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            class="w-full aspect-[2/1] object-cover rounded-lg shadow-lg shadow-slate-600"
                            src="/assets/images/de-lado-prateada.jpeg"
                            srcset="/assets/images/de-lado-prateada.jpeg"
                            alt=""
                        />
                    </div>
                    <div class="flex items-center pt-8 lg:px-11 lg:order-first">
                        <div>
                            <h3 class="text-5xl font-extrabold mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">lorem ipsum</h3>
                            <p class="mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ipsam magnam rem assumenda id expedita sed consectetur sit iure dignissimos eius nulla in perferendis voluptatibus illum voluptates, esse, ipsum soluta.
                            </p>
                            <div>
                                <MyButton class="my-0 mx-0" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-anchor-placement="center-bottom" :reverse="true">Comprar Agora</MyButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-11 bg-black bg-cover min-h-96 flex items-center">
            <div class="w-full max-w-[1900px] mx-auto px-5 md:px-3 grid grid-cols-4">
                <div class="col-span-4 lg:col-span-1 pr-2">
                    <TitleSection class="text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                </div>
                <div class="col-span-4 lg:col-span-3">
                    <p class="text-xl text-white mb-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                    </p>
                    <div>
                        <MyButton class="my-0 mx-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-anchor-placement="center-bottom" :reverse="true">Comprar Agora</MyButton>
                    </div>
                </div>
            </div>
        </section>
        <section id="bg-image">
            <div class="bg-image">
                <div class="container-text">
                    <h3 class="text-5xl font-extrabold mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">lorem ipsum</h3>
                    <p class="text-xl max-w-5xl text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius libero minima officia id rem illo tempora quibusdam, officiis temporibus ducimus, voluptate commodi ea odio ipsam autem! Illum, totam unde.</p>
                </div>
            </div>
        </section>
        <Formulario :title="true"/>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "landing-page"
})
const array:Array<{icon:string, title:string, text:string}> = [
    {
        icon: "mdi:password",
        title:"olá, mundo",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aut facere doloremque soluta inventore."
    },
    {
        icon: "mdi:password",
        title:"olá, mundo",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aut facere doloremque soluta inventore."
    },
    {
        icon: "mdi:password",
        title:"olá, mundo",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aut facere doloremque soluta inventore."
    },
    {
        icon: "mdi:password",
        title:"olá, mundo",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aut facere doloremque soluta inventore."
    }
]

const images:string[] = [
    "de lado preta.jpeg",
    "detalhe biometria preto.jpeg",
    "porta de carregamento preta.jpeg"
]
</script>

<style scoped>
.img-fluid{
    width: 100%;
    height: auto;
    max-width: 70rem;
}

#after-clip::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: black; */
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%);
}

#after-clip::after{
    @apply z-0 bg-gradient-to-r from-slate-500 to-black
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
    @apply w-full bg-center bg-no-repeat relative mx-auto py-11 bg-[url('/images/detalhe_6.jpeg')] bg-cover
}

.container-text{
    @apply w-full max-w-[1900px] flex justify-center items-center px-5 md:px-3 flex-col mx-auto max-h-96 h-screen text-slate-50
}
</style>