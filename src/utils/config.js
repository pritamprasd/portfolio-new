import { getFromLS, setToLS } from '../storage_apis/local_storage';
import {yamlToJson} from './transformers'

export const configUrl = "https://gist.githubusercontent.com/pritamprasd/2383c2a6d34b6ae436412fbf82ccc457/raw/1105e19d53f9c601da6f375fc3a2fe8f4c785182/site-config.yaml"

export async function get_config() {
    let config = getFromLS('config', 'json');    
    if(config == null || process.env.NEXT_PUBLIC_ENABLE_CONFIG_CACHE === "Nope"){
        const res = await fetch(configUrl).catch(err => console.error(`---1 ${err}`));
        const body = await res.text();  
        console.log(`====> Default config:\n${body}`)
        config = yamlToJson(body);
        setToLS('config', config);        
    }
    return config;
}