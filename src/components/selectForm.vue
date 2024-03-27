<template>
    <div class="select">
        <span v-if="ico !== ''">
            <Icon :name="ico"/>
        </span>
        <select :name="name" v-model="model" :class="{'text-gray-400':model === '-1'}" :required="required">
            <option disabled value="-1">{{ placeholder }}</option>
            <template v-for="option,index in options" :key="index">
                <option :value="option.value" class="capitalize">{{ option.option }}</option>
            </template>
        </select>
    </div>
</template>

<script setup lang="ts">
import type { DefineProps } from 'vue';
import type { Option } from '~/types';
type SelectForm = {
    ico:string,
    placeholder:string,
    name:string,
    options:Array<Option> | undefined
    required:boolean
    modelValue:string
}

const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<SelectForm>(),{
    ico: '',
    placeholder: 'Selecione uma opção',
    name: '',
    options: undefined,
    required:false,
    modelValue: '-1',
    // ico:{
    //     type:String,
    //     default:''
    // },
    // placeholder:{
    //     type:String,
    //     default:'Selecione uma opção'
    // },
    // name:{
    //     type:String,
    //     default: ''
    // },
    // options:{
    //     type:Array,
    //     default:[]
    // },
    // modelValue:{
    //     type:String,
    //     default: '-1'
    // }
});

const model:Ref<string | undefined> = ref(props.modelValue);

watchEffect(() => {
    model.value = props.modelValue;
});
watchEffect(() => {
    emit('update:modelValue', model.value)
})
</script>

<style scoped>
.select{
    @apply border-[1px] border-gray-100 w-full flex rounded-lg overflow-hidden
}
.select > span{
    @apply w-[50px] h-[40px] flex items-center justify-center text-xl relative text-[#333] 
}
.select > span:after{content:''}
.select > span:after{
    @apply w-full h-full absolute top-0 left-0
}

.select > select{
    @apply w-full px-2 outline-none text-sm h-[40px] bg-white
}
</style>