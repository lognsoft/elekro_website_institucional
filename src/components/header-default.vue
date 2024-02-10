<template>
    <header ref="header" class="header bg-black">
        <div class="my-3 md:px-10 px-2">
            <nav class="w-full max-w-[1900px] mx-auto flex justify-between items-center">
                <div class="logo">
                    <LogoTipo/>
                </div>
                <div class="font-bold cursor-pointer text-xl flex justify-center gap-2 items-center" @click="openNavigate">
                    <span>Menu</span>
                    <MyIcon class="text-2xl" icon="fa6-solid:bars"/>
                </div>
            </nav>
        </div>
        <ClientOnly>
            <div class="navigate" :class="{ active:navigateOpen }">
                <div class="w-full max-w-[1900px] mx-auto h-screen relative flex items-center justify-end py-5 md:px-3">
                    <button
                        @click="navigateOpen = false"
                        type="button"
                        aria-label="fechar menu"
                        class="cursor-pointer absolute text-black top-4 text-2xl bg-white h-8 w-8 right-1 flex items-center justify-center">
                        <Icon name="ic:baseline-close"/>
                    </button>
                    <ul class="navigate-list w-full leading-5">
                        <li>
                            <ul class="flex items-center justify-start text-xl md:text-3xl gap-3">
                                <li class="hover:text-sky-500 duration-100" v-for="rede of midiasSociais" :key="rede.title" @click="openNavigate" v-if="midiasSociais.length > 0">
                                    <a :href="rede.href" :title="rede.title">
                                        <Icon :name="rede.icon"/>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="font-bold text-sm md:text-base text-sky-500 my-4">
                            <a class="flex justify-start items-center gap-1" href="javascript:void(0)">
                                <IconCSS name="ic:round-phone"/>
                                TEL: (00) 00000-0000
                            </a>
                        </li>
                        <template v-for="rota of rotas" :key="rota.path">
                            <li @click="openNavigate" class="font-extrabold text-5xl lg:text-6xl text-start mb-3"><NuxtLink class="hover:text-sky-300" :to="rota.path">{{ rota.pathName }}</NuxtLink></li>
                        </template>
                    </ul>
                </div>
            </div>
        </ClientOnly>
    </header>
</template>

<script setup lang="ts">
import { rotas, midiasSociais } from '~/constants';

const navigateOpen:Ref<boolean> = ref(false);
const scrollTopPage:Ref<number> = ref(0);
const janela:Window = window as Window;

onMounted(() => {
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
        @apply absolute w-screen bg-black duration-700
    }

    .navigate-list .router-link-active{
        @apply text-sky-500
    }

    

    /* my style */
    .header{
        z-index: 1000;
    }

    .navigate{
        top: 0;
        left: -100%;
        overflow: hidden;
        opacity: 0;
    }

    .navigate > div{
        max-width: 95%;
    }

    .navigate.active{
        left: 0;
        opacity: 1;
    }
</style>~/app/constants