import React, { useState, useContext, useEffect } from 'react';
import firebase from 'firebase';
import { UserContext } from './../../providers/index';

import './index.css';
import './tabs.css';

export default function RecordList () {
  const user = useContext(UserContext);
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

  return (
    <div className="records-list">
      <div className="segmented-control">
        <input type="radio" name="radio2" value="3" id="tab-1" />
        <label htmlFor="tab-1" className="segmented-control__1" >
          <p>Audio files</p>
        </label>
        <input type="radio" name="radio2" value="4" id="tab-2" />
        <label htmlFor="tab-2" className="segmented-control__2">
          <p>Video files</p>
        </label>
        <div className="segmented-control__color"></div>
      </div>
      <div className="records-files">
        <div className="audiofile-wrapper">
          {user ?
            (<ListAudioFiles files={audioFiles}/>)
            :
            (<p>Sign-in is required to store your records!</p>)
          }
        </div>
      </div>
    </div>
  );
}

const ListAudioFiles = ({ files }) => {
  return files.map((item, index) => {
    return (<div className="audioFile" key={index}>
      <audio preload="true" src={item.source} controls={item.controls} />
      <span>{`${new Date(parseInt(item.createdAt)).toLocaleString()}`}</span>
    </div>)
  });
}
