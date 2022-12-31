import React from 'react';
import useGlobalState from '../../utils/store';
import styles from './WelcomeScreen.module.css';

export default function WelcomeScreen() {
  const [config, _] = useGlobalState('config');

  return (
    <div className={styles.main_container}>
      {/* {config.pages?.map(p => <PageTile page={p} />)} */}
      <div>Site for testing Browser Web APIs and Storage</div>
    </div>
  )
}

function PageTile({ page }) {
  return (
    <div className={styles.page_tile}>
      <div>{page}</div>
    </div>
  );
}
