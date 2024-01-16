type ObjectForm = {
    message:string,
    validate:boolean
    value:string
}

export default interface Form{
    [name:string]:ObjectForm;
    telefone:ObjectForm;
    email:ObjectForm;
    message:ObjectForm;
}