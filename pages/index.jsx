import { React, useEffect } from 'react';
import Navbar from '../src/containers/Navbar.jsx';
import MainCanvas from '../src/containers/MainCanvas';
import styles from './index.module.css'
import { getFromLS } from '../src/utils/local_storage.js';
import PageHeader from '../src/containers/PageHeader.jsx';

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
      <Navbar className={styles.navbar}/>
      <PageHeader className={styles.page_header} id="tools" backButtonPage="default"/>
      <MainCanvas className={styles.main_body}/>
    </div>
  )
}

export default Index;