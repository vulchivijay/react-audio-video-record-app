import React, { useEffect, useContext, useState } from 'react';
import { signInWithGoogle } from "../config/firebase";
import { UserContext } from './../providers/index';
import { Redirect } from 'react-router-dom';

import './googlesignbtn.css';

export default function Login() {
  const user = useContext(UserContext)
  const [redirect, setredirect] = useState(null)

  useEffect(() => {
    if (user) {
      setredirect('/')
    }
  }, [user])

  if (redirect) {
    <Redirect to='/'/>
  }

  return (
      <div className="google-login-button">
        <b>To store your records, please</b>
        <button className="login-provider-button" onClick={signInWithGoogle}>
          <b className="google-logo">G</b>
          <span> Continue with Google</span>
       </button>
      </div>
  );
}