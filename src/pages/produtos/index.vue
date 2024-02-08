<template>
    <main>
        <Head>
            <Title>Produtos</Title>
            <Meta name="description" content="lorem ipsum"/>
            <Meta property="og:description" content="lorem ipsum"/>
            <Meta property="og:title" content="Elekro - Produtos"/>
            <Meta property="og:image" content="/images/elekro-banner.jpg"/>
            <Meta property="og:url" content="https://meuSite.com"/>
            <Meta name="twitter:title" content="Elekro - Produtos"/>
            <Meta name="twitter:description" content="lorem ipsum"/>
            <Meta name="twitter:image" content="/images/elekro-banner.jpg"/>
            <Meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <Banner>
            Produtos
        </Banner>
        <section class="py-11">
            <div class="w-full max-w-[1900px] mx-auto py-11 px-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <NuxtLink v-for="product,index in products" :key="index" :to="`/produtos/1`" class="shadow-xl col-span-1 block overflow-hidden rounded-lg bg-black text-white" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <figure class="aspect-video mb-2">
                            <!-- <h1 class="text-xl md:text-2x_l font-bold mb-4">1080 x 540</h1> -->
                            <img :src="`/images/${product}`" :srcset="`/images/${product}`" alt="lorem ipsum" class="aspect-[1/0.95] object-cover"/>
                        </figure>
                        <div class="px-3 pb-4">
                            <h3 class="text-xl md:text-2xl font-bold mb-2">lorem ipsum</h3>
                            <p class="font-semibold">R$ 00,00</p>
                        </div>
                    </NuxtLink>
                </div>
                
                
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const products:string[] = [
    "detalhe_3.jpeg",
    "detalhe_6.jpeg"
]
</script>