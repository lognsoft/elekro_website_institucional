<template>
    <section class="py-11">
        <div class="container mx-auto px-5 md:px-3 max-w-[1200px]">
            <h2 class="text-3xl font-semibold mb-5">Entre em contato</h2>
            <form class="w-full duration-200 mx-auto">
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
                            placeholder="Estado"
                            name="estado"
                            v-model="state.estado"
                            :options="provinces"
                        />
                    </div>
                    <div class="col-span-1 sm:col-span-2">
                        <SelectForm
                            name="cidade"
                            placeholder="Cidade"
                            v-model="state.cidade"
                            :options="cities"
                            :disabled="disabledCities"
                        />
                    </div>
                    <div class="col-span-1 sm:col-span-2">
                        <SelectForm placeholder="Assunto" name="assunto" v-model="state.subject" :options="assuntos"/>
                    </div>
                    <!-- <div class="col-span-1">
                        <SelectForm
                            :placeholder="provincesLabel"
                            name="estado"
                            v-model="state.estado"
                            :options="provinces"
                        />
                    </div> -->
                </div>
                
                <div class="mb-[15px]">
                    <TextareaForm id="mensagem" name="mensagem" placeholder="Mensagem" v-model="state.message" :required="true"/>
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
    provinces,
    cities,
    phoneMask,
    fixedPhoneMask,
    cpfCnpjMask,
    cepMask,
    getProvinces,
    loadingCities
} = formRevenda();

getProvinces("3469034");

const disabledCities = computed(():boolean => {
    let flag:boolean = false;

    if(state.estado === "-1"){
        flag = true;
    } else if(loadingCities){
        flag = true;
    }

    // return state.estado === "-1" && !loadingCities ? true : false;

    return flag;
})



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