import type { ObjectForm } from "~/types";

export default interface Form{
    [name:string]:ObjectForm;
    telefone:ObjectForm;
    email:ObjectForm;
    message:ObjectForm;
}