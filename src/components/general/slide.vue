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
defineProps(['images'])
const opacity:Ref<number> = ref(100);
const slideSingle:Ref<Array<HTMLElement>> = ref([]);
const windowHeight:Ref<number> = ref(0);
const scrollPosition:Ref<number> = ref(0)

// onMounted(() => {
//     windowHeight.value = Number(document.scrollingElement?.clientHeight) / 2;
//     scrollPosition.value = Number(document.scrollingElement.scrollTop);
//     slideSingle.value = document.querySelectorAll(".slide-contents");
//     window.addEventListener("scroll", scrollOpacity);
// })
// // onUnmounted(() => window.removeEventListener("scroll", scrollOpacity));

// function scrollOpacity()
// {
//     const newScrollPosition:number = document.scrollingElement.scrollTop;
//     // console.log(document.scrollingElement.scrollTop);
//     // console.log('Scroll Position:', newScrollPosition);

//     const div:number = windowHeight.value / 100;
//     // console.log('div:', div);

//     if (newScrollPosition > scrollPosition.value)
//     {
//         opacity.value = Math.max(0, opacity.value - div); 
//     }
//     else
//     {
//         opacity.value = Math.min(100, opacity.value + div);  
//     }

//     scrollPosition.value = newScrollPosition; 
//     // console.log('opacity:', opacity.value);
// }
onMounted(():void => {
    let opc:number = Number(document.scrollingElement?.scrollTop)
    getOpacity(opc);
    window.addEventListener("scroll", fadeContent);
})
onUnmounted(() => window.removeEventListener("scroll", fadeContent));


function fadeContent(){
    let opc:number = Number(document.scrollingElement?.scrollTop);
    getOpacity(opc);
}

const getOpacity = (opc:number):void => {
    if(opc > scrollPosition.value){
        if(opc >= 100 && opc < 200) opacity.value = 80;
        if(opc >= 200 && opc < 300) opacity.value = 60;
        if(opc >= 300 && opc < 400) opacity.value = 40;
        if(opc >= 400 && opc < 500) opacity.value = 20;
        if(opc >= 500 && opc < 600) opacity.value = 0;
    } else {
        if(opc == 0 && opc <= 100) opacity.value = 100;
        if(opc > 100 && opc <= 200) opacity.value = 80;
        if(opc > 200 && opc <= 300) opacity.value = 60;
        if(opc > 300 && opc <= 400) opacity.value = 40;
        if(opc > 400 && opc <= 500) opacity.value = 20;
        if(opc > 500 && opc <= 600) opacity.value = 0;
    }
    scrollPosition.value = opc;
    
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