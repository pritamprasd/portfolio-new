import { React } from 'react';
import Navbar from '../src/containers/Navbar.jsx';
import MainCanvas from '../src/containers/MainCanvas';
import styles from './index.module.css'

function Index() {
  return (
    <div className={styles.global_window}>
      <Navbar className={styles.main_nav} />
      <MainCanvas className={styles.main_view} />
    </div>
  )
}

export default Index;