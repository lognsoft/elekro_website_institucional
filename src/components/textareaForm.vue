<template>
    <div>
        <div class="textarea" :class="{
        'border-[#333]':!inputFocus && !inputValid,
        'border-[#1c54d9]':inputFocus || inputValid || (model?.length > 0 && inputValid),
        'border-red-400 placeholder:text-red-400':(inputFocus && !inputValid) || (model?.length >= 0 && !inputValid)
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
    @apply border-[1px] overflow-hidden rounded-lg
}
.textarea > label{
    @apply flex text-base items-center gap-1 border-b-[1px] border-[#333] h-[40px] px-3 text-[#333]
}
.textarea > textarea{
    @apply w-full  px-4 py-3 min-h-[300px] mb-0 resize-y outline-none text-sm bg-transparent
}
</style>