<template>
    <main>
        <Banner>
            Checkout
        </Banner>
        <section class="py-11">
            <div class="container mx-auto py-11 px-5 md:px-3">
                <TitleSection>Payment</TitleSection>
                <h2 v-show="submitShow" class="font-bold text-xl md:text-2xl flex items-center gap-3" :class="submitColor">
                    {{ submitMessage }}
                    <span v-show="submitLoading" class="text-5xl flex items-center">
                        <MyIcon icon="eos-icons:three-dots-loading"/>
                    </span>
                </h2>
                <form class="w-full mt-6 py-5 duration-200" :class="{'opacity-25':submitForm}" @submit.prevent="validateInputs">
                    <div class="wrapper-form-container">
                        <label for="firstName" class="label">nome completo*</label>
                        <div class="container-input">
                            <small v-show="!state.fullName.validate" class="text-sm text-red-500">{{ state.fullName.message }}</small>
                            <input
                                :disabled="submitForm"
                                class="input-contact"
                                :class="{'border-red-500 border-2':!state.fullName.validate}"
                                v-model="state.fullName.value"
                                type="text"
                                name="firstName"
                                placeholder="Digite seu nome"
                                id="firstName"
                            />
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-email" class="label">seu email*</label>
                        <div class="container-input">
                            <small v-show="!state.email.validate" class="text-sm text-red-500">{{ state.email.message }}</small>
                            <input
                                :disabled="submitForm"
                                class="input-contact"
                                :class="{'border-red-500 border-2':!state.email.validate}"
                                v-model="state.email.value"
                                type="email"
                                name="email"
                                id="input-email"
                                placeholder="Digite seu e-mail"
                            />
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-email-confirm" class="label">confirme seu email*</label>
                        <div class="container-input">
                            <small v-show="!state.confirmEmail.validate" class="text-sm text-red-500">{{ state.confirmEmail.message }}</small>
                            <input
                                :disabled="submitForm"
                                class="input-contact"
                                :class="{'border-red-500 border-2':!state.confirmEmail.validate}"
                                v-model="state.confirmEmail.value"
                                type="email"
                                name="email"
                                id="input-email-confirm"
                                placeholder="Confirme seu e-mail"
                            />
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label class="label">Método de pagamento*</label>
                        <div class="container-input">
                            <small v-show="!state.paymentType.validate" class="text-sm text-red-500">{{ state.paymentType.message }}</small>
                            <!-- <input :disabled="submitForm" class="input-contact" :class="{'border-red-500 border-2':!state.paymentType.validate}" v-model="state.paymentType.value" type="email" name="email" id="input-email" placeholder="E-mail"/> -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-3">
                                <template v-for="method,index of methods" :key="index">
                                    <input
                                        class="hidden"
                                        type="radio"
                                        name="payment"
                                        v-model="state.paymentType.value"
                                        :value="method.type"
                                        :id="`check-${index}`"
                                    /> 
                                    <label
                                        class="flex items-center justify-center border-2 p-3 min-h-24 text-base md:text-xl gap-2 cursor-pointer duration-200"
                                        :class="{'text-amber-600 border-amber-600': state.paymentType.value === method.type, 'text-slate-400 border-slate-300':state.paymentType.value !== method.type}"
                                        :for="`check-${index}`"
                                    >
                                        <span class="flex items-center justify-center pointer-events-none">
                                            <Icon :name="method.icon"/>
                                        </span>
                                        <span class="pointer-events-none">{{ method.type }}</span>
                                    </label>
                                </template>
                            </div>
                            <div class="border-2 border-slate-300 p-3 rounded">
                                <template v-if="state.paymentType.value === 'Cartão de crédito'">
                                    <div class="mb-5">
                                        <label class="text-sm font-bold">Nome*</label>
                                        <input class="input-contact" type="text" name="nameCard" placeholder="Digite o nome impresso no cartão" />
                                    </div>
                                    <div class="mb-5">
                                        <label class="text-sm font-bold">Número do cartão*</label>
                                        <input class="input-contact" type="text" name="numberCard" placeholder="Digite o nome impresso no cartão" />
                                    </div>
                                    <div class="mb-5">
                                        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                            <div>
                                                <label class="text-sm font-bold" for="">Mês</label>
                                                <select class="p-2 outline-none w-full">
                                                    <option v-for="number of 12" :key="number" :value="number < 10 ? '0' + number: number">{{ number < 10 ? '0' + number: number }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label class="text-sm font-bold">Ano</label>
                                                <select class="p-2 outline-none w-full">
                                                    <option v-for="number of computedYears" :key="number" value="">{{ number }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label class="text-sm font-bold">CVV</label>
                                                <input class="p-2 outline-none w-full" type="text" name="cv" placeholder="cvv"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-5">
                                        <select>
                                            <option v-for="number of 12" :key="number" :value="(1500 / number + 2).toFixed(2)">{{ number }}x de {{ (1500 / number + 2).toFixed(2) }}</option>
                                        </select>
                                    </div>
                                </template>
                                <template v-else-if="state.paymentType.value === 'Boleto'">
                                    <div class="mb-5">
                                        <label class="text-sm font-bold">CPF/CNPJ</label>
                                        <input class="input-contact" type="text" name="cpf_cnpj" placeholder="Digite o nome impresso no cartão" />
                                        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                                            <div class="px-5 py-11 border-2 border-slate-200">
                                                <span class="text-slate-400 text-2xl">
                                                    <Icon name="ph:calendar-fill"/>
                                                </span>
                                                <h2 class="text-lg font-mono mb-2">Pague até a data de vencimento</h2>
                                                <p class="text-sm">Faça o pagamento até a data de vencimento e garanta seu acesso ao produto.</p>
                                            </div>
                                            <div class="px-5 py-11 border-2 border-slate-200">
                                                <span class="text-slate-400 text-2xl">
                                                    <Icon name="gala:clock"/>
                                                </span>
                                                <h2 class="text-lg font-mono mb-2">Aguarde a aprovação do pagamento</h2>
                                                <p class="text-sm">Pagamentos com boleto levam até 3 dias úteis para serem compensados.</p>
                                            </div>
                                            <div @click="alterPayment" class="px-5 py-11 border-2 border-slate-200 cursor-pointer">
                                                <span class="text-2xl text-cyan-400">
                                                    <Icon name="ic:sharp-pix"/>
                                                </span>
                                                <h2 class="text-lg font-mono text-cyan-400 mb-2">Pague com Pix e tenha acesso imediato ao produto</h2>
                                                <p class="text-sm">O pagamento leva apenas alguns segundos para ser processado. Pague com Pix</p>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-form-container-t">
                        <div class="label"></div>
                        <div class="container-input text-center md:text-start">
                            <MyButton class="my-0 mx-0" type="submit" :disabled="submitForm">lorem Ipsum</MyButton>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import type IPayment from "~/interfaces/IPayment";
import { methods } from "~/constants";

const submitForm:Ref<boolean> = ref<boolean>(false);
const submitShow:Ref<boolean> = ref(false)
const submitMessage:Ref<string> = ref('Enviando');
const submitColor:Ref<string> = ref('text-cyan-400');
const submitLoading:Ref<boolean> = ref(false);




const state:Ref<IPayment> = ref({
    fullName: {
        message:"",
        value:"",
        validate: true
    },
    email:{
        message:"",
        value:"",
        validate: true
    },
    confirmEmail:{
        message: "",
        value: "",
        validate: true
    },
    paymentType: {
        message: "",
        value: methods[0].type,
        validate: true
    }
})

const computedYears = computed(() => {
    const years:number[] = [];
    const date:Date = new Date();

    let year:number = date.getFullYear() % 100;

    years.push(year);

    for(let i:number = year + 1; i < (year + 34); i++){
        years.push(i);
    }

    return years
})

const alterPayment = ():void => {
    state.value.paymentType.value = "Pix";
}

//validação de campos
const validateInputs = ():void => {
    console.log(state.value);
}

//submição de formulário
const submitMailer = ():void => {
    
    
}

</script>

<style scoped>
.wrapper-form-container{
    @apply grid grid-cols-7 items-start mb-11
}
.wrapper-form-container-t{
    @apply grid grid-cols-7 items-start mb-3
}

.input-contact{
    @apply w-full outline-none px-3 py-2 bg-white
}

.label{
    @apply col-span-7 mb-1 md:mb-0 md:col-span-1 block capitalize font-bold
}
.container-input{
    @apply col-span-7 md:col-span-6 lg:col-span-4
}
</style>