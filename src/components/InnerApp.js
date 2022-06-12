import { Auth } from 'aws-amplify'
import { Navigate, useLocation} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import Amplify, { Hub } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

function RequireAuth({children }) {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
function InnerApp() {
  return (
  <Authenticator.Provider>
    <RequireAuth>
      <div>
        <h1>Hello</h1>
        <h3>Welcome to App</h3>
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      </div>
      </RequireAuth>
    </Authenticator.Provider>
  );
}

export default InnerApp