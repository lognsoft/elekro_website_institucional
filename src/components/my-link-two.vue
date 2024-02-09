<template>
    <NuxtLink :to="props.href" class="flex items-center gap-0 hover:gap-3 duration-200 hover:underline">
        <slot/>
        <MyIcon icon="eva:arrow-right-fill"/>
    </NuxtLink>
</template>

<script setup lang="ts">
type MyLinkTwo = {
    href?:string
}

const props:Readonly<MyLinkTwo> = defineProps({
    href:String
})

</script>