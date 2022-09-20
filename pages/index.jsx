import { React } from 'react';
import Navbar from '../src/containers/Navbar.jsx';
import MainCanvas from '../src/containers/MainCanvas';
import styles from './index.module.css'

function Index() {
  return (
    <div className={styles.global_window}>
      <Navbar/>
      <MainCanvas/>
    </div>
  )
}

export default Index;