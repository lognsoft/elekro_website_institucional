<template>
    <div v-show="visible" class="content-form product-search" @click="closeform">
        <div class="content-form container relative max-w-6xl mx-auto flex items-center h-full">
            <button title="fechar busca" @click="$emit('invisible')" type="button" class="text-2xl absolute top-10 right-6 cursor-pointer w-9 h-9 flex items-center justify-center bg-white text-black">
                <IconCSS name="ic:baseline-close"/>
            </button>
            <form class="my-form w-full p-6 text-center" id="searchForm" @submit.prevent="searchProduct">
                <div class="relative">
                    <input
                        placeholder="Pesquisar"
                        class="text-xl border-b-2 w-full outline-none px-1 pr-7 py-2 text-white bg-transparent border-slate-400 placeholder:text-slate-400"
                        type="text"
                        name="query-search"
                        v-model="formValue"
                    />
                    <IconCSS class="absolute right-0 top-3 text-2xl text-slate-400" name="ic:outline-search"/>
                </div>
                <MyButton class="md:hidden" tipo="submit" :reverse="true">Buscar</MyButton>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    visible:Boolean
})
const emit = defineEmits(["invisible"])

const formValue = ref<string>("");

const searchProduct = () => {
    alert(formValue.value);
}
const closeform = (e:Event) => {
    let document:HTMLElement = e.target as HTMLElement;
    if(document.classList.contains("content-form")) emit("invisible");
}
</script>

<style scoped>
    .product-search{
        @apply w-full h-screen fixed bg-black
    }
    .product-search{
        top: 0;
        left: 0;
    }
</style>