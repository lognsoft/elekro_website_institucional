<template>
    <div>
        <div class="input" :class="{
            // focus
                'border-gray-300':!inputFocus && !inputValid,
                'border-[#1c54d9]':(inputFocus && inputValid) || (model?.length > 0 && inputValid),
                'border-red-400 placeholder:text-red-400':(inputfocus && inputValid) || (model?.length >= 0 && !inputValid)
            }">
            <label v-if="ico !== ''" :for="id">
                <Icon :name="ico"/>
            </label>
            <input
                :type="type"
                :name="name"
                :minlength="minLength"
                :placeholder="placeholder"
                :id="id"
                v-model="model"
                :maxlength="maxLength"
                :required="required"
                @keyup="validInput"
                @focus="focus"
                @focusout="focus"
            />
        </div>
        <template v-if="required">
            <small v-show="required && !inputValid" class="small-alert text-red-400">campo obrigatório</small>
        </template>
    </div>
</template>

<script setup lang="ts">
const inputValid:Ref<boolean> = ref(true);
const inputFocus:Ref<boolean> = ref(false);
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
        default: null
    },
    minLength:{
        type:Number,
        default: 2,
    },
    type:{
        type:String,
        default:'text',
    },
    required:{
        type:Boolean,
        default: false
    },
    modelValue:{
        type:String,
        default: ''
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
    emit('mask')
});
watchEffect(() => {
    emit('update:modelValue', model.value)
})


</script>

<style scoped>
.input {
    @apply border-[1px] w-full flex rounded-lg overflow-hidden
}

.input > label{
    @apply w-[50px] h-[40px] flex items-center justify-center text-xl relative text-[#333]
}
.input > label:after{content:''}
.input > label:after{
    @apply w-full h-full absolute top-0 left-0
}

.input > input{
    @apply w-full outline-none h-[40px] flex items-center px-3 text-sm
}
</style>