import { defineStore } from 'pinia';
import type { Form, Option } from '~/types';

const formRevenda = defineStore('formulario-revenda',() => {
    const stateForm:Ref<Form> = ref({
        nome:'',
        email:'',
        empresa:'',
        phone:'',
        fixedPhone:'',
        cpf_cnpj:'',
        setor:'-1',
        cep:'',
        pais:'-1',
        cidade:'-1',
        estado:'-1',
        subject:'-1',
        message:'',
    });

    const setores:Option[] = [
        {
            option:'Administrativo/Financeiro',
            value:'administrativo/financeiro'
        },
        {
            option:'Comercial',
            value:'comercial'
        },
        {
            option:'Compras',
            value:'compras'
        },
        {
            option:'Marketing',
            value:'marketing'
        },
        {
            option:'Recursos Humanos',
            value:'recursos humanos'
        },
        {
            option:'Suporte',
            value:'suporte'
        }
    ];
    const subjects:Option[] = [
        {
            option:'autorizado',
            value:'autorizado'
        },
        {
            option:'instalador',
            value:'instalador'
        }
    ]
    

    const cpfCnpjMask = () => {
        let cpf_cnpj:string = stateForm.value.cpf_cnpj as string;
        let newCpf_cnpj:string = '';
        if(cpf_cnpj !== undefined && cpf_cnpj.length > 14){
            newCpf_cnpj = cpf_cnpj;
            newCpf_cnpj = cpf_cnpj.replace(/\D/g,'');
            newCpf_cnpj = newCpf_cnpj.replace(/(\d{2})(\d)/, "$1.$2");
            newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1.$2");
            newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1/$2");
            newCpf_cnpj = newCpf_cnpj.replace(/(\d{4})(\d)/,"$1-$2");
            
        } else {
            newCpf_cnpj = cpf_cnpj
            newCpf_cnpj = cpf_cnpj.replace(/\D/g,'');
            newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1.$2");
            newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1.$2");
            newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1-$2");
        }
        stateForm.value.cpf_cnpj = newCpf_cnpj;
    }

    const phoneMask = () => {
        let phone:string | undefined = stateForm.value.phone;
        if(phone !== undefined){
            let newPhone:string = phone;
            newPhone = newPhone.replace(/\D/g,'')
            newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
            newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
            stateForm.value.phone = newPhone;
        }
    }
    const fixedPhoneMask = () => {
        let phone:string | undefined = stateForm.value.fixedPhone;
        if(phone !== undefined){
            let newPhone:string = phone;
            newPhone = newPhone.replace(/\D/g,'')
            newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
            newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
            stateForm.value.fixedPhone = newPhone;
        }
    }
    const cepMask = () => {
        let cep:string | undefined = stateForm.value.cep;
        if(cep !== undefined){
            let newCep = cep;
            newCep = newCep.replace(/\D/g,'');
            newCep = newCep.replace(/(\d{5})(\d)/, "$1-$2");
            stateForm.value.cep = newCep;
        }      
    }



    return {
        stateForm,
        setores,
        subjects,
        phoneMask,
        fixedPhoneMask,
        cpfCnpjMask,
        cepMask
    }
});

export default formRevenda;