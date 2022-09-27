import { getFromLS, setToLS } from './local_storage';
import {yamlToJson} from './transformers'

const raw_id = "0b0c7efa229390164d6c6299b316bc54d2cdd249";
export const configUrl = `https://gist.githubusercontent.com/pritamprasd/2383c2a6d34b6ae436412fbf82ccc457/raw/${raw_id}/site-config.yaml`

export async function get_config() {
    let config = getFromLS('config', 'json');  
    if(process.env.NEXT_PUBLIC_REFRESH_CONFIG_ALWAYS == "Yup"){
        config = null;
    }  
    if(config == null || process.env.NEXT_PUBLIC_ENABLE_CONFIG_CACHE === "Nope"){
        const res = await fetch(configUrl).catch(err => console.error(`---1 ${err}`));
        const body = await res.text();  
        console.log(`====> Default config:\n${body}`)
        config = yamlToJson(body);
        setToLS('config', config);        
    }
    return config;
}