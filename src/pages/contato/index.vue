<template>
    <main>
        <Head>
            <Title>Contato</Title>
            <Meta name="description" content="lorem ipsum"/>
            <Meta property="og:description" content="lorem ipsum"/>
            <Meta property="og:title" content="Elekro - Contato"/>
            <Meta property="og:image" content="/images/elekro-banner.jpg"/>
            <Meta property="og:url" content="https://meuSite.com"/>
            <Meta name="twitter:title" content="Elekro - Contato"/>
            <Meta name="twitter:description" content="lorem ipsum"/>
            <Meta name="twitter:image" content="/images/elekro-banner.jpg"/>
            <Meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <Banner>
            Contate-nos
        </Banner>
        <section class="py-11">
            <div class="container mx-auto px-5 md:px-3 py-11">
                <TitleSection>Lorem Ipsum</TitleSection>
                <h2 v-show="submitShow" class="font-bold text-xl md:text-2xl flex items-center gap-3" :class="submitColor">
                    {{ submitMessage }}
                    <span v-show="submitLoading" class="text-5xl flex items-center">
                        <MyIcon icon="eos-icons:three-dots-loading"/>
                    </span>
                </h2>
                <form class="w-full mt-6 py-5 duration-200" :class="{'opacity-25':submitForm}" @submit.prevent="validateInputs">
                    <div class="wrapper-form-container">
                        <label for="input-name" class="label">nome*</label>
                        <div class="container-input">
                            <small v-show="!state.name.validate" class="text-sm text-red-500">{{ state.name.message }}</small>
                            <input :disabled="submitForm" class="input-contact" :class="{'border-red-500 border-2':!state.name.validate}" v-model="state.name.value" type="text" name="nome" placeholder="Nome" id="input-name"/>
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-phone" class="label">telefone</label>
                        <div class="container-input">
                            <small v-show="!state.telefone.validate" class="text-sm text-red-500">{{ state.telefone.message }}</small>
                            <InputMask :disabled="submitForm" class="input-contact" :class="{'border-red-500 border-2':!state.telefone.validate}" v-model="state.telefone.value" mask="(99) 99999-9999" type="text" name="telefone" placeholder="(00) 00000-0000" id="input-phone"/>
                            
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-email" class="label">email*</label>
                        <div class="container-input">
                            <small v-show="!state.email.validate" class="text-sm text-red-500">{{ state.email.message }}</small>
                            <input :disabled="submitForm" class="input-contact" :class="{'border-red-500 border-2':!state.email.validate}" v-model="state.email.value" type="email" name="email" id="input-email" placeholder="E-mail"/>
                        </div>
                    </div>
                    <div class="wrapper-form-container-t">
                        <label for="input-message" class="label">mensagem*</label>
                        <div class="container-input">
                            <small v-show="!state.message.validate" class="text-sm text-red-500">{{ state.message.message }}</small>
                            <textarea :disabled="submitForm" class="input-contact min-h-80" :class="{'border-red-500 border-2':!state.message.validate}" v-model="state.message.value" name="mensagem" id="input-message" placeholder="Mensagem"></textarea>
                        </div>
                    </div>
                    <div class="wrapper-form-container-t">
                        <div class="label"></div>
                        <div class="container-input text-center md:text-start">
                            <MyButton class="my-0 mx-0" type="submit" :disabled="submitForm">Enviar</MyButton>
                        </div>
                    </div>
                    
                </form>
            </div>
        </section>
        <section class="py-11 bg-slate-500 text-white">
            <div class="container mx-auto px-5 md:px-3 py-11">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center md:text-start">
                    <div class="col-span-1" v-for="info,index of infos" :key="index">
                        <h3 class="text-5xl font-extrabold mb-11" data-aos="fade-up" data-aos-duration="1000">{{  info.title  }}</h3>
                        <p class="text-xl font-bold" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">{{ info.text }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">

//tipos
import type IForm from '~/interfaces/IForm';
import type { FormSubmit } from '~/types'

//axios plugin
const { $api } = useNuxtApp();

type Info = {
    title: string;
    text: string;
}

const infos = ref<Info[]>([
    {
        title: 'Lorem Ipsum 1',
        text: 'Lorem ipsum dolor 1'
    },
    {
        title: 'Lorem Ipsum 2',
        text: 'Lorem ipsum dolor 2'
    },
    {
        title: 'Lorem Ipsum 3',
        text: 'Lorem ipsum dolor 3'
    },
])


//controle de formulário
const submitForm = ref<boolean>(false);
const submitShow = ref<boolean>(false)
const submitMessage = ref<string>('Enviando');
const submitColor = ref<string>('text-cyan-400');
const submitLoading = ref<boolean>(false);

//campos de formulário
const state = ref<IForm>({
    name : {
        message: 'Campo obrigatório',
        validate: true,
        value: ''
    },
    telefone : {
        message: 'Número inválido',
        validate: true,
        value: ''
    },
    email : {
        message: 'Campo obrigatório',
        validate: true,
        value: ''
    },
    message : {
        message: 'Campo obrigatório',
        validate: true,
        value: ''
    }
});

//validação de campos
const validateInputs = ():void => {
    let validate:boolean = true;
    for(const i in state.value){
        if(i == 'telefone' && state.value[i].value == '') continue;
        if(i == 'telefone' && state.value[i].value != ''){
            if(state.value[i].value.length < 15){
                state.value[i].validate = false;
                validate = false;
                continue;
            }
        }
        if(state.value[i].value == ''){
            state.value[i].validate = false;
            validate = false;
            continue;
        }

        state.value[i].validate = true;
    }

    if(validate){
        submitForm.value = true;
        submitShow.value = true;
        submitLoading.value = true;
        submitMailer();
    }
}

//submição de formulário
const submitMailer = () => {
    const data:FormSubmit = {
        nome:state.value.name.value,
        email:state.value.email.value,
        mensagem:state.value.message.value
    }
    if(state.value.telefone.value !== '') data.telefone = state.value.telefone.value;

    $api.defaults.headers.post['Content-Type'] = 'application/json';
    $api.post("https://formsubmit.co/ajax/alantavaresmorais@gmail.com", data)
    .then((response) => {
        submitColor.value = 'text-green-500'
        submitMessage.value = 'Enviado com sucesso.';
        for(const i in state.value){
            state.value[i].value = '';
        }
    })
    .catch((error) => {
        submitColor.value = 'text-red-500'
        submitMessage.value = 'Ops!! ocorreu um erro.';
    })
    .finally(() => {
        submitLoading.value = false;
        submitForm.value = false;
        setTimeout(() => {
            submitShow.value = false;
            submitMessage.value = 'Enviando';
            submitColor.value = 'text-cyan-400';
        },3500);
    })
    
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