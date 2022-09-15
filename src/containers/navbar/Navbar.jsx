import React from 'react'
import GlobalColorUpdater from '../../components/GlobalColorUpdater'
import useGlobalState from '../../components/utils/store';
import styles from './Navbar.module.css'

export default function Navbar() {
  const [config, setConfig] = useGlobalState('config');
  
  return (
    <div>
      <div className={styles.title}>Navbar</div>
      <GlobalColorUpdater/>
    </div>    
  )
}
