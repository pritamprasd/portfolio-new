import React from 'react'
import useGlobalState from '../utils/store';
import WelcomeScreen from '../components/WelcomeScreen';
import ToolsPage from './ToolsPage';
import SettingsPage from '../components/SettingsPage';
import GithubSummary from '../tools/github_summary/GithubSummary';
import TextEditor from '../tools/text_editor/TextEditor';
import FullscreenButton from '../components/FullScreenButton/FullscreenButton';
import NetworkInformation from '../tools/network-information/NetworkInformation';
import IndexDBCleanup from '../components/IndexDBCleanup';
import LocalStorageCleanup from '../components/LocalStorageCleanup';
import FileExplorer from '../tools/file_explorer/FileExplorer';

export default function MainCanvas() {
  const [current_view, _] = useGlobalState('current_view');

  return (
    <div>
      {current_view === 'home' && <WelcomeScreen />}
      {current_view === 'tools' && <ToolsPage />}
      {current_view === 'settings' && <SettingsPage />}

      {current_view === 'network_information' && <NetworkInformation />}
      {current_view === 'github_summary' && <GithubSummary />}
      {current_view === 'browser_drive' && <FileExplorer />}

      {current_view === 'indexdb-cleanup' && <IndexDBCleanup />}
      {current_view === 'ls-cleanup' && <LocalStorageCleanup />}

      {/* <FullscreenButton/> */}
    </div>
  )
}
