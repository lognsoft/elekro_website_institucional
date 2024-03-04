<template>
    <!-- <Carousel>
        <Slide v-for="image,index in images" :key="index">
            <img class="w-full h-full object-cover" :src="`/images/${image}`" :srcset="`/images/${image}`" alt="" loading="lazy"/>
        </Slide>
    </Carousel> -->
    <Swiper
    class="carousel"
    :loop="true"
    :pagination="true"
    :navigation="true"
    :modules="modules"
    :slidesPerView="1"
    :centeredSlides="true"
    :autoplay="{delay: 4500}"
    >
        <swiper-slide
            v-for="image,index in images"
            :key="index"
        >
            <!-- <img
                class="w-full h-screen object-cover"
                :src="`/images/${image}`"
                :srcset="`/images/${image}`"
                alt=""
            /> -->
            <div class="w-full h-screen bg-cover bg-center bg-no-repeat text-white flex items-center" :style="`background-image: url('/images/${image}')`">
                <div class="container mx-auto px-3">
                    <h1 class="text-center md:text-start text-4xl md:text-6xl lg:text-9xl font-bold">Lorem Ipsum</h1>
                    <h4 class="text-center md:text-start text-2xl font-light underline">lorem ipsum</h4>
                </div>
            </div>
        </swiper-slide>
    </Swiper>
</template>

<script setup>
import { SwiperPagination, SwiperNavigation, SwiperAutoplay } from '#imports';

const modules = [SwiperPagination, SwiperNavigation, SwiperAutoplay];

defineProps(['images'])
</script>

<style>
.carousel {
    @apply w-full h-screen min-h-full;
}

.swiper-button-prev,
.swiper-button-next{
    color: #fff !important;    
}

.swiper-pagination-bullet{
    @apply bg-gray-300
}
.swiper-pagination-bullet-active{
    @apply bg-white
}
</style>