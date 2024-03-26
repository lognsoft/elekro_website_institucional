<template>
    <section class="py-11">
        <div class="container mx-auto px-5 md:px-3 max-w-[1200px]">
            <TitleSection v-if="title">
                Seja um autorizado
            </TitleSection>
            <!-- <h2 v-show="submitShow" class="font-bold text-xl md:text-2xl flex items-center gap-3" :class="submitColor">
                {{ submitMessage }}
                <span v-show="submitLoading" class="text-5xl flex items-center">
                    <MyIcon icon="eos-icons:three-dots-loading"/>
                </span>
            </h2> -->
            <form class="w-full mt-6 py-5 duration-200 mx-auto">
                <div class="mb-[15px]">
                    <InputForm
                        id="nome"
                        name="nome"
                        placeholder="Nome completo*"
                        :required="true"
                        :min-length="3"
                        v-model="state.nome"
                    />
                </div>
                <div class="mb-[15px]">
                    <InputForm
                        id="email"
                        name="email"
                        placeholder="E-mail*"
                        :required="true"
                        type="email"
                        v-model="state.email"
                    />
                </div>
                <div class="mb-[15px]">
                    <InputForm
                        id="empresa"
                        name="nome"
                        placeholder="Empresa*"
                        :required="true"
                        :min-length="4"
                        v-model="state.empresa"
                    />
                </div>
                <div class="mb-[15px] grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-[15px]">
                    <div class="col-span-1 sm:col-span-2">
                        <InputForm
                            id="celular"
                            name="celular"
                            placeholder="Celular*"
                            :max-length="15"
                            @mask="phoneMask()"
                            v-model="state.phone"
                            :required="true"
                            :min-length="14"
                        />
                    </div>
                    <div class="col-span-1 sm:col-span-2">
                        <InputForm
                            id="telefone"
                            name="telefone"
                            placeholder="Telefone"
                            :max-length="14"
                            @mask="fixedPhoneMask()"
                            v-model="state.fixedPhone"
                            :min-length="14"
                        />
                    </div>
                    <div class="col-span-1 sm:col-span-2">
                        <InputForm
                            id="cpf_cnpj"
                            name="cpf_cnpj"
                            placeholder="CPF/CNPJ"
                            v-model="state.cpf_cnpj"
                            :required="true"
                            :min-length="14"
                            :max-length="18"
                            @mask="cpfCnpjMask()"
                        />
                    </div>
                    
                    <div class="col-span-1 sm:col-span-2">
                        <SelectForm
                            placeholder="Setor*"
                            name="setor"
                            :options="setores"
                            :required="true"
                            v-model="state.setor"
                        />
                    </div>

                    <div class="col-span-1 sm:col-span-2">
                        <InputForm
                            id="cep"
                            name="cep"
                            placeholder="CEP"
                            v-model="state.cep"
                            :min-length="9"
                            :max-length="9"
                            @mask="cepMask()"
                        />
                    </div>
                    <div class="col-span-1 sm:col-span-2">
                        <SelectForm
                            placeholder="País"
                            name="pais"
                            v-model="state.pais"
                        />
                    </div>
                    <div class="col-span-1 sm:col-span-3">
                        <SelectForm
                            name="cidade"
                            placeholder="Cidade"
                            v-model="state.cidade"
                        />
                    </div>
                    <div class="col-span-1">
                        <SelectForm
                            placeholder="Estado"
                            name="estado"
                            v-model="state.estado"
                        />
                    </div>
                </div>
                <div class="mb-[15px]">
                    <SelectForm placeholder="Assunto" name="assunto" v-model="state.subject" :options="assuntos"/>
                </div>
                <div class="mb-[15px]">
                    <TextareaForm id="mensagem" name="mensagem" placeholder="Mensagem" v-model="state.message"/>
                </div>
                <div>
                    <MyButton class="inline-flex items-center gap-x-1" type="submit">
                        Enviar
                        <Icon name="bxs:paper-plane"/>
                    </MyButton>
                </div>
            </form>

        </div>
    </section>
</template>

<script setup lang="ts">
import formRevenda from '~/stores/formRevenda';

const {
    stateForm:state,
    setores,
    subjects:assuntos,
    phoneMask,
    fixedPhoneMask,
    cpfCnpjMask,
    cepMask
} = formRevenda();



defineProps({
    title:{
        type:Boolean,
        default:false
    }
}) as { title:boolean }

// function mask(){;
//     // if(teste.value != ''){
//         let newPhone:string = teste.value;
//         newPhone = newPhone.replace(/\D/g,'')
//         newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
//         newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
//         teste.value = newPhone;
//     // }
// }

// function mask2(){;
//     // if(teste.value != ''){
//         let newPhone:string = teste2.value;
//         newPhone = newPhone.replace(/\D/g,'')
//         newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
//         newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
//         teste2.value = newPhone;
//     // }
// }



// const options:string[] = ['revendedor', 'parceiro'];



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