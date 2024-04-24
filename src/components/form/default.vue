<script setup lang="ts">
import type { Form, FormStateData } from '~/core/types';
import formRevenda from '~/stores/formRevenda';
const mailerSubmit:string = 'luis@elekro.com.br' // 'luis@elekro.com.br';
const submitAsync:Ref<boolean> = ref(false);
const submitFlag:Ref<boolean | undefined> = ref(undefined);

const {
    stateForm:state,
    setores,
    subjects:assuntos,
    provinces,
    cities,
    phoneMask,
    fixedPhoneMask,
    cpfCnpjMask,
    cepMask,
    getProvinces,
    resetForm,
    loadingCities
} = formRevenda();


getProvinces();
const validate = ():boolean => {
    let flag:boolean = true;

    if(
        (state.nome === "" || state.nome === undefined || !state.nome.includes(" ")) ||
        (state.email === "" || state.email === undefined || !state.email.includes("@")) ||
        (state.empresa === "" || state.empresa === undefined) ||
        (state.phone === "" || state.phone === undefined || state.phone.length < 14) || 
        (state.cpf_cnpj === "" || state.cpf_cnpj === undefined || state.cpf_cnpj.length < 14) ||
        (state.estado === "-1" || state.estado === "" || state.estado === undefined) ||
        (state.cidade === "-1" || state.cidade === "" || state.cidade === undefined) || 
        (state.subject === "" || state.subject === undefined || state.subject == "-1") ||
        (state.setor === "-1" || state.setor === "" || state.setor === undefined)
    ){
        flag = false;
    }

    return flag;
}
const createForm = (obj:Form):FormStateData => {
    const {
        nome:Nome,
        email:Email,
        empresa:Empresa,
        setor:Setor,
        phone,
        fixedPhone,
        cpf_cnpj,
        cep:CEP,
        estado:Estado,
        cidade:Cidade,
        subject:Assunto,
        message:Mensagem
    } = obj;
    return {
        Assunto,
        Nome,
        Email,
        Empresa,
        Telefone: phone,
        Telefone_fixo: fixedPhone,
        'CPF/CNPJ': cpf_cnpj,
        Setor,
        CEP,
        Estado,
        Cidade,
        Mensagem
    }
}
const submit = async ():Promise<void> => {
    let valid:boolean = validate();
    if(valid){
        const estrutureForm:FormStateData = createForm(state);
        submitAsync.value = true;
        submitFlag.value = undefined;
        const { data, pending, error, refresh } = await useAsyncData(
            'submitform',
            ():Promise<any> =>$fetch(`https://formsubmit.co/ajax/${mailerSubmit}`,{
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: estrutureForm
            })
        );
        if(error.value === null){
            submitFlag.value = true;
            resetForm();
        } else {
            submitFlag.value = false;
        }

        setTimeout(() => {
            submitAsync.value = false;
        },2000)
    }
}
const disabledCities = computed(():boolean => {
    let flag:boolean = false;

    if(state.estado === "-1"){
        flag = true;
    } else if(loadingCities){
        flag = true;
    } else if(submitAsync.value){
        flag = true;
    }
    return flag;
})
const iconSubmit = computed(():string => {
    let icon:string = "eos-icons:three-dots-loading"
    if(submitFlag.value === true){
        icon = "fa6-regular:circle-check"
    } else if(submitFlag.value === false) {
        icon = "mdi:close-circle-outline"
    }
    return icon;
})
const messageSubmit = computed(():string => {
    // submitFlag === undefined ? 'Enviando' : submitFlag === true ? 'Enviado com sucesso' : 'Não foi possivel enviar o formulário :('
    let message:string = "Enviando";
    if(submitFlag.value === true){
        message = "Enviado com sucesso"
    } else if(submitFlag.value === false) {
        message = "Não foi possivel enviar o formulário :("
    }
    return message;
})



</script>

<template>
    <section class="py-11 bg-white" id="formSection">
        <div class="container mx-auto px-5 md:px-3 max-w-[1350px]">
            <H2Title class="mb-3 text-center">Inicie sua jornada ao lado da Elekro</H2Title>
            <!-- <h2 class="mb-3 text-center text-2xl md:text-4xl">
                Inicie sua jornada ao lado da Elekro
            </h2> -->
            <H4SubTitle class="mb-[20px] text-center">Contate nosso time comercial</H4SubTitle>
            <div class="relative">
                <div
                    class="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-center z-10 duration-300"
                    :class="{
                        'scale-0':!submitAsync, 'scale-100':submitAsync,
                        'text-[#1c54d9]':submitFlag === undefined,
                        'text-red-400':submitFlag === false,
                        'text-green-300':submitFlag === true,
                    }
                ">
                    <Icon class="text-8xl" :name="iconSubmit"/>
                    <h4 class="text-3xl">
                        {{ messageSubmit }}
                    </h4>
                </div>
                <form class="w-full duration-200 mx-auto" :class="{'opacity-15':submitAsync}" method="POST" @submit.prevent="submit()" disabled="true">
                    
                    <div class="mb-[15px]">
                        <FormInputForm
                            id="nome"
                            name="nome"
                            placeholder="Nome completo*"
                            :required="true"
                            :min-length="3"
                            v-model="state.nome"
                            :disabled="submitAsync"
                        />
                    </div>
                    <div class="mb-[15px]">
                        <FormInputForm
                            id="email"
                            name="email"
                            placeholder="E-mail*"
                            :required="true"
                            type="email"
                            v-model="state.email"
                            :disabled="submitAsync"
                        />
                    </div>
                    <div class="mb-[15px]">
                        <FormInputForm
                            id="empresa"
                            name="nome"
                            placeholder="Empresa*"
                            :required="true"
                            :min-length="4"
                            v-model="state.empresa"
                            :disabled="submitAsync"
                        />
                    </div>
                    <div class="mb-[15px] grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-[15px]">
                        <div class="col-span-1 sm:col-span-2">
                            <FormInputForm
                                id="celular"
                                name="celular"
                                placeholder="Celular*"
                                :max-length="15"
                                @mask="phoneMask()"
                                v-model="state.phone"
                                :required="true"
                                :min-length="14"
                                :disabled="submitAsync"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormInputForm
                                id="telefone"
                                name="telefone"
                                placeholder="Telefone"
                                :max-length="14"
                                @mask="fixedPhoneMask()"
                                v-model="state.fixedPhone"
                                :min-length="14"
                                :disabled="submitAsync"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormInputForm
                                id="cpf_cnpj"
                                name="cpf_cnpj"
                                placeholder="CPF/CNPJ*"
                                v-model="state.cpf_cnpj"
                                :required="true"
                                :min-length="14"
                                :max-length="18"
                                @mask="cpfCnpjMask()"
                                :disabled="submitAsync"
                            />
                        </div>
                        
                        <div class="col-span-1 sm:col-span-2">
                            <FormSelectForm
                                label="Setor"
                                placeholder="Setor*"
                                name="setor"
                                :options="setores"
                                :required="true"
                                v-model="state.setor"
                                :disabled="submitAsync"
                            />
                        </div>

                        <div class="col-span-1 sm:col-span-2">
                            <FormInputForm
                                id="cep"
                                name="cep"
                                placeholder="CEP*"
                                v-model="state.cep"
                                :min-length="9"
                                :max-length="9"
                                @mask="cepMask()"
                                :disabled="submitAsync"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormSelectForm
                                label="Estado*"
                                placeholder="Estado*"
                                name="estado"
                                v-model="state.estado"
                                :options="provinces"
                                :disabled="submitAsync"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormSelectForm
                                label="Cidade*"
                                name="cidade"
                                placeholder="Cidade*"
                                v-model="state.cidade"
                                :options="cities"
                                :disabled="disabledCities"
                                :required="true"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormSelectForm label="Assunto*" placeholder="Assunto*" name="assunto" v-model="state.subject" :options="assuntos" :disabled="submitAsync"/>
                        </div>
                    </div>
                    
                    <div class="mb-[15px]">
                        <FormTextareaForm id="mensagem" name="mensagem" placeholder="Mensagem*" v-model="state.message" :required="true" :disabled="submitAsync"/>
                    </div>
                    <div>
                        <MyButton class="inline-flex items-center gap-x-1" type="submit" :disabled="submitAsync">
                            Enviar
                        </MyButton>
                    </div>
                </form>
            </div>
            <div class="text-center mt-8 text-[#626262] text-lg md:text-xl">
                <H4SubTitle class="mb-3">Garanta uma proteção completa para a propriedade e o bem-estar dos seus clientes com a Elekro</H4SubTitle>
                <MyLinkTwo :icon="false" href="/elekro-one-plus" class="nav-form">Saiba mais sobre a Elekro One+</MyLinkTwo>
            </div>
        </div>
    </section>
</template>

<style scoped>
.nav-form{
    @apply duration-200 underline text-[#1a6bd9]
}
</style>