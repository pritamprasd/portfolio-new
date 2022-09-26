export async function checkResponse(response) {
    if (!response.ok) {
        throw new Error(` | ${await response.text()}`)
    }
    return response
}

export function isMobilePortrait() {
    if (window.orientation === 0) {
        return true
    }
    return false
}

export async function getIpv4(){
    const address = await fetch('http://ipv4.icanhazip.com').then(r => r.text()).catch(e => JSON.stringify(e));
    return address;
}