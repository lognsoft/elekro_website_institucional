<template>
    <NuxtLink :to="props.href" class="link" :class="{'absolute':absolute,'relative':!absolute}">
        <slot/>
        <Icon v-if="icon" class="icon" name="eva:arrow-right-fill"/>
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
    },
    icon:{
        type:Boolean,
        default: true
    }
})

</script>

<style scoped>
.link{
    @apply duration-200 text-base
}

.icon{
    @apply absolute left-[100%] top-[50%] translate-y-[-50%] duration-200
}

.link:hover > .icon{
    @apply left-[110%]
}
</style>