<template>
    <div>
        <p v-if="label != ''" class="label-p">{{ props.label }}</p>
        <div class="input" :class="{
                'border-[#333]':!inputFocus && !inputValid,
                'border-[#1c54d9]':inputFocus || inputValid || (inputValid && inputFocus),
                'border-red-400 placeholder:text-red-400':(inputFocus && model.length > 0 && model.length < props.minLength)
            }">
            <label v-if="ico !== ''" :for="id">
                <Icon :name="ico"/>
            </label>
            <input
                v-if="props.maxLength === null"
                :type="props.type"
                :name="props.name"
                :minlength="props.minLength"
                :placeholder="props.placeholder"
                :id="props.id"
                v-model="model"
                :required="props.required"
                @keyup="validInput"
                @focus="focus"
                @focusout="focus"
                :disabled="props.disabled"
            />
            <input
                v-else
                :type="props.type"
                :name="props.name"
                :minlength="props.minLength"
                :placeholder="props.placeholder"
                :id="props.id"
                v-model="model"
                :maxlength="props.maxLength"
                :required="props.required"
                @keyup="validInput"
                @focus="focus"
                @focusout="focus"
                :disabled="props.disabled"
            />
        </div>
        <template v-if="required">
            <small v-show="required && !inputValid && model.length > 0" class="small-alert text-red-400">campo obrigatório</small>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { InputForm } from "~/core/types";
const inputValid:Ref<boolean> = ref(false);
const inputFocus:Ref<boolean> = ref(false);
const emit = defineEmits(['update:modelValue','mask']);


const props = defineProps({
    label:{
        type:String,
        default:''
    },
    ico:{
        type:String,
        default: ''
    },
    id:{
        type:String,
        default:''
    },
    name:{
        type:String,
        default:''
    },
    placeholder:{
        type:String,
        default:''
    },
    value:{
        type:String,
        default:''
    },
    maxLength:{
        type:Number,
        default:null
    },
    minLength:{
        type:Number,
        default:2
    },
    type:{
        type:String,
        default:'text'
    },
    required:{
        type:Boolean,
        default:false
    },
    disabled:{
        type:Boolean,
        default:false
    },
    modelValue:String
}) as InputForm;
const model:Ref<string> = ref(props.modelValue);

const focus = (e:Event) => {
    e.type === "focus" ? inputFocus.value = true : inputFocus.value = false;
}
const validInput = (e:Event) => {
    if(props.required){
        const el:HTMLInputElement = e.target as HTMLInputElement;
        let flag:boolean = el.validity.valid as boolean;
        if(flag && model.value !== ''){
            inputValid.value = true;
        } else {
            inputValid.value = false;
        }
    }
}

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
    @apply border-[1px] w-full flex rounded overflow-hidden
}
.label-p{
    @apply mb-1
}

.input > label{
    @apply w-[50px] h-[40px] flex items-center justify-center text-xl relative text-black
}
.input > label:after{content:''}
.input > label:after{
    @apply w-full h-full absolute top-0 left-0
}

.input > input{
    @apply w-full outline-none h-[40px] flex items-center px-3 text-sm bg-transparent
}
</style>