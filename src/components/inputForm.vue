<template>
    <div class="input">
        <label v-if="ico !== ''" :for="for">
            <Icon :name="ico"/>
        </label>
        <input v-bind="attrs"/>
    </div>
</template>

<script setup lang="ts">

defineProps({
    ico:{
        type:String,
        default:''
    },
    for:{
        type:String,
        default:''
    }
})
const attrs = useAttrs()
</script>

<style scoped>
.input {
    @apply border-[1px] border-gray-200 w-full flex rounded-lg overflow-hidden
}

.input > label{
    @apply bg-gray-200 w-[50px] h-[40px] flex items-center justify-center text-2xl
}

.input > input{
    @apply w-full outline-none h-[40px] flex items-center px-3 text-lg
}
</style>