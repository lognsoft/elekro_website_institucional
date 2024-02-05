<template>
    <Body @scroll="scrollingHeaderColor"/>
    <header class="text-white py-4 w-full fixed top-0 left-0 z-50 duration-300" :class="{ 'bg-black':scrollTopPage > 0 }">
        <div class="container mx-auto px-5 md:px-2">
            <div class="flex items-center justify-between">
                <img class="max-w-48 h-auto" src="/assets/images/logotipo-elekro.png" srcset="" alt="logotipo"/>
                <ul class="flex items-center gap-2 text-2xl">
                    <li v-for="social,index of midiasSociais" :key="index" class="hover:text-amber-600 duration-200 flex items-center justify-center">
                        <a :href="social.href" target="_blank" :title="social.title">
                            <Icon :name="social.icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <slot/>
    <FooterDefault/>
</template>

<script setup lang="ts">
import { midiasSociais } from '~/constants';

const scrollTopPage = ref<number>(0);
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
</script>