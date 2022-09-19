export function isRunningOnClient(){
    const ISSERVER = typeof window === "undefined";
    if(!ISSERVER) {
        return true
    }
    return false
}