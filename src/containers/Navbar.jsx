import React, { useState } from 'react'
import GlobalColorUpdater from '../components/GlobalColorUpdater'
import useGlobalState from '../utils/store';
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isHidden, _] = useGlobalState('navbar_hidden');
  return (
    <div className={styles.navbar}>
      <SiteHeader />
      {!isHidden && <PagesContainer is_static={styles.pagecontainer2} />}
      {isHidden && <PagesContainer is_static={styles.pagecontainer} />}
      <ToggleNavbar />
      <div className={styles.bottom_navbar}><GlobalColorUpdater /></div>
    </div>
  )
}

export function SiteHeader() {
  const [_, setCurrentView] = useGlobalState('current_view');
  return (
    <div className={styles.siteheader} onClick={() => setCurrentView("default")}>pritam.dev</div>
  );
}

export function PagesContainer({ is_static }) {
  const [config, _] = useGlobalState('config');
  return (
    <div className={is_static}>
      {config.pages.map(p => <PageLink title={p} key={p} />)}
    </div>
  );
}

export function PageLink({ title }) {
  const [_, setCurrentView] = useGlobalState('current_view');
  function handlePageLinkClick(){
    setCurrentView(title);
  }
  return (
    <div className={styles.pagelink} onClick={handlePageLinkClick}>
      <div style={{alignItems: 'center'}}>{title}</div>
    </div>
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
