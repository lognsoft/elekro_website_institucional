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
            <div class="w-full mx-auto py-11 px-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <NuxtLink v-for="n in 10" :key="n" :to="`/produtos/${n}`" class="col-span-1 block">
                        <figure class="bg-amber-500 aspect-video mb-2">
                            <!-- <h1 class="text-xl md:text-2xl font-bold mb-4">1080 x 540</h1> -->
                            <img src="" srcset="" alt="" class="aspect-[2/1]"/>
                        </figure>
                        <div>
                            <h3 class="text-xl md:text-2xl font-bold mb-4">lorem ipsum</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, officiis vel ut consequuntur eos voluptates, ad distinctio rem labore veritatis placeat laboriosam autem neque. Veritatis odit ratione velit praesentium nostrum.</p>
                        </div>
                    </NuxtLink>
                </div>
                
                
            </div>
        </section>
    </main>
</template>

<script setup>
// definePageMeta({
//     layout: 'shop'
// })
</script>