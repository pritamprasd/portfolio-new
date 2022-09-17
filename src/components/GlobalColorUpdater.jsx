import { React, useEffect } from 'react'
import swal from 'sweetalert';

export default function GlobalColorUpdater() {
    function colorUpdated(e) {
        document.querySelector(':root').style.setProperty('--primary-color', e.target.value);
        const ntc = require('ntcjs');
        swal({
            text: `Website accent color updated to: ${ntc.name(e.target.value)[1]}`,
            icon: "success",
            buttons: "coolzies!!"
        })
    }

    return (
        <input type="color" id="color-input" onChange={e => colorUpdated(e)}
            style={{ borderStyle: 'none', width: '1.75rem', cursor: 'pointer', backgroundColor: 'var(--primary-color)' }}
        />
    )
}

