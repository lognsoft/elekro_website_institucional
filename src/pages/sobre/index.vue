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
            <div class="mx-auto w-full px-5 grid grid-cols-4">
                <div class="col-span-4 lg:col-span-1 pr-2">
                    <TitleSection class="text-white">Lorem Ipsum</TitleSection>
                </div>
                <div class="col-span-4 lg:col-span-3">
                    <p class="text-xl text-white mb-6">
                        <span class="quote"><MyIcon icon="bi:quote"/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                    </p>

                    <p class="text-slate-200 text-sm">-nameExample</p>
                </div>
            </div>
        </section>
        <section class="py-9 bg-slate-400 min-h-96 flex items-center">
            <div class="mx-auto w-full px-5 grid grid-cols-6">
                <div class="col-span-6 lg:col-span-2 pr-2">
                    <TitleSection class="text-white">Lorem Ipsum</TitleSection>
                </div>
                <div class="col-span-6 lg:col-span-4">
                    <p class="text-xl text-white">
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
            <div class="w-full mx-auto px-5">
                <h3 class="text-center text-gray-400 font-bold mb-6">Lorem Ipsum</h3>
                <TitleSection class="text-center mb-11">Lorem Ipsum</TitleSection>
                <div class="grid gap-8 md:gap-4 lg:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 text-center">
                    <div v-for="content of array" :key="content.title">
                        <h3 class="font-extrabold text-4xl mb-9">{{ content.title }}</h3>
                        <h2 class="font-bold text-amber-600 tracking-widest">{{ content.text }}</h2>
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
    @apply py-9 h-screen bg-[url("https://ogimg.infoglobo.com.br/in/5727496-6f1-03e/FT1086A/2012-539074198-20120725102505273rts.jpg_20120730.jpg")] bg-center bg-no-repeat bg-cover bg-fixed
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