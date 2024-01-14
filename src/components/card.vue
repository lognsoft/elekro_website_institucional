<template>
    <div>
        <figure class="aspect-[1/1] w-full bg-slate-400">
            <img
                :src="product.image"
                :srcset="product.image"
                :alt="product.title"
                width="368"
                height="368"
                class="img-card"
            />
        </figure>
        <div class="py-4 px-1">
            <h3 class="text-2xl font-extrabold mb-2">{{ product.title }}</h3>
            <h2 class="mb-1 font-bold text-lg">{{ useConvertCoin(product.value) }}</h2>
            <p class="mb-2">{{ useLimitChar(product.description, 80) }}</p>
            <MyLink class="my-0 mx-0" :href="`/shop/${product.id}`">Ver Produto</MyLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type IProduct from "~/interfaces/IProduct";
defineProps(["product"]) as { product: IProduct }
</script>

<style scoped>
    .img-card{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>