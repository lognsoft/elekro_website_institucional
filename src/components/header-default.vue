<template>
    <header ref="header" class="header" :class="{ 'bg-black':scrollTopPage > 0 || navigateOpen }">
        <div class="my-3 md:px-10 px-2">
            <nav class="container mx-auto flex justify-between items-center">
                <div class="logo">
                    <LogoTipo/>
                </div>
                <div class="font-bold cursor-pointer text-xl flex justify-center gap-2 items-center" @click="openNavigate">
                    <span>Menu</span>
                    <IconCSS class="text-2xl" name="fa6-solid:bars"/>
                </div>
            </nav>
        </div>
        <ClientOnly>
            <div class="navigate" :class="{ active:navigateOpen }">
                <div class="container mx-auto px-2 py-5">
                    <ul class="navigate-list leading-5">
                        <li class="text-end font-bold text-sm text-amber-500">
                            <a class="flex items-center gap-1" href="javascript:void(0)">
                                <IconCSS name="ic-round-phone"/>
                                TEL: (00) 00000-0000
                            </a>
                        </li>
                        <li @click="openFormSearch" class="font-extrabold text-2xl md:text-4xl text-end cursor-pointer my-4">
                            <IconCSS name="ic:outline-search"/>
                        </li>
                        <template v-for="rota of rotas" :key="rota.path">
                            <li @click="openNavigate" class="font-extrabold text-2xl md:text-4xl text-end"><NuxtLink :to="rota.path">{{ rota.pathName }}</NuxtLink></li>
                        </template>
                    </ul>
                </div>
            </div>
            <FormSearch :visible="searchOpen" @invisible="openFormSearch"/>
        </ClientOnly>
    </header>
</template>

<script setup lang="ts">
import { rotas } from '~/constants';

const searchOpen = ref<boolean>(false)
const navigateOpen = ref<boolean>(false);
const scrollTopPage = ref<number>(0);
const janela:Window = window as Window;

onMounted(() => {
    janela.addEventListener("scroll", scrollingHeaderColor);
    let newValue:number = janela.document.scrollingElement?.scrollTop as number;
    scrollTopPage.value = newValue;
});

const scrollingHeaderColor = (e:Event) => {
    const elementTarget:Document = e.target as Document;
    let newValue:number = elementTarget.scrollingElement?.scrollTop as number;
    scrollTopPage.value = newValue;
};

const openNavigate = () => {
    navigateOpen.value = !navigateOpen.value;
};
const openFormSearch = () => {
    if(navigateOpen.value) openNavigate();
    searchOpen.value = !searchOpen.value;
}
</script>

<style scoped>
    /* tailwind style */
    .logo{
        @apply text-3xl font-extrabold
    }
    .header{
        @apply w-screen fixed text-slate-50 duration-300
    }
    .navigate{
        @apply absolute w-screen bg-black duration-300
    }

    .navigate-list .router-link-active{
        @apply text-slate-400
    }

    

    /* my style */
    .header{
        z-index: 1000;
    }

    .navigate{
        top: 100%;
        height: 0;
        overflow: hidden;
    }

    .navigate.active{
        height: 550px
    }
</style>~/app/constants