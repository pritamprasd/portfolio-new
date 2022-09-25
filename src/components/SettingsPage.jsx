import React from 'react'
import useGlobalState from '../utils/store';
import GlobalColorUpdater from './GlobalColorUpdater'
import styles from './SettingsPage.module.css'

export default function SettingsPage() {
    const [_, setCurrentView] = useGlobalState('current_view');
    return (
        <div>
            <div className={styles.settingsheader}>Site Settings</div>
            <div className={styles.settingscontainer}>
                <div>Site Accent color</div>
                <div><GlobalColorUpdater /></div>

                <div>Database Cleanup(IndexDB)</div>
                <div><button onClick={() => setCurrentView('indexdb-cleanup')}>View</button></div>

                <div>Local Storage Cleanup(IndexDB)</div>
                <div><button onClick={() => setCurrentView('ls-cleanup')}>Clean</button></div>
            </div>
        </div>
    )
}
