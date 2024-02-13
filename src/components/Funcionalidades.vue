<template>
    <section class="mb-3 bg-[url('/assets/images/bestpricebackground.jpg')] bg-no-repeat bg-cover bg-center">
        <div class="w-full h-full max-w-[2500px] mx-auto md:px-3">
            <div class="grid grid-cols-1 md:grid-cols-6 gap-3 h-full">
                <figure class="col-start-3 col-span-2 relative">
                    <div
                        class="info-plus bg-my-gray top-[18%] left-[43%]"
                        title="senha"
                    >
                        <div class="info-plus__line">
                            <div class="w-[100px] bg-my-gray h-1 rounded-e"></div>
                            senha
                        </div>
                    </div>
                    <div
                        class="info-plus bg-my-gray top-[25%] left-[35%]"
                        title="tag"
                    >
                        <div class="info-plus__line">
                            <div class="w-[100px] h-1 bg-my-gray rounded-e"></div>
                            tag
                        </div>
                    </div>
                    <div
                        class="info-plus bg-my-gray top-[48%] left-[39%]"
                        title="biometria"
                    >
                        <div class="info-plus__line-left">
                            biometria
                            <div class="w-[60px] md:w-[100px] bg-my-gray h-1 rounded-s"></div>
                        </div>
                    </div>
                    <div
                        class="info-plus bg-my-gray bottom-[12%] left-[46%]"
                        title="conexão de energia"
                    >
                        <div class="info-plus__line">
                            <div class="w-[60px] md:w-[100px] bg-my-gray h-1 rounded-e"></div>
                            conexão de energia
                        </div>
                    </div>
                    <div
                        class="info-plus bg-my-gray bottom-[12%] left-[36%]"
                        title="fechadura"
                    >
                        <!-- <Icon name="fa6-solid:plus"/> -->
                        <div class="info-plus__line-left">
                            fechadura
                            <div class="w-[60px] md:w-[100px] bg-white bg-my-gray h-1 rounded-s"></div>
                        </div>
                    </div>
                    
                    <img class="w-full" :src="image" :srcset="image" alt=""/>
                </figure>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">    
    defineProps({
        image: {
            type:String,
            default: '/images/informacoes-1.png'
        }
    })
</script>

<style scoped>
.info-plus{
    @apply absolute w-5 h-5 text-sky-500 rounded-full inline-flex items-center justify-center duration-300 
}
.bg-my-gray{
    background-color: #565352;
}
.info-plus__line{
    @apply absolute inline-flex items-center gap-1 left-[100%] text-black font-bold capitalize
}
.info-plus__line-left{
    @apply absolute inline-flex items-center gap-1 right-[100%] text-black font-bold capitalize
}
</style>