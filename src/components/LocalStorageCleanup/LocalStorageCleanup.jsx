import React, { useEffect, useState } from 'react'
import { getAllTableNames, purgeTable } from '../../utils/indexdb';
import useGlobalState from '../../utils/store';
import styles from './LocalStorageCleanup.module.css';
import swal from 'sweetalert';

export default function LocalStorageCleanup() {
  const [_, setCurrentView] = useGlobalState('current_view');
  const [rerender, setRerender] = useState(false);
  const [keys, setkeys] = useState(Object.keys(localStorage));
  useEffect(() => {
    setkeys(Object.keys(localStorage));
  }, [rerender]);
  return (
    <div className={styles.cleanupcontainer}>
      <div style={{ fontSize: 'large' }}>Entries:</div>
      <div className={styles.content}>
        <div>Key</div>
        <div>Value</div>
        <div></div>
        {keys?.map(k => <RowEntry key={k} k={k} refresh={() => setRerender(!rerender)} />)}
      </div>
    </div>
  )
}

function RowEntry({ k, refresh }) {
  function onRemoved() {
    localStorage.removeItem(k);
    refresh();
  }
  return (
    <>
      <div className={styles.key}>{k}</div>
      <div className={styles.value}>{localStorage.getItem(k)}</div>
      <div className={styles.deletebutton} onClick={onRemoved}>
        <img src='/icons/close.svg' />
      </div>
    </>
  )
}

