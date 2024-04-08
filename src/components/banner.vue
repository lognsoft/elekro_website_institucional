<template>
    <section class="apresentacao">
        <div class="relative z-10 container mx-auto px-5 text-white gap-[-30px]">
            <h1 class="w-full text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px]">{{ props.title }}</h1>
            <p v-if="props.text != ''" class="w-full text-lg lg:text-2xl text-start">{{ props.text }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
type Banner = {
    title:string,
    text:string
}
const props = withDefaults(defineProps<Banner>(),{
    title:'',
    text:''
})
</script>

<style scoped>
.apresentacao{
    @apply relative w-full overflow-hidden flex items-center h-screen
}

.apresentacao:after{content:''}
.apresentacao:after{
    @apply absolute w-full h-full bg-black/40 top-0 left-0
}
</style>