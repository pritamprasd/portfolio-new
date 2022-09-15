import {yamlToJson} from './transformers'

export const configUrl = "https://gist.githubusercontent.com/pritamprasd/2383c2a6d34b6ae436412fbf82ccc457/raw/da0f72b309c1531dca499b7abaccf5ae36307d1b/site-config.yaml";

export async function get_config() {
    const res = await fetch(configUrl).catch(err => console.error(`---1 ${err}`));
    const body = await res.text();  
    console.log(`====> Default config:\n${body}`)
    const config = yamlToJson(body);    
    return config;
}