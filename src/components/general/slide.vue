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
                <div class="slide-contents" :style="`opacity: ${opacity}%;`">
                    <h1 class="slide-title" v-html="text"></h1>
                </div>
            </div>
        </swiper-slide>
    </Swiper>
</template>

<script setup lang="ts">
import {
    SwiperPagination,
    SwiperNavigation,
    SwiperAutoplay,
    SwiperEffectCreative,
    SwiperParallax
} from '#imports';

const modules = [
    SwiperPagination,
    SwiperNavigation,
    SwiperAutoplay,
    SwiperEffectCreative,
    SwiperParallax
];
defineProps(['images']);

const opacity:Ref<number> = ref(100);
const slideSingle:Ref<number> = ref(0);
onMounted(() => {
    let element:HTMLElement | null = document.querySelector(".slide-contents")
    if(element !== null){
        slideSingle.value = element.offsetTop;
        window.addEventListener("scroll", scrollOpacity);
    }
})
onUnmounted(() => window.removeEventListener("scroll", scrollOpacity))

function scrollOpacity(){
    //altura atual do scroll
    let documentScroll:number = document.scrollingElement?.scrollTop as number;
    let percent:number = 100 - (documentScroll / slideSingle.value) * 100;
    percent = Math.max(0, Math.min(percent, 100));
    opacity.value = percent;
}
</script>

<style>
.carousel {
    @apply w-full h-screen min-h-full fixed top-0 left-0 z-[1];
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

.slide-contents{
    @apply container max-w-xl md:max-w-6xl mx-auto px-11
}
.slide-contents .slide-title{
    @apply
    sticky
    top-[50%]
    z-10
    text-center
    lg:text-start
    text-[40px]
    md:text-[50px]
    lg:text-[80px]
    font-bold
    leading-[40px]
    md:leading-[50px]
    lg:leading-[100px]
    pt-5
    md:pt-6
    lg:pt-0
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