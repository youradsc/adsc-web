// components/ProtectSecond.js
import { Heading } from '@aws-amplify/ui-react';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Navigate } from "react-router-dom";
export function Protected() {
  //const { route } = useAuthenticator((context) => [context.route]);
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

  if(userData && "params" in userData)
  {
    return <Heading level={1}>UR VALID</Heading>;
  }
  else if (userData && user) {
    return <Navigate to="/protected2"/>
  }
  else{
      return <p>Loading...</p>
  }
}


