import { defineStore } from 'pinia';
import type { Form, Option, Country, Province, City } from '~/types';

const formRevenda = defineStore('formulario-revenda',() => {
    //estados reativos
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
    const countrys:Ref<Option[]> = ref([]);
    const provinces:Ref<Option[]> = ref([]);
    const cities:Ref<Option[]> = ref([]);

    const loadingProvinces:Ref<boolean> = ref(false);
    const loadingCities:Ref<boolean> = ref(false);

    //mascaras
    const cpfCnpjMask = ():void => {
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
    const phoneMask = ():void => {
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
        stateForm.value.empresa = '';
        stateForm.value.phone = '';
        stateForm.value.fixedPhone = '';
        stateForm.value.cpf_cnpj = '';
        stateForm.value.setor = '-1';
        stateForm.value.cep = '';
        stateForm.value.pais = '-1';
        stateForm.value.cidade = '-1';
        stateForm.value.estado = '-1';
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
    watch(() => stateForm.value.estado, (value:string | undefined) => {
        stateForm.value.cidade = "-1"
        if(value !== undefined && value !== "-1") {
            getCities(value)
        }
    })

    return {
        //estados
        stateForm,
        setores,
        subjects,
        countrys,
        provinces,
        cities,
        //functions
        getCountrys,
        getProvinces,
        phoneMask,
        fixedPhoneMask,
        cpfCnpjMask,
        cepMask,
        resetForm,
        //placeholdes
        loadingCities
    }
});

export default formRevenda;