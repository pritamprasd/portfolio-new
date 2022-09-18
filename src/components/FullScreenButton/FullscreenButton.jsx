import React, { useState } from 'react'
import styles from './FullscreenButton.module.css'

export default function FullscreenButton() {
    const [state, setState] = useState('maximize');
    const path = '/icons/' + state + '.svg';
    function fullscreenButtonClicked() {
        setState((state === 'maximize' ? 'minimize' : 'maximize'));
    }
    return (
        <div className={styles.fullscreen_div}>
            <img onClick={fullscreenButtonClicked} src={path} />
        </div>
    )
}
