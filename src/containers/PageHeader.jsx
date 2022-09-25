import React from 'react';
import useGlobalState from '../utils/store';
import styles from './PageHeader.module.css';

export default function PageHeader({ id, backButtonPage }) {
    const [_, setCurrentView] = useGlobalState('current_view');
    const [config, __] = useGlobalState('config');
    return (
        <>
            <div className={styles.header_style}>
                <img onClick={() => setCurrentView(backButtonPage)} src='/icons/back.svg' />
                <div className={styles.title}>{config['descriptions'][id]}</div>
            </div>
        </>
    )
}
