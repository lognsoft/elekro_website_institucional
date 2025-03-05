<template>
  <header
    ref="header"
    class="header"
    :class="{
      'active': navigateOpen || scrollTopPage > 1 || permanent ||route.path === '/insights' || route.path.startsWith('/insights'),
      'back-white': bgWhite,
    }"
  >
    <div class="py-3 md:px-10 pr-4 pl-3 relative z-10">
      <nav
        class="w-full max-w-[1900px] mx-auto flex justify-between items-center"
      >
        <div class="logo">
          <h1 style="display: none">Elekro</h1>
          <NuxtLink to="/" @click="navigateOpen = false">
            <img
              class="max-w-[80px]"
              src="/images/general/logo.png"
              srcset="/images/general/logo.png"
              alt=""
            />
          </NuxtLink>
        </div>
        <ul class="flex items-center gap-3 text-2xl">
          <li class="flex items-center justify-center">
            <a class="flex items-center justify-center" href="https://www.elekrobrasil.com.br/account/login/" target="_blank">
              <!-- <Icon name="solar:user-linear"/> -->
               <User/>
            </a>
          </li>
          <li class="flex items-center justify-center">
            <a class="text-white flex items-center justify-center" href="https://www.elekrobrasil.com.br/produtos/fechadura-eletronica-digital-biometria-senha-campainha-wi-fi/" target="_blank">
               <Bag/>
            </a>
          </li>
          <li class="font-light cursor-pointer text-[15px] flex justify-center items-center" ref="btnToggle">
            <Icon class="text-2xl" name="mdi-light:menu" mode="css"/>
          </li>
          
        </ul>
      </nav>
    </div>
  </header>
  <div class="navigate" ref="listRouteMenu" :class="{ active: navigateOpen }">
    <div class="navigation">
      <ul class="nav-list">
        <template v-for="(rota, index) in rotas" :key="index">
          <li class="mb-2 pb-2 overflow-hidden border-b border-[#252525]">
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
import { rotas } from "~/core/constants";
import Bag from "@/components/icons/Bag.vue";
import User from "@/components/icons/User.vue";

const bgWhite: Ref<boolean> = ref(false);
const route = useRoute();
if (route.path === "/doc") {
  bgWhite.value = true;
} else {
  bgWhite.value = false;
}

defineProps<{permanent?: true | null}>();

const navigateOpen: Ref<boolean> = ref(false);
const scrollTopPage: Ref<number> = ref(0);
const janela: Window = window as Window;

const btnToggle:Ref<HTMLDivElement | null> = ref(null);
const listRouteMenu:Ref<HTMLUListElement | null> = ref(null);

onMounted(() => {
  let newValue: number = janela.document.scrollingElement?.scrollTop as number;
  scrollTopPage.value = newValue;
  janela.addEventListener("scroll", scrollingHeaderColor);
  document.body.addEventListener("click", openNavigate);
});

const scrollingHeaderColor = (e: Event) => {
  const elementTarget: Document = e.target as Document;
  let newValue: number = elementTarget.scrollingElement?.scrollTop as number;
  scrollTopPage.value = newValue;
};

const openNavigate = (e:Event) => {
  if(btnToggle.value && listRouteMenu.value){
    const clickedElement:HTMLElement = e.target as HTMLElement;
    
    if(btnToggle.value === clickedElement || btnToggle.value.contains(clickedElement)){
      navigateOpen.value = !navigateOpen.value;
      return;
    }

    if(
      (btnToggle.value !== clickedElement || !btnToggle.value.contains(clickedElement)) &&
      (listRouteMenu.value !== clickedElement || !listRouteMenu.value.contains(clickedElement))
    ) {
      navigateOpen.value = false;
      return
    }
  }
};

watch(
  () => route.path,
  (newValue) => {
    if (newValue === "/doc") {
      bgWhite.value = true;
    } else {
      bgWhite.value = false;
    }
  },
  { deep: true }
);
</script>

<style scoped>
/* tailwind style */
.logo {
  @apply text-3xl font-extrabold cursor-pointer;
}
.header {
  @apply w-screen fixed text-slate-50 z-[999] duration-500 top-0 left-0 bg-black/80;
}

.header.back-white,
.header.active{
  @apply
  backdrop-blur-lg
  bg-black/80
  md:bg-black/80
}

.header.back-white{
  @apply
  text-white
}

.navigate {
  @apply fixed max-md:w-[290px] w-[350px] bg-black h-screen duration-700 transition-all top-0 right-[-100%] overflow-hidden
  text-white
  z-[998];
}

.navigate.active {
  @apply right-0;
}

.navigation {
  @apply pt-[10rem]  mx-auto pr-4 pl-3 md:px-10;
}

.nav-list {
  @apply text-base font-normal text-right text-white;
}
.nav-list:hover a {
  @apply opacity-70;
}

.nav-list a:hover {
  @apply hover:opacity-100 duration-200;
}
</style>
~/core/constants
