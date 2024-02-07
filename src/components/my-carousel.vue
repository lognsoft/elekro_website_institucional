<template>
    <Carousel :autoplay="5000" :wrap-around="true" :transition="1000" :items-to-show="1">
        <Slide v-for="image,index in images" :key="index">
            <img class="w-full h-full" :src="`/images/${image}`" :srcset="`/images/${image}`" alt=""/>
        </Slide>
        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup lang="ts">
defineProps(['images']) as { images:string[] }
</script>

<style scoped>

    .carousel__viewport{
        @apply  shadow-xl
    }
    .carousel__slide{
        @apply aspect-[5/3] rounded-lg overflow-hidden
    }

    .carousel__pagination-button .carousel__pagination-button--active::after {
        @apply w-3 aspect-[1/1] block
    }
</style>