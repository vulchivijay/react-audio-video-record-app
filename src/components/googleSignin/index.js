import React, { useContext } from 'react';
import { signInWithGoogle, logOut } from "./../../config/firebase";
import { UserContext } from './../../providers/index';

import './index.css';

export default function GoogleAuth() {
  const user = useContext(UserContext);

  return (
      <div className="google-auth">
        { user ? <span>Sign in as: <b>{ user.displayName }</b></span> : <p>To store your records, please</p> }
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