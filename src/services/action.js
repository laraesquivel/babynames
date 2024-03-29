import api from './api.js'
import { API_BASE_URL } from './config.js';

export default{
    postAction : (item,action,userId,lat,lon,page,relationalItem) =>{
        let data = {"item":item,
        "tokenId" : userId,
        "action" : action,
        "lat" :lat,
        "lon" : lon,
        "page" : page,
        "relationalItem" : relationalItem
    }
        const url = `${API_BASE_URL}/postAction`;
        console.log(data)
        return api.post(url,data,);
    }
}
