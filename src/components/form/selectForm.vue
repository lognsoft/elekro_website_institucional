<template>
    <div>
        <p v-if="label !== ''" class="label-p">{{ label }}</p>
        <div class="select" :class="{
        'border-[#333]':!inputFocus,
        'border-[#1c54d9]':inputFocus,
        // 'bg-gray-100':disabled
        }">
            <span v-if="ico !== ''">
                <Icon :name="ico"/>
            </span>
            <select
                :disabled="disabled"
                :name="name"
                v-model="model"
                :class="{'text-gray-400':model === '-1'}"
                :required="required"
                @focus="focus"
                @focusout="focus"
            >
                <option disabled value="-1">{{ placeholder }}</option>
                <template v-if="options !== undefined">
                    <ClientOnly>
                        <template v-for="option,index in options" :key="index">
                            <option :value="option.value" class="capitalize">{{ option.option }}</option>
                        </template>
                    </ClientOnly>
                </template>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Option } from '~/core/types';
const inputFocus:Ref<boolean> = ref(false);
type SelectForm = {
    ico:string,
    placeholder:string,
    name:string,
    options:Array<Option> | undefined,
    required:boolean,
    disabled:boolean,
    modelValue:string,
    label:string,
}

const props = defineProps({
    ico: {
        type:String,
        default:''
    },
    placeholder:{
        type:String,
        default:'Selecione uma opção'
    },
    name: {
        type:String,
        default:''
    },
    options: {
        type:Array,
        default:undefined
    },
    required:{
        type:Boolean,
        default:false
    },
    disabled: {
        type:Boolean,
        default:false
    },
    modelValue:{
        type:String,
        default:'-1'
    },
    label:{
        type:String,
        default:''
    }
}) as SelectForm

const emit = defineEmits(['update:modelValue']);
// const props = withDefaults(defineProps<SelectForm>(),{
//     ico: '',
//     placeholder: 'Selecione uma opção',
//     name: '',
//     options: undefined,
//     required:false,
//     disabled: false,
//     modelValue: '-1',
//     label:''
// });

const model:Ref<string> = ref(props.modelValue);

const focus = (e:Event) => {
    e.type === "focus" ? inputFocus.value = true : inputFocus.value = false;
}

watchEffect(() => {
    model.value = props.modelValue;
});
watchEffect(() => {
    emit('update:modelValue', model.value)
})
</script>

<style scoped>
.select{
    @apply border-[1px] w-full flex rounded overflow-hidden
}
.label-p{
    @apply mb-1
}
.select > span{
    @apply w-[50px] h-[40px] flex items-center justify-center text-xl relative text-black 
}
.select > span:after{content:''}
.select > span:after{
    @apply w-full h-full absolute top-0 left-0
}

.select > select{
    @apply w-full px-2 outline-none text-sm h-[40px] bg-transparent border-none shadow-none appearance-none
}
</style>