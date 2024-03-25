export type Info = {
    title: string;
    text: string;
}

export type ObjectForm = {
    message:string,
    validate:boolean
    value:string
}


//formulários
type Input = {
    value:string | undefined;
    validate:boolean | undefined;
    message:string | undefined;
}
export type VmodelRevenda = {
    nomeEmpresa:Input;
    cnpjEmpresa:Input;
    telefoneEmpresa:Input;
    telefoneFixoEmpresa:Input;
    messageEmpresa:Input;
    selectOption:Input;
}
export type FormRevenda<T> = {
    loading:boolean;
    enabled:boolean;
    campos:T;
}

//fim formulários

export type Link = {
    sub:string,
    store:string,
    icon:string,
    href:string,
}