<template>
    <header ref="header" class="header" :class="{'bg-black/80 backdrop-blur-lg':navigateOpen || scrollTopPage > 1}">
        <div class="py-5 md:px-10 px-2 relative z-10">
            <nav class="w-full max-w-[1900px] mx-auto flex justify-between items-center">
                <div class="logo">
                    <NuxtLink to="/" @click="navigateOpen = false">
                        <img class="max-w-[150px]" src="/assets/images/logotipo-elekro--.png" srcset="/assets/images/logotipo-elekro--.png" alt=""/>
                    </NuxtLink>
                </div>
                <ClientOnly>
                    <div class="font-light cursor-pointer text-[15px] flex justify-center items-center" @click="openNavigate">
                        <MyIcon class="text-2xl" icon="mdi-light:menu"/>
                        <span class="w-[55px] text-center" v-if="navigateOpen === false" data-aos="fade-in">menu</span>
                        <span class="w-[55px] text-center" v-else data-aos="fade-in">close</span>
                    </div>
                </ClientOnly>
            </nav>
        </div>
    </header>
    <div class="navigate" :class="{ active:navigateOpen }">
        <div class="navigation">
            <ul class="nav-list">
                <template v-for="rota,index in rotas" :key="index">
                    <li class="mb-9 overflow-hidden">
                        <NuxtLink
                            @click="navigateOpen = false"
                            class="hover:opacity-100 duration-200"
                            :to="rota.path"
                        >
                            {{ rota.pathName }}
                        </NuxtLink>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { rotas } from '~/constants';

const navigateOpen:Ref<boolean> = ref(false);
const scrollTopPage:Ref<number> = ref(0);
const janela:Window = window as Window;

onMounted(() => {
    let newValue:number = janela.document.scrollingElement?.scrollTop as number;
    scrollTopPage.value = newValue;
    janela.addEventListener("scroll", scrollingHeaderColor)
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
        @apply w-screen fixed text-slate-50 z-50 duration-500 
    }
    .navigate{
        @apply fixed w-full bg-black h-screen duration-700 z-40 top-0 left-[-100%] overflow-hidden text-white
    }

    .navigate.active{
        @apply left-0
    }

    .navigation{
        @apply pt-[10rem] container max-w-5xl mx-auto px-2
    }

    .nav-list{
        @apply capitalize text-[30px] font-bold text-white
    }
    .nav-list:hover a{
        @apply opacity-70
    }

    .nav-list a:hover{
        @apply hover:opacity-100 duration-200
    }
</style>