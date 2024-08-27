<template>
    <Swiper 
    ref="swiperRef"
    :modules="modules"
    :loop="true"
    >
        <SwiperSlide
        
        v-for="image,index in images"
        :key="index"
        class="carousel__slide"
        >
        <img :class="{
            'object-center':position == undefined || position == 'center',
            'object-left':position == 'left',
            'object-right':position == 'right',
            'max-md:object-[46%]':position == 'home'
        }" :src="`/images/banner/${image}`" alt="" />
        </SwiperSlide>
    </Swiper>
        <div ref="bannerContent" class="content-container" :class="{'hidden md:block':hidden}"  :style="`opacity: ${opacity}%; transform: translate(-50%,-${transform}%)`">
            <!-- <img class="lg:!w-60 !w-36 pb-2 md:pb-5 !static
            !h-full" :src="image" alt=""> -->
            <img v-if="showImage" class="lg:!w-60 !w-36 pb-2 md:pb-5 !static !h-full" :src="image" alt="">

            <h1 class="banner-title" v-html="props.title"></h1>
            <template v-if="props.text != ''">
                <p class="banner-text">{{ props.text }}</p>
            </template>
        </div>
</template>

<script setup lang="ts">
import type { Banner } from "~/core/types";
import { SwiperAutoplay, SwiperNavigation, SwiperPagination } from '#imports';
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
    type: Array as () => string[],
    default: () => []
  },
}) as Banner
const opacity:Ref<number> = ref(100);
const transform:Ref<number> = ref(50);
const bannerSingle:Ref<number> = ref(0);
const bannerTextHeight:Ref<number> = ref(0);
const bannerContent = ref<HTMLElement | null>(null);
import type { Swiper as SwiperInstance } from 'swiper';
const swiperRef = ref<SwiperInstance | null>(null);

const scrollOpacity = () => {
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
  if (bannerContent.value) {
    bannerSingle.value = bannerContent.value.offsetTop;
    bannerTextHeight.value = bannerContent.value.clientHeight;
    window.addEventListener("scroll", scrollOpacity);
  }
  if (swiperRef.value) {
    swiperRef.value.update();
  }
});

onUnmounted(() => window.removeEventListener("scroll", scrollOpacity));
</script>

<style scoped>
.carousel__slide{
    @apply !relative !w-full !flex !items-center !h-screen !overflow-hidden -z-10;
}
.carousel__slide img{
    @apply !w-full !h-screen !fixed !top-0 !left-0 !appearance-none !object-cover;
}
.carousel__slide:after{content:''}
.carousel__slide:after{
    @apply !absolute !w-full !h-full !bg-black/5 !top-0 !left-0;
}
.content-container{
    @apply fixed z-10 container mx-auto md:px-10 pl-3 text-white gap-[-30px] top-[50%] left-[50%] xl:left-[45%] pointer-events-none
}
.banner-title{
    @apply max-w-[440px] text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px];
}
.banner-text{
    @apply w-full text-lg lg:text-2xl text-start;
}

</style>