<template>
    <section class="py-11">
        <div class="container mx-auto px-5 md:px-3">
            <TitleSection v-if="title">
                Seja um autorizado
            </TitleSection>
            <!-- <h2 v-show="submitShow" class="font-bold text-xl md:text-2xl flex items-center gap-3" :class="submitColor">
                {{ submitMessage }}
                <span v-show="submitLoading" class="text-5xl flex items-center">
                    <MyIcon icon="eos-icons:three-dots-loading"/>
                </span>
            </h2> -->
            <form class="w-full mt-6 py-5 duration-200 max-w-[1000px] mx-auto">
                <div class="px-3 mb-4">
                    <InputForm ico="entypo:email" id="email" name="email" placeholder="E-mail" />
                </div>
                <div class="px-3 mb-4">
                    <InputForm ico="mingcute:building-2-fill" id="empresa" name="nome" placeholder="Empresa" />
                </div>
                <div class="px-3 mb-4">
                    <InputForm ico="entypo:address" id="cnpj" name="cnpj" placeholder="CNPJ" />
                </div>
                <div class="px-3 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputForm ico="solar:phone-bold" id="telefone" name="telefone" placeholder="Telefone" :max-length="15" @mask="mask" v-model="teste"/>
                    <InputForm ico="majesticons:phone-retro" id="telefone_fixo" name="telefone_fixo" placeholder="Telefone Fixo (Opcional)" :max-length="14" @mask="mask2" v-model="teste2"/>
                </div>
                <div class="px-3 mb-4">
                    <SelectForm ico="bi:hand-index-fill" placeholder="Assunto" name="assunto" :options="options" v-model="teste1"/>
                </div>
                <div class="px-3 mb-4">
                    <TextareaForm ico="fa6-solid:message" id="mensagem" name="mensagem" placeholder="Mensagem"/>
                </div>
            </form>

        </div>
    </section>
</template>

<script setup lang="ts">
import formRevenda from '~/stores/formRevenda';
const teste:Ref<string> = ref('');
const teste2:Ref<string> = ref('');
const teste1:Ref<string> = ref('-1');


defineProps({
    title:{
        type:Boolean,
        default:false
    }
}) as { title:boolean }

function mask(){;
    // if(teste.value != ''){
        let newPhone:string = teste.value;
        newPhone = newPhone.replace(/\D/g,'')
        newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
        newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
        teste.value = newPhone;
    // }
}

function mask2(){;
    // if(teste.value != ''){
        let newPhone:string = teste2.value;
        newPhone = newPhone.replace(/\D/g,'')
        newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
        newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
        teste2.value = newPhone;
    // }
}

// const { inputs, phoneMask, fixedPhoneMask, cnpjMask } = formRevenda();

const options:string[] = ['revendedor', 'parceiro'];

</script>

<style scoped>
/* .wrapper-form-container{
    @apply grid grid-cols-7 items-start mb-11
}
.wrapper-form-container-t{
    @apply grid grid-cols-7 items-start mb-3
}

.input-contact{
    @apply w-full outline-none px-3 py-2 bg-gray-50
}

.label{
    @apply col-span-7 mb-1 md:mb-0 md:col-span-1 block capitalize font-bold
}
.container-input{
    @apply col-span-7 md:col-span-6 lg:col-span-4
} */

</style>