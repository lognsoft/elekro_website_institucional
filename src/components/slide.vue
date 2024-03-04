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
    :autoplay="{delay: 2500}"
    >
        <swiper-slide
            v-for="image,index in images"
            :key="index"
        >
            <img
                class="w-full h-screen object-cover"
                :src="`/images/${image}`"
                :srcset="`/images/${image}`"
                alt=""
            />
        </swiper-slide>
    </Swiper>
</template>

<script setup>
import { SwiperPagination, SwiperNavigation, SwiperAutoplay } from '#imports';

const modules = [SwiperPagination, SwiperNavigation, SwiperAutoplay];

defineProps(['images'])
</script>

<style scoped>
.carousel {
    @apply w-full h-screen min-h-full;
}

.swiper-button-prev,
.swiper-button-next{
    @apply bg-black
}
</style>