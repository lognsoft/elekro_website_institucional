import { defineStore } from 'pinia';
import type { Form, Option, Country, Province, City } from '~/core/types';

type DataCep = {
    cep:string,
    logradouro:string,
    complemento:string,
    bairro:string,
    localidade:string,
    uf:string,
    ibge:string,
    gia:string,
    ddd:string,
    siafi:string
}

const formRevenda = defineStore('formulario-revenda',() => {
    //estados reativos
    const stateForm:Ref<Form> = ref({
        nome:'',
        email:'',
        razaoSocial:'',
        requiredPhone:'',
        phone:'',
        cnpj:'',
        setor:'-1',
        province:'-1',
        city:'-1',
        cep:'',
        subject:'-1',
        message:'',
    });
    const dataCep:Ref<DataCep> = ref({
        cep:'',
        logradouro:'',
        complemento:'',
        bairro:'',
        localidade:'',
        uf:'',
        ibge:'',
        gia:'',
        ddd:'',
        siafi:''
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
            option:'Revendedor Autorizado',
            value:'revendedor autorizado'
        },
        {
            option:'Instalador Autorizado',
            value:'instalador autorizado'
        }
    ]
    const countrys:Ref<Option[]> = ref([]);
    const provinces:Ref<Option[]> = ref([]);
    const cities:Ref<Option[]> = ref([]);

    const loadingCities:Ref<boolean> = ref(false);

    //mascaras
    const cpfCnpjMask = ():void => {
        let cnpj:string = stateForm.value.cnpj;
        let newCnpj:string = '';
        // if(cpf_cnpj !== undefined && cpf_cnpj.length > 14){
        //     newCpf_cnpj = cpf_cnpj;
        //     newCpf_cnpj = cpf_cnpj.replace(/\D/g,'');
        //     newCpf_cnpj = newCpf_cnpj.replace(/(\d{2})(\d)/, "$1.$2");
        //     newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1.$2");
        //     newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1/$2");
        //     newCpf_cnpj = newCpf_cnpj.replace(/(\d{4})(\d)/,"$1-$2");
            
        // } else {
        //     newCpf_cnpj = cpf_cnpj
        //     newCpf_cnpj = cpf_cnpj.replace(/\D/g,'');
        //     newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1.$2");
        //     newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1.$2");
        //     newCpf_cnpj = newCpf_cnpj.replace(/(\d{3})(\d)/, "$1-$2");
        // }
        newCnpj = cnpj;
        newCnpj = cnpj.replace(/\D/g,'');
        newCnpj = newCnpj.replace(/(\d{2})(\d)/, "$1.$2");
        newCnpj = newCnpj.replace(/(\d{3})(\d)/, "$1.$2");
        newCnpj = newCnpj.replace(/(\d{3})(\d)/, "$1/$2");
        newCnpj = newCnpj.replace(/(\d{4})(\d)/,"$1-$2");
        stateForm.value.cnpj = newCnpj;
    }
    const phoneMask = ():void => {
        let phone:string | undefined = stateForm.value.requiredPhone;
        if(phone !== undefined){
            let newPhone:string = phone;
            newPhone = newPhone.replace(/\D/g,'')
            newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
            newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
            stateForm.value.requiredPhone = newPhone;
        }
    }
    const fixedPhoneMask = () => {
        let phone:string | undefined = stateForm.value.phone;
        if(phone !== undefined){
            let newPhone:string = phone;
            newPhone = newPhone.replace(/\D/g,'')
            newPhone = newPhone.replace(/(\d{2})(\d)/,"($1) $2")
            newPhone = newPhone.replace(/(\d)(\d{4})$/,"$1-$2")
            stateForm.value.phone = newPhone;
        }
    }
    const cepMask = ():void => {
        let cep:string | undefined = stateForm.value.cep;
        if(cep !== undefined){
            let newCep = cep;
            newCep = newCep.replace(/\D/g,'');
            newCep = newCep.replace(/(\d{5})(\d)/, "$1-$2");
            stateForm.value.cep = newCep;
        }      
    }

    const resetForm = ():void => {
        stateForm.value.nome = '';
        stateForm.value.email = '';
        stateForm.value.razaoSocial = '';
        stateForm.value.requiredPhone = '';
        stateForm.value.phone = '';
        stateForm.value.cnpj = '';
        stateForm.value.setor = '-1';
        stateForm.value.cep = '';
        stateForm.value.subject = '-1';
        stateForm.value.message = '';
    }

    const getInfo = async <T>(key:string = 'country', endPoint:string = 'http://api.geonames.org/countryInfoJSON?username=alan_tavares_morais&lang=pt'):Promise<T[]> => {
        let array:Array<T> = [];
        const { data } = await useAsyncData(
            `info:${key}`,
            ():Promise<T[]> => $fetch(endPoint)
        )
        if(data.value !== null){
            array = data.value as Array<T>;
        }
        return array;
    }
    const getCountrys = async ():Promise<void> => {
        let options:Array<Option> = []; 
        let array:Array<Country> = await getInfo<Country>();
        if(array.length > 0){
            const sortedCountrys = array.sort((a,b) => a.countryName.localeCompare(b.countryName))
                options = sortedCountrys.map((val:Country) => {
                let country_single:Option = {
                    option: val.countryName,
                    value: val.geonameId.toString()
                }
                return country_single
            })
        }
        countrys.value.push(...options);
    }
    const getProvinces = async ():Promise<void> => {
        if(provinces.value.length === 0){
            let endPoint:string = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
            let options:Array<Option> = [];
            let array:Array<Province> = await getInfo<Province>('brasil', endPoint);
            if(array.length > 0){
                const sortedCountrys = array.sort((a,b) => a.nome.localeCompare(b.nome))
                    options = sortedCountrys.map((val:Province) => {
                    let country_single:Option = {
                        option: val.nome,
                        value: val.sigla
                    }
                    return country_single
                })
            }
            provinces.value.push(...options);
        }
    }
    const getCities = async (UF:string):Promise<void> => {
        let endPoint:string = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
        let options:Array<Option> = [];
        loadingCities.value = true;
        let array:Array<City> = await getInfo<City>(`city${UF}`, endPoint);
        if(array.length > 0){
            const sortedCountrys = array.sort((a,b) => a.nome.localeCompare(b.nome));
                options = sortedCountrys.map((val:City) => {
                let country_single:Option = {
                    option: val.nome,
                    value: val.nome
                }
                return country_single
            })
        }
        cities.value.length = 0;
        cities.value.push(...options);
        loadingCities.value = false;
    }
    watch(() => stateForm.value.province, (value:string | undefined) => {
        stateForm.value.city = "-1"
        if(value !== undefined && value !== "-1") {
            getCities(value)
        }
    })

    async function requireDataCep(){
        if(stateForm.value.cep?.length === 9){
            let cep = stateForm.value.cep.replace(/-/g,"");
            const { data } = await useAsyncData(
                `${cep}`,
                async ():Promise<DataCep> => await $fetch(`https://viacep.com.br/ws/${cep}/json/`)
            )
            if(data.value){
                dataCep.value.cep = data.value.cep;
                dataCep.value.logradouro = data.value.logradouro;
                dataCep.value.complemento = data.value.complemento;
                dataCep.value.bairro = data.value.bairro;
                dataCep.value.localidade = data.value.localidade;
                dataCep.value.uf = data.value.uf;
                dataCep.value.ibge = data.value.ibge;
                dataCep.value.gia = data.value.gia;
                dataCep.value.ddd = data.value.ddd;
                dataCep.value.siafi = data.value.siafi;
            }
        } else if (stateForm.value.cep?.length === 0){
            dataCep.value.cep = '';
            dataCep.value.logradouro = '';
            dataCep.value.complemento = '';
            dataCep.value.bairro = '';
            dataCep.value.localidade = '';
            dataCep.value.uf = '';
            dataCep.value.ibge = '';
            dataCep.value.gia = '';
            dataCep.value.ddd = '';
            dataCep.value.siafi = '';
        }
    }

    return {
        //estados
        stateForm,
        setores,
        subjects,
        countrys,
        provinces,
        cities,
        dataCep,
        //functions
        // getCountrys,
        getProvinces,
        phoneMask,
        fixedPhoneMask,
        cpfCnpjMask,
        cepMask,
        resetForm,
        requireDataCep,
        //placeholdes
        loadingCities
    }
});

export default formRevenda;