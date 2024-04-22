<template>
    <Swiper
    class="carousel"
    :loop="true"
    
    :navigation="true"
    :modules="modules"
    :slidesPerView="1"
    :centeredSlides="true"
    :autoplay="{delay: 8000}"
    effect="creative"
    :creative-effect="{
        prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    }"
    :speed="1200"
    >
        <swiper-slide
            v-for="{ img, text },index in images"
            :key="index"
        >
            <div class="slider-single" :style="`background-image: url('/images/${img}');`">
                <div class="container max-w-xl md:max-w-6xl mx-auto px-11">
                    <h1 class="relative z-10 text-center lg:text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px] pt-5 md:pt-6 lg:pt-0" v-html="text"></h1>
                </div>
            </div>
        </swiper-slide>
    </Swiper>
</template>

<script setup>
import {
    SwiperPagination,
    SwiperNavigation,
    SwiperAutoplay,
    SwiperEffectCreative
} from '#imports';

const modules = [
    SwiperPagination,
    SwiperNavigation,
    SwiperAutoplay,
    SwiperEffectCreative
];

defineProps(['images'])
</script>

<style>
.carousel {
    @apply w-full h-screen min-h-full;
}

.slider-single {
    @apply w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white flex items-center relative;
}

.slider-single::after{
    content: ''
}

.slider-single::after{
    @apply absolute w-full h-screen bg-black opacity-25
}

.swiper-button-prev,
.swiper-button-next{
    @apply text-white border-[1px] border-white w-11 h-11 flex items-center justify-center
}

.swiper-button-prev::after,
.swiper-button-next::after{
    @apply text-[13px]
}

.swiper-pagination-bullet{
    @apply bg-gray-300
}
.swiper-pagination-bullet-active{
    @apply bg-white
}
</style>