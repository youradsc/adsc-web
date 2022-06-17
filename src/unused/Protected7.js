// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import * as AWS from 'aws-sdk'
import awsmobile from '../aws-exports';

export function Protected() {
  AWS.config.update({
      region: awsmobile.aws_cognito_region,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: awsmobile.aws_cognito_identity_pool_id
    })
  });
  const [user, setUser] = useState(null)
  const { route } = useAuthenticator((context) => [context.route]);
  function assingUser(){
    Auth.currentAuthenticatedUser().then((user2) => {
      setUser(user2);
      console.log(user2);
      return null;
    });
    return null;
  }
  useEffect(() => {if(!user){assingUser()}; console.log(user)});
  const docClient = new AWS.DynamoDB.DocumentClient();
  var params = {
      TableName: "ADSC_User_Attributes"
  }
  docClient.scan(params, function (err, data) {
      if (!err) {
        console.log(data)
      }
      else{
        console.log(err)
      }
  })

  return (
    <div>
      <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
    </div>
  );
}
