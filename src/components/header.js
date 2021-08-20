import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

import Login from './googlesignbtn';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <h1 className="logo"><FontAwesomeIcon icon={faMicrophoneAlt} /> <span>Voice</span></h1>
          <Login />
        </div>
      </div>
    </header>
  )
}