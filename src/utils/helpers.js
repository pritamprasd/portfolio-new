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