import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="logo"><FontAwesomeIcon icon={faMicrophoneAlt} /> <span>Voice</span></h1>
      </div>
    </header>
  )
}