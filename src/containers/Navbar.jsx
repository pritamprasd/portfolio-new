import React, { useState } from 'react'
import GlobalColorUpdater from '../components/GlobalColorUpdater'
import useGlobalState from '../utils/store';
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isHidden, _] = useGlobalState('navbar_hidden');
  return (
    <div className='navbar'>
      <SiteHeader />
      {!isHidden && <PagesContainer is_static={styles.pagecontainer2}/>}
      {isHidden && <PagesContainer is_static={styles.pagecontainer}/>}
      <ToggleNavbar />
      <div className={styles.bottom_navbar}><GlobalColorUpdater /></div>
    </div>
  )
}

export function SiteHeader() {
  return (
    <div className={styles.siteheader}>pritam.dev</div>
  );
}

export function PagesContainer({is_static}) {
  const [config, _] = useGlobalState('config');
  return (
    <div className={is_static}>
      {config.pages.map(p => <PageLink title={p} key={p} />)}
    </div>
  );
}

export function PageLink({ title }) {
  return (
    <div className={styles.pagelink}>{title}</div>
  );
}

export function ToggleNavbar() {
  const [isHidden, setIsHidden] = useGlobalState('navbar_hidden');
  function shownavbar() {
    setIsHidden(!isHidden);
  }
  return (
    <div className={styles.togglenavbar}>
      <button onClick={shownavbar}>{isHidden ? "Show" : "Hide"} Navbar</button>
    </div>
  );
}
