<script setup lang="ts">
interface IProps{
    imageDesktop:string;
    imageMobile:string;
}
defineProps<IProps>();
const bannerContent:Ref<HTMLElement | null> = ref(null);
const transform:Ref<number> = ref(50);
const opacity:Ref<number> = ref(100);
const bannerSingle:Ref<number> = ref(0);
const bannerTextHeight:Ref<number> = ref(0);

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

<template>
    <div class="home-banner-screen">
        <img class="image-desktop" :src="imageDesktop" alt=""/>
        <img class="image-mobile" :src="imageMobile" alt=""/>
        <div class="content-banner" ref="bannerContent" :style="`opacity: ${opacity}%; transform: translate(-50%,-${transform}%)`">
            <div class="banner-label">
                <div class="banner-label-toggle">

                </div>
                <h3 class="banner-title">
                    Mod<br/>
                    Digital
                </h3>
            </div>
            <h2 class="banner-title">Um novo jeito<br/>para você<br/>curtir a vida</h2>
            <div class="smart-life">
                <img class="smart-image" src="/images/smart-life-icon.png" alt="" width="40" height="40"/>
                <p class="smart-text">Smart Life</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-banner-screen{
    @apply
    h-screen
    min-h-[800px]
    w-full
    relative
    after:absolute
    after:top-0
    after:left-0
    after:w-full
    after:h-full
    after:bg-black/20
}

.image-desktop,
.image-mobile{
    @apply
    fixed
    top-0
    left-0
    w-full
    h-screen
    min-h-[800px]
    object-cover
}

.image-desktop{
    @apply
    hidden
    md:block
}

.image-mobile{
    @apply
    block
    md:hidden
}

.content-banner{
    @apply
    fixed
    text-white
    top-[50%]
    left-[50%]
    mx-auto
    container
    max-w-[1200px]
    px-5
    md:px-3
    leading-[40px]
    md:leading-[50px]
    lg:leading-[80px]
    z-10
}

.content-banner .banner-label{
    @apply
    relative
    inline-block
}

.content-banner .banner-label .banner-label-toggle{
    @apply
    absolute
    bg-[#bbbbbb]
    h-[26px]
    lg:h-[37px]
    md:h-[33px]
    aspect-[2/1]
    top-0
    right-0
    translate-x-[25%]
    translate-y-[29%]
    lg:translate-y-[60%]
    lg:translate-x-[20%]
    md:translate-y-[26%]
    md:translate-x-[43%]
    rounded-full
    after:absolute
    after:top-0
    after:left-0
    after:h-full
    after:aspect-[1/1]
    after:bg-white
    after:rounded-full
}

.content-banner .banner-title{
    @apply
    text-[40px]
    md:text-[50px]
    lg:text-[60px]
    font-bold
    mb-5
}

.content-banner .smart-life{
    @apply
    flex
    items-center
    gap-x-3
}

.content-banner .smart-life .smart-image{
    @apply
    w-auto
    h-auto
    max-w-[40px]
}

.content-banner .smart-life .smart-text{
    @apply
    font-semibold
    text-xl
}
</style>