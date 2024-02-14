import { defineStore } from 'pinia';
import type { VModelQuestion, FormRevenda } from 'pinia';

const formQuestion = defineStore('formQuestion', () => {

    const inputs:Ref<FormRevenda<VModelQuestion>> = ref({
        loading:false,
        enabled:false,
        campos:{
            nome:{
                value: '',
                validate: false,
                message: ''
            },
            telefone: {
                value: '',
                validate: false,
                message: ''
            },
            email: {
                value: '',
                validate: false,
                message: ''
            },
            message: {
                value: '',
                validate: false,
                message: ''
            }
        }
    })

    return {
        inputs
    }
})

export default formQuestion;