import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import './index.css';

export default function RecordList () {
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
            <FontAwesomeIcon icon={faChevronRight} /><span>Today</span>
          </div>
          <div className="accordian-content">Today</div>
        </li>
        <li
          key={1}
          onClick={() => accordianToggle(1)}
          className={1 === active ? 'active' : ''}
        >
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} /><span>Yesterday</span>
          </div>
          <div className="accordian-content">Yesterday</div>
        </li>
        <li
          key={2}
          onClick={() => accordianToggle(2)}
          className={2 === active ? 'active' : ''}
        >
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} /><span>Last Week</span>
          </div>
          <div className="accordian-content">Last Week</div>
        </li>
        <li
          key={3}
          onClick={() => accordianToggle(3)}
          className={3 === active ? 'active' : ''}
        >
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} /><span>Last Month</span>
          </div>
          <div className="accordian-content">Last Month</div>
        </li>
        <li
          key={4}
          onClick={() => accordianToggle(4)}
          className={4 === active ? 'active' : ''}
        >
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} /><span>Old</span>
          </div>
          <div className="accordian-content">Old</div>
        </li>
      </ul>
    </div>
  );
}