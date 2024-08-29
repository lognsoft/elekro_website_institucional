<template>
    <div class="container__carousel">
        <div class="!relative ease-in-out">
            <div class="h-screen !relative">
            <Swiper 
                ref="swiperRef"
                :modules="modules"
                :loop="true"
                class="h-screen !fixed top-0 left-0 w-full"
                :autoplay="{delay: 6500}"
            >
                <SwiperSlide
                
                v-for="image,index in images"
                :key="index"
                class="carousel__slide"
                >
                <div
                    :class="{
                        'bg-center': position == undefined || position == 'center',
                        'bg-left': position == 'left',
                        'bg-right': position == 'right',
                        'max-md:bg-[46%]': position == 'home' && index == 1,
                        'max-md:bg-[63%]': position == 'home' && index == 0,
                        'bg-cover': true,
                        'bg-no-repeat': true,
                        'w-full': true,
                        'h-full': true
                    }"
                    :style="{
                        backgroundImage: `url('/images/banner/${image}')`
                        
                    }"
                    alt=""
                    ></div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
        <div ref="bannerContent" class="content-container" :class="{'hidden md:block':hidden}"  :style="`opacity: ${opacity}%; transform: translate(-50%,-${transform}%)`">
            <!-- <img class="lg:!w-60 !w-36 pb-2 md:pb-5 !static
            !h-full" :src="image" alt=""> -->
            <img v-if="showImage" class="lg:!w-60 !w-36 pb-2 md:pb-5 !h-full relative" :src="image" alt="" loading="lazy">

            <h1 class="banner-title" v-html="props.title"></h1>
            <template v-if="props.text != ''">
                <p class="banner-text">{{ props.text }}</p>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { Banner } from "~/core/types";
import { SwiperAutoplay, SwiperNavigation, SwiperPagination } from '#imports';
import type { Swiper as SwiperInstance } from 'swiper';
const modules = [SwiperAutoplay, SwiperNavigation, SwiperPagination];

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
    },
    images: {
    type:Array,
    default:[]
  },
}) as Banner
const opacity:Ref<number> = ref(100);
const transform:Ref<number> = ref(50);
const bannerSingle:Ref<number> = ref(0);
const bannerTextHeight:Ref<number> = ref(0);
const bannerContent:Ref<HTMLElement | null> = ref(null);
const swiperRef:Ref<SwiperInstance | null> = ref(null);


const scrollOpacity:() => void = ():void => {
  if (bannerContent.value) {
    const documentScroll = document.scrollingElement?.scrollTop || 0;
    const percent = Math.max(0, Math.min(100, 100 - (documentScroll / bannerSingle.value) * 100 + (bannerTextHeight.value / 100) * 10));
    const translate = Math.max(50, Math.min(200, 50 + (documentScroll / bannerSingle.value) * 50));

    transform.value = translate;
    opacity.value = percent;

    // Aplicando estilos diretamente para depuração
    if (bannerContent.value) {
      bannerContent.value.style.transform = `${transform.value}`;
      bannerContent.value.style.opacity = `${opacity.value / 100}`;
    }
  }
};

onMounted(() => {

    // console.log(swiperRef.value)
    if (bannerContent.value) {
        bannerSingle.value = bannerContent.value.offsetTop;
        bannerTextHeight.value = bannerContent.value.clientHeight;
        window.addEventListener("scroll", scrollOpacity);
    }
});

onUnmounted(() => {
    window.removeEventListener("scroll", scrollOpacity)
});
</script>

<style scoped>
.container__carousel{
    @apply h-screen w-full
}
.carousel__slide{
    @apply h-screen !w-full !flex !items-center !overflow-hidden -z-10;
}
.carousel__slide img{
    @apply !w-full !h-screen !fixed !top-0 !left-0 !appearance-none !object-cover;
}
.carousel__slide:after{content:''}
.carousel__slide:after{
    @apply !absolute !w-full !h-full !bg-black/5 !top-0 !left-0;
}
.content-container{
    @apply fixed z-10 container mx-auto md:px-10 md:pl-3 text-white gap-[-30px] top-[50%] left-[50%] xl:left-[45%] pointer-events-none
}
.banner-title{
    @apply max-w-[440px] lg:text-start text-center max-lg:mx-auto text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px];
}
.banner-text{
    @apply w-full text-lg lg:text-2xl text-start;
}

</style>