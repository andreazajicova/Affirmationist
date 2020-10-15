import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from '../components/Dashboard/Dashboard';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setLoggedIn(!!user);
      console.log("user", user);
    })
    
  }, []);

  return (
    <div className="App">
      { loggedIn ? (
        <>
          <Dashboard />
          <button data-testid="logout" onClick={() => firebase.auth().signOut()}>
            Log out
          </button>
        </>
      ) : (
        <>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          <h1>Hello, World!</h1>
        </>
      )}
    </div>
  );
}

export default App;
