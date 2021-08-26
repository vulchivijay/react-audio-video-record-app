import React, { useState, useContext, useEffect } from 'react';
import firebase from 'firebase';
import { UserContext } from './../../providers/index';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import './index.css';

export default function RecordList () {
  const user = useContext(UserContext);
  const [active, setActive] = useState(-1);
  const [audioFiles, setAudioFiles] = useState([]);
  
  useEffect(() => {
    if (user) {
      const userFolder = user.email.replace("@gmail.com", "");
      let storageRef = firebase.storage().ref();
      let temp = [];
      storageRef
      .child(`voices/${userFolder}/`)
      .listAll()
      .then(function(res) {
        res.items.forEach( files => {
          files.getDownloadURL().then(url => {
            const item = {
              source: url,
              format: files.name,
              createdAt: files.name.split('.')[0],
              controls: true,
            };
            temp.push(item);
          });
        });
        setTimeout(() => {
          setAudioFiles(temp);
        }, 2000);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }, [user]);

  const accordianToggle = (index) => {
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
            {user ? (<span>Audio Files:</span>) : (<span className="data-loader"></span>)} 
          </div>
          <div className="accordian-content">
            {user ?
              (<ListAudioFiles files={audioFiles}/>)
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
            {user ? (<span>Video Files:</span>) : (<span className="data-loader"></span>)} 
          </div>
          <div className="accordian-content">
            {user ?
              (<p>Not available! In progress feature.</p>)
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

const ListAudioFiles = ({ files }) => {
  return files.map((item, index) => {
    return (<div className="audioFile-wrapper" key={index}>
      <audio preload="true" src={item.source} controls={item.controls} />
      <span>{`${new Date(parseInt(item.createdAt)).toLocaleString()}`}</span>
    </div>)
  });
}

// 
// {`${new Date(item.createdAt).toLocaleDateString()}`}
