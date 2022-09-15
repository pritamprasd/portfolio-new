import { React, useEffect } from 'react'

export default function GlobalColorUpdater() {
    function colorUpdated(e) {
        console.log(e)
        document.querySelector(':root').style.setProperty('--primary-color', e.target.value);
    }

    return (
        <input type="color" id="color-input" onChange={e => colorUpdated(e)} />
    )
}

