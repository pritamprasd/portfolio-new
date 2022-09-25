import { React } from 'react';
import Navbar from '../src/containers/Navbar.jsx';
import MainCanvas from '../src/containers/MainCanvas';
import styles from './index.module.css'
import PageHeader from '../src/containers/PageHeader.jsx';

function Index() {
  return (
    <div className={styles.global_window}>
      <div className={styles.navbar}><Navbar /></div>
      <div className={styles.page_header}><PageHeader /></div>
      <div className={styles.main_body}><MainCanvas /></div>
    </div>
  )
}

export default Index;