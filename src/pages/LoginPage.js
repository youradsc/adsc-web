import { Auth } from 'aws-amplify'
import { Navigate} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Amplify, { Hub } from 'aws-amplify';

function LoginPage() {
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
  if(!user)
    {
      return <Login />
    }
  else
    {
      return <Navigate to="/home"/>
    }
  }
async function ionViewCanEnter() {
  try {
      await Auth.currentAuthenticatedUser();
      return true;
  } catch {
      return false;
  }
}

function Login(){
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => Auth.federatedSignIn()}>
        Sign In
      </button>
    </div>
  )
}
export default LoginPage