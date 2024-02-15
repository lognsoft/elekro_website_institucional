<template>
    <section class="lg:h-screen mb-3 bg-[url('/assets/images/bestpricebackground.jpg')] bg-no-repeat bg-cover bg-center">
        <div class="w-full h-full max-w-[2500px] mx-auto flex items-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <figure class="order-last md:order-first">
                    <img src="/assets/celular.jpeg" alt=""/>
                </figure>
                <div>
                    <figure class="col-span-1 relative max-w-[700px] mx-auto md:mx-none lg:max-w-auto">
                        <div
                            class="info-plus bg-my-gray top-[18%] left-[43%]"
                            title="senha"
                        >
                            <div class="info-plus__line">
                                <div class="w-[100px] bg-my-gray h-1 rounded-e"></div>
                                Senha
                            </div>
                        </div>
                        <div
                            class="info-plus bg-my-gray top-[25%] left-[35%]"
                            title="tag"
                        >
                            <div class="info-plus__line">
                                <div class="w-[150px] h-1 bg-my-gray rounded-e"></div>
                                Tag
                            </div>
                        </div>
                        <div
                            class="info-plus bg-my-gray top-[48%] left-[39%]"
                            title="biometria"
                        >
                            <div class="info-plus__line-left">
                                Biometria
                                <div class="w-[60px] md:w-[100px] bg-my-gray h-1 rounded-s"></div>
                            </div>
                        </div>
                        <div
                            class="info-plus bg-my-gray bottom-[12%] left-[46%]"
                            title="conexão de energia"
                        >
                            <div class="info-plus__line">
                                <div class="w-[60px] md:w-[100px] bg-my-gray h-1 rounded-e"></div>
                                Entrada para Chave
                            </div>
                        </div>
                        <div
                            class="info-plus bg-my-gray bottom-[12%] left-[36%]"
                            title="fechadura"
                        >
                            <!-- <Icon name="fa6-solid:plus"/> -->
                            <div class="info-plus__line-left">
                                Backup de Energia
                                <div class="w-[60px] md:w-[100px] bg-white bg-my-gray h-1 rounded-s"></div>
                            </div>
                        </div>
                        
                        <img class="w-full" :src="image" :srcset="image" alt=""/>
                    </figure>
                </div>
                <div class=""></div>
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
    background-color: #3266dc;
}
.info-plus__line{
    @apply absolute inline-flex items-center gap-1 left-[100%] text-black font-bold
}
.info-plus__line-left{
    @apply absolute inline-flex items-center gap-1 right-[100%] text-black font-bold
}
</style>