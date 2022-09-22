import { React, useEffect } from 'react';
import Navbar from '../src/containers/Navbar.jsx';
import MainCanvas from '../src/containers/MainCanvas';
import styles from './index.module.css'
import { getFromLS } from '../src/utils/local_storage.js';

function Index() {
  // useEffect(() => {
  //   const color = getFromLS('site-color');
  //   if(color !== null){
  //     console.log(`site-color: ${color}`)
  //     document.querySelector(':root').style.setProperty('--primary-color', color);
  //   }    
  // }, []);
  
  return (
    <div className={styles.global_window}>
      <Navbar/>
      <MainCanvas/>
    </div>
  )
}

export default Index;