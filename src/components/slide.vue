<template>
    <section>
        <Swiper
            class="w-full"
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }"
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
            <SwiperSlide v-for="obj, index in slide" :key="index" :virtualIndex="index" class="slider">
                <div class="w-full lg:basis-3/5 text-white py-11 flex items-center px-9 bg-center bg-cover bg-no-repeat" :class="obj.bg">
                    <h1 class="text-6xl md:text-8xl font-extrabold">{{ obj.description }}</h1>
                </div>
                <div class="basis-2/5 bg-black hidden lg:block">
                    <!-- <h1>Hello, world</h1> -->
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup lang="ts">
import type ISlide from '~/interfaces/ISlide';
// import { slide } from '~/constants';

const slide:ISlide[] = [
    {
        bg: "bg-[url('/assets/images/slide/imagem-1.jpg')]",
        description: "Lorem Ipsum",
    },
    {
        bg: "bg-[url('/assets/images/slide/imagem-2.jpg')]",
        description: "Lorem Ipsum",
    },
    {
        bg: "bg-[url('/assets/images/slide/imagem-3.jpg')]",
        description: "Lorem Ipsum",
    },
    {
        bg: "bg-[url('/assets/images/slide/imagem-4.jpg')]",
        description: "Lorem Ipsum",
    },
    {
        bg: "bg-[url('/assets/images/slide/imagem-5.jpg')]",
        description: "Lorem Ipsum",
    }
    
]
</script>

<style scoped>
    /* classes tailwind */
    .slider{
        @apply bg-slate-700 flex h-screen md:h-auto
    }
    .slider{
    /* height: 100vh; */
        min-height: 35rem;
    }
</style>