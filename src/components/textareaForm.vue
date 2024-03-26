<template>
    <div class="textarea">
        <label v-if="ico !== ''" :for="id">
            <Icon class="text-xl" :name="ico"/> <span class="text-gray-400">{{ placeholder }}</span>
        </label>
        <textarea :name="name" :placeholder="placeholder" :id="id" v-model="model"></textarea>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue','mask']);
const props = defineProps({
    ico:{
        type:String,
        default:''
    },
    id:{
        type:String,
        default:''
    },
    name:{
        type:String,
        default:'',
    },
    placeholder:{
        type:String,
        default:'',
    },
    value:{
        type:String,
        default:'',
    },
    modelValue:String
})
const model:Ref<string | undefined> = ref(props.modelValue);

watchEffect(() => {
    model.value = props.modelValue;
});
watchEffect(() => {
    emit('update:modelValue', model.value)
})


</script>

<style scoped>
.textarea{
    @apply border-[1px] border-gray-100 overflow-hidden rounded-lg
}
.textarea > label{
    @apply flex text-base items-center gap-1 border-b-[1px] border-gray-100 h-[40px] px-3 text-[#333]
}
.textarea > textarea{
    @apply w-full  px-4 py-3 min-h-[300px] mb-0 resize-y outline-none text-sm
}
</style>