const yaml = require('js-yaml');

export function yamlToJson(yamlString){    
    const config = yaml.load(yamlString);
    return config;
}