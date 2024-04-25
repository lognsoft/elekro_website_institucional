<template>
    <section class="apresentacao">
        <img :src="props.src" alt=""/>
        <div class="content-container" :style="`opacity: ${opacity}%`">
            <h1 class="banner-title">{{ props.title }}</h1>
            <template v-if="props.text != ''">
                <p class="banner-text">{{ props.text }}</p>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Banner } from "~/core/types";
const props = withDefaults(defineProps<Banner>(),{
    title:'',
    text:'',
    src:'',
})
const opacity:Ref<number> = ref(100);
const slideSingle:Ref<number> = ref(0);
onMounted(() => {
    let element:HTMLElement | null = document.querySelector('.content-container')
    if(element !== null){
        slideSingle.value = element.offsetTop;
        window.addEventListener("scroll", scrollOpacity);
    }
});
onUnmounted(() => window.removeEventListener("scroll", scrollOpacity));

function scrollOpacity(){
    //altura atual do scroll
    let documentScroll:number = document.scrollingElement?.scrollTop as number;
    let percent:number = 100 - (documentScroll / slideSingle.value) * 100;
    percent = Math.max(0, Math.min(percent, 100));
    opacity.value = percent;
};
</script>

<style scoped>
.apresentacao{
    @apply relative w-full flex items-center h-screen overflow-hidden z-[-1];
}
.apresentacao img{
    @apply w-full h-full object-cover fixed top-0 left-0 appearance-none;
}
.apresentacao:after{content:''}
.apresentacao:after{
    @apply absolute w-full h-full bg-black/40 top-0 left-0;
}
.content-container{
    @apply fixed z-10 container mx-auto px-5 text-white gap-[-30px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ;
}
.banner-title{
    @apply w-full text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px];
}
.banner-text{
    @apply w-full text-lg lg:text-2xl text-start;
}
</style>