<template>
    <div class="input">
        <label v-if="ico !== ''" :for="id">
            <Icon :name="ico"/>
        </label>
        <input type="text" :name="name" :placeholder="placeholder" :id="id" v-model="model" :maxlength="maxLength"/>
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
    maxLength:{
        type:Number,
        default: '200'
    },
    modelValue:String
})
const model:Ref<string | undefined> = ref(props.modelValue);

watchEffect(() => {
    model.value = props.modelValue;
    emit('mask')
});
watchEffect(() => {
    emit('update:modelValue', model.value)
})


</script>

<style scoped>
.input {
    @apply border-[1px] border-gray-100 w-full flex rounded-lg overflow-hidden
}

.input > label{
    @apply w-[50px] h-[40px] flex items-center justify-center text-2xl relative
}
.input > label:after{content:''}
.input > label:after{
    @apply w-full h-full absolute top-0 left-0
}

.input > input{
    @apply w-full outline-none h-[40px] flex items-center px-3 text-lg
}
</style>