import React from 'react'
import SocialLinks from '../components/SocialLinks';
import { isMobilePortrait } from '../utils/helpers';
import useGlobalState from '../utils/store';
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isHidden, _] = useGlobalState('navbar_hidden');
  return (
    <div className={styles.navbar}>
      {!isHidden && <SiteHeader />}
      {!isHidden && <PagesContainer />}
      {!isHidden && <SocialLinks />}
      <ToggleNavbar />
    </div>
  )
}

export function SiteHeader() {
  const [_, setCurrentView] = useGlobalState('current_view');
  return (
    <div className={styles.siteheader} onClick={() => setCurrentView("default")}>
      <img src='/icons/icon192.png'/>
    </div>
  );
}

export function PagesContainer({ is_static }) {
  const [config, _] = useGlobalState('config');
  // console.log(config)
  return (
    <div className={styles.pagecontainer}>
      {config.pages?.map(p => <PageLink title={p} key={p} />)}
    </div>
  );
}

export function PageLink({ title }) {
  const [_, setCurrentView] = useGlobalState('current_view');
  const [isHidden, setIsHidden] = useGlobalState('navbar_hidden');
  const path = '/icons/' + title + '.svg';
  function handlePageLinkClick() {
    setCurrentView(title);    
    if(isMobilePortrait()){
      setIsHidden(true);
    }
  }
  return (
    <div className={styles.pagelink} onClick={handlePageLinkClick}>
      <img src={path} />
      <div style={{ fontSize: 'x-large' }}>{title}</div>
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
      <button className={styles.menubutton} onClick={shownavbar}>
        {isHidden ? <img src='/icons/arrow-down.svg' /> : <img src='/icons/arrow-up.svg' />}
      </button>
      {!isHidden && <hr />}
    </div>
  );
}
