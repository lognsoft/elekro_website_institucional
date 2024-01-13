<template>
    <footer class="bg-black text-white py-11 pb-0">
        <div class="container mx-auto px-2">
            <div class="grid grid-cols-3">
                <div class="text-5xl font-extrabold col-span-3 mb-6 md:col-span-1 md:mb-0">
                    <LogoTipo/>
                </div>
                <div class="col-span-3 md:col-span-2">
                    <h2 class="text-5xl font-extrabold mb-8">Contate-nos</h2>
                    <ul>
                        <li class="text-lg flex gap-2 items-center mb-1">
                            <MyIcon icon="ic:round-phone"/>
                            (00) 00000-0000
                        </li>
                        <li class="text-lg flex gap-2 items-center mb-1">
                            <MyIcon icon="ic:round-mail"/>
                            example@loremipsum.com
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex justify-center items-start flex-col py-10 gap-4 sm:gap-1 sm:justify-between sm:flex-row">
                <ul class="social-midia">
                    <li class="text-2xl" v-for="rede of midiasSociais" :key="rede.title">
                        <a class="text-white hover:text-amber-600 duration-200 flex items-center" :title="rede.title" :href="rede.href" target="_blank">
                            <MyIcon :icon="rede.icon"/>
                        </a>
                    </li>
                </ul>
                <p class="text-lg sm:order-first"><a class="font-black font-mono uppercase text-amber-600" href="https://logn.com.br/servicos" target="_blank">Logn</a> &copy; 2024</p>
                
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { midiasSociais } from "~/constants";
</script>

<style scoped>
.social-midia{
    @apply flex items-center gap-3 sm:order-last
}
</style>~/app/constants