import axios from 'axios';
export default defineNuxtPlugin(() => {

    return {
        provide:{  
            api: axios,
        }
    }

});