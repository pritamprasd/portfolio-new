import {yamlToJson} from './transformers'

export const configUrl = "https://gist.githubusercontent.com/pritamprasd/2383c2a6d34b6ae436412fbf82ccc457/raw/0e413aec3823580a134946b9878856dc2b6ecce5/site-config.yaml"

export async function get_config() {
    const res = await fetch(configUrl).catch(err => console.error(`---1 ${err}`));
    const body = await res.text();  
    console.log(`====> Default config:\n${body}`)
    const config = yamlToJson(body);    
    // console.log(config);
    return config;
}