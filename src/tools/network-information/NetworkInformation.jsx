import React, { useState } from 'react'
import styles from './NetworkInformation.module.css'

export default function NetworkInformation() {
    const [onlineState, setOnlineState] = useState(navigator.connection.effectiveType);

    function updateConnectionStatus() {
        console.log(`Connection type changed from ${type} to ${navigator.connection.effectiveType}`);
        setOnlineState(navigator.connection.effectiveType);
    }
    navigator.connection.addEventListener('change', updateConnectionStatus);
    
    return (
        <div className={styles.container}>
            <div>Network State</div>
            <div>{onlineState}</div>
        </div>
    )
}
