<script setup lang="ts">
import type { Form, FormStateData } from '~/core/types';
import formRevenda from '~/stores/formRevenda';
const mailerSubmit:string = 'luis@elekro.com.br' // 'luis@elekro.com.br';
const submitAsync:Ref<boolean> = ref(false);
const submitFlag:Ref<boolean | undefined> = ref(undefined);
const popUpWarning:Ref<{visible:boolean, msg:string}> = ref({
    visible:false,
    msg:'a'
});
let timeOut:any = null;

const {
    stateForm:state,
    setores,
    subjects:assuntos,
    cities,
    provinces,
    phoneMask,
    fixedPhoneMask,
    cpfCnpjMask,
    cepMask,
    getProvinces,
    requireDataCep,
    resetForm,
    loadingCities
} = formRevenda();

getProvinces();

function alertWarning(msg:string):void {
    popUpWarning.value.visible = true;
    popUpWarning.value.msg = msg;
    timeOut = setTimeout(() => {
        popUpWarning.value.visible = false;
        popUpWarning.value.msg = '';
    }, 3000);
}

function closeAlertWarning(){
    clearTimeout(timeOut);
    popUpWarning.value.visible = false;
    popUpWarning.value.msg = '';
}

const validate = ():boolean => {

    if(state.nome === ""){
        alertWarning("Informe seu nome");
        return false;
    }
    if(state.email === "" || !state.email.includes("@")){
        alertWarning("E-mail inválido");
        return false;
    }
    if(state.razaoSocial === ""){
        alertWarning("Informe a sua razão social");
        return false;
    }
    if(state.requiredPhone === "" || state.requiredPhone.length < 15){
        alertWarning("Número de telefone incorreto ou não informado");
        return false;
    }
    if(state.phone  !== "" && state.phone.length < 14){
        alertWarning("O número de telefone opcional não é válido");
        return false;
    }
    if(state.province === "" || state.province === '-1'){
        alertWarning("Informe o nome do seu estado");
        return false;
    }
    if(state.city === "" || state.city === '-1'){
        alertWarning("Informe o nome da sua cidade");
        return false;
    }
    if(state.cnpj === "" || state.cnpj.length < 18){
        alertWarning("O CNPJ não foi informado ou é inválido");
        return false;
    }
    if(state.subject === "" || state.subject == "-1"){
        alertWarning("Informe o tipo de parceria deseja");
        return false;
    }
    if(state.setor === "-1" || state.setor === "" || state.setor === undefined){
        alertWarning("Informe um setor");
        return false;
    }

    return true;
}
const createForm = (obj:Form):FormStateData => {
    const {
        nome:Nome,
        email:Email,
        province:Estado,
        city:Cidade,
        razaoSocial,
        setor:Setor,
        phone,
        requiredPhone,
        cnpj:CNPJ,
        cep:CEP,
        subject:Assunto,
        message:Mensagem
    } = obj;

    return {
        Assunto,
        Nome,
        Email,
        Estado,
        Cidade,
        'Razão_Social':razaoSocial,
        Telefone: requiredPhone,
        Telefone_fixo: phone,
        CNPJ,
        Setor,
        CEP,
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

    if(state.province === "-1"){
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
        icon = "simple-line-icons:check"
    } else if(submitFlag.value === false) {
        icon = "ep:circle-close"
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
            <TextH2Title class="mb-[15px] text-center">Cadastre-se</TextH2Title>
            <div class="relative">
                <div class="container-alert" :class="{'scale-0':!popUpWarning.visible,'scale-100':popUpWarning.visible}">
                    <div class="warning">
                        <span @click="closeAlertWarning" class="absolute text-3xl w-8 h-8 flex items-center justify-center top-0 right-0 cursor-pointer">
                            <Icon name="material-symbols:close-small-outline-rounded"/>
                        </span>
                        <Icon class="text-4xl md:text-8xl" name="ph:warning-thin"/>
                        <h4 class="text-lg md:text-2xl">
                            {{ popUpWarning.msg }}
                        </h4>
                    </div>
                </div>
                <div class="container-alert" :class="{'scale-0':!submitAsync, 'scale-100':submitAsync}">
                    <div
                        class="submitAlert"
                        :class="{
                            'scale-0':!submitAsync, 'scale-100':submitAsync,
                            'text-[#1c54d9] border-[#1c54d9]':submitFlag === undefined,
                            'text-red-400 border-red-400':submitFlag === false,
                            'text-green-300 border-green-300':submitFlag === true,
                        }
                    ">
                        <Icon class="text-4xl md:text-8xl" :name="iconSubmit"/>
                        <h4 class="text-lg md:text-2xl">
                            {{ messageSubmit }}
                        </h4>
                    </div>
                </div>
                <form class="w-full duration-200 mx-auto" :class="{'opacity-15':submitAsync || popUpWarning.visible}" method="POST" @submit.prevent="submit()" disabled="true">
                    
                    <div class="mb-[15px]">
                        <FormInputForm
                            id="nome"
                            name="nome"
                            label="Responsável - Nome*"
                            placeholder="Digite seu nome"
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
                            label="E-mail*"
                            placeholder="Digite aqui seu e-mail"
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
                            label="Razão Social*"
                            placeholder="Digite sua razão social"
                            :required="true"
                            :min-length="4"
                            v-model="state.razaoSocial"
                            :disabled="submitAsync"
                        />
                    </div>
                    <div class="input-grid">
                        <div class="col-span-1 sm:col-span-2">
                            <FormInputForm
                                id="celular"
                                name="celular"
                                label="Telefone para contato*"
                                placeholder="(__) _____-____"
                                :max-length="15"
                                @mask="phoneMask()"
                                v-model="state.requiredPhone"
                                :required="true"
                                :min-length="14"
                                :disabled="submitAsync"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormInputForm
                                id="telefone"
                                name="telefone"
                                label="Telefone fixo"
                                placeholder="(__) ____-____"
                                :max-length="14"
                                @mask="fixedPhoneMask()"
                                v-model="state.phone"
                                :min-length="14"
                                :disabled="submitAsync"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormInputForm
                                id="cpf_cnpj"
                                name="cpf_cnpj"
                                label="CNPJ*"
                                placeholder="__.___.___/____-__"
                                v-model="state.cnpj"
                                :required="true"
                                :min-length="14"
                                :max-length="18"
                                @mask="cpfCnpjMask()"
                                :disabled="submitAsync"
                            />
                        </div>
                        
                        <div class="col-span-1 sm:col-span-2">
                            <FormSelectForm
                                label="Setor*"
                                placeholder="Setor"
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
                                label="CEP*"
                                placeholder="_____-___"
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
                                placeholder="Estado"
                                name="estado"
                                v-model="state.province"
                                :options="provinces"
                                :disabled="submitAsync"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormSelectForm
                                label="Cidade*"
                                name="cidade"
                                placeholder="Cidade"
                                v-model="state.city"
                                :options="cities"
                                :disabled="disabledCities"
                                :required="true"
                            />
                        </div>
                        <div class="col-span-1 sm:col-span-2">
                            <FormSelectForm label="Assunto*" placeholder="Que tipo de parceiro você quer ser?" name="assunto" v-model="state.subject" :options="assuntos" :disabled="submitAsync"/>
                        </div>
                    </div>
                    <div class="mb-[15px]">
                        <FormTextareaForm id="mensagem" name="mensagem" label="Mensagem*" placeholder="Mensagem" v-model="state.message" :required="true" :disabled="submitAsync"/>
                    </div>
                    <table>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                    <div>
                        <MyButton class="inline-flex items-center gap-x-1" type="submit" :disabled="submitAsync">
                            Enviar
                        </MyButton>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.nav-form{
    @apply duration-200 underline text-[#1a6bd9]
}
.form-ul{
    @apply max-w-[500px] mx-auto mb-[20px] pl-7 space-y-2 list-disc
}
.input-grid{
    @apply mb-[15px] grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-[15px]
}
.container-alert{
    @apply
    px-3
    w-full
    max-w-[500px]
    fixed
    translate-x-[-50%]
    translate-y-[-50%]
    top-[50%]
    left-[50%]
    z-[10000]
}

.warning{
    @apply
    relative
    text-center
    duration-300
    text-black
    w-full
    py-3
    rounded
    bg-white
    border-[1px]
    border-black
}
.submitAlert{
    @apply
    text-center
    w-full
    py-3
    duration-300
    rounded
    bg-white
    border-[1px]
}
</style>