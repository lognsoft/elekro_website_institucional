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
            <div class="slider-single" :style="`background-image: url('/images/${img}')`">
                <div class="container max-w-xl md:max-w-6xl mx-auto px-11">
                    <h1 class="text-center lg:text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold relative z-10 leading-[60px] md:leading-[70px] lg:leading-[100px]" v-html="text"></h1>
                </div>
            </div>
        </swiper-slide>
    </Swiper>
</template>

<script setup>
import { SwiperPagination, SwiperNavigation, SwiperAutoplay, SwiperEffectCreative } from '#imports';

const modules = [SwiperPagination, SwiperNavigation, SwiperAutoplay, SwiperEffectCreative];

defineProps(['images'])
</script>

<style>
.carousel {
    @apply w-full h-screen min-h-full;
}

.slider-single {
    @apply w-full h-screen bg-cover bg-center bg-no-repeat text-white flex items-center relative;
}

.slider-single::after{
    content: ''
}

.slider-single::after{
    @apply absolute w-full h-screen bg-black opacity-25
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