import React, { useState } from 'react';
import useGlobalState from '../../utils/store';
import styles from './WelcomeScreen.module.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "689178154054-30pgmfc2qujbn59mpe2pcir5aq1eidve.apps.googleusercontent.com";

export default function WelcomeScreen() {
  const [config, _] = useGlobalState('config');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState('Loading...');

  const handleLoginSuccess = (response) => {
    console.log("Login Success ", response);
    setUser(response.profileObj);
    setLoading();
  }

  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }

  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  }

  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }

  const handleRequest = () => {
    setLoading("Loading...");
  }

  const handleAutoLoadFinished = () => {
    setLoading();
  }

  return (
    <div className={styles.main_container}>
      {/* {config.pages?.map(p => <PageTile page={p} />)} */}
      {user ? <div>
        <div className="name">Welcome {user.name}!</div>
        <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
        />
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div> :
        <GoogleLogin
          clientId={clientId}
          buttonText={loading}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          onRequest={handleRequest}
          onAutoLoadFinished={handleAutoLoadFinished}
          isSignedIn={true}
        />}
    </div>
  )
}

function PageTile({ page }) {
  return (<div className={styles.page_tile}>
    <div>{page}</div>
  </div>);
}
