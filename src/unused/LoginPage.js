import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);
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

  return (
    <div>
      <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
      {user ? (
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      ) : (
        <View className="auth-wrapper">
      <Authenticator></Authenticator>
      </View>
      )}
    </div>
  );
}
async function ionViewCanEnter() {
  await Auth.currentAuthenticatedUser()
      .then(result => {
        return true;
      })
      .catch(err => {
        return false;
    }) 
}


export {LoginPage, ionViewCanEnter}