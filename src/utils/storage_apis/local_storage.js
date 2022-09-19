import { isRunningOnClient } from "../nextjs";

export function getFromLS(key, type="default"){  
    if(isRunningOnClient())  {
        const value = localStorage.getItem(key);
        if(value === null){
            return null;
        }
        if(type === 'json'){
            return JSON.parse(value);
        }
        return value;
    }
}

export function setToLS(key, value){    
    if(isRunningOnClient()){
        localStorage.setItem(key, JSON.stringify(value))
    }
}