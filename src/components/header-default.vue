<template>
    <header ref="header" class="header" :class="{ 'bg-black':scrollTopPage > 0 || navigateOpen }">
        <div class="my-3 md:px-10 px-2">
            <nav class="container mx-auto flex justify-between items-center">
                <div class="logo">
                    <NuxtLink to="/">Elekro</NuxtLink>
                </div>
                <div class="cursor-pointer text-3xl flex justify-center items-center" @click="openNavigate">
                    <Icon name="fa6-solid:bars"/>
                </div>
            </nav>
        </div>
        <div class="navigate" :class="{ active:navigateOpen }">
            <div class="container mx-auto px-2 py-5">
                <ul class="navigate-list">
                    <li class="font-extrabold text-2xl md:text-4xl text-end cursor-pointer">
                        <Icon name="ic:outline-search"/>
                    </li>
                    <li class="font-extrabold text-2xl md:text-4xl text-end"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="font-extrabold text-2xl md:text-4xl text-end"><NuxtLink to="/about">Sobre</NuxtLink></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const navigateOpen = ref<bool>(false);
const scrollTopPage = ref<number>()

onMounted(() => {
    window.addEventListener("scroll", scrollingHeaderColor);
    scrollTopPage.value = window.document.scrollingElement.scrollTop;
})

const scrollingHeaderColor = (e) => {
    scrollTopPage.value = e.target.scrollingElement.scrollTop;
}

const openNavigate = () => {
    navigateOpen.value = !navigateOpen.value;
};
</script>

<style scoped>
    .logo{
        @apply text-3xl font-semibold
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

    .navigate{
        top: 100%;
        height: 0;
        overflow: hidden;
    }

    .navigate.active{
        height: 550px
    }
</style>