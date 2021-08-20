import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "./../hooks/use-recording-list";

import './recordings-list.css';

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="recordings-container">
      {recordings.length > 0 ? (
        <>
          <div className="accordian-title">
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
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} /><span>This week</span>
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
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} /><span>Last week</span>
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
          <div className="accordian-title">
            <FontAwesomeIcon icon={faChevronRight} /><span>Old</span>
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
        </>
      ) : (
        <div className="no-records">
          <FontAwesomeIcon icon={faExclamationCircle} size="2x" color="#f2ea02" />
          <span>You don't have records</span>
        </div>
      )}
    </div>
  );
}