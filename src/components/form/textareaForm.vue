<template>
    <div>
        <p v-if="label !== ''" class="label-p">{{ label }}</p>
        <div class="textarea" :class="{
            'border-[#333]':!inputFocus && !inputValid,
            'border-[#1c54d9]':inputFocus || inputValid || (inputValid && inputFocus),
            'border-red-400 placeholder:text-red-400':(inputFocus && model.length > 0 && model.length < props.minLength)
        }">
            <label v-if="ico !== ''" :for="id">
                <Icon class="text-xl" :name="ico"/> <span class="text-gray-400">{{ placeholder }}</span>
            </label>
            <textarea
                :name="name"
                :placeholder="placeholder"
                :id="id"
                v-model="model"
                :required="required"
                @keyup="validInput"
                @focus="focus"
                @focusout="focus"
                :disabled="disabled"
                :minlength="minLength"
            ></textarea>
        </div>
        <small v-show="required === true && inputValid == false && model.length > 0" class="small-alert text-red-400">campo obrigatório</small>
    </div>
</template>

<script setup lang="ts">
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
    required:{
        type:Boolean,
        default:false,
    },
    disabled:{
        type:Boolean,
        default:false,
    },
    minLength:{
        type:Number,
        default:6
    },
    modelValue:{
        type:String,
        default:''
    }
})
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
});
watchEffect(() => {
    emit('update:modelValue', model.value)
})


</script>

<style scoped>
.textarea{
    @apply border-[1px] overflow-hidden rounded
}
.textarea > label{
    @apply flex text-base items-center gap-1 border-b-[1px] border-[#333] h-[40px] px-3 text-black
}
.textarea > textarea{
    @apply w-full  px-4 py-3 min-h-[300px] mb-0 resize-y outline-none text-sm bg-transparent
}
.label-p{
    @apply mb-1
}
</style>