import axios from 'axios';
export default defineNuxtPlugin(() => {

    return {
        provide:{  
            useAxios: axios,
        }
    }

});