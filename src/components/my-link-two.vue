<template>
    <NuxtLink :to="props.href" class="link" :class="{'absolute':absolute,'relative':!absolute}">
        <slot/>
        <MyIcon class="icon" icon="eva:arrow-right-fill"/>
    </NuxtLink>
</template>

<script setup lang="ts">
type MyLinkTwo = {
    href?:string
}

const props:Readonly<MyLinkTwo> = defineProps({
    href:{
        type:String,
        default: "",
    },
    absolute:{
        type:Boolean,
        default: false,
    }
})

</script>

<style scoped>
.link{
    @apply flex items-center gap-0 duration-200 hover:underline
}

.icon{
    @apply absolute left-[100%] duration-200
}

.link:hover > .icon{
    @apply left-[110%]
}
</style>