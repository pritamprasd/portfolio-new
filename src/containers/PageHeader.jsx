import React from 'react';
import useGlobalState from '../utils/store';
import styles from './PageHeader.module.css';

export default function PageHeader() {
    const [current_view, setCurrentView] = useGlobalState('current_view');
    const [config, __] = useGlobalState('config');
    return (
        <>
            <div className={styles.header_style}>
                <img onClick={() => setCurrentView(config['descriptions'][current_view]?.parent)} src='/icons/back.svg' />
                <div className={styles.title}>{config['descriptions'][current_view]?.name}</div>
            </div>
        </>
    )
}
