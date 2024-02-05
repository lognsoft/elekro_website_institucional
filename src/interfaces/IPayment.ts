import type { ObjectForm } from "~/types";

export default interface Payment {
    fullName:ObjectForm;
    email:ObjectForm;
    confirmEmail:ObjectForm;
    paymentType:ObjectForm;
}