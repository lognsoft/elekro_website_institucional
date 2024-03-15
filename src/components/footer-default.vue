<template>
    <footer class="bg-black text-white">
        <div class="container mx-auto px-5">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-3 py-11 lg:py-[100px]">
                <div class="contact-container">
                    <LogoTipo/>
                </div>

                <div class="contact-container">
                    <h6>telefone:</h6>
                    <a href="javascript:void(0)" target="_blank">(00) 00000-0000</a>
                </div>

                <div class="contact-container">
                    <h6>whatsapp:</h6>
                    <a href="javascript:void(0)" target="_blank">(00) 00000-0000</a>
                </div>

                <div class="contact-container">
                    <h6>e-mail:</h6>
                    <a href="mailto:vendas@elekro.com.br?subject=Gostaria de saber mais sobre o produto" target="_blank">vendas@elekro.com.br</a>
                </div>
            </div>
            <div class="py-11 lg:py-[100px] flex flex-col md:flex-row md:items-center md:justify-between border-t-[1px] border-[#1d1d1d] gap-y-3">
                <span>&copy; 2024 <a class="hover:text-[#09aff4] duration-200 uppercase font-medium text-sm inline-block" target="_blank" href="https://logn.com.br/servicos">logn.</a> todos os direitos reservados</span>
                <ul class="flex gap-4">
                    <template v-for="midia, index in midiasSociais" :key="index">
                        <li class="text-xl md:text-2xl hover:text-[#aaaaaa] duration-200">
                            <a href="javascript:void(0)" target="_blank" :title="midia.title">
                                <Icon :name="midia.icon"/>
                            </a>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { midiasSociais } from "~/constants";
</script>

<style scoped>
.social-midia{
    @apply flex items-start justify-center gap-3 sm:order-last col-span-3 md:col-span-1
}

.contact-container{
    @apply col-span-1;
}
.contact-container:not(:last-child){
    @apply mb-9 lg:mb-0
}
.contact-container > h6{
    @apply capitalize font-bold text-xl mb-4;
}

.contact-container > a{
    @apply font-light text-xl inline-block;
}
</style>~/app/constants