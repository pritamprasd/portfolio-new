import React from 'react'
import styles from './Loading.module.css'

export default function Loading() {
    return (
        <div className={styles.main_body}>
            <div className={styles.loading_bar}>
                <div className={styles.load_section}>
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.dot}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
