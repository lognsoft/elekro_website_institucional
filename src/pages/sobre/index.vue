<template>
    <main>
        <Head>
            <Title>Sobre</Title>
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
        <Banner>
            Sobre
        </Banner>

        <section class="bg-image"></section>
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
        <section class="py-11">
            <div class="w-full max-w-[1900px] mx-auto px-5 md:px-3">
                <h3 class="text-center text-amber-600 font-bold mb-6" data-aos="fade-up" data-aos-duration="500">Lorem Ipsum</h3>
                <TitleSection class="text-center mb-11" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                <div class="grid gap-8 md:gap-4 lg:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 text-center">
                    <div v-for="content of array" :key="content.title">
                        <h3 class="font-extrabold text-4xl mb-9" data-aos="fade-up" data-aos-duration="1000">{{ content.title }}</h3>
                        <h2 class="font-bold text-amber-600 tracking-widest" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{{ content.text }}</h2>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "About"
})

const array:Array<{title:string, text:string}> = [
    {
        title: "Lorem Ipsum 1",
        text: "lorem"
    },
    {
        title: "Lorem Ipsum 2",
        text: "lorem"
    },
    {
        title: "Lorem Ipsum 3",
        text: "lorem"
    },
    {
        title: "Lorem Ipsum 4",
        text: "lorem"
    }
]
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