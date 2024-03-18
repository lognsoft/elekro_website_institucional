<template>
    <footer class="bg-black text-white">
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
type Link = {
    sub:string,
    store:string,
    icon:string,
    href:string,
}
const links:Link[] = [
    {
        sub:'disponível na',
        store:'play store',
        icon:'simple-icons:googleplay',
        href:'javascript:void(0)',
    },
    {
        sub:'disponível na',
        store:'app store',
        icon:'uiw:apple',
        href:'javascript:void(0)',
    },
    {
        sub:'encontre-nos no',
        store:'linkedin',
        icon:'fontisto:linkedin',
        href:'https://www.linkedin.com/posts/elekro-best-price_parceiro-elekro-activity-7165984652757868544-Pol6?utm_source=share&utm_medium=member_ios',
    }
]
</script>

<style scoped>
.stores{
    @apply w-full max-w-[200px] sm:max-w-[500px] grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-2 mx-auto
}

.stores a{
    @apply w-full flex items-center justify-center gap-2 border-[1px] px-4 py-2 rounded-lg border-white hover:border-blue-400 hover:text-blue-400 duration-200
}
.icon-store{
    @apply text-3xl inline-flex items-center justify-center
}
</style>~/app/constants