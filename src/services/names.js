import api from './api.js'
import auth from './auth.js'

export default{
    getNames : (name) => {
        let code = import.meta.env.VITEAZURE_GET_NAMES_CODE
        console.log(code)
        const url = `/getNames?code=${code}==&name=${name}`;
        return api.get(url,auth)
    }

}
