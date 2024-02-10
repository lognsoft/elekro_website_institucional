<template>
    <footer class="bg-black text-white py-11 pb-0">
        <div class="w-full max-w-[1900px] mx-auto px-5">
            <div class="grid grid-cols-3">
                <div class="text-5xl font-extrabold text-center md:text-start col-span-3 mb-6 md:col-span-1 md:mb-0">
                    <LogoTipo class="inline-block"/>
                </div>
                <div class="col-span-3 md:col-span-2 text-center md:text-start">
                    <h2 class="text-5xl font-extrabold mb-8">Contate-nos</h2>
                    <ul>
                        <li class="text-lg flex gap-2 items-center justify-center md:justify-start mb-1">
                            <MyIcon icon="ic:round-phone"/>
                            (00) 00000-0000
                        </li>
                        <li class="text-lg flex gap-2 items-center justify-center md:justify-start mb-1">
                            <MyIcon icon="ic:round-mail"/>
                            example@loremipsum.com
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex justify-center items-center flex-col py-10 gap-10 sm:gap-1 sm:justify-between sm:flex-row">
                <ul class="social-midia">
                    <li class="text-2xl" v-for="rede of midiasSociais" :key="rede.title">
                        <a class="text-white hover:text-sky-500 duration-200 flex items-center" :title="rede.title" :href="rede.href" target="_blank">
                            <MyIcon :icon="rede.icon"/>
                        </a>
                    </li>
                </ul>
                <p class="text-lg sm:order-first"><a class="font-black font-mono uppercase text-sky-500" href="https://logn.com.br/servicos" target="_blank">Logn</a> &copy; 2024</p>
                
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