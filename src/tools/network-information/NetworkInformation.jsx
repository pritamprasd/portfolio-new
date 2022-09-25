import React, { useState } from 'react'
import { useEffect } from 'react';
import { getIpv4 } from '../../utils/helpers';
import styles from './NetworkInformation.module.css'

export default function NetworkInformation() {
    const [onlineState, setOnlineState] = useState(navigator.connection.effectiveType);
    const [ipv4Add, setIpv4Add] = useState('');
    useEffect(() => {
        async function ipv4update() {
            const ip = await getIpv4();
            setIpv4Add(ip);
        }
        ipv4update();
    }, []);

    function updateConnectionStatus() {
        console.log(`Connection type changed from ${onlineState} to ${navigator.connection.effectiveType}`);
        setOnlineState(navigator.connection.effectiveType);
    }
    navigator.connection.addEventListener('change', updateConnectionStatus);

    return (
        <div className={styles.container}>
            <div>
                <div>Network State</div>
                <div>{onlineState}</div>
            </div>

            <div>
                <div>IPV4 Address</div>
                <div>{ipv4Add}</div>
            </div>
        </div>
    )
}
