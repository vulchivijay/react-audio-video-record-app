import { useContext, useState, useEffect } from "react";
import { uploadBlob } from './../config/firebase';
import axios from 'axios';
import { deleteAudio } from  "./../handlers/recordings-list";
import generateKey from "./../utils/generate-key";
import { UserContext } from './../providers/index';

export default function useRecordingsList(audio) {
  const [recordings, setRecordings] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    // console.log('audio: ', audio);
    // console.log('user: ', user);
    if (audio) {
      setRecordings((prevState) => {
        return [...prevState, { key: generateKey(), audio }];
      });
    }
    if (audio && user) {
      // save file in firebase under user folder.
      // duplicate file storing has to be restricted.
      uploadBlob(audio, user)
    }
  }, [audio, user]);

  return {
    recordings,
    deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
  };
}