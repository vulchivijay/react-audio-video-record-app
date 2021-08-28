import React, { useState, useContext, useEffect } from 'react';
import firebase from 'firebase';
import { UserContext } from './../../providers/index';

import './index.css';
import './tabs.css';

export default function RecordList () {
  const user = useContext(UserContext);
  const [firebaseFiles, setFirebaseFiles] = useState([]);
  const [tabState, setTabState] = useState('tab-1');
  
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
          setFirebaseFiles(temp);
        }, 2000);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }, [user]);

  const tabHandler = (e) => {
    setTabState(e.target.id)
  }

  return (
    <div className="records-list">
      <div className="tabs-control">
        <input type="radio" name="radio2" value="3" id="tab-1" onChange={tabHandler} />
        <label htmlFor="tab-1" className="tabs-control__1" >
          <p>Voice files</p>
        </label>
        <input type="radio" name="radio2" value="4" id="tab-2" onChange={tabHandler} />
        <label htmlFor="tab-2" className="tabs-control__2">
          <p>Video files</p>
        </label>
        <div className="tabs-control__color"></div>
      </div>
      <div className={"records-files " + (tabState) + " "}>
        <div className="audiofile-wrapper tab-1">
          {user ?
            (<ListVoiceFiles files={firebaseFiles}/>)
            :
            (<p>Sign-in is required to store your voice records!</p>)
          }
        </div><div className="vidoefile-wrapper tab-2">
          {user ?
            (<ListVideoFiles files={firebaseFiles}/>)
            :
            (<p>Sign-in is required to store your video records!</p>)
          }
        </div>
      </div>
    </div>
  );
}

const ListVoiceFiles = ({ files }) => {
  return files.map((item, index) => {
    return (item.source.indexOf('.webm') !== -1 && <div className="voiceFile" key={index}>
      <audio preload="true" src={item.source} controls={item.controls} />
      <span>{`${new Date(parseInt(item.createdAt)).toLocaleString()}`}</span>
    </div>)
  });
}

const ListVideoFiles = ({ files }) => {
  return files.map((item, index) => {
    return (item.source.indexOf('.mp4') !== -1 && <div className="videoFile" key={index}>
      <video preload="true" src={item.source} controls={item.controls} />
      <span>{`${new Date(parseInt(item.createdAt)).toLocaleString()}`}</span>
    </div>)
  });
}
