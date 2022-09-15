import styles from './MainCanvas.module.css'

import React from 'react'
import useGlobalState from '../utils/store';
import WelcomeScreen from '../components/WelcomeScreen';
import ToolsPage from './ToolsPage';

export default function MainCanvas() {
  const [current_view, _] = useGlobalState('current_view');
  
  return (
    <div>
      {current_view === 'default' && <WelcomeScreen/>}
      {current_view === 'tools' && <ToolsPage/>}
    </div>
  )
}
