import React from "react";
import "./Button.css";
import { useAuthenticator, Heading, View } from '@aws-amplify/ui-react';
import {NavLink as Link } from "react-router-dom"

function Button(props) {
  const { children } = props;
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  return (
    <div className="button">
    {route !== 'authenticated' ? (
      <div className="text inter-medium-white-14px">
      <Link className="text inter-medium-white-14px" as={Link} to={"/login"}>Login</Link>
    </div> 
    ) : (
      <div className="text inter-medium-white-14px">
      <Link className="text inter-medium-white-14px" as={Link} to={"/login"} onClick={() => signOut()}>Logout</Link>
      </div>
    )}
    </div>  
  );
}

export default Button;
