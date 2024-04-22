<template>
    <section class="apresentacao">
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
    text:''
})
onMounted(():void => {
    let opc:number = Number(document.scrollingElement?.scrollTop)
    if(props.title !== '' || props.text !== ''){
        getOpacity(opc);
        window.addEventListener("scroll", fadeContent);
    }
})


function fadeContent(){
    let opc:number = Number(document.scrollingElement?.scrollTop);
    getOpacity(opc);
    // if(newNumber > atualTop.value){
    //     if(opacity.value > 0){
    //         opacity.value -= 10;
    //         atualTop.value = newNumber;
    //     }
    // } else {
    //     if(opacity.value < 100){
    //         opacity.value += 10;
    //         atualTop.value = newNumber;
    //     }
    // }
    // console.log(newNumber);
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
    @apply relative w-full overflow-hidden flex items-center h-screen bg-center bg-cover bg-no-repeat bg-fixed;
}
.apresentacao:after{content:''}
.apresentacao:after{
    @apply absolute w-full h-full bg-black/40 top-0 left-0;
}
.content-container{
    @apply relative z-10 container mx-auto px-5 text-white gap-[-30px] duration-200;
}
.banner-title{
    @apply w-full text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px];
}
.banner-text{
    @apply w-full text-lg lg:text-2xl text-start;
}
</style>