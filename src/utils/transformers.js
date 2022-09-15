const yaml = require('js-yaml');

export function yamlToJson(yamlString){   
    try {
        const config = yaml.load(yamlString);
        return config;
    } catch (error) {
        console.error(`Error: yamlToJson : ${error}`)
    } 
    return {}    
}