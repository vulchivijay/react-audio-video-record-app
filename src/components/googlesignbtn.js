import React, { useState, useEffect, useContext } from 'react';
import { signInWithGoogle, logOut } from "../config/firebase";
import { UserContext } from './../providers/index';
import { Redirect } from "react-router-dom";

import './googlesignbtn.css';

export default function Login() {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (!user) {
      setredirect("/");
    }
  }, [user]);

  if (redirect) {
    <Redirect to={redirect} />;
  }

  return (
      <div className="google-login-button">
        { user ? <span>Sign in as: <b>{ user.displayName }</b></span> : <b>To store your records, please</b> }
        { user ?
          <button className="logout-button" onClick={logOut}>
            <b className="google-logo">G</b>
            <span>logout</span>
          </button>
          :
          <button className="login-provider-button" onClick={signInWithGoogle}>
            <b className="google-logo">G</b>
            <span> Continue with Google</span>
          </button>
        }
      </div>
  );
}