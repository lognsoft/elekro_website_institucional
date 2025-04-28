<template>
    <footer class="bg-black text-white relative z-50">
        <div class="container mx-auto px-5">
            <div class="pt-6 pb-3 stores">


                <template v-for="link,index in links" :key="index">
                    <a class="col-span-1" :title="link.store" :href="link.href" target="_blank">
                        <div class="icon-store">
                            <Icon :name="link.icon"/>
                        </div>
                        <div>
                            <div class="uppercase text-[8px]">{{ link.sub }}</div>
                            <div class="block capitalize text-lg">{{ link.store }}</div>
                        </div>
                    </a>
                </template>



            </div>
            <div class="border-t-[1px] border-[#1d1d1d]">

                <div class="grid grid-cols-1 sm:grid-cols-2 max-w-[650px] w-full mx-auto gap-x-2">

                    <template v-for="card,index in cards" :key="index">
                        <div class="py-3 px-2 text-center">
                            <h4 class="text-sm font-bold mb-1">{{ card.title }}</h4>
                            <a class="text-sm font-light" :href="`mailto:${card.email}`" target="_blank">{{ card.email }}</a>
                        </div>
                    </template>

                </div>

            </div>
            <div class="text-center pb-6 pt-3 border-t-[1px] border-[#1d1d1d]">
                <!-- <figure class="mb-1">
                    <img class="max-w-[40px] inline-block" src="/images/logo-icon.png" alt="logo" srcset="/images/logo-icon.png">
                </figure> -->
                <p class="font-light text-sm">Tecnologia que protege, inovação que conecta</p>
                <p class="text-[#aaaaaa] font-light text-xs">Copyright Elekro Best Price do Brasil LTDA © 2024 — Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import type { Link } from "~/core/types";
const links:Link[] = [
    {
        sub:'disponível na',
        store:'google play',
        icon:'simple-icons:googleplay',
        href:'https://play.google.com/store/apps/details?id=com.tuya.smartlife&hl=en_US&pli=1',
    },
    {
        sub:'disponível na',
        store:'app store',
        icon:'uiw:apple',
        href:'https://apps.apple.com/br/app/smart-life-smart-living/id1115101477',
    },
    {
        sub:'encontre-nos no',
        store:'linkedin',
        icon:'fontisto:linkedin',
        href:'https://www.linkedin.com/company/elekro-best-price/',
    }
]
type Card = {
    title:string,
    email:string,
    subject?:string,
}
const cards:Card[] = [
    {
        title:'Comercial',
        email:'comercial@elekro.com.br'
    },
    {
        title:'Suporte',
        email:'suporte@elekro.com.br'
    },
    // {
    //     title:'Marketing',
    //     email:'marketing@elekro.com.br'
    // }
]
</script>

<style scoped>
.stores{
    @apply w-full max-w-[200px] sm:max-w-[650px] grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-2 mx-auto
}

.stores a{
    @apply w-full flex items-center justify-center gap-2 border-[1px] px-4 py-2 rounded-lg border-white
}
.icon-store{
    @apply text-3xl inline-flex items-center justify-center
}
</style>~/app/constants~/core/types