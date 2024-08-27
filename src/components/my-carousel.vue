<template>
    <Swiper class="rounded-lg">
        <SwiperSlide
            v-for="image,index in images"
            :key="index"
            class="carousel__slide"
            :modules="modules"
            :loop="true"
            :pagination="true"
            :navigation="true"
        >
            <img class="w-full object-cover h-screen" :src="`/images/${image}`" alt=""/>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { SwiperAutoplay, SwiperNavigation, SwiperPagination } from '#imports';
defineProps(['images'])

const modules = [SwiperAutoplay, SwiperNavigation, SwiperPagination];
</script>

<style scoped>
    .carousel__slide{
        @apply aspect-[5/3] overflow-hidden
    }

</style>