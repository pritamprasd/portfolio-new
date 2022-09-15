import React from 'react'
import GlobalColorUpdater from '../../components/GlobalColorUpdater'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div>
      <div className={styles.title}>Sidebar</div>
      <GlobalColorUpdater/>
    </div>    
  )
}
