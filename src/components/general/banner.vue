<script setup lang="ts">
import type { Ref } from "vue";
const props = defineProps({
    title:{
        type:String,
        default:''
    },
    text:{
        type:String,
        default:''
    },
    src:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:''
    },
    showImage: {
    type: Boolean,
    default: false
    },
    hidden:{
        type:Boolean,
        default:false
    },
    position:{
        type:String,
        default:undefined
    }
})
const translateYImage:Ref<number> = ref(0);
const opacity:Ref<number> = ref(100);
const transform:Ref<number> = ref(50);
const bannerSingle:Ref<number> = ref(0);
const bannerTextHeight:Ref<number> = ref(0);
onMounted(() => {
    let element:HTMLElement | null = document.querySelector('.content-container')
    if(element !== null){
        bannerSingle.value = element.offsetTop;
        bannerTextHeight.value = element.clientHeight;
        window.addEventListener("scroll", scrollOpacity);
    }
});
onUnmounted(() => window.removeEventListener("scroll", scrollOpacity));

function scrollOpacity(){
    //altura atual do scroll
    let documentScroll:number = document.scrollingElement?.scrollTop as number;
    let percent:number = (100 - (documentScroll / bannerSingle.value) * 100) + (bannerTextHeight.value/100) * 10;

    let translate:number = 50 + (documentScroll / bannerSingle.value) * 50;
    transform.value = Math.max(50, Math.min(translate, 200));
    opacity.value = Math.max(0, Math.min(percent, 100));
};
</script>

<template>
    <section class="apresentacao">
        <NuxtImg :class="{
            'object-center':position == undefined || position == 'center',
            'object-left':position == 'left',
            'object-right':position == 'right',
            'max-md:object-[46%]':position == 'home'
            }" :src="props.src" alt="" quality="75" loading="eager"/>
        <div class="content-container" :class="{'hidden md:block':hidden}"  :style="`opacity: ${opacity}%; transform: translateY(-${transform}%)`">
            <!-- <img class="lg:!w-60 !w-36 pb-2 md:pb-5 !static
            !h-full" :src="image" alt=""> -->
            <img v-if="showImage" class="lg:!w-60 !w-36 pb-2 md:pb-5 !h-full !relative mx-auto" :src="image" alt="" loading="lazy">

            <h1 class="banner-title" v-html="props.title"></h1>
            <template v-if="props.text != ''">
                <p class="banner-text">{{ props.text }}</p>
            </template>
        </div>
    </section>
</template>

<style scoped>
.apresentacao{
    @apply relative w-full flex items-center h-screen overflow-hidden z-[-1] py-0;
}
.apresentacao img{
    @apply w-full h-screen fixed top-0 left-0 appearance-none object-cover;
}
.apresentacao:after{content:''}
.apresentacao:after{
    @apply absolute w-full h-full bg-black/5 top-0 left-0;
}
.content-container{
    @apply fixed z-10  mx-auto  text-white top-[50%] lg:left-[330px] left-[30%] translate-x-[-50%] md:translate-x-[-30%]
}
.banner-title{
  @apply text-left max-lg:mx-auto text-[40px] md:text-[50px] lg:text-[60px] font-bold
  leading-[40px] md:leading-[50px] lg:leading-[80px];
}
.banner-text{
    @apply w-full text-lg lg:text-2xl text-left;
}
</style>
