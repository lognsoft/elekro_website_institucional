<template>
    <footer class="bg-black text-white">
        <div class="container mx-auto px-5">
            <div class="pt-6 pb-3 text-center stores">
                <a title="Play Store" href="javascript:void(0)">
                    <span class="icon-store">
                        <Icon name="simple-icons:googleplay"/>
                    </span>
                    <span class="block capitalize">play store</span>
                </a>
                <a title="Apple Store" href="javascript:void(0)">
                    <span class="icon-store">
                        <Icon name="grommet-icons:apple-app-store"/>
                    </span>
                    <span class="block capitalize">apple store</span>
                </a>
                <a title="Linkedin" href="https://www.linkedin.com/posts/elekro-best-price_parceiro-elekro-activity-7165984652757868544-Pol6?utm_source=share&utm_medium=member_ios" target="_blank">
                    <span class="icon-store">
                        <Icon name="jam:linkedin-square"/>
                    </span>
                    <span class="block capitalize">linkedin</span>
                </a>
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
    @apply flex items-center justify-center text-center gap-5
}
.icon-store{
    @apply text-2xl mb-2 inline-block
}
</style>~/app/constants