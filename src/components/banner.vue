<template>
    <section class="apresentacao">
        <img :src="props.src" alt=""/>
        <div ref="content" class="content-container" :style="`opacity: ${opacity}%`">
            <h1 class="banner-title">{{ props.title }}</h1>
            <template v-if="props.text != ''">
                <p class="banner-text">{{ props.text }}</p>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Banner } from "~/core/types";
const atualTop:Ref<number> = ref(0);
const opacity:Ref<number> = ref(100);
const content:Ref<HTMLDivElement | undefined> = ref();
const props = withDefaults(defineProps<Banner>(),{
    title:'',
    text:'',
    src:'',
})
onMounted(():void => {
    let opc:number = Number(document.scrollingElement?.scrollTop)
    if(props.title !== '' || props.text !== ''){
        getOpacity(opc);
        window.addEventListener("scroll", fadeContent);
    }
})
onUnmounted(() => window.removeEventListener("scroll", fadeContent));

function fadeContent(){
    let opc:number = Number(document.scrollingElement?.scrollTop);
    getOpacity(opc);
}

const getOpacity = (opc:number):void => {
    if(opc > atualTop.value){
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
    atualTop.value = opc;
    
}
</script>

<style scoped>
.apresentacao{
    @apply relative w-full flex items-center h-screen overflow-hidden z-[-1];
}
.apresentacao img{
    @apply w-full h-full object-cover fixed top-0 left-0;
}
.apresentacao:after{content:''}
.apresentacao:after{
    @apply absolute w-full h-full bg-black/40 top-0 left-0;
}
.content-container{
    @apply fixed z-10 container mx-auto px-5 text-white gap-[-30px] duration-200 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ;
}
.banner-title{
    @apply w-full text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px];
}
.banner-text{
    @apply w-full text-lg lg:text-2xl text-start;
}
</style>