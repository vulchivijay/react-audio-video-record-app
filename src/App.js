import RecorderController from './components/recorder-controller';
import RecordingsList from './components/recordings-list';
import useRecorder from './hooks/useRecorder';

import './App.css';

function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;
  return (
    <div className="App">
      <section>
        <h1>Voice Recorder</h1>
        <div>
          <RecorderController recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} />
        </div>
      </section>
    </div>
  );
}

export default App;
