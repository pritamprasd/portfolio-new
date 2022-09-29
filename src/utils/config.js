import { getFromLS, setToLS } from './local_storage';
import {yamlToJson} from './transformers'

const raw_id = "065128eca310da7bb303fd111fd85481548b0c1d";
export const configUrl = `https://gist.githubusercontent.com/pritamprasd/2383c2a6d34b6ae436412fbf82ccc457/raw/${raw_id}/site-config.yaml`

export async function get_config() {
    // let config = getFromLS('config', 'json');
    let config = null;  
    // if(process.env.NEXT_PUBLIC_REFRESH_CONFIG_ALWAYS == "Yup"){
    //     config = null;
    // }  
    // if(config == null || process.env.NEXT_PUBLIC_ENABLE_CONFIG_CACHE === "Nope"){
    //     const res = await fetch(configUrl).catch(err => console.error(`---1 ${err}`));
    //     const body = await res.text();  
    //     console.log(`====> Default config:\n${body}`)
    //     config = yamlToJson(body);
    //     setToLS('config', config);        
    // }
    if(config == null){
        const body = await fetch('/config/site-config.yaml')
                            .then(r => r.text())
                            .catch(e => console.log(`config read error: ${JSON.stringify(e)}`));
        config = yamlToJson(body);  
        setToLS('config', config);   
    }
    return config;
}