import React from 'react'
import useGlobalState from '../utils/store';
import WelcomeScreen from '../components/WelcomeScreen';
import ToolsPage from './ToolsPage';
import SettingsPage from '../components/SettingsPage/SettingsPage';
import GithubSummary from '../tools/github_summary/GithubSummary';
import NetworkInformation from '../tools/network-information/NetworkInformation';
import IndexDBCleanup from '../components/IndexDBCleanup/IndexDBCleanup';
import LocalStorageCleanup from '../components/LocalStorageCleanup/LocalStorageCleanup';
import FileExplorer from '../tools/file_explorer/FileExplorer';
import AboutPage from '../components/About/AboutPage';
import Notes from '../components/Notes/Notes';
import ImageClassifier from '../tools/image_classifier/ImageClassifier';

export default function MainCanvas() {
  const [current_view, _] = useGlobalState('current_view');
  return (
    <div>{idToPageMap[current_view]}</div>
  )
}

export const idToPageMap = {
  tools: <ToolsPage/>,
  home: <WelcomeScreen />,
  tools: <ToolsPage />,
  settings: <SettingsPage />,
  about: <AboutPage />,
  notes: <Notes />,

  network_information: <NetworkInformation />,
  github_summary: <GithubSummary />,
  browser_drive: <FileExplorer />,
  image_classifier: <ImageClassifier />,
  
  indexdb_cleanup: <IndexDBCleanup />,
  ls_cleanup: <LocalStorageCleanup/>
}
