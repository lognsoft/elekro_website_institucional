<script setup lang="ts">
interface IProps{
    imageDesktop:string;
    imageMobile:string;
}
defineProps<IProps>();
const bannerContent:Ref<HTMLElement | null> = ref(null);
const transform:Ref<number> = ref(95);
const opacity:Ref<number> = ref(100);
const bannerSingle:Ref<number> = ref(0);
const bannerTextHeight:Ref<number> = ref(0);

const scrollOpacity:() => void = ():void => {
  if (bannerContent.value) {
    const documentScroll = document.scrollingElement?.scrollTop || 0;
    const percent = Math.max(0, Math.min(100, 100 - (documentScroll / bannerSingle.value) * 100 + (bannerTextHeight.value / 100) * 10));
    const translate = Math.max(80, Math.min(200, 50 + (documentScroll / bannerSingle.value) * 50));

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
            <h2 class="banner-title">Um novo jeito<br/>para você<br/>curtir a vida</h2>
            <div class="smart-life">
                <img class="smart-image" src="/images/smart-life-icon.png" alt="" width="40" height="40"/>
                <p class="smart-text">smart life</p>
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
    bg-blue-200
    relative
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
    md:top-[60%]
    left-[50%]
    mx-auto
    container
    max-w-[1200px]
    px-5
    md:px-3
    leading-[40px]
    md:leading-[50px]
    lg:leading-[80px]
}

.banner-title{
    @apply
    text-[40px]
    md:text-[50px]
    lg:text-[60px]
    font-bold
}

.smart-life{
    @apply
    flex
    items-center
    gap-x-3
}

.smart-life .smart-image{
    @apply
    w-auto
    h-auto
    max-w-[40px]
}

.smart-life .smart-text{
    @apply
    font-semibold
    text-xl
}
</style>