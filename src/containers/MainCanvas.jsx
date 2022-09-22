import React from 'react'
import useGlobalState from '../utils/store';
import WelcomeScreen from '../components/WelcomeScreen';
import ToolsPage from './ToolsPage';
import SettingsPage from '../components/SettingsPage';
import GithubSummary from '../tools/github_summary/GithubSummary';
import TextEditor from '../tools/text_editor/TextEditor';
import FullscreenButton from '../components/FullScreenButton/FullscreenButton';
import NetworkInformation from '../tools/network-information/NetworkInformation';
import ToolGlobalHeader from '../components/ToolGlobalHeader';
import styles from './MainCanvas.module.css'
import IndexDBCleanup from '../components/IndexDBCleanup';
import LocalStorageCleanup from '../components/LocalStorageCleanup';

export default function MainCanvas() {
  const [current_view, _] = useGlobalState('current_view');

  return (
    <div className={styles.maincanvascontainer}>
      <ToolGlobalHeader />

      {current_view === 'default' && <WelcomeScreen />}
      {current_view === 'tools' && <ToolsPage />}
      {current_view === 'settings' && <SettingsPage />}

      {current_view === 'network_information' && <NetworkInformation />}
      {current_view === 'github_summary' && <GithubSummary />}
      {current_view === 'rich_editor' && <TextEditor />}

      {current_view === 'indexdb-cleanup' && <IndexDBCleanup/>}
      {current_view === 'ls-cleanup' && <LocalStorageCleanup/>}      

      {/* <FullscreenButton/> */}

    </div>
  )
}
