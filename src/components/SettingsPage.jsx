import React from 'react'
import GlobalColorUpdater from './GlobalColorUpdater'
import styles from './SettingsPage.module.css'

export default function SettingsPage() {
    return (
        <div>
            <div className={styles.settingscontainer}>
                <div>Site Accent color</div>
                <div><GlobalColorUpdater /></div>
                
                <td>second setting</td>
                <td><button>Hii</button></td>
            </div>
        </div>
    )
}
