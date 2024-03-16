<template>
    <footer class="bg-black text-white">
        <div class="container mx-auto px-5">
            <div class="text-center pt-11 pb-6">
                <figure class="mb-3">
                    <img class="max-w-full inline-block" src="/images/logo-icon.png" alt="logo" srcset="/images/logo-icon.png">
                </figure>
                <p class="text-[#aaaaaa] font-light mb-4 text-sm">Copyright Elekro Best Price do Brasil LTDA © 2024 — Todos os direitos reservados.</p>
                <div class="stores">
                    <a href="javascript:void(0)">
                        <span class="icon-store">
                            <Icon name="simple-icons:googleplay"/>
                        </span>
                        <span class="block capitalize">play store</span>
                    </a>
                    <a href="javascript:void(0)">
                        <span class="icon-store">
                            <Icon name="grommet-icons:apple-app-store"/>
                        </span>
                        <span class="block capitalize">apple play</span>
                    </a>
                </div>
            </div>
            <div class="pb-11 pt-6 text-center border-t-[1px] border-[#1d1d1d]">
                <span class="font-light inline-block">&copy; 2024 Elekro</span>
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