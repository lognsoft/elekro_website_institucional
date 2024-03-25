import { defineStore } from 'pinia';
import { z } from 'zod';
import type { Form } from '~/types';

const formRevenda = defineStore('formulario-revenda',() => {
    // const defaultSchema = z.object({
    //     email
    // })

    const stateForm:Ref<Form> = ref({
        email:undefined,
        empresa:undefined,
        cnpj:undefined,
        phone:undefined,
        fixedPhone:undefined,
        subject:undefined,
        message:undefined,
    })
    

    // const cnpjMask = () => {
    //     let cnpj:string | undefined = inputs.value.campos.cnpjEmpresa.value;

    //     if(cnpj !== undefined){
    //         let newCnpj: string = cnpj;
    //         newCnpj = cnpj.replace(/\D/g,'');
    //         newCnpj = newCnpj.replace(/(\d{2})(\d)/, "$1.$2");
    //         newCnpj = newCnpj.replace(/(\d{3})(\d)/, "$1.$2");
    //         newCnpj = newCnpj.replace(/(\d{3})(\d)/, "$1/$2");
    //         newCnpj = newCnpj.replace(/(\d{4})(\d)/,"$1-$2");
    //         inputs.value.campos.cnpjEmpresa.value = newCnpj;
    //     }
    // }

    // const phoneMask = () => {
    //     let phone:string | undefined = inputs.value.campos.telefoneEmpresa.value;
    //     if(phone !== undefined){
    //         let newPhone:string = phone;
    //         newPhone = newPhone.replace(/\D/g,'')
    //         newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
    //         newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
    //         inputs.value.campos.telefoneEmpresa.value = newPhone;
    //     }
    // }
    // const fixedPhoneMask = () => {
    //     let phone:string | undefined = inputs.value.campos.telefoneFixoEmpresa.value;
    //     if(phone !== undefined){
    //         let newPhone:string = phone;
    //         newPhone = newPhone.replace(/\D/g,'')
    //         newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
    //         newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
    //         inputs.value.campos.telefoneFixoEmpresa.value = newPhone;
    //     }
    // }



    return {
        stateForm,
        // phoneMask,
        // fixedPhoneMask,
        // cnpjMask
    }
});

export default formRevenda;