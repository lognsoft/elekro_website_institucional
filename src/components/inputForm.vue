<template>
    <div>
        <div class="input border-gray-300" ref="input">
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
            />
        </div>
        <small v-show="required === true && inputValid == false" class="small-alert text-red-400">campo obrigatório</small>
    </div>
</template>

<script setup lang="ts">
const input:Ref<HTMLElement | undefined> = ref();
const inputValid = ref(true);

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
    modelValue:String
})
const model:Ref<string | undefined> = ref(props.modelValue);

const validInput = (e:Event) => {
    if(props.required){
        const el:HTMLInputElement = e.target as HTMLInputElement;
        let flag:boolean = el.validity.valid as boolean;
        if(flag && model.value !== ''){
            input.value?.classList.contains("border-gray-300") ? input.value?.classList.remove('border-gray-300') : input.value?.classList.remove('border-red-400');
            input.value?.classList.add('border-[#1c54d9]');
            inputValid.value = true;
        } else {
            input.value?.classList.contains("border-gray-300") ? input.value?.classList.remove('border-gray-300') : input.value?.classList.remove('border-[#1c54d9]');
            input.value?.classList.add('border-red-400');
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