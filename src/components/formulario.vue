<template>
    <section class="py-11">
        <div class="w-full max-w-[1900px] mx-auto px-5 md:px-3">
            <template v-if="title">
                <TitleSection v-show="alterForm === 'revendedor'">
                    Seja um revendedor
                </TitleSection>
                <TitleSection v-show="alterForm === 'default'">
                    Fale conosco
                </TitleSection>
            </template>
            <!-- <h2 v-show="submitShow" class="font-bold text-xl md:text-2xl flex items-center gap-3" :class="submitColor">
                {{ submitMessage }}
                <span v-show="submitLoading" class="text-5xl flex items-center">
                    <MyIcon icon="eos-icons:three-dots-loading"/>
                </span>
            </h2> -->
            <form v-show="alterForm === 'revendedor'" class="w-full mt-6 py-5 duration-200">
                <div class="wrapper-form-container">
                    <label for="default_nome_empresa" class="label">nome da empresa*</label>
                    <div class="container-input">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <input
                            class="input-contact"
                            type="text"
                            name="default_nome_empresa"
                            placeholder="Nome"
                            id="default_nome_empresa"
                            v-model="form2.campos.nomeEmpresa.value"
                        />
                    </div>
                </div>
                <div class="wrapper-form-container">
                    <label for="default_cnpj" class="label">CNPJ*</label>
                    <div class="container-input">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <input
                            class="input-contact"
                            type="text"
                            name="default_cnpj"
                            maxlength="18"
                            placeholder="CNPJ" id="default_cnpj"
                            v-model="form2.campos.cnpjEmpresa.value"
                            @input="cnpjMask"
                        />
                    </div>
                </div>
                <div class="wrapper-form-container">
                    <label for="default_telefone" class="label">Telefone*</label>
                    <div class="container-input">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <input
                            class="input-contact"
                            type="text"
                            name="default_telefone"
                            placeholder="(00) 00000-0000"
                            id="default_telefone"
                            maxlength="15"
                            v-model="form2.campos.telefoneEmpresa.value"
                            @input="phoneMask"
                        />
                    </div>
                </div>
                <div class="wrapper-form-container">
                    <label for="default_telefone_fixo" class="label">Telefone fixo</label>
                    <div class="container-input">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <input
                            class="input-contact"
                            type="text"
                            name="default_telefone_fixo"
                            placeholder="(00) 0000-0000 (opcional)"
                            id="default_telefone_fixo"
                            maxlength="14"
                            v-model="form2.campos.telefoneFixoEmpresa.value"
                            @input="fixedPhoneMask"
                        />
                    </div>
                </div>
                <div class="wrapper-form-container-t">
                    <label for="default_message" class="label">Mensagem</label>
                    <div class="container-input">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <textarea
                            class="input-contact min-h-[300px]"
                            name="default_message"
                            id="default_message"
                            v-model="form2.campos.messageEmpresa.value"
                        ></textarea>
                    </div>
                </div>
                <div class="wrapper-form-container-t">
                    <div class="label"></div>
                    <div class="container-input text-center md:text-start md:col-start-2">
                        <MyButton class="my-0 mx-0 inline-flex items-center gap-2" type="submit">
                            Enviar
                            <Icon name="fa-solid:paper-plane"/>
                        </MyButton>
                        <button type="button" @click="alterForm = 'default'" class="text-sky-500 underline ml-3">Fale conosco</button>
                    </div>
                </div> 
            </form>

            <form v-show="alterForm === 'default'" class="w-full mt-6 py-5 duration-200">
                <div class="wrapper-form-container">
                    <div for="nome_completo" class="label">Nome*</div>
                    <div class="container-input text-center md:text-start">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <input
                            class="input-contact"
                            type="text"
                            name="nome_completo"
                            placeholder="Nome"
                            id="nome_completo"
                            v-model="form1.campos.nome.value"
                        />
                    </div>
                </div>
                <div class="wrapper-form-container">
                    <div for="telefone" class="label">Telefone*</div>
                    <div class="container-input text-center md:text-start">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <input
                            class="input-contact"
                            type="text"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            id="telefone"
                            maxlength="15"
                            v-model="form1.campos.telefone.value"
                        />
                    </div>
                </div>
                <div class="wrapper-form-container">
                    <div for="email" class="label">E-mail*</div>
                    <div class="container-input text-center md:text-start">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <input
                            class="input-contact"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            id="email"
                            v-model="form1.campos.email.value"
                        />
                    </div>
                </div>
                <div class="wrapper-form-container-t">
                    <label for="message" class="label">Mensagem</label>
                    <div class="container-input">
                        <!-- <small v-show="!state.name.validate" class="text-sm text-red-500">lero</small> -->
                        <textarea
                            class="input-contact min-h-[300px]"
                            name="message"
                            id="message"
                            v-model="form1.campos.message.value"
                        ></textarea>
                    </div>
                </div>
                <div class="wrapper-form-container-t">
                    <div class="label"></div>
                    <div class="container-input text-center md:text-start md:col-start-2">
                        <MyButton class="my-0 mx-0 inline-flex items-center gap-2" type="submit">
                            Enviar
                            <Icon name="fa-solid:paper-plane"/>
                        </MyButton>
                        <button type="button" @click="alterForm = 'revendedor'" class="text-sky-500 underline ml-3">Seja um revendedor</button>
                    </div>
                </div> 
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import formRevenda from '~/stores/formRevenda';
import formQuestion from '~/stores/formQuestion';

defineProps({
    title:{
        type:Boolean,
        default:false
    }
}) as { title:boolean }
const alterForm:Ref<string> = ref('revendedor');

const { inputs:form2, phoneMask, fixedPhoneMask, cnpjMask } = formRevenda();
const { inputs:form1 } = formQuestion();

</script>

<style scoped>
.wrapper-form-container{
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
}
</style>