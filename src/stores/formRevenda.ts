import { defineStore } from 'pinia';
import type { Form, Option, Country, Province, GeoNames } from '~/types';

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

    //países estados e cidades
    const getCountrys = async ():Promise<void> => {
        let newCountrys:Array<Option> = [];
        if(countrys.value === undefined || countrys.value.length === 0){
            const { data } = await useAsyncData(
                'countrys',
                ():Promise<GeoNames<Country>> => $fetch('http://api.geonames.org/countryInfoJSON?username=alan_tavares_morais&lang=pt')
            )
            if(data.value !== null){
                const sortedCountrys = data.value.geonames.sort((a,b) => a.countryName.localeCompare(b.countryName))
                newCountrys = sortedCountrys.map((val:Country) => {
                    let country_single:Option = {
                        option: val.countryName,
                        value: val.geonameId.toString()
                    }
                    return country_single
                })
            }
        }
        countrys.value = newCountrys;
    }
    const getProvinces = async (geonameId:string):Promise<void> => {
        let newProvinces:Array<Option> = [];
        if(stateForm.value.pais !== "-1" && stateForm.value.pais != undefined){
            loadingProvinces.value = true;
            const { data } = await useAsyncData(
                `province:${geonameId}`,
                ():Promise<GeoNames<Province>> => $fetch(`http://api.geonames.org/childrenJSON?geonameId=${geonameId}&username=alan_tavares_morais&lang=pt`)
            );
            if(data.value !== null){
                const sortedProvinces = data.value.geonames.sort((a,b) => a.countryName.localeCompare(b.countryName))
                newProvinces = sortedProvinces.map((val:Province) => {
                    let country_single:Option = {
                        option: val.toponymName,
                        value: val.geonameId.toString()
                    }
                    return country_single
                })
            }
        }
        provinces.value.length = 0;
        provinces.value.push(...newProvinces);
        loadingProvinces.value = true;
    }
    const getCities = async (geonameId:string):Promise<void> => {
        let newCities:Array<Option> = [];
        if(stateForm.value.pais !== "-1" && stateForm.value.pais != undefined){
            loadingCities.value = true;
            const { data } = await useAsyncData(
                `province:${geonameId}`,
                ():Promise<GeoNames<Province>> => $fetch(`http://api.geonames.org/childrenJSON?geonameId=${geonameId}&username=alan_tavares_morais&lang=pt`)
            );
            if(data.value !== null){
                const sortedCities = data.value.geonames.sort((a,b) => a.countryName.localeCompare(b.countryName))
                newCities = sortedCities.map((val:Province) => {
                    let country_single:Option = {
                        option: val.toponymName,
                        value: val.geonameId.toString()
                    }
                    return country_single
                })
            }
        }
        cities.value.length = 0;
        cities.value.push(...newCities);
        loadingCities.value = false;
    }
    //observadores
    watch(() => stateForm.value.pais, (value:string | undefined) => {
        stateForm.value.estado = "-1"
        stateForm.value.cidade = "-1"
        if(value !== undefined && value !== "-1") {
            getProvinces(value)
        }
    })
    watch(() => stateForm.value.estado, (value:string | undefined) => {
        stateForm.value.cidade = "-1"
        if(value !== undefined && value !== "-1") {
            getCities(value)
        }
    })

    //placeholds
    const provincesLabel = computed(():string => {
        let label:string = 'Estado';
        if(stateForm.value.pais !== "-1" && loadingProvinces.value){
            label = "Carregando";
        }
        return label;
    })
    const citiesLabel = computed(():string => {
        let label:string = 'Cidade';
        if(stateForm.value.pais !== "-1" && stateForm.value.estado != "-1" && loadingCities.value){
            label = "Carregando";
        }
        return label;
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
        phoneMask,
        fixedPhoneMask,
        cpfCnpjMask,
        cepMask,
        //placeholdes
        provincesLabel,
        citiesLabel
    }
});

export default formRevenda;