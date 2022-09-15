import React from 'react'
import GlobalColorUpdater from '../../components/GlobalColorUpdater'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <div className={styles.title}>Navbar</div>
      <GlobalColorUpdater/>
    </div>    
  )
}
