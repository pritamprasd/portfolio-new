import styles from './MainCanvas.module.css'

import React from 'react'
import useGlobalState from '../../components/utils/store';

export default function MainCanvas() {
  const [config, setConfig] = useGlobalState('config');
  
  return (
    <div>MainCanvas</div>
  )
}
