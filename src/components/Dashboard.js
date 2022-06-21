// components/ProtectSecond.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Navigate } from "react-router-dom";
export function Dashboard() {
  const { route } = useAuthenticator((context) => [context.route]);
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  function assingUser(){
    Auth.currentAuthenticatedUser().then((user2) => {
      setUser(user2);
    });
  }
  if(!user){assingUser();}

  useEffect(() => {
    if(user){   
        var email = ""
        var userName = ""
        var link = ""  
      email = user.attributes.email
      userName = user.attributes.sub
      email = "email="+email+"&"
      userName = "userName="+userName
      console.log(email)
      console.log(userName)
      link = "https://ezzb0c02e8.execute-api.us-east-1.amazonaws.com/default/Check_Onboarding_Tasks?"+email+userName
      getData(link)
    }
  }, [user]);
  function getData(url)
    {
    console.log(url)
    axios.get(url)
    .then(res => {
        console.log(res);
        setUserData(res.data)
    })
    }
  console.log(userData)
  const [apiOut, setApiOut] = useState(null)
  useEffect(() => {
    if(user && userData && ("client_id" in userData) && ("client_secret" in userData) &&("refresh_token" in userData))
    {
      var client_id = userData.client_id
      var client_secret = userData.client_secret
      var refresh_token = userData.refresh_token
      getProductList(client_id, client_secret, refresh_token)
    }

  }, [userData])
  function getProductList(client_id, client_secret, refresh_token)
  {
    var obj = {"client_id" : client_id, "client_secret": client_secret, "refresh_token": refresh_token}
    let temp = JSON.stringify(obj)
    axios.post("https://1xgh9vlygi.execute-api.us-east-1.amazonaws.com/default",temp,{headers: {
      'content-type': 'application/json'
    }}).then(res => {
      console.log(res);
      setApiOut(res.data)
    })
  }

  if(userData && user && apiOut)
  {
    return(
    <div>
      <Heading level={1}>UrValid</Heading>
      {apiOut ? apiOut.body : null}
    </div>
    )
  }
  else if (user && userData && !(("client_id" in userData) && ("client_secret" in userData) &&("refresh_token" in userData))) {
    return <Navigate to="/onboarding"/>
  }
  else{
      return <p>Loading...</p>
  }

  const message =
    route === 'authenticated' ? 'SECOND PROTECTED ROUTE!' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
}