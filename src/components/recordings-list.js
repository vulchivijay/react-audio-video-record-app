import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "./../hooks/use-recording-list";

import './../styles/recordings-list.css';

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);
  const [active, setActive] = useState(0);

  const accordianToggle = (index) => {
    if (index === active) setActive(0);
    else setActive(index);
  }

  return (
    <div className="recordings-container">
      {recordings.length > 0 ? (
        <>
          <ul>
            <li 
              key={0}
              onClick={() => accordianToggle(0)}
              className={0 === active ? 'active' : ''}
            >
              <div className="accordian-title" onClick={accordianToggle}>
                <FontAwesomeIcon icon={faChevronRight} /><span>Today</span>
              </div>
              <div className="accordian-content">
                <div className="recordings-list">
                  {recordings.map((record) => (
                    <div className="record" key={record.key}>
                      <audio controls src={record.audio} />
                      <span className="is-recorded-time">date and time</span>
                      <div className="delete-button-container">
                        <button
                          className="delete-button"
                          title="Delete this audio"
                          onClick={() => deleteAudio(record.key)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </>
      ) : (
        <div className="no-records">
          <FontAwesomeIcon icon={faExclamationCircle} size="2x" color="#ff9800" />
          <span>You don't have records</span>
        </div>
      )}
    </div>
  );
}