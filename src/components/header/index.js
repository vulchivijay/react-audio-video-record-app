import React from 'react';
import GoogleAuth from './../googleSignin/index';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

import './index.css';

export default function Header () {
  return (
    <header>
      <div className="container">
        <h1 className="brand-logo"><FontAwesomeIcon icon={faMicrophoneAlt} /> <span>Voice</span></h1>
        <GoogleAuth />
      </div>
    </header>
  )
}