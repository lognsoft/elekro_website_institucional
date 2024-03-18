<template>
    <footer class="bg-black text-white">
        <div class="container mx-auto px-5">
            <div class="pt-6 pb-3 stores">
                <a title="Play Store" href="javascript:void(0)" target="_blank">
                    <div class="icon-store">
                        <Icon name="simple-icons:googleplay"/>
                    </div>
                    <div>
                        <div class="uppercase text-[10px]">disponível na</div>
                        <div class="block capitalize text-xl">play store</div>
                    </div>
                </a>
                <a title="Apple Store" href="javascript:void(0)" target="_blank">
                    <div class="icon-store">
                        <Icon name="uiw:apple"/>
                    </div>
                    <div>
                        <div class="uppercase text-[10px]">disponível na</div>
                        <div class="block capitalize text-xl">app store</div>
                    </div>
                </a>
                <a title="Linkedin" href="https://www.linkedin.com/posts/elekro-best-price_parceiro-elekro-activity-7165984652757868544-Pol6?utm_source=share&utm_medium=member_ios" target="_blank">
                    <div class="icon-store">
                        <Icon name="fontisto:linkedin"/>
                    </div>
                    <div>
                        <div class="uppercase text-[10px]">encontre-nos no</div>
                        <div class="block capitalize text-xl">linkedin</div>
                    </div>
                </a>
                <!-- <a title="Apple Store" href="javascript:void(0)">
                    <span class="icon-store">
                        <Icon name="uiw:apple"/>
                    </span>
                    <span class="block capitalize">apple store</span>
                </a> -->
                <!-- <a title="Linkedin" href="https://www.linkedin.com/posts/elekro-best-price_parceiro-elekro-activity-7165984652757868544-Pol6?utm_source=share&utm_medium=member_ios" target="_blank">
                    <span class="icon-store">
                        <Icon name="jam:linkedin-square"/>
                    </span>
                    <span class="block capitalize">linkedin</span>
                </a> -->
            </div>
            <div class="text-center pb-6 pt-3 border-t-[1px] border-[#1d1d1d]">
                <figure class="mb-1">
                    <img class="max-w-[45px] inline-block" src="/images/logo-icon.png" alt="logo" srcset="/images/logo-icon.png">
                </figure>
                <p class="mb-3">Paixão por desafios; alcançar o impossível e torná-lo possível está em nosso DNA</p>
                <p class="text-[#aaaaaa] font-light text-sm">Copyright Elekro Best Price do Brasil LTDA © 2024 — Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// import { midiasSociais } from "~/constants";
</script>

<style scoped>
.stores{
    @apply w-full max-w-[900px] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mx-auto
}

.stores a{
    @apply w-full flex items-center justify-center gap-2 border-[1px] px-4 py-2 rounded-lg border-white hover:border-blue-400 hover:text-blue-400 duration-200
}
.icon-store{
    @apply text-3xl inline-flex items-center justify-center
}
</style>~/app/constants