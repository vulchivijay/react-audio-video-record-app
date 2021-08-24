import React, { useState, useContext } from 'react';
import { UserContext } from './../../providers/index';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import './index.css';

export default function RecordList () {
  const user = useContext(UserContext);
  const [active, setActive] = useState(-1);
  
  const accordianToggle = (index) => {
    console.log("index", index);
    if (index === active) setActive(-1);
    else setActive(index);
  }

  return (
    <div className="records-list">
      <ul>
        <li
          key={0}
          onClick={() => accordianToggle(0)}
          className={0 === active ? 'active' : ''}
        >
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} />
            {user ? (<span>Today</span>) : (<span className="data-loader"></span>)} 
          </div>
          <div className="accordian-content">
            {user ?
              (<div>Recorded videos has to display here for sign in users.</div>)
              :
              (
                <div>
                  <div className="data-loader data-loader_audio"></div>
                  <div className="data-loader data-loader_audio"></div>
                </div>
              )
            }
          </div>
        </li>
        <li
          key={1}
          onClick={() => accordianToggle(1)}
          className={1 === active ? 'active' : ''}
        >
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} />
            {user ? (<span>Today</span>) : (<span className="data-loader"></span>)} 
          </div>
          <div className="accordian-content">
            {user ?
              (<div>Recorded videos has to display here for sign in users.</div>)
              :
              (
                <div>
                  <div className="data-loader data-loader_audio"></div>
                  <div className="data-loader data-loader_audio"></div>
                </div>
              )
            }
          </div>
        </li>
        <li
          key={2}
          onClick={() => accordianToggle(2)}
          className={2 === active ? 'active' : ''}
        >
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} />
            {user ? (<span>Today</span>) : (<span className="data-loader"></span>)} 
          </div>
          <div className="accordian-content">
            {user ?
              (<div>Recorded videos has to display here for sign in users.</div>)
              :
              (
                <div>
                  <div className="data-loader data-loader_audio"></div>
                  <div className="data-loader data-loader_audio"></div>
                </div>
              )
            }
          </div>
        </li>
      </ul>
    </div>
  );
}