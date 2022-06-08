import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
import LoginPage from "./pages/LoginPage";
import InnerApp from "./pages/InnerApp"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
Amplify.configure(awsconfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<InnerApp />} />
    </Routes>
  </Router>
  );
}

export default App;